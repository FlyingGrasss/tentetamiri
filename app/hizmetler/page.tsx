import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { servicePath, seoServices } from "@/lib/seo-content";

const siteUrl = "https://tentelisa.com";

export const metadata: Metadata = {
  title: "Tente ve Pergola Hizmetleri | Tentelisa Esenler İstanbul",
  description:
    "Esenler ve İstanbul genelinde Tentelisa ile tente tamiri, otomatik tente, pergola sistemleri, branda, çadır ve montaj hizmetleri.",
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Tente ve Pergola Hizmetleri | Tentelisa Esenler İstanbul",
    description:
      "Esenler ve İstanbul genelinde Tentelisa ile tente tamiri, otomatik tente, pergola sistemleri, branda, çadır ve montaj hizmetleri.",
    url: `${siteUrl}/hizmetler`,
    images: [{ url: `${siteUrl}/admin/image/653-tente-tamiri10.jpg`, width: 1200, height: 630, alt: "Tentelisa tente ve pergola servisleri" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/hizmetler#page`,
      url: `${siteUrl}/hizmetler`,
      name: "Tentelisa Tente ve Pergola Hizmetleri",
      inLanguage: "tr-TR",
    },
    {
      "@type": "ItemList",
      itemListElement: seoServices.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${siteUrl}${servicePath(service)}`,
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="seo-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <section className="seo-page-hero">
          <div className="container seo-page-hero-grid">
            <div>
              <p className="section-label section-label-light"><span>01</span> Tentelisa servisleri</p>
              <h1>Tenteniz için<br /><em>doğru servis.</em></h1>
            </div>
            <p>Esenler merkezli atölyemizden tente, pergola, branda ve çadır sistemleri için doğru tespiti yapıp en uygun çözümü sunuyoruz.</p>
          </div>
        </section>
        <section className="seo-service-section">
          <div className="container">
            <div className="seo-section-intro">
              <p className="section-label"><span>02</span> Hizmet başlıkları</p>
              <p>İhtiyacınıza en yakın hizmeti seçin, detayları inceleyin ve fotoğrafla WhatsApp üzerinden ulaşın.</p>
            </div>
            <div className="seo-service-grid">
              {seoServices.map((service, index) => (
                <Link className="seo-service-card" href={servicePath(service)} key={service.slug}>
                  <div className="seo-service-card-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                  <div className="seo-service-card-copy">
                    <span>0{index + 1}</span>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <strong>Hizmeti inceleyin <span aria-hidden="true">↗</span></strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
