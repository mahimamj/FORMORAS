export const PHONE_NUMBER = '6291824268';
export const PHONE_DISPLAY = '+91 6291824268';
export const EMAIL_ADDRESS = 'vishalpoddarjobs@gmail.com';
export const WHATSAPP_NUMBER = '916291824268';

export function openWhatsAppQuery(productName?: string, notes?: string) {
  let text = '';
  if (productName) {
    text = `Hello FORMORAS Furniture,\n\nI am interested in getting a price quote for:\n📦 *${productName}*\n\nPlease share the official price list, availability, and specifications.`;
  } else if (notes) {
    text = `Hello FORMORAS Furniture,\n\nI would like to submit a price query:\n📝 ${notes}`;
  } else {
    text = `Hello FORMORAS Furniture,\n\nI would like to request a price quote and product catalog.`;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}
