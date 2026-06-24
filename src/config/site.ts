export const siteConfig = {
  name: "Barakah Fresh Foods",
  tagline: "Fresh Wholesale Fruit & Vegetables",
  description:
    "Premium wholesale fruit and vegetables supplied to restaurants, takeaways, caterers, retailers and businesses throughout Leicester. Fresh daily stock updates and reliable wholesale service.",
  url: "https://www.barakahfreshfoods.co.uk",
  email: "Barakahfreshfoods@gmail.com",
  phoneDisplay: "073425 89538",
  phoneE164: "+447342589538",
  whatsappDisplay: "+44 7342 589538",
  addressLine1: "47A Myrtle Road",
  addressLine2: "Leicester, LE2 1FX",
  country: "United Kingdom",
  region: "Leicester",
  orderDeadline: "8PM",
  orderBannerText:
    "Please Forward Your Orders By 8PM For Next Day Processing",
  /** Digits only, no + — used with https://wa.me/ */
  whatsappE164Digits: "447342589538",
  mapEmbedUrl:
    "https://www.google.com/maps?q=47A+Myrtle+Road+Leicester+LE2+1FX&output=embed&z=16",
  hours: {
    weekdays: "Mon–Sat: 6:00–20:00",
    sunday: "Sun: Closed",
  },
  availabilityLabels: [
    "Contact For Availability",
    "Daily Stock Updates Available",
    "Request Latest Availability",
  ] as const,
} as const;

export function getAvailabilityLabel(index = 0) {
  const labels = siteConfig.availabilityLabels;
  return labels[index % labels.length];
}

export function getWhatsAppOrderUrl(prefill?: string) {
  const base = `https://wa.me/${siteConfig.whatsappE164Digits}`;
  const text =
    prefill ??
    "Hello Barakah Fresh Foods, I would like to enquire about availability and place a wholesale order.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppProductUrl(productName: string) {
  return getWhatsAppOrderUrl(
    `Hello Barakah Fresh Foods, I would like to enquire about availability for: ${productName}.`,
  );
}
