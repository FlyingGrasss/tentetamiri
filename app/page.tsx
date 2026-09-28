"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useState } from "react";

const SITE_ROOT = "https://www.tentetamiri.com.tr";
const PHONE_LABEL = "0545 364 31 44";
const whatsappHref = (message: string) => `https://wa.me/905453643144?text=${encodeURIComponent(message)}`;

const showcaseItems = [
  {
    number: "01",
    title: "Tente Tamiri",
    detail: "Kollu, motorlu ve sabit tente servisleri",
    image: SITE_ROOT + "/admin/image/653-tente-tamiri10.jpg",
  },
  {
    number: "02",
    title: "Pergola Tente",
    detail: "Geniş alanlar için sağlam gölgelendirme",
    image: SITE_ROOT + "/admin/image/322-tente-tamiri2.jpg",
  },
  {
    number: "03",
    title: "Branda Tamiri",
    detail: "Yırtık, ek ve bağlantı onarımları",
    image: SITE_ROOT + "/admin/image/390-branda-tamiri17.jpg",
  },
  {
    number: "04",
    title: "Çadır Tamiri",
    detail: "Çadır ve kapama sistemleri",
    image: SITE_ROOT + "/admin/image/310-cadir-tamiri14.jpg",
  },
  {
    number: "05",
    title: "Tente Sistemleri",
    detail: "Mekanizmayı baştan sona kontrol ediyoruz",
    image: SITE_ROOT + "/admin/image/609-tente-tamiri30.jpg",
  },
  {
    number: "06",
    title: "Branda Sistemleri",
    detail: "İşletmeler için pratik çözümler",
    image: SITE_ROOT + "/admin/image/476-branda-tamiri7.jpg",
  },
  {
    number: "07",
    title: "Çadır Sistemleri",
    detail: "Tamir, yenileme ve uygulama",
    image: SITE_ROOT + "/admin/image/581-cadir-tamiri17.jpg",
  },
];

const services = [
  {
    number: "01",
    title: "Tente Tamiri",
    image: SITE_ROOT + "/admin/image/114-tente-tamiri1.jpg",
    description:
      "Tentenizin kumaşını, kolunu, bağlantılarını ve mekanizmasını kontrol edip ihtiyacı olan parçayı onarıyoruz.",
  },
  {
    number: "02",
    title: "Branda Tamiri",
    image: SITE_ROOT + "/admin/image/148-branda-tamiri1.jpg",
    description:
      "Branda, şeffaf kapama ve PVC yüzeylerde yırtık, ek, dikiş ve bağlantı sorunlarını gideriyoruz.",
  },
  {
    number: "03",
    title: "Çadır Tamiri",
    image: SITE_ROOT + "/admin/image/22-cadir-tamiri1.jpg",
    description:
      "Çadır ve kapama sistemlerinin kumaş, iskelet ve kullanım sorunları için ölçülü servis veriyoruz.",
  },
];

const questions = [
  {
    question: "Fotoğraf göndererek fiyat alabilir miyim?",
    answer:
      "Evet. Tentenin genelini, arızalı bölgeyi ve bulunduğu yeri gösteren birkaç fotoğrafı WhatsApp üzerinden gönderin. Uygulanabilir seçenekleri ve yaklaşık fiyatı konuşalım.",
  },
  {
    question: "İstanbul'un her ilçesine geliyor musunuz?",
    answer:
      "Esenler merkezli atölyemizden İstanbul genelinde servis ve montaj planlıyoruz. Fotoğraf veya kısa bir video göndererek hızlıca keşif ve randevu oluşturabilirsiniz.",
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

function Hero() {
  const item = showcaseItems[0];

  return (
    <section className="hero" id="top">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container hero-shell">
        <div className="hero-topline">
          <span>TENTELİSA / PERGOLA / TENTE</span>
          <span>GÖLGELENDİRME SİSTEMLERİ</span>
          <span>ESENLER / İSTANBUL</span>
        </div>
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-overline"><span /> Esenler &amp; İstanbul geneli servis</p>
            <div className="hero-wordmark">
              <h1><span className="hero-line hero-line-top">GÖLGEYİ</span><span className="hero-line hero-line-middle">GERİ</span><span className="hero-line hero-line-bottom">KAZANIN.</span></h1>
            </div>
            <p className="hero-intro">
              Tentelisa güvencesiyle tente, pergola sistemleri, branda ve çadır onarımı, montajı ve bakımı.
            </p>
            <div className="hero-actions">
              <a className="red-button whatsapp-button" href={whatsappHref("Merhaba, tente ve pergola sistemleri için fotoğraf gönderip fiyat almak istiyorum.")} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={18} className="whatsapp-icon" />
                WhatsApp&apos;tan fotoğraf gönderin
              </a>
              <a className="hero-link" href="#hizmetler">
                Hizmetleri gör <ArrowDownRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-stage">
            <div className="hero-image-wrap">
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                sizes="(max-width: 760px) 100vw, 49vw"
                className="hero-image"
                priority
              />
              <div className="hero-image-wash" aria-hidden="true" />
              <div className="hero-image-caption">
                <p>{item.title}<small>{item.detail}</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-footer">
          <span>Ev ve işletmeler için tente &amp; pergola servisi</span>
          <span>Fotoğrafla başlayın / {PHONE_LABEL}</span>
          <a href="#hizmetler">Aşağı kaydır <ArrowDownRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section" id="hizmetler">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label"><span>02</span> Ne yapıyoruz?</p>
            <h2>Her sistemin<br /><em>bir çözümü</em> var.</h2>
          </div>
          <p className="section-copy">
            Sorunu büyütmeden görür, ihtiyacınız olmayan işlemi önermeyiz. Tentenize uygun servisi açıkça anlatırız.
          </p>
        </div>
        <div className="service-cards">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-image">
                <Image src={service.image} alt={service.title} fill unoptimized sizes="(max-width: 760px) 100vw, 33vw" />
                <span>{service.number}</span>
              </div>
              <div className="service-card-copy">
                <div className="service-card-title"><h3>{service.title}</h3><ArrowUpRight size={19} aria-hidden="true" /></div>
                <p>{service.description}</p>
                <a href={whatsappHref(`${service.title} için fotoğraf gönderip fiyat almak istiyorum.`)} target="_blank" rel="noreferrer"><WhatsAppIcon size={15} className="whatsapp-icon" /> {service.title} için yazın <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section className="systems-section" id="sistemler">
      <div className="container systems-grid">
        <div className="systems-intro">
          <p className="section-label section-label-light"><span>03</span> Tente sistemleri</p>
          <h2>İyi gölge,<br /><em>iyi detaydır.</em></h2>
          <p>
            Bir kumaş, bir motor veya bir bağlantı noktasındaki küçük sorun bütün sistemi etkileyebilir. Doğru parçayı bulur, sağlam olanı koruruz.
          </p>
          <a className="light-link" href={whatsappHref("Pergola ve tente sistemleri için servis bilgisi almak istiyorum.")} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} className="whatsapp-icon" /> Pergola servisi için yazın <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="system-mosaic">
          <div className="mosaic-image mosaic-image-large"><Image src={showcaseItems[1].image} alt="Pergola tente uygulaması" fill unoptimized sizes="(max-width: 760px) 100vw, 46vw" /></div>
          <div className="mosaic-image"><Image src={showcaseItems[2].image} alt="Branda uygulaması" fill unoptimized sizes="(max-width: 760px) 46vw, 22vw" /></div>
          <div className="mosaic-image"><Image src={showcaseItems[3].image} alt="Çadır uygulaması" fill unoptimized sizes="(max-width: 760px) 46vw, 22vw" /></div>
          <span className="mosaic-index">GERÇEK İŞLER / 2026</span>
        </div>
      </div>
    </section>
  );
}

function ServiceIndex() {
  return (
    <section className="index-section">
      <div className="container">
        <div className="index-head">
          <p className="section-label section-label-light"><span>04</span> Servis başlıkları</p>
          <p>İhtiyacınızı bulun<br />ve bize ulaşın.</p>
        </div>
        <div className="index-list">
          {showcaseItems.map((item) => (
            <a className="index-row" href={whatsappHref(`${item.title} için servis bilgisi almak istiyorum.`)} target="_blank" rel="noreferrer" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Fotoğrafı paylaşın", "Tentenin genelini ve sorunlu bölgeyi gösteren birkaç fotoğraf yeterli."],
    ["02", "Sorunu netleştirelim", "Konum, ölçü ve arızaya göre uygulanabilir seçenekleri birlikte konuşalım."],
    ["03", "İşi tamamlayalım", "Randevu gününde gelir, gerekli onarımı yapar ve alanı düzenli bırakırız."],
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="process-heading">
          <p className="section-label"><span>05</span> Nasıl çalışıyoruz?</p>
          <h2>Önce sorunu<br /><em>anlarız.</em></h2>
        </div>
        <div className="process-list">
          {steps.map(([number, title, copy]) => (
            <div className="process-row" key={number}>
              <span className="process-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Check size={18} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq-section" id="sss">
      <div className="container faq-grid">
        <div>
          <p className="section-label"><span>06</span> Sık sorulanlar</p>
          <h2>Cevabı<br /><em>merak edilenler.</em></h2>
          <p className="section-copy">Bulamadığınız bir cevap varsa doğrudan yazın. Kısa ve net cevap veririz.</p>
        </div>
        <div className="faq-list" data-lenis-prevent>
          {questions.map((item, index) => (
            <div className={open === index ? "faq-item faq-item-open" : "faq-item"} key={item.question}>
              <button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>
                <span>{item.question}</span>
                <ChevronDown size={20} aria-hidden="true" />
              </button>
              <div className="faq-answer"><p>{item.answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Services />
      <Systems />
      <ServiceIndex />
      <Process />
      <Faq />
      <SiteFooter />
    </main>
  );
}
