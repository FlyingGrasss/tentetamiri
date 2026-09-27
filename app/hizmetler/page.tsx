import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { servicePath, seoServices } from "@/lib/seo-content";

const siteUrl = "https://www.tentetamiri.com.tr";

export const metadata: Metadata = {
  title: "Tente Servisleri İstanbul | Tamir, Montaj ve Bakım",
  description:
    "İstanbul genelinde tente tamiri, otomatik tente, pergola, branda, çadır ve tente montajı hizmetleri. İhtiyacınıza uygun servis başlığını inceleyin.",
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Tente Servisleri İstanbul | Tamir, Montaj ve Bakım",
    description:
      "İstanbul genelinde tente tamiri, otomatik tente, pergola, branda, çadır ve tente montajı hizmetleri.",
    url: `${siteUrl}/hizmetler`,
    images: [{ url: `${siteUrl}/admin/image/653-tente-tamiri10.jpg`, width: 1200, height: 630, alt: "İstanbul tente servisleri" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/hizmetler#page`,
      url: `${siteUrl}/hizmetler`,
      name: "Tente Servisleri İstanbul",
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
              <p className="section-label section-label-light"><span>01</span> İstanbul tente servisleri</p>
              <h1>Tenteniz için<br /><em>doğru servis.</em></h1>
            </div>
            <p>Arızayı, kullanım amacını ve alanı değerlendirerek tente, pergola, branda ve çadır sistemleri için uygulanabilir çözümü birlikte belirliyoruz.</p>
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
                  <div className="seo-service-card-image"><Image src={service.image} alt={service.title} fill unoptimized sizes="(max-width: 760px) 100vw, 33vw" /></div>
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
        <section className="seo-page-cta">
          <div className="container seo-page-cta-inner">
            <div><p className="section-label section-label-light"><span>03</span> Hızlı başlangıç</p><h2>Fotoğrafı gönderin,<br /><em>önce sorunu anlayalım.</em></h2></div>
            <a className="red-button" href="https://wa.me/905536345035?text=Merhaba%2C%20hangi%20tente%20servisine%20ihtiyac%C4%B1m%20oldu%C4%9Funu%20payla%C5%9Fmak%20istiyorum." target="_blank" rel="noreferrer"><WhatsAppIcon size={18} className="whatsapp-icon" /> WhatsApp&apos;tan yazın <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
    </>
  );
}
