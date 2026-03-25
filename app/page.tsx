"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  Cpu,
  Facebook,
  Home,
  Instagram,
  Leaf,
  Linkedin,
  Menu,
  Search,
  Twitter,
  Users,
  X,
} from "lucide-react";
import sksqImage from "../assets/sksq.jpg";

function GlobalStyles() {
  return (
    <style jsx global>{`
      :root {
        --brand-red: #d62828;
        --brand-red-hover: #b22222;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: var(--font-main);
        -webkit-font-smoothing: antialiased;
        background: #fff;
        color: #000;
        margin: 0;
      }

      * {
        box-sizing: border-box;
      }

      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }

      .site-nav {
        position: fixed;
        inset: 0 0 auto 0;
        z-index: 50;
        background: rgba(255, 255, 255, 0.96);
        backdrop-filter: blur(14px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        transition: padding 0.35s ease, box-shadow 0.35s ease;
      }

      .site-nav.scrolled {
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
      }

      .nav-shell,
      .section-shell,
      .footer-shell {
        width: min(1280px, calc(100% - 48px));
        margin: 0 auto;
      }

      .nav-row {
        min-height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }

      .brand {
        font-family: var(--font-display);
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 300;
      }

      .brand span {
        color: var(--brand-red);
        font-weight: 600;
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 34px;
      }

      .nav-links a {
        text-decoration: none;
        color: #000;
        text-transform: none;
        font-weight: 500;
        letter-spacing: 0.08em;
        font-size: 0.92rem;
      }

      .nav-search {
        border: 0;
        background: transparent;
        color: #000;
        cursor: pointer;
        display: inline-flex;
        padding: 8px;
      }

      .mobile-toggle {
        display: none;
        border: 0;
        background: transparent;
        cursor: pointer;
        color: #000;
      }

      .mobile-menu {
        display: none;
        padding: 24px 0 28px;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
      }

      .mobile-menu a {
        display: block;
        text-decoration: none;
        color: #000;
        font-family: var(--font-display);
        font-size: clamp(2rem, 5vw, 3.25rem);
        line-height: 1.1;
        font-weight: 400;
        letter-spacing: 0.03em;
        padding: 14px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      }

      .hero {
        position: relative;
        min-height: 100vh;
        min-height: 100svh;
        display: flex;
        align-items: center;
        background: #050505;
        overflow: hidden;
        padding-top: 108px;
      }

      .hero-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        transform: scale(1.1);
      }

      .hero-content {
        position: relative;
        z-index: 2;
        width: min(1280px, calc(100% - 48px));
        margin: 0 auto;
      }

      .hero-text-panel {
        width: fit-content;
        max-width: min(760px, 100%);
        padding: 28px 32px 32px;
        background: rgba(0, 0, 0, 0.29);
        border-radius: 6px;
      }

      .hero-kicker {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 40px;
      }

      .hero-kicker-line {
        width: 40px;
        height: 1.5px;
        background: var(--brand-red);
      }

      .hero-kicker-text {
        color: rgba(255, 255, 255, 0.8);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.4em;
        text-transform: uppercase;
      }

      .hero-title {
        max-width: 10ch;
        margin: 0 0 34px;
        color: #fff;
        font-family: var(--font-display);
        font-weight: 300;
        letter-spacing: -0.04em;
        font-size: clamp(3.5rem, 8vw, 7.5rem);
        line-height: 1.05;
      }

      .hero-title .accent {
        color: var(--brand-red);
        font-weight: 500;
      }

      .hero-copy {
        max-width: 44rem;
        color: #fff;
        font-size: clamp(1.05rem, 1.6vw, 1.25rem);
        line-height: 1.8;
        margin-bottom: 44px;
      }

      .hero-actions {
        display: flex;
        gap: 28px;
        flex-wrap: wrap;
      }

      .btn-primary {
        border: 0;
        background: var(--brand-red);
        color: #fff;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-size: 11px;
        padding: 18px 30px;
        border-radius: 2px;
        box-shadow: 0 16px 40px rgba(139, 0, 0, 0.2);
      }

      .btn-primary:hover {
        background: var(--brand-red-hover);
      }

      section {
        position: relative;
      }

      .mission {
        background: #fff;
        padding: 120px 0;
        border-bottom: 1px solid #f5f5f5;
      }

      .mission-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 96px;
      }

      .section-head {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 0;
      }

      .sticky {
        position: sticky;
        top: 128px;
      }

      .eyebrow {
        margin: 0 0 24px;
        color: var(--brand-red);
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.5em;
        text-transform: uppercase;
      }

      .mission-title,
      .field-title,
      .methods-title,
      .newsletter-title {
        margin: 0;
        font-family: var(--font-display);
        font-weight: 300;
        letter-spacing: -0.04em;
        line-height: 1.1;
      }

      .mission-title {
        font-size: clamp(3rem, 6vw, 5.5rem);
      }

      .mission-title .accent,
      .newsletter-title .accent {
        color: var(--brand-red);
        font-weight: 500;
        text-decoration: underline;
        text-decoration-color: rgba(0, 0, 0, 0.1);
        text-underline-offset: 12px;
      }

      .mission-copy {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.6;
        margin-bottom: 48px;
      }

      .mission-subgrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 40px;
        border-top: 2px solid #000;
        padding-top: 36px;
      }

      .mini-label {
        margin: 0 0 14px;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }

      .mini-copy {
        margin: 0;
        font-size: 1rem;
        line-height: 1.8;
      }

      .fields {
        background: #fcfcfc;
        padding: 120px 0;
        overflow: hidden;
      }

      .field-title {
        font-size: clamp(2.5rem, 5vw, 4.2rem);
      }

      .field-link,
      .methods-title-link {
        border: 0;
        background: transparent;
        color: #000;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.3em;
        font-size: 11px;
        padding-bottom: 8px;
        border-bottom: 2px solid #000;
      }

      .field-link:hover,
      .methods-title-link:hover {
        color: var(--brand-red);
        border-color: var(--brand-red);
      }

      .field-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        border: 1px solid #e5e5e5;
        background: #e5e5e5;
        gap: 1px;
      }

      .field-card,
      .field-cta {
        background: #fff;
        padding: 56px;
        position: relative;
        overflow: hidden;
        min-height: 280px;
      }

      .field-card::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 0;
        background: var(--brand-red);
        transition: height 0.4s ease;
      }

      .field-card:hover::before {
        height: 100%;
      }

      .field-card-icon {
        color: #000;
        transition: color 0.4s ease, transform 0.4s ease;
        margin-bottom: 28px;
      }

      .field-card:hover .field-card-icon {
        color: var(--brand-red);
        transform: translateX(8px);
      }

      .field-card h4 {
        margin: 0 0 18px;
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 300;
        letter-spacing: -0.03em;
      }

      .field-card p {
        margin: 0;
        line-height: 1.7;
        font-size: 0.95rem;
      }

      .field-cta {
        background: var(--brand-red);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .field-cta h4 {
        margin: 0 0 12px;
        color: #fff;
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 300;
      }

      .field-cta p {
        margin: 0;
        color: #fff;
        font-size: 10px;
        font-weight: 900;
        letter-spacing: 0.4em;
        text-transform: uppercase;
      }

      .methods {
        background: #fff;
        padding: 120px 0;
      }

      .methods-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 96px;
        align-items: center;
      }

      .methods-list {
        display: grid;
        gap: 20px;
      }

      .method-item {
        display: flex;
        align-items: center;
        gap: 24px;
      }

      .method-item span {
        font-size: 0.85rem;
        font-weight: 900;
        color: #e0e0e0;
        transition: color 0.3s ease;
      }

      .method-item:hover span {
        color: var(--brand-red);
      }

      .method-item p {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.4);
        line-height: 1.4;
        transition: color 0.3s ease;
      }

      .method-item:hover p {
        color: #000;
      }

      .methods-image-wrap {
        position: relative;
        overflow: hidden;
      }

      .methods-image-overlay {
        position: absolute;
        inset: 0;
        background: var(--brand-red);
        mix-blend-mode: multiply;
        opacity: 0.2;
        transition: opacity 0.7s ease;
        z-index: 1;
      }

      .methods-image-wrap:hover .methods-image-overlay {
        opacity: 0;
      }

      .methods-image {
        display: block;
        width: 100%;
        border-radius: 2px;
        filter: grayscale(1);
        transition: transform 0.8s ease, filter 0.8s ease;
      }

      .methods-image-wrap:hover .methods-image {
        transform: scale(1.05);
        filter: grayscale(0);
      }

      .newsletter {
        background: #fff;
        border-top: 1px solid #f0f0f0;
        padding: 120px 0;
      }

      .newsletter-shell {
        text-align: center;
        max-width: 760px;
        margin: 0 auto;
      }

      .newsletter-title {
        font-size: clamp(2.1rem, 4.9vw, 4.55rem);
        margin-bottom: 24px;
      }

      .newsletter-text {
        margin: 0 auto 36px;
        max-width: 520px;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.4em;
        text-transform: uppercase;
      }

      .newsletter-form {
        display: flex;
        max-width: 620px;
        margin: 0 auto;
      }

      .newsletter-form input {
        flex: 1;
        border: 0;
        border-bottom: 2px solid #e5e5e5;
        background: #fafafa;
        padding: 20px 24px;
        font: inherit;
        outline: none;
      }

      .newsletter-form input:focus {
        border-color: var(--brand-red);
      }

      .newsletter-form button {
        border: 0;
        background: #000;
        color: #fff;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.3em;
        font-size: 11px;
        padding: 0 28px;
        display: inline-flex;
        align-items: center;
        gap: 12px;
      }

      .footer {
        background: #050505;
        color: #fff;
        padding: 80px 0 24px;
      }

      .footer-top {
        display: grid;
        grid-template-columns: 60% 20% 20%;
        gap: 48px;
        margin-bottom: 72px;
      }

      .footer-brand {
        font-family: var(--font-display);
        text-transform: uppercase;
        letter-spacing: 0.18em;
        font-size: 1.4rem;
        font-weight: 300;
        margin-bottom: 24px;
      }

      .footer-brand span {
        color: var(--brand-red);
        font-weight: 600;
      }

      .footer-copy {
        color: rgba(255, 255, 255, 0.6);
        max-width: 28rem;
        line-height: 1.8;
        font-size: 1.05rem;
        margin-bottom: 24px;
      }

      .socials {
        display: flex;
        gap: 20px;
        color: rgba(255, 255, 255, 0.4);
      }

      .socials svg:hover {
        color: var(--brand-red);
      }

      .footer-label {
        color: var(--brand-red);
        font-size: 10px;
        font-weight: 900;
        letter-spacing: 0.4em;
        text-transform: uppercase;
        margin-bottom: 28px;
      }

      .footer-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 16px;
        color: rgba(255, 255, 255, 0.6);
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-size: 11px;
        font-weight: 700;
      }

      .footer-list a {
        color: inherit;
        text-decoration: none;
      }

      .footer-bottom {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 32px;
        display: flex;
        justify-content: space-between;
        gap: 24px;
        align-items: center;
        color: rgba(255, 255, 255, 0.3);
        text-transform: uppercase;
        letter-spacing: 0.3em;
        font-size: 10px;
        font-weight: 700;
      }

      .footer-bottom-links {
        display: flex;
        gap: 36px;
        flex-wrap: wrap;
      }

      .footer-bottom a {
        color: inherit;
        text-decoration: none;
      }

      .hidden-md {
        display: initial;
      }

      @media (max-width: 900px) {
        .nav-links {
          display: none;
        }

        .mobile-toggle {
          display: inline-flex;
        }

        .mobile-menu.open {
          display: block;
        }

        .hero {
          min-height: 100vh;
          min-height: 100svh;
          padding: 120px 0 72px;
        }

        .hero-text-panel {
          width: 100%;
          padding: 22px 22px 26px;
        }

        .mission-grid,
        .methods-grid,
        .footer-top,
        .section-head,
        .footer-bottom {
          grid-template-columns: 1fr;
          display: grid;
        }

        .field-grid {
          grid-template-columns: 1fr;
        }

        .mission-subgrid {
          grid-template-columns: 1fr;
        }

        .field-card,
        .field-cta {
          padding: 36px;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    `}</style>
  );
}

const useReveal = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);
  return ref;
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Publikime", href: "#" },
    { name: "Misioni", href: "#misioni" },
    { name: "Fushat e Veprimit", href: "#fushat" },
    { name: "Metodat", href: "#metodat" },
    { name: "Kontakti", href: "#" },
  ];

  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <div className="nav-row">
          <div className="brand">
            CITIES<span>+</span>
          </div>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
            <button className="nav-search" aria-label="Search">
              <Search size={18} strokeWidth={2} />
            </button>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <Image
        src={sksqImage}
        alt="Sheshi Skënderbej, Tiranë"
        className="hero-image"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center center",
          transform: `translateY(${offset * 0.4}px) scale(1.1)`,
        }}
      />
      <div className="hero-content">
        <div className="hero-text-panel reveal active">
          <div className="hero-kicker">
            <div className="hero-kicker-line" />
            <span className="hero-kicker-text">Inovacioni Urban</span>
          </div>

          <h1 className="hero-title">
            Më shumë <span className="accent">hapësirë</span>, <br />
            më shumë <span className="accent">jetë</span>.
          </h1>

          <p className="hero-copy">
            Qendra <strong>cities+</strong> promovon zhvillimin urban të qëndrueshëm në
            Tiranë dhe më gjerë, duke integruar teknologjinë në qytetet e së ardhmes.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Eksploro Punën Tonë</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionDetails() {
  const revealRef = useReveal();
  return (
    <section id="misioni" className="mission">
      <div ref={revealRef as any} className="section-shell reveal">
        <div className="section-head">
          <div>
            <h2 className="eyebrow">Qëllimi Ynë</h2>
          </div>
        </div>
        <div className="mission-grid">
          <div className="sticky">
            <p className="mission-title">
              Ndërtimi i qyteteve më të <span className="accent">drejta</span> dhe të
              qëndrueshme.
            </p>
          </div>
          <div>
            <p className="mission-copy">
              Qendra është një organizatë e pavarur që synon përmirësimin e cilësisë së
              jetës në qytete përmes planifikimit të përgjegjshëm hapësinor, integrimit
              të teknologjisë dhe inovacionit.
            </p>
            <div className="mission-subgrid">
              <div>
                <h4 className="mini-label">Pjesëmarrja</h4>
                <p className="mini-copy">
                  Fuqizojmë të rinjtë dhe komunitetet për të marrë pjesë aktive në
                  proceset vendimmarrëse urbane.
                </p>
              </div>
              <div>
                <h4 className="mini-label">Klima</h4>
                <p className="mini-copy">
                  Adresojmë sistematikisht krizën klimatike përmes tranzicionit të
                  gjelbër dhe arkitekturës pasive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionFields() {
  const revealRef = useReveal();
  const fields = [
    {
      title: "Planifikim & Teknollogji",
      desc: "Integrimi i teknologjive smart, digjitalizimi i shërbimeve dhe adaptimi ndaj krizës klimatike.",
      icon: <Cpu size={32} strokeWidth={1.5} />,
    },
    {
      title: "Tregu i Ndërtimit",
      desc: "Analiza e pasurive të paluajtshme duke promovuar transparencë dhe standarde të qëndrueshme.",
      icon: <Building2 size={32} strokeWidth={1.5} />,
    },
    {
      title: "Strehim i Përballueshëm",
      desc: "Hulumtimi i modeleve inovative të pronësisë dhe mekanizmave mbështetës për të rinjtë.",
      icon: <Home size={32} strokeWidth={1.5} />,
    },
    {
      title: "Arkitekturë & Dizajn",
      desc: "Krijimi i hapësirave publike të gjelbra, mobiliteti i qëndrueshëm dhe efikasiteti i energjisë.",
      icon: <Leaf size={32} strokeWidth={1.5} />,
    },
    {
      title: "Fuqizimi i të Rinjve",
      desc: "Trajnime, laboratorë inovativë dhe laboratorë komunitare për promovimin e qytetarisë aktive.",
      icon: <Users size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="fushat" className="fields">
      <div ref={revealRef as any} className="section-shell reveal">
        <div className="section-head">
          <div>
            <h2 className="eyebrow">Fushat e Veprimit</h2>
            <h3 className="field-title">Sferat tona të ndikimit.</h3>
          </div>
          <button className="methods-title-link">Shiko të gjitha projektet</button>
        </div>

        <div className="field-grid">
          {fields.map((field, idx) => (
            <div key={idx} className="field-card">
              <div className="field-card-icon">{field.icon}</div>
              <h4>{field.title}</h4>
              <p>{field.desc}</p>
            </div>
          ))}

          <div className="field-cta">
            <div>
              <h4>Bashkëpuno me Cities+</h4>
              <p>Sill projektin tënd në jetë</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Methods() {
  const revealRef = useReveal();
  const methods = [
    "Aktivitete kërkimore dhe studimore strategjike.",
    "Seminare dhe forumeve ndërkombëtare.",
    "Aktivitete edukative dhe trajnuese për të rinjtë.",
    "Fushata sensibilizuese dhe advokim për reforma.",
    "Bashkëpunimi me institucione dhe universitetet.",
    "Inkurajimi i zhvillimit përmes granteve.",
  ];

  return (
    <section id="metodat" className="methods">
      <div ref={revealRef as any} className="section-shell reveal">
        <div className="section-head">
          <div>
            <h2 className="eyebrow">Mënyrat e Veprimit</h2>
          </div>
        </div>
        <div className="methods-grid">
          <div>
            <div className="methods-list">
              {methods.map((method, idx) => (
                <div className="method-item" key={idx}>
                  <span>0{idx + 1}</span>
                  <p>{method}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="methods-image-wrap">
            <div className="methods-image-overlay" />
            <img
              className="methods-image"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
              alt="Metodat e Punës"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              CITIES<span>+</span>
            </div>
            <p className="footer-copy">
              Një organizatë e pavarur e dedikuar inovacionit urban dhe përmirësimit të
              jetës në qytete.
            </p>
            <div className="socials" aria-label="Social links">
              <Twitter size={20} strokeWidth={2} />
              <Linkedin size={20} strokeWidth={2} />
              <Instagram size={20} strokeWidth={2} />
              <Facebook size={20} strokeWidth={2} />
            </div>
          </div>

          <div>
            <h5 className="footer-label">Menu</h5>
            <ul className="footer-list">
              <li>
                <a href="#">Publikime</a>
              </li>
              <li>
                <a href="#misioni">Misioni</a>
              </li>
              <li>
                <a href="#fushat">Fushat e Veprimit</a>
              </li>
              <li>
                <a href="#metodat">Metodat</a>
              </li>
              <li>
                <a href="#">Kontakti</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="footer-label">Kontakti</h5>
            <p className="footer-copy" style={{ fontSize: "1rem", marginBottom: 8 }}>
              Tiranë, Shqipëri
            </p>
            <p style={{ margin: 0, fontWeight: 700 }}>info@cities-plus.org</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <span>© 2026 CITIES+</span>
          </div>
          <div className="footer-bottom-links">
            <a href="#">POLITIKA E PRIVATËSISË</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const newsRef = useReveal();

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <MissionDetails />
      <ActionFields />
      <Methods />

      <section className="newsletter">
        <div ref={newsRef as any} className="newsletter-shell reveal">
          <h2 className="newsletter-title">Regjistrohu per te rejat e fundit</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Adresa juaj email" />
            <button type="submit">
              Dërgo <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
