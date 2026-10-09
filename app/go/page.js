import { redirect } from 'next/navigation';
import { REDIRECT_CONFIG, getWhatsAppUrl } from '../../config/redirect-config';

export default function GoPage({ searchParams }) {
  const phone = searchParams?.phone || REDIRECT_CONFIG.defaultPhone;
  const message = searchParams?.text || searchParams?.message || REDIRECT_CONFIG.defaultMessage;

  const targetUrl = getWhatsAppUrl(phone, message);

  redirect(targetUrl);
}
