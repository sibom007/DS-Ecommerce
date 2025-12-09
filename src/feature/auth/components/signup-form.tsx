"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { Separator } from "@/components/ui/separator";
import { ApiError } from "../types";

// Zod schema for signup
const SignUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 8 characters"),
});

// Zod schema for verification
const VerifyEmailSchema = z.object({
  code: z.string().min(6, "Enter the 6-digit code"),
});

const SignUpForm = () => {
  const router = useRouter();
  const { signUp, isLoaded, setActive } = useSignUp();

  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [step2, setStep2] = React.useState(false);

  // Step 1 form
  const formStep1 = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // Step 2 (email verification)
  const formStep2 = useForm<z.infer<typeof VerifyEmailSchema>>({
    resolver: zodResolver(VerifyEmailSchema),
    defaultValues: {
      code: "",
    },
  });

  // Handle Step 1
  const submitStep1 = async (values: z.infer<typeof SignUpSchema>) => {
    if (!isLoaded) return;
    setError(null);
    setLoading(true);

    try {
      await signUp.create({
        username: values.username,
        emailAddress: values.email,
        password: values.password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setStep2(true);
    } catch (err: unknown) {
      const e = err as ApiError;
      const msg = e?.errors?.[0]?.message || "Verification failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  // Handle Step 2 (verification)
  const submitStep2 = async (values: z.infer<typeof VerifyEmailSchema>) => {
    if (!isLoaded) return;
    setError(null);
    setLoading(true);

    try {
      const attempt = await signUp.attemptEmailAddressVerification({
        code: values.code,
      });

      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        router.push("/");
      }
    } catch (err: unknown) {
      const e = err as ApiError;
      const msg = e?.errors?.[0]?.message || "Invalid verification code";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  // Google OAuth signup
  const handleGoogleSignup = async () => {
    if (!isLoaded) return;

    setLoading(true);
    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    } catch {
      setError("Google signup failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex ">
      {/* RIGHT FORM */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-12">
        <Card className="w-full max-w-md bg-card border border-border shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">
              {step2 ? "Verify your email" : "Create your DS Ecommerce account"}
            </CardTitle>
            <CardDescription>
              {step2
                ? "Enter the 6-digit code we sent to your email."
                : "Sign up to continue shopping with DS Ecommerce."}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* STEP 1 — USERNAME, EMAIL, PASSWORD */}
            {!step2 && (
              <Form {...formStep1}>
                <form
                  onSubmit={formStep1.handleSubmit(submitStep1)}
                  className="space-y-4">
                  <FormField
                    control={formStep1.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="yourusername" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={formStep1.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={formStep1.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                    isLoading={loading}>
                    Create account
                  </Button>
                </form>
              </Form>
            )}

            {/* STEP 2 — VERIFICATION CODE */}
            {step2 && (
              <Form {...formStep2}>
                <form
                  onSubmit={formStep2.handleSubmit(submitStep2)}
                  className="space-y-4">
                  <FormField
                    control={formStep2.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Verification code</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            placeholder="123456"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                    isLoading={loading}>
                    Verify & Continue
                  </Button>
                </form>
              </Form>
            )}

            {/* Divider */}
            {!step2 && (
              <>
                <div className="flex items-center gap-3 w-full">
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted-foreground">OR</span>
                  <Separator className="flex-1" />
                </div>

                {/* GOOGLE SIGNUP */}
                <Button
                  variant="outline"
                  className="w-full"
                  disabled={loading}
                  isLoading={loading}
                  onClick={handleGoogleSignup}>
                  Continue with Google
                </Button>
              </>
            )}

            {/* FOOTER */}
            {!step2 && (
              <p className="text-xs text-center text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="font-medium underline underline-offset-4">
                  Sign in
                </Link>
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpForm;
