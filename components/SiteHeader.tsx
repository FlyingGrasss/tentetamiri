"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
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
    ["/#sistemler", "Tente sistemleri"],
    ["/#sss", "Sık sorulanlar"],
    ["/#iletisim", "İletişim"],
  ];

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>İSTANBUL GENELİ TENTE SERVİSİ</span>
          <a href={`tel:${PHONE}`}><Phone size={14} aria-hidden="true" /> {PHONE_LABEL}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <SiteLogo />
          <Link className="header-brand" href="/" aria-label="Tente Tamiri İstanbul ana sayfa">
            <strong>TENTE <em>TAMİR</em></strong>
            <small>İSTANBUL GENELİ SERVİS</small>
          </Link>
          <div className="header-actions">
            <a className="header-call whatsapp-button" href={whatsappHref("Merhaba, tente servisi için bilgi almak istiyorum.")} target="_blank" rel="noreferrer">
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
