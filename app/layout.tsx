import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.tentetamiri.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tente Tamiri İstanbul | Montaj, Onarım ve Bakım",
    template: "%s | Tente Tamiri İstanbul",
  },
  description:
    "İstanbul'da tente tamiri, pergola ve otomatik tente servisi, branda onarımı ve yeni montaj. Fotoğraf gönderin, hızlıca tekliflendirelim.",
  keywords: [
    "tente tamiri",
    "İstanbul tente tamiri",
    "pergola tente",
    "otomatik tente servisi",
    "branda tamiri",
    "tente montajı",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Tente Tamiri İstanbul",
    title: "Tente Tamiri İstanbul | Montaj, Onarım ve Bakım",
    description:
      "Tenteniz için hızlı keşif, doğru onarım ve temiz uygulama. İstanbul geneli servis.",
  },
  robots: { index: true, follow: true },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Tente Tamiri İstanbul",
  url: siteUrl,
  telephone: "+90 553 634 50 35",
  image: "https://www.tentetamiri.com.tr/admin/image/653-tente-tamiri10.jpg",
  priceRange: "₺₺",
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
  serviceType: [
    "Tente tamiri",
    "Tente montajı",
    "Pergola tente servisi",
    "Branda tamiri",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90 553 634 50 35",
    contactType: "customer service",
    availableLanguage: "Turkish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
