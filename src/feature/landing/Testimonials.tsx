import { Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Chef",
      content:
        "The freshness of produce here is unmatched. I shop here every week!",
      rating: 5,
      avatar: "/landing/diverse-woman-avatar.png",
    },
    {
      name: "Michael Chen",
      role: "Fitness Enthusiast",
      content:
        "Their organic selection is fantastic. Great quality and prices are fair.",
      rating: 5,
      avatar: "/landing/man-avatar.png",
    },
    {
      name: "Emma Rodriguez",
      role: "Busy Parent",
      content:
        "Love the prepared meals section. Saves me so much time during weeknights!",
      rating: 5,
      avatar: "/landing/woman-with-smile.jpg",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of happy shoppers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-card rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  width={12}
                  height={12}
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
