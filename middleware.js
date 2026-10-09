import { NextResponse } from 'next/server';
import { REDIRECT_CONFIG, getWhatsAppUrl } from './config/redirect-config';

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Ignore static assets, next internal routes, and favicon
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // 1. Determine slug config if path is e.g. /sales, /support, /chat
  const slug = pathname.replace(/^\//, '');
  const slugConfig = REDIRECT_CONFIG.customSlugs[slug] || null;

  // 2. Determine phone & message
  let phone = REDIRECT_CONFIG.defaultPhone;
  let message = REDIRECT_CONFIG.defaultMessage;

  if (slugConfig) {
    if (slugConfig.phone) phone = slugConfig.phone;
    if (slugConfig.message !== undefined) message = slugConfig.message;
  }

  if (searchParams.has('phone')) {
    phone = searchParams.get('phone');
  }

  if (searchParams.has('text')) {
    message = searchParams.get('text');
  } else if (searchParams.has('message')) {
    message = searchParams.get('message');
  }

  // 3. Get WhatsApp destination URL (e.g., https://wa.me/966583291681)
  const targetUrl = getWhatsAppUrl(phone, message);

  // 4. Perform Instant HTTP 307 Server Redirect
  return NextResponse.redirect(targetUrl, 307);
}

export const config = {
  matcher: '/:path*',
};
