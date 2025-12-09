import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Stay Updated
            </h2>
            <p className="text-lg opacity-90">
              Subscribe to get exclusive offers, recipes, and nutrition tips
              delivered to your inbox
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <Mail className="w-5 h-5 opacity-70" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-0 focus:outline-none text-primary-foreground placeholder:opacity-70"
                required
              />
            </div>
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>

          <p className="text-sm opacity-75">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
