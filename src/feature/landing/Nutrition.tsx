import { Card, CardContent } from "@/components/ui/card";
import { Apple, Zap, Heart, Leaf } from "lucide-react";

const nutritionTips = [
  {
    icon: Apple,
    title: "Eat More Vegetables",
    description:
      "Our wide selection of fresh, organic vegetables provides essential vitamins and minerals for your daily health.",
  },
  {
    icon: Zap,
    title: "Boost Your Energy",
    description:
      "Choose from natural energy-boosting foods like nuts, seeds, and whole grains to power through your day.",
  },
  {
    icon: Heart,
    title: "Heart Healthy Options",
    description:
      "Discover foods rich in omega-3s, fiber, and antioxidants to support your cardiovascular health.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "All our products are sourced responsibly from local farms and eco-conscious suppliers.",
  },
];

export function Nutrition() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Nutrition & Wellness
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how our products support a healthier lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutritionTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {tip.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {tip.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
