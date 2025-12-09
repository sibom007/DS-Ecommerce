import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Ready to Upgrade Your Collection?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers and discover products that
              match your lifestyle.
            </p>
          </div>
          <Button size="lg" variant="secondary" className="gap-2 font-semibold">
            Start Shopping
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
