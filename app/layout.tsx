import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";
import FontVariant from "@/components/FontVariant";
import "./globals.css";

const siteUrl = "https://www.tentetamiri.com.tr";
const socialImage = `${siteUrl}/admin/image/653-tente-tamiri10.jpg`;
const logoImage = `${siteUrl}/image/logo.png`;

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const title = "Tente Tamiri İstanbul | Tente Servisi, Pergola ve Branda Onarımı";
const description =
  "İstanbul genelinde tente tamiri, otomatik tente ve pergola servisi, branda ve çadır onarımı. Fotoğraf gönderin, hızlı keşif ve net fiyat alın.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Tente Tamiri İstanbul",
  title: {
    default: title,
    template: "%s | Tente Tamiri İstanbul",
  },
  description,
  keywords: [
    "tente tamiri",
    "İstanbul tente tamiri",
    "tente servisi İstanbul",
    "otomatik tente servisi",
    "pergola tente servisi",
    "pergola tamiri",
    "branda tamiri",
    "çadır tamiri",
    "tente montajı",
    "tente bakım servisi",
    "tente mekanizması tamiri",
    "motorlu tente tamiri",
    "İstanbul tente ustası",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: "Tente Tamiri İstanbul" }],
  creator: "Tente Tamiri İstanbul",
  publisher: "Tente Tamiri İstanbul",
  category: "home improvement",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Tente Tamiri İstanbul",
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "İstanbul tente tamiri ve pergola servis uygulaması",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "content-language": "tr-TR",
    "geo.region": "TR-34",
    "geo.placename": "İstanbul",
    "og:image:type": "image/jpeg",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff0000",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const serviceNames = [
  "Tente tamiri",
  "Tente montajı",
  "Otomatik tente servisi",
  "Pergola tente servisi",
  "Branda tamiri",
  "Çadır tamiri",
];

const faqEntries = [
  {
    question: "Fotoğraf göndererek fiyat alabilir miyim?",
    answer:
      "Evet. Tentenin genelini, arızalı bölgeyi ve bulunduğu yeri gösteren birkaç fotoğrafı WhatsApp üzerinden gönderin. Uygulanabilir seçenekleri ve yaklaşık fiyatı konuşalım.",
  },
  {
    question: "İstanbul'un her ilçesine geliyor musunuz?",
    answer:
      "İstanbul genelinde servis planlıyoruz. İlçenizi, mümkünse kısa bir videoyu ve uygun olduğunuz zamanı iletin; ulaşım ve randevu bilgisini netleştirelim.",
  },
  {
    question: "Tamir mi, yenileme mi gerektiğini nasıl anlarım?",
    answer:
      "Önce mevcut sistemi ve arızanın kaynağını değerlendiriyoruz. Sağlam parçaları koruyup yalnızca gerekli işlemi öneriyoruz.",
  },
  {
    question: "Otomatik ve pergola tente servisi yapıyor musunuz?",
    answer:
      "Evet. Motor, kumanda, sensör, kumaş ve mekanizma sorunlarının yanında pergola tente sistemleri için de servis ve montaj planlıyoruz.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Tente Tamiri İstanbul",
      description,
      inLanguage: "tr-TR",
      publisher: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
      primaryImageOfPage: { "@type": "ImageObject", url: socialImage },
      inLanguage: "tr-TR",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Tente Tamiri İstanbul",
      alternateName: "Tente Tamir",
      url: siteUrl,
      logo: logoImage,
      image: [socialImage, logoImage],
      telephone: "+90 553 634 50 35",
      priceRange: "₺₺",
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "İstanbul",
      },
      serviceType: serviceNames,
      knowsAbout: [
        "Tente tamiri",
        "Pergola sistemleri",
        "Otomatik tente motorları",
        "Branda ve PVC kapama sistemleri",
        "Çadır sistemleri",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tente servisleri",
        itemListElement: serviceNames.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, areaServed: "İstanbul" },
        })),
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90 553 634 50 35",
        contactType: "customer service",
        availableLanguage: ["Turkish"],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqEntries.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${space.variable} ${dmSans.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <body>
        <FontVariant />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
