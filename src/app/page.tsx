import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OrderReminderSection } from "@/components/sections/order-reminder-section";
import { ProductsCatalog } from "@/components/sections/products-catalog";
import { WholesaleProcess } from "@/components/sections/wholesale-process";
import { WhyBarakah } from "@/components/sections/why-barakah";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsCatalog />
      <AboutSection />
      <WhyBarakah />
      <WholesaleProcess />
      <OrderReminderSection />
      <ContactSection />
    </>
  );
}
