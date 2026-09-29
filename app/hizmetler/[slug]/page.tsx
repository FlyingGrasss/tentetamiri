import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getSeoService, seoServices, servicePath } from "@/lib/seo-content";

const siteUrl = "https://tentelisa.com";
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getSeoService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Tentelisa Esenler`,
    description: service.description,
    alternates: { canonical: servicePath(service) },
    openGraph: {
      title: `${service.title} | Tentelisa Esenler`,
      description: service.description,
      url: `${siteUrl}${servicePath(service)}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getSeoService(slug);
  if (!service) notFound();
  const canonical = `${siteUrl}${servicePath(service)}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: canonical,
      image: service.image,
      areaServed: [
        { "@type": "AdministrativeArea", name: "Esenler" },
        { "@type": "City", name: "İstanbul" },
      ],
      provider: { "@type": "LocalBusiness", "@id": `${siteUrl}/#business`, name: "Tentelisa Tente | Pergola sistemleri" },
      serviceType: service.title,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana sayfa", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${siteUrl}/hizmetler` },
        { "@type": "ListItem", position: 3, name: service.title, item: canonical },
      ],
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="seo-detail-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <div className="container seo-detail-wrap">
          <nav className="seo-breadcrumb" aria-label="Sayfa yolu"><Link href="/">Ana sayfa</Link><span>/</span><Link href="/hizmetler">Hizmetler</Link><span>/</span><span>{service.title}</span></nav>
          <article>
            <header className="seo-detail-header">
              <div><p className="section-label"><span>01</span> Tentelisa / Tente &amp; Pergola</p><h1>{service.title}</h1><p>{service.description}</p></div>
              <div className="seo-detail-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 760px) 100vw, 43vw" priority /></div>
            </header>
            <div className="seo-detail-copy">
              {service.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <section className="seo-detail-scope" aria-labelledby="scope-title">
              <div><p className="section-label"><span>02</span> Servis kapsamı</p><h2 id="scope-title">İhtiyaca göre<br /><em>net çözüm.</em></h2></div>
              <ul>{service.highlights.map((highlight) => <li key={highlight}><span aria-hidden="true">✓</span>{highlight}</li>)}</ul>
            </section>
            <section className="seo-detail-faq" aria-labelledby="faq-title">
              <div><p className="section-label"><span>03</span> Sık sorulanlar</p><h2 id="faq-title">Sorularınız<br /><em>cevaplansın.</em></h2></div>
              <div className="seo-detail-faq-list">{service.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</div>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
