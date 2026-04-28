import { companyProfile } from "@/data/site";

export function createWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${companyProfile.phoneNumber}?text=${encodedMessage}`;
}

export function createProductInquiryLink(messagePrefix: string, productName: string) {
  return createWhatsAppLink(`${messagePrefix} ${productName}`);
}

export function createWhatsAppPhoneLink() {
  return `tel:+${companyProfile.phoneNumber}`;
}
