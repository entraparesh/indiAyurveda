import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(160deg,#0B1F0B 0%,#1B5E20 100%)", color: "rgba(255,255,255,0.82)", paddingTop: "56px", paddingBottom: "32px" }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          margin-bottom: 48px;
        }
        @media (min-width: 480px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (min-width: 900px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
        }
        .footer-col-title {
          font-family: "DM Sans", sans-serif;
          font-size: 11px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: #E8C97A; margin-bottom: 16px;
        }
        .footer-link {
          display: block; margin-bottom: 10px;
          font-family: "DM Sans", sans-serif; font-size: 14px;
          color: rgba(255,255,255,0.65); text-decoration: none;
        }
        .social-row {
          display: flex; gap: 8px; flex-wrap: wrap; margin-top: 18px;
        }
        .social-btn {
          font-size: 12px; font-family: "DM Sans", sans-serif;
          color: rgba(255,255,255,0.7); text-decoration: none;
          border: 1px solid rgba(201,168,76,0.35);
          padding: 5px 12px; border-radius: 20px;
        }
        .footer-disclaimer {
          font-family: "DM Sans", sans-serif; font-size: 11px;
          color: rgba(255,255,255,0.38); line-height: 1.8;
          text-align: center; max-width: 600px; margin: 0 auto 10px;
          padding: 0 16px;
        }
        .footer-copy {
          font-family: "DM Sans", sans-serif; font-size: 11px;
          color: rgba(255,255,255,0.3); text-align: center;
        }
      `}</style>

      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <Image src="/logo1.png" alt="Indi Ayurveda" width={160} height={64}
              style={{ height: "50px", width: "auto", objectFit: "contain", marginBottom: "14px", filter: "brightness(1.1) drop-shadow(0 1px 4px rgba(0,0,0,0.3))" }} />
            <p style={{ fontFamily: "DM Sans", fontSize: "13px", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: "240px" }}>
              Ancient wisdom. Modern wellness.<br />
              Kharadi, Pune.
            </p>
            <div className="social-row">
              {[["📷 Instagram","#"],["📘 Facebook","#"],["▶ YouTube","#"]].map(([l,h]) => (
                <a key={l} href={h} className="social-btn">{l}</a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="footer-col-title">Products</div>
            <Link href="/products" className="footer-link">Suvarnaprashan</Link>
            <Link href="/products" className="footer-link">Chyavanprash</Link>
          </div>

          {/* Explore */}
          <div>
            <div className="footer-col-title">Explore</div>
            <Link href="/about" className="footer-link">About Dr. Harshali</Link>
            <Link href="/blog" className="footer-link">Blog</Link>
            <Link href="/consultation" className="footer-link">Consultation</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </div>

          {/* Legal */}
          <div>
            <div className="footer-col-title">Legal</div>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Use</Link>
            <Link href="/contact#faq" className="footer-link">FAQ</Link>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px" }}>
          <p className="footer-disclaimer">
            ⚕ Indi Ayurveda products are Ayurvedic supplements and are not substitutes for medical advice. Please consult a qualified physician for any health concerns.
          </p>
          <p className="footer-copy">© {new Date().getFullYear()} Indi Ayurveda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
