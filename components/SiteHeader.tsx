"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const SITE_ROOT = "https://www.tentetamiri.com.tr";
const PHONE = "+905453643144";
const PHONE_LABEL = "0545 364 31 44";

const whatsappHref = (message: string) => `https://wa.me/905453643144?text=${encodeURIComponent(message)}`;

function SiteLogo() {
  return (
    <Link className="site-logo site-logo-dark" href="/" aria-label="Tentelisa Tente | Pergola sistemleri">
      <Image
        src={SITE_ROOT + "/image/logo.png"}
        alt="Tentelisa Tente logo"
        width={278}
        height={130}
        priority
      />
    </Link>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [
    ["/", "Ana sayfa"],
    ["/hizmetler", "Hizmetler"],
    ["/blog", "Blog"],
    ["/#sistemler", "Tente sistemleri"],
    ["/#sss", "Sık sorulanlar"],
    ["/#iletisim", "İletişim & Konum"],
  ];

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>ESENLER & İSTANBUL GENELİ TENTE SERVİSİ</span>
          <a href={`tel:${PHONE}`}><Phone size={14} aria-hidden="true" /> {PHONE_LABEL}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <SiteLogo />
          <Link className="header-brand" href="/" aria-label="Tentelisa Tente ve Pergola Sistemleri ana sayfa">
            <strong>TENTE<em>LİSA</em></strong>
            <small>TENTE &amp; PERGOLA SİSTEMLERİ</small>
          </Link>
          <div className="header-actions">
            <a className="header-call whatsapp-button" href={whatsappHref("Merhaba, tente ve pergola servisi için bilgi almak istiyorum.")} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={17} className="whatsapp-icon" />
              <span>WhatsApp</span>
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
        {open && <button className="menu-scrim" type="button" onClick={close} aria-label="Menüyü kapat" />}
        <nav className={open ? "mobile-nav mobile-nav-open" : "mobile-nav"} aria-label="Ana menü">
          <div className="mobile-nav-inner">
            {links.map(([href, label]) => (
              <Link key={href} href={href} onClick={close}>{label}<ArrowUpRight size={17} aria-hidden="true" /></Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
