"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const SITE_ROOT = "https://www.tentetamiri.com.tr";
const DOMAIN = "tentelisa.com";
const SITE_URL = "https://tentelisa.com";
const PHONE = "+905453643144";
const PHONE_LABEL = "0545 364 31 44";
const ADDRESS = "Fatih, Fatih Cd. No:30, 34000 Esenler/İstanbul";
const MAPS_URL = "https://maps.app.goo.gl/MKy9p8EzSUEgPvuf7";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2882766324835!2d28.867070476483444!3d41.03858437134608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbca45d30c11%3A0x9554b8110c07ce7f!2sTentelisa%20Tente%20%7C%20Pergola%20sistemleri!5e0!3m2!1str!2str!4v1727546700000!5m2!1str!2str";

const whatsappHref = (message: string) => `https://wa.me/905453643144?text=${encodeURIComponent(message)}`;

function SiteLogo() {
  return (
    <Link className="site-logo site-logo-dark" href="/" aria-label="Tentelisa Tente | Pergola sistemleri">
      <Image
        src={SITE_ROOT + "/image/logo.png"}
        alt="Tentelisa Tente logo"
        width={278}
        height={130}
      />
    </Link>
  );
}

export default function SiteFooter() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapSrc, setMapSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapSrc(MAPS_EMBED);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="contact-section" id="iletisim">
        <div className="contact-lines" aria-hidden="true" />
        <div className="container contact-grid">
          <div className="contact-info-col">
            <p className="section-label section-label-light"><span>07</span> İletişim &amp; Konum</p>
            <h2>Tenteniz için<br /><em>buradayız.</em></h2>
            
            <div className="contact-address-block">
              <div className="contact-address-item">
                <MapPin size={18} className="contact-icon" aria-hidden="true" />
                <div>
                  <strong>Adresimiz:</strong>
                  <p>{ADDRESS}</p>
                </div>
              </div>
              <div className="contact-address-item">
                <Phone size={18} className="contact-icon" aria-hidden="true" />
                <div>
                  <strong>Telefon:</strong>
                  <p><a href={`tel:${PHONE}`}>{PHONE_LABEL}</a></p>
                </div>
              </div>
            </div>

            <p className="contact-lead-text">
              Arızayı kısaca anlatın, fotoğraf gönderin. Esenler merkezli atölyemizden İstanbul geneline hızlı servis ve net fiyat sunalım.
            </p>

            <div className="contact-actions">
              <a
                className="red-button whatsapp-button"
                href={whatsappHref("Merhaba, tente ve pergola sistemleri için fotoğraf gönderip fiyat almak istiyorum.")}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={18} className="whatsapp-icon" /> WhatsApp&apos;tan yazın
              </a>
              <a className="contact-phone" href={`tel:${PHONE}`}>
                <Phone size={16} aria-hidden="true" /> {PHONE_LABEL}
              </a>
              <a
                className="maps-button"
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                title="Google Haritalar'da aç"
              >
                <Navigation size={15} aria-hidden="true" /> Google Haritalar&apos;da Aç
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="contact-map-col">
            <div className="contact-map-card">
              <div className="contact-map-header">
                <div className="contact-map-badge">
                  <span className="map-dot" />
                  <strong>Tentelisa Tente | Pergola sistemleri</strong>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="map-header-link"
                >
                  Yol Tarifi Al <ExternalLink size={12} />
                </a>
              </div>
              <div className="contact-map-frame-wrap" ref={mapRef}>
                {mapSrc ? (
                  <iframe
                    title="Tentelisa Tente Pergola sistemleri Esenler Konumu"
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    referrerPolicy="no-referrer-when-downgrade"
                    className="contact-map-iframe"
                  />
                ) : (
                  <div className="contact-map-placeholder" aria-hidden="true">
                    <span>📍</span>
                  </div>
                )}
              </div>
              <div className="contact-map-footer">
                <span>📍 {ADDRESS}</span>
                <a href={MAPS_URL} target="_blank" rel="noreferrer">Haritada Görüntüle →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <SiteLogo />
          <p>
            Tentelisa Tente &amp; Pergola Sistemleri<br />
            Esenler ve İstanbul genelinde profesyonel tente tamiri, montaj ve bakım.<br />
            Gölgenizi yeniden kuruyoruz.
          </p>
          <div className="footer-links">
            <Link href="/hizmetler">Hizmetler</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#sistemler">Sistemler</Link>
            <Link href="/#sss">SSS</Link>
            <a href={MAPS_URL} target="_blank" rel="noreferrer">Harita</a>
            <a href={`tel:${PHONE}`}>Ara</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Tentelisa Tente | Pergola sistemleri Esenler</span>
          <span>Esenler, İstanbul / Türkiye</span>
          <span>
            <a href={SITE_URL} target="_blank" rel="noreferrer">
              {DOMAIN}
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

