export const siteConfig = {
  name: "Barakah Fresh Foods",
  tagline: "Premium Fresh Produce Delivered Daily",
  description:
    "Wholesale fruit, vegetables, exotic produce, frozen foods, and groceries supplied to restaurants, retailers, caterers, and businesses across Leicester and Leicestershire.",
  url: "https://www.barakahfreshfoods.co.uk",
  email: "orders@barakahfreshfoods.co.uk",
  phoneDisplay: "+44 (0) 116 123 4567",
  phoneE164: "+441161234567",
  addressLine1: "Unit 8, Leicester Wholesale Market",
  addressLine2: "Leicester, LE1 2TE",
  country: "United Kingdom",
  region: "Leicester",
  /** Digits only, no + — used with https://wa.me/ */
  whatsappE164Digits: "4471161234567",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Leicester+Wholesale+Market+LE1+2TE&output=embed&z=15",
  hours: {
    weekdays: "Mon–Sat: 4:00–20:00",
    sunday: "Sun: Closed",
  },
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;

export function getWhatsAppOrderUrl(prefill?: string) {
  const base = `https://wa.me/${siteConfig.whatsappE164Digits}`;
  const text =
    prefill ??
    "Hello Barakah Fresh Foods, I would like a wholesale order / price list.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppProductUrl(productName: string) {
  return getWhatsAppOrderUrl(
    `Hello Barakah Fresh Foods, I would like to enquire about: ${productName}.`,
  );
}
