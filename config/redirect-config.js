// Configuration for Instant Direct WhatsApp Redirect

export const REDIRECT_CONFIG = {
  // Default WhatsApp Phone Number (Saudi Arabia number +966583291681)
  defaultPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "966583291681",

  // Default pre-filled message (Set to empty "" so no default text is sent)
  defaultMessage: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "",

  // Optional custom configurations for specific link paths
  customSlugs: {
    chat: {
      phone: "966583291681",
      message: "",
    },
    sales: {
      phone: "966583291681",
      message: "",
    },
    support: {
      phone: "966583291681",
      message: "",
    }
  }
};

/**
 * Construct WhatsApp redirect URL without pre-filled message by default
 */
export function getWhatsAppUrl(phone, message) {
  const cleanPhone = (phone || REDIRECT_CONFIG.defaultPhone).replace(/[^0-9]/g, '');
  const msg = message !== undefined ? message : REDIRECT_CONFIG.defaultMessage;
  
  if (msg && msg.trim() !== "") {
    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(msg)}`;
  }
  
  // Direct WhatsApp link without message
  return `https://wa.me/${cleanPhone}`;
}
