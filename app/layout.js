import './globals.css';

export const metadata = {
  title: 'جاري التحويل... | WhatsApp Redirect',
  description: 'تحويل آمن ومباشر للمحادثة عبر الواتساب',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'noindex, nofollow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
