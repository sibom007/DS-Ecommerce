import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-muted py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Redefine Your Style
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover our curated collection of premium products designed for
                those who demand excellence. Experience quality like never
                before.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-semibold">
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold bg-transparent">
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden bg-primary/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/landing/premium-product-display.jpg"
                alt="Featured product showcase"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
