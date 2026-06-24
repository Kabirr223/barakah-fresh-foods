import { siteConfig } from "@/config/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine1,
      addressLocality: "Leicester",
      postalCode: "LE2 1FX",
      addressCountry: siteConfig.country,
    },
    areaServed: [
      { "@type": "City", name: "Leicester" },
      { "@type": "AdministrativeArea", name: "Leicestershire" },
    ],
    knowsAbout: [
      "Wholesale Fruit Supplier Leicester",
      "Wholesale Vegetables Leicester",
      "Fresh Produce Leicester",
      "Fruit & Vegetable Wholesaler Leicester",
      "Barakah Fresh Foods Leicester",
      "Fresh Produce Supplier Leicester",
    ],
    slogan: siteConfig.tagline,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
