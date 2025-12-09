import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Leaf } from "lucide-react";
import Image from "next/image";

const freshProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: "$4.99",
    original: "$6.99",
    image: "/landing/fresh-organic-tomatoes.png",
    badge: "Fresh",
    tag: "Organic",
  },
  {
    id: 2,
    name: "Free Range Eggs",
    price: "$5.49",
    original: "$7.49",
    image: "/landing/free-range-eggs-carton.jpg",
    badge: "New",
    tag: "Farm Fresh",
  },
  {
    id: 3,
    name: "Wildflower Honey",
    price: "$8.99",
    original: "$11.99",
    image: "/landing/wildflower-honey-jar.png",
    badge: "Best Seller",
    tag: "Natural",
  },
  {
    id: 4,
    name: "Greek Yogurt",
    price: "$3.99",
    original: "$5.99",
    image: "/landing/greek-yogurt-container.png",
    badge: "Fresh",
    tag: "Dairy",
  },
];

export function FreshArrivals() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Fresh This Week
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our latest arrivals sourced fresh from local farmers and
              suppliers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freshProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-muted h-64">
                    <Image
                      src={product.image || "/landing/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={100}
                      height={100}
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                        <Leaf className="w-3 h-3" />
                        {product.tag}
                      </p>
                      <h3 className="font-semibold text-foreground mt-1">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {product.original}
                        </span>
                      </div>
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
