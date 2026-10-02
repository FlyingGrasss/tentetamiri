import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import FontVariant from "@/components/FontVariant";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const siteUrl = "https://tentelisa.com";
const socialImage = "https://tentelisa.com/og-image.png";
const logoImage = `${siteUrl}/image/logo.png`;

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin", "latin-ext"],
  display: "optional",
});

const title = "Tentelisa Tente | Pergola sistemleri Esenler";
const description =
  "Tentelisa Tente & Pergola Sistemleri: Esenler ve İstanbul genelinde tente tamiri, otomatik pergola, branda ve çadır onarımı, montaj servisi. Hızlı keşif ve net fiyat.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Tentelisa Tente | Pergola Sistemleri",
  title: {
    default: title,
    template: "%s | Tentelisa Tente Esenler",
  },
  description,
  keywords: [
    "Tentelisa",
    "Tentelisa tente",
    "Tentelisa pergola",
    "tente tamiri Esenler",
    "pergola sistemleri Esenler",
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
    "Esenler tente ustası",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: "Tentelisa Tente | Pergola Sistemleri" }],
  creator: "Tentelisa Tente | Pergola Sistemleri",
  publisher: "Tentelisa Tente | Pergola Sistemleri",
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
    siteName: "Tentelisa Tente | Pergola Sistemleri",
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Tentelisa Tente | Pergola sistemleri Esenler İstanbul",
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
    "geo.placename": "Esenler, İstanbul",
    "og:image:type": "image/png",
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
      "Esenler merkezli atölyemizden İstanbul genelinde servis planlıyoruz. İlçenizi, mümkünse kısa bir videoyu ve uygun olduğunuz zamanı iletin; ulaşım ve randevu bilgisini netleştirelim.",
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
      name: "Tentelisa Tente | Pergola Sistemleri",
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
      name: "Tentelisa Tente | Pergola sistemleri",
      alternateName: "Tentelisa",
      url: siteUrl,
      logo: logoImage,
      image: [socialImage, logoImage],
      telephone: "+90 545 364 31 44",
      priceRange: "₺₺",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Fatih, Fatih Cd. No:30",
        addressLocality: "Esenler",
        addressRegion: "İstanbul",
        postalCode: "34000",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.0385843,
        longitude: 28.8696454,
      },
      hasMap: "https://maps.app.goo.gl/MKy9p8EzSUEgPvuf7",
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Esenler",
        },
        {
          "@type": "AdministrativeArea",
          name: "İstanbul",
        },
      ],
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
        name: "Tentelisa Servisleri",
        itemListElement: serviceNames.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, areaServed: "İstanbul" },
        })),
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "28",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Mehmet Yılmaz" },
          datePublished: "2024-08-15",
          reviewBody: "Kafemizin motorlu pergolasında ray sıkışması vardı. Aynı gün gelip motor ayarını yaptılar ve kumaşı gerdiler. İşçilik ve dürüstlük konusunda 10 numara esnaf.",
          reviewRating: { "@type": "Rating", ratingValue: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Ayşe Kaya" },
          datePublished: "2024-09-02",
          reviewBody: "Balkon tentesinin kumaşı yırtılmıştı, komple değiştirmek yerine sağlam kumaş değişimi önerdiler. Çok daha uyguna geldi ve tertemiz yaptılar.",
          reviewRating: { "@type": "Rating", ratingValue: "5" },
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90 545 364 31 44",
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
  preload(
    "/_next/image?url=https%3A%2F%2Fwww.tentetamiri.com.tr%2Fadmin%2Fimage%2F653-tente-tamiri10.jpg&w=828&q=75",
    {
      as: "image",
      fetchPriority: "high",
      imageSrcSet:
        "/_next/image?url=https%3A%2F%2Fwww.tentetamiri.com.tr%2Fadmin%2Fimage%2F653-tente-tamiri10.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fwww.tentetamiri.com.tr%2Fadmin%2Fimage%2F653-tente-tamiri10.jpg&w=828&q=75 828w",
      imageSizes: "(max-width: 760px) 100vw, 49vw",
    }
  );
  return (
    <html
      lang="tr"
      className={`${space.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PVHC0W5VWE"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PVHC0W5VWE');
          `}
        </Script>
        <FontVariant />
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
