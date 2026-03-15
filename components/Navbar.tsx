"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
const [open, setOpen] = useState(false);
const pathname = usePathname();

// Only be transparent on the home page
const isHome = pathname === "/";

useEffect(() => {
  const fn = () => setScrolled(window.scrollY > 60);
  window.addEventListener("scroll", fn);
  // Set initial state correctly on mount
  fn();
  return () => window.removeEventListener("scroll", fn);
}, []);

  const links = [
    ["Home", "/"],
    ["Products", "/products"],
    ["About", "/about"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

 // Transparent only on home page AND not yet scrolled
   const isDark = isHome && !scrolled;

  const navBg = scrolled ? "rgba(253,250,243,0.97)" : "transparent";
  const navBorder = scrolled ? "1px solid rgba(201,168,76,0.2)" : "none";
  const navShadow = scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "none";
  const linkColor = isDark ? "rgba(255,255,255,0.92)" : "#3E2723";
  const logoFilter = isDark
    ? "drop-shadow(0 2px 8px rgba(0,0,0,0.5)) brightness(1.08)"
    : "drop-shadow(0 1px 4px rgba(0,0,0,0.12))";

  return (
    <>
      {/* Inline responsive styles — no Tailwind dependency */}
      <style>{`
        .nav-inner {
          max-width: 1140px; margin: 0 auto;
          padding: 0 20px; height: 80px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-links-desktop {
          display: none;
          align-items: center;
          gap: 28px;
        }
        .nav-burger {
          display: flex;
          background: none; border: none; cursor: pointer;
          font-size: 26px; padding: 4px; line-height: 1;
        }
        @media (min-width: 900px) {
          .nav-links-desktop { display: flex !important; }
          .nav-burger { display: none !important; }
          .nav-inner { padding: 0 32px; }
        }
        .nav-mobile-menu {
          padding: 8px 20px 24px;
          border-top: 1px solid rgba(201,168,76,0.2);
        }
        .nav-mobile-link {
          display: block; padding: 14px 0;
          font-family: "DM Sans", sans-serif; font-size: 18px;
          color: #3E2723; text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          font-weight: 400;
        }
        .nav-mobile-link:last-child { border-bottom: none; }
        .nav-cta-btn {
          background: linear-gradient(135deg, #C9A84C, #A8843A);
          color: white; padding: 10px 20px; border-radius: 6px;
          font-family: "DM Sans", sans-serif; font-weight: 600;
          font-size: 15px; text-decoration: none; white-space: nowrap;
          box-shadow: 0 2px 10px rgba(201,168,76,0.35);
        }
        .nav-link-item {
          font-family: "DM Sans", sans-serif; font-size: 16px;
          font-weight: 600; text-decoration: none;
          letter-spacing: 0.03em; transition: opacity 0.15s;
        }
        .nav-link-item:hover { opacity: 0.75; }

        /* Animated border around logo */
        @keyframes borderSpin {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .logo-border-wrap {
          padding: 3px;
          border-radius: 12px;
          background: linear-gradient(270deg, #C9A84C, #7AB648, #C9A84C, #A8843A);
          background-size: 300% 300%;
          animation: borderSpin 3s ease infinite;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(201,168,76,0.25);
        }
        .logo-border-inner {
          background: transparent;
          border-radius: 10px;
          padding: 4px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        transition: "background 0.35s, box-shadow 0.35s",
        background: navBg,
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: navShadow,
        borderBottom: navBorder,
      }}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
            <div className="logo-border-wrap">
              <div className="logo-border-inner">
                <Image
                  src="/logo1.png"
                  alt="Indi Ayurveda"
                  width={200}
                  height={80}
                  priority
                  style={{
                    height: "clamp(48px, 7vw, 68px)",
                    width: "auto",
                    objectFit: "contain",
                    filter: logoFilter,
                    transition: "filter 0.35s",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-links-desktop">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="nav-link-item" style={{ color: linkColor }}>
                {label}
              </Link>
            ))}
            <Link href="/consultation" className="nav-cta-btn">
              Book Consultation
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="nav-burger"
            onClick={() => setOpen(!open)}
            style={{ color: isDark ? "white" : "#3E2723" }}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="nav-mobile-menu" style={{ background: "rgba(253,250,243,0.98)" }}>
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="nav-mobile-link" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link
              href="/consultation"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                marginTop: "16px",
                background: "linear-gradient(135deg, #C9A84C, #A8843A)",
                color: "white",
                padding: "14px",
                borderRadius: "8px",
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Book Consultation
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
