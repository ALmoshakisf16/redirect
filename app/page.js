import { redirect } from 'next/navigation';
import { REDIRECT_CONFIG, getWhatsAppUrl } from '../config/redirect-config';

export default function HomePage() {
  const targetUrl = getWhatsAppUrl(REDIRECT_CONFIG.defaultPhone, REDIRECT_CONFIG.defaultMessage);
  redirect(targetUrl);
}
