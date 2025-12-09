import { Tag } from "lucide-react";
import Image from "next/image";

export function Deals() {
  const deals = [
    {
      title: "Fresh Berries Bundle",
      discount: "25% OFF",
      original: "$24.99",
      price: "$18.74",
      image: "/landing/fresh-berries-bundle.jpg",
    },
    {
      title: "Organic Vegetables Mix",
      discount: "30% OFF",
      original: "$19.99",
      price: "$13.99",
      image: "/landing/organic-vegetables-display.png",
    },
    {
      title: "Premium Coffee Selection",
      discount: "20% OFF",
      original: "$29.99",
      price: "$23.99",
      image: "/landing/premium-coffee-beans.jpg",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              LIMITED TIME OFFERS
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Todays Deals
          </h2>
          <p className="text-muted-foreground text-lg">
            Grab these amazing discounts while they last
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.title}
              className="bg-card rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src={deal.image || "/landing/placeholder.svg"}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                  width={100}
                  height={48}
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {deal.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {deal.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground line-through text-sm">
                      {deal.original}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {deal.price}
                    </p>
                  </div>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
