"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";

const SITE_ROOT = "https://www.tentetamiri.com.tr";
const PHONE = "+905536345035";
const PHONE_LABEL = "0553 634 50 35";
const WHATSAPP =
  "https://wa.me/905536345035?text=Merhaba%2C%20tente%20tamiri%20i%C3%A7in%20bilgi%20almak%20istiyorum.";

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

function SiteLogo({ dark = false }: { dark?: boolean }) {
  return (
    <a className={dark ? "site-logo site-logo-dark" : "site-logo"} href="#top" aria-label="Tente Tamiri İstanbul">
      <Image
        src={SITE_ROOT + "/image/logo.png"}
        alt="Tente Tamiri logo"
        width={278}
        height={130}
        unoptimized
        priority
      />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [
    ["#hizmetler", "Hizmetler"],
    ["#sistemler", "Tente sistemleri"],
    ["#sss", "Sık sorulanlar"],
    ["#iletisim", "İletişim"],
  ];

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>İSTANBUL GENELİ TENTE SERVİSİ</span>
          <a href={"tel:" + PHONE}><Phone size={14} aria-hidden="true" /> {PHONE_LABEL}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <SiteLogo />
          <nav className="main-nav" aria-label="Ana menü">
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={close}>{label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-call" href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle size={16} aria-hidden="true" />
              <span>Hemen yazın</span>
            </a>
            <button
              className="menu-button"
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <nav className={open ? "mobile-nav mobile-nav-open" : "mobile-nav"} aria-label="Mobil menü">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>{label}<ArrowUpRight size={17} aria-hidden="true" /></a>
          ))}
        </nav>
      </header>
    </>
  );
}

function Hero() {
  const [active, setActive] = useState(0);
  const item = showcaseItems[active];

  return (
    <section className="hero" id="top">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container hero-topline">
        <span>01 / TENTE TAMİRİ</span>
        <span>GÖLGELENDİRME SİSTEMLERİ</span>
        <span>İSTANBUL / TR</span>
      </div>
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="hero-overline"><span /> Tamir / montaj / bakım</p>
          <h1>GÖLGEYİ<br /><span>GERİ</span><br />KAZANIN.</h1>
          <p className="hero-intro">
            Tente, pergola, branda ve çadır sistemleri için İstanbul&apos;da hızlı ve doğru servis.
          </p>
          <div className="hero-actions">
            <a className="red-button" href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle size={17} aria-hidden="true" />
              Fotoğraf gönderin
            </a>
            <a className="hero-link" href="#hizmetler">
              Hizmetleri gör <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-facts">
            <span><strong>7/24</strong> mesaj kabulü</span>
            <span><strong>İstanbul</strong> tüm ilçeler</span>
          </div>
        </div>
        <div className="hero-stage">
          <div className="hero-image-wrap">
            <Image
              key={item.image}
              src={item.image}
              alt={item.title}
              fill
              unoptimized
              sizes="(max-width: 760px) 100vw, 54vw"
              className="hero-image"
              priority
            />
            <div className="hero-image-wash" aria-hidden="true" />
            <span className="hero-image-label">GERÇEK UYGULAMA / {item.number}</span>
            <div className="hero-image-caption">
              <span>{item.number}</span>
              <p>{item.title}<small>{item.detail}</small></p>
            </div>
          </div>
          <div className="hero-side-note">
            <Wrench size={18} aria-hidden="true" />
            <span>İş başlamadan önce<br /><strong>net fiyat</strong></span>
          </div>
        </div>
      </div>
      <div className="container hero-selector">
        <span className="selector-label">Hızlı bakış / servisler</span>
        <div className="selector-list">
          {showcaseItems.map((showcase, index) => (
            <button
              key={showcase.number}
              className={index === active ? "selector-item selector-item-active" : "selector-item"}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <span>{showcase.number}</span>
              {showcase.title}
            </button>
          ))}
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
                <a href={WHATSAPP} target="_blank" rel="noreferrer">Bilgi alın <ArrowUpRight size={14} aria-hidden="true" /></a>
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
          <a className="light-link" href={WHATSAPP} target="_blank" rel="noreferrer">Sorunuzu anlatın <ArrowUpRight size={16} aria-hidden="true" /></a>
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
            <a className="index-row" href={WHATSAPP} target="_blank" rel="noreferrer" key={item.number}>
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
        <div className="faq-list">
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

function Contact() {
  return (
    <section className="contact-section" id="iletisim">
      <div className="contact-lines" aria-hidden="true" />
      <div className="container contact-grid">
        <div>
          <p className="section-label section-label-light"><span>07</span> İletişim</p>
          <h2>Tenteniz için<br /><em>buradayız.</em></h2>
        </div>
        <div className="contact-copy">
          <p>Arızayı kısaca anlatın, mümkünse fotoğrafı ekleyin. İstanbul&apos;daki servis planını birlikte oluşturalım.</p>
          <div className="contact-actions">
            <a className="red-button" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> WhatsApp&apos;tan yazın</a>
            <a className="contact-phone" href={"tel:" + PHONE}><Phone size={16} aria-hidden="true" /> {PHONE_LABEL}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Systems />
      <ServiceIndex />
      <Process />
      <Faq />
      <Contact />
      <footer className="site-footer">
        <div className="container footer-main">
          <SiteLogo dark />
          <p>İstanbul&apos;da tente tamiri, montaj ve bakım.<br />Gölgenizi yeniden kuruyoruz.</p>
          <div className="footer-links"><a href="#hizmetler">Hizmetler</a><a href="#sistemler">Sistemler</a><a href="#sss">SSS</a><a href={"tel:" + PHONE}>Ara</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Tente Tamiri İstanbul</span><span>İstanbul / Türkiye</span><span><a href={SITE_ROOT} target="_blank" rel="noreferrer">tentetamiri.com.tr</a></span></div>
      </footer>
    </main>
  );
}
