export const siteConfig = {
  name: "Barakah Fresh Foods",
  tagline: "Fresh Wholesale Fruit & Vegetables",
  description:
    "Premium wholesale fruit and vegetables supplied to restaurants, takeaways, caterers, retailers and businesses throughout Leicester and surrounding areas. Fresh daily stock updates and reliable wholesale service.",
  url: "https://www.barakahfreshfoods.co.uk",
  email: "Barakahfreshfoods@gmail.com",
  phoneDisplay: "07342589538",
  phoneE164: "+447342589538",
  whatsappDisplay: "+44 7342 589538",
  addressLine1: "47A Myrtle Road",
  addressLine2: "Leicester",
  addressPostcode: "LE2 1FX",
  country: "United Kingdom",
  region: "Leicester",
  orderDeadline: "8PM",
  orderBannerText:
    "Please Forward Your Orders By 8PM For Next Day Processing",
  whatsappE164Digits: "447342589538",
  whatsappStockMessage:
    "Hello Barakah Fresh Foods, please send me today's stock availability list.",
  mapEmbedUrl:
    "https://www.google.com/maps?q=47A+Myrtle+Road+Leicester+LE2+1FX&output=embed&z=16",
  hours: {
    weekdays: "Mon–Sat: 6:00–20:00",
    sunday: "Sun: Closed",
  },
  logo: "/images/barakah-logo.png",
  availabilityLabels: [
    "Contact For Availability",
    "Request Latest Stock Information",
  ] as const,
} as const;

export function getAvailabilityLabel(index = 0) {
  const labels = siteConfig.availabilityLabels;
  return labels[index % labels.length];
}

export function getWhatsAppOrderUrl(prefill?: string) {
  const base = `https://wa.me/${siteConfig.whatsappE164Digits}`;
  const text = prefill ?? siteConfig.whatsappStockMessage;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppStockListUrl() {
  return getWhatsAppOrderUrl(siteConfig.whatsappStockMessage);
}

export function getWhatsAppProductUrl(productName: string) {
  return getWhatsAppOrderUrl(
    `Hello Barakah Fresh Foods, please send availability for: ${productName}.`,
  );
}
