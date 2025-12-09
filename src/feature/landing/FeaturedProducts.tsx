import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Leather Watch",
    price: "$299",
    image: "/luxury-leather-watch.jpg",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Minimalist Backpack",
    price: "$189",
    image: "/designer-minimalist-backpack.jpg",
    category: "Bags",
  },
  {
    id: 3,
    name: "Elegant Sunglasses",
    price: "$249",
    image: "/premium-sunglasses.jpg",
    category: "Eyewear",
  },
  {
    id: 4,
    name: "Classic Leather Belt",
    price: "$129",
    image: "/luxury-leather-belt.jpg",
    category: "Accessories",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Curated Essentials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked items that combine functionality with timeless design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-muted h-64">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-foreground mt-1">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {product.price}
                      </span>
                      <Button size="sm" variant="ghost" className="gap-2">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
