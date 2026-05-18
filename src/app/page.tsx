import { CategoryShowcase } from "@/components/sections/category-showcase";
import { ClientsSection } from "@/components/sections/clients-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductsCatalog } from "@/components/sections/products-catalog";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { WhyBarakah } from "@/components/sections/why-barakah";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMarquee />
      <CategoryShowcase />
      <ProductsCatalog />
      <WhyBarakah />
      <ExperienceSection />
      <ClientsSection />
      <TrustMarquee />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
