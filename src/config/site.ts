export const siteConfig = {
  name: "Barakah Fresh Foods",
  tagline: "Fresh Wholesale Fruit & Vegetables",
  description:
    "Premium wholesale fruit and vegetables supplied to restaurants, takeaways, caterers, retailers and businesses throughout Leicester. Fresh daily stock, competitive pricing, and reliable service.",
  url: "https://www.barakahfreshfoods.co.uk",
  email: "Barakahfreshfoods@gmail.com",
  phoneDisplay: "073425 89538",
  phoneE164: "+447342589538",
  addressLine1: "47A Myrtle Road",
  addressLine2: "Leicester, LE2 1FX",
  country: "United Kingdom",
  region: "Leicester",
  orderDeadline: "8PM",
  /** Digits only, no + — used with https://wa.me/ */
  whatsappE164Digits: "447342589538",
  mapEmbedUrl:
    "https://www.google.com/maps?q=47A+Myrtle+Road+Leicester+LE2+1FX&output=embed&z=16",
  hours: {
    weekdays: "Mon–Sat: 6:00–20:00",
    sunday: "Sun: Closed",
  },
} as const;

export function getWhatsAppOrderUrl(prefill?: string) {
  const base = `https://wa.me/${siteConfig.whatsappE164Digits}`;
  const text =
    prefill ??
    "Hello Barakah Fresh Foods, I would like to place a wholesale order / request prices.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppProductUrl(productName: string) {
  return getWhatsAppOrderUrl(
    `Hello Barakah Fresh Foods, I would like to enquire about: ${productName}.`,
  );
}
