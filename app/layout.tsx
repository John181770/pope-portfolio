import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { siteData } from '@/data/site';
import { Providers } from '@/components/Providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: siteData.title,
  description: siteData.description,
  keywords: siteData.keywords,
  authors: [{ name: siteData.author }],
  openGraph: {
    title: siteData.title,
    description: siteData.description,
    url: siteData.url,
    siteName: siteData.title,
    images: [
      {
        url: siteData.ogImage,
        width: 1200,
        height: 630,
        alt: siteData.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.title,
    description: siteData.description,
    images: [siteData.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
