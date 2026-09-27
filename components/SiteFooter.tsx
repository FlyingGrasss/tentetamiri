import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const SITE_ROOT = "https://www.tentetamiri.com.tr";
const PHONE = "+905536345035";
const PHONE_LABEL = "0553 634 50 35";
const whatsappHref = (message: string) => `https://wa.me/905536345035?text=${encodeURIComponent(message)}`;

function SiteLogo() {
  return (
    <Link className="site-logo site-logo-dark" href="/" aria-label="Tente Tamiri İstanbul">
      <Image
        src={SITE_ROOT + "/image/logo.png"}
        alt="Tente Tamiri logo"
        width={278}
        height={130}
        unoptimized
      />
    </Link>
  );
}

export default function SiteFooter() {
  return (
    <>
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
              <a className="red-button whatsapp-button" href={whatsappHref("Merhaba, tente servisiniz için fotoğraf ve fiyat bilgisi almak istiyorum.")} target="_blank" rel="noreferrer"><WhatsAppIcon size={18} className="whatsapp-icon" /> WhatsApp&apos;tan yazın</a>
              <a className="contact-phone" href={`tel:${PHONE}`}><Phone size={16} aria-hidden="true" /> {PHONE_LABEL}</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-main">
          <SiteLogo />
          <p>İstanbul&apos;da tente tamiri, montaj ve bakım.<br />Gölgenizi yeniden kuruyoruz.</p>
          <div className="footer-links"><Link href="/#hizmetler">Hizmetler</Link><Link href="/#sistemler">Sistemler</Link><Link href="/#sss">SSS</Link><a href={`tel:${PHONE}`}>Ara</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Tente Tamiri İstanbul</span><span>İstanbul / Türkiye</span><span><a href={SITE_ROOT} target="_blank" rel="noreferrer">tentetamiri.com.tr</a></span></div>
      </footer>
    </>
  );
}

