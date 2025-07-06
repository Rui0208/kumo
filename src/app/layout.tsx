import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import Header from "@/components/Header"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import Footer from "@/components/Footer"
import { config } from "@/lib/config"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kumo-fashion.com'),
  title: {
    default: config.brand.name,
    template: `%s | ${config.brand.name}`
  },
  description: config.brand.tagline,
  keywords: config.brand.keywords,
  authors: [{ name: "Rui", url: "https://kumo-fashion.com" }],
  creator: "Rui",
  publisher: config.brand.name,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://kumo-fashion.com',
    title: config.brand.name,
    description: config.brand.tagline,
    siteName: config.brand.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${config.brand.name} - ${config.brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.brand.name,
    description: config.brand.tagline,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'fashion',
  classification: 'business',
  referrer: 'origin-when-cross-origin',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: config.brand.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: config.colors.primary },
    { media: '(prefers-color-scheme: dark)', color: config.colors.primary },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700&family=Zen+Maru+Gothic:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: config.brand.name,
              description: config.brand.tagline,
              url: "https://kumo-fashion.com",
              logo: "https://kumo-fashion.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+886-2-XXXX-XXXX",
                contactType: "customer service",
                areaServed: "TW",
                availableLanguage: "zh-TW"
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: config.brand.contact.address,
                addressLocality: "台北市",
                addressRegion: "台北市",
                addressCountry: "TW"
              },
              sameAs: Object.values(config.brand.contact.social)
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <BackgroundAnimation />
        <ErrorBoundary>
          <Header />
          <main 
            className="relative z-10 flex-1"
            role="main"
            aria-label="主要內容"
          >
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
        
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          跳至主要內容
        </a>
      </body>
    </html>
  );
} 