import { CallToAction } from "@/feature/landing/CallToAction";
import { Categories } from "@/feature/landing/Categories";
import { Deals } from "@/feature/landing/Deals";
import { Footer } from "@/feature/landing/Footer";
import { FreshArrivals } from "@/feature/landing/FreshArrivals";

import { Hero } from "@/feature/landing/Hero";
import { Newsletter } from "@/feature/landing/Newsletter";
import { Nutrition } from "@/feature/landing/Nutrition";
import { Testimonials } from "@/feature/landing/Testimonials";
import { Navbar } from "@/shared/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <FreshArrivals />
      <Deals />
      <Nutrition />
      <Testimonials />
      <Newsletter />
      <CallToAction />
      <Footer />
    </main>
  );
}
