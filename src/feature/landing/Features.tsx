import { Zap, Shield, Truck, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Premium Quality",
    description: "Sourced from the finest manufacturers worldwide",
  },
  {
    icon: Shield,
    title: "Secure Checkout",
    description: "Your transactions are protected with bank-level security",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $100, delivered within 5 days",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day no-questions-asked return policy",
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="space-y-4 text-center lg:text-left">
                <div className="inline-flex lg:inline-block p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
