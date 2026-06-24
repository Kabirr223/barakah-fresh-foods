import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OrderReminderSection } from "@/components/sections/order-reminder-section";
import { ProductsCatalog } from "@/components/sections/products-catalog";
import { TrustSection } from "@/components/sections/trust-section";
import { WholesaleEnquiryCta } from "@/components/sections/wholesale-enquiry-cta";
import { WholesaleProcess } from "@/components/sections/wholesale-process";
import { WhyBarakah } from "@/components/sections/why-barakah";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductsCatalog />
      <AboutSection />
      <WhyBarakah />
      <WholesaleProcess />
      <OrderReminderSection />
      <WholesaleEnquiryCta />
      <ContactSection />
    </>
  );
}
