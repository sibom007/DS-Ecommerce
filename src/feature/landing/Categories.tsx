import { Apple, Leaf, Wheat, ChefHat } from "lucide-react";

export function Categories() {
  const categories = [
    {
      icon: Apple,
      name: "Fresh Produce",
      description: "Farm-fresh fruits and vegetables",
    },
    {
      icon: Wheat,
      name: "Grains & Pantry",
      description: "Organic grains and staples",
    },
    {
      icon: ChefHat,
      name: "Prepared Foods",
      description: "Ready-to-eat meals",
    },
    {
      icon: Leaf,
      name: "Organic & Natural",
      description: "Certified organic products",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover everything you need for your kitchen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
