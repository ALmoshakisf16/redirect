import { redirect } from 'next/navigation';
import { REDIRECT_CONFIG, getWhatsAppUrl } from '../../config/redirect-config';

export default function SlugPage({ params, searchParams }) {
  const { slug } = params;
  const slugConfig = REDIRECT_CONFIG.customSlugs[slug] || {};
  
  const phone = searchParams?.phone || slugConfig.phone || REDIRECT_CONFIG.defaultPhone;
  const message = searchParams?.text || searchParams?.message || slugConfig.message || REDIRECT_CONFIG.defaultMessage;

  const targetUrl = getWhatsAppUrl(phone, message);

  redirect(targetUrl);
}
