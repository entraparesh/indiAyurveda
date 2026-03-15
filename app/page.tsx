import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import Image from "next/image";

const WA_NUMBER = "919XXXXXXXXX"; // ← Replace with Dr. Harshali's number e.g. "919876543210"

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const testimonials = [
  { name: "Sneha Kulkarni", location: "Pune", text: "My 2-year-old's immunity improved visibly after Suvarnaprashan. Dr. Harshali is incredibly knowledgeable.", product: "Suvarnaprashan", initial: "S" },
  { name: "Rahul Desai", location: "Mumbai", text: "Chyavanprash has become part of our morning routine. Energy levels and focus are noticeably better.", product: "Chyavanprash", initial: "R" },
  { name: "Anjali More", location: "Pimpri", text: "The online consultation was thorough and personal. Dr. Harshali really listens and explains everything.", product: "Consultation", initial: "A" },
];

const blogPosts = [
  { tag: "Parenting", title: "Suvarnaprashan: A Complete Guide for New Parents", excerpt: "Everything you need to know about gold-enriched immunity drops.", time: "5 min read", emoji: "👶" },
  { tag: "Seasonal", title: "Ayurvedic Wellness Rituals for Monsoon Season", excerpt: "How to protect your family using ancient seasonal wisdom.", time: "6 min read", emoji: "🌿" },
  { tag: "मराठी", title: "चव्हाणप्राश: हिवाळ्यातील आरोग्याचे रहस्य", excerpt: "थंडीत चव्हाणप्राश का खावे याबद्दल संपूर्ण माहिती.", time: "4 min read", emoji: "🌸" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─────────────────────────────────────────
          RESPONSIVE STYLES for this page
      ───────────────────────────────────────── */}
      <style>{`
        /* Hero */
        .hero-wrap {
          position: relative;
          padding: 110px 16px 48px;
          min-height: 100svh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; overflow: hidden;
        }
        @media (min-width: 640px) {
          .hero-wrap {
            padding: 80px 24px 0;
            height: 70vh;
            min-height: 520px;
            max-height: 660px;
          }
        }

        /* Logo card in hero */
        .logo-card {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 12px 32px 10px;
          margin-bottom: 14px;
          border: 1px solid rgba(255,255,255,0.28);
          display: inline-block;
        }

        /* Hero heading */
        .hero-heading {
          font-family: "Playfair Display", serif;
          font-size: clamp(26px, 5vw, 52px);
          font-weight: 700;
          color: #F5EDD8;
          line-height: 1.15;
          margin-bottom: 12px;
        }
        .hero-sub {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(13px, 2vw, 16px);
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        /* Pillar cards */
        .pillar-card {
          padding: 24px 18px;
          text-align: center;
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(201,168,76,0.18);
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .pillar-icon { font-size: 30px; margin-bottom: 10px; }
        .pillar-title {
          font-family: "Playfair Display", serif;
          font-size: 16px; font-weight: 600; color: #3E2723; margin-bottom: 6px;
        }
        .pillar-desc {
          font-family: "DM Sans", sans-serif;
          font-size: 13px; color: #8A8A8A; line-height: 1.65;
        }

        /* Testimonial card */
        .testi-card {
          background: white; border-radius: 12px;
          padding: 24px 22px; border-top: 3px solid #C9A84C;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }

        /* Blog card */
        .blog-thumb {
          height: 110px;
          background: linear-gradient(135deg, #E8F5E9, #FBF5E0);
          display: flex; align-items: center; justify-content: center;
        }

        /* Doctor section */
        .doctor-quote {
          font-family: "Playfair Display", serif;
          font-size: clamp(16px, 2.4vw, 22px);
          font-style: italic;
          color: rgba(255,255,255,0.92);
          line-height: 1.85;
          margin-bottom: 32px;
        }

        /* Section headings centered on mobile */
        .section-header { text-align: center; margin-bottom: 36px; }

        /* Blog header row stacks on mobile */
        .blog-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 36px;
          flex-wrap: wrap;
          gap: 12px;
        }
      `}</style>

      {/* ══════════════════
          HERO
      ══════════════════ */}
      <section className="hero-wrap">
        {/* BG image */}
        <Image
          src="/Hero5.png"
          alt="Fresh green nature"
          fill priority quality={90}
          style={{ objectFit: "cover", objectPosition: "center 55%", zIndex: 0 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0.38) 0%,rgba(0,0,0,0.22) 50%,rgba(0,0,0,0.54) 100%)", zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 50% at 50% 100%, rgba(46,125,50,0.2) 0%, transparent 60%)", zIndex: 2 }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "800px" }}>

          {/* Logo */}
          <div className="logo-card">
            <Image
              src="/logo1.png"
              alt="Indi Ayurveda"
              width={380}
              height={152}
              priority
              style={{ height: "clamp(120px, 17vw, 200px)", width: "auto", objectFit: "contain", display: "block" }}
            />
          </div>

          <p className="hero-sub">Ancient Wisdom · Modern Wellness</p>

          {/* CTA row */}
          <div className="cta-row" style={{ marginBottom: "20px" }}>
            <Link href="/products" className="btn-gold-solid">Explore Products</Link>
            <Link href="/consultation" className="btn-outline-light">Book Consultation</Link>
          </div>

          {/* Stats */}
          <div className="stats-pill">
            {[["500+","Families"],["10+","Years"],["100%","Natural"]].map(([num,lbl],i) => (
              <div key={lbl} className="stat-item" style={i===2?{borderRight:"none"}:{}}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 11 }}>
          <svg viewBox="0 0 1440 36" fill="none" style={{ display: "block" }}>
            <path d="M0 36 L0 18 Q360 0 720 18 Q1080 36 1440 14 L1440 36 Z" fill="#FDFAF3" />
          </svg>
        </div>
      </section>

      {/* ══════════════════
          OUR PROMISE
      ══════════════════ */}
      <section style={{ background: "#FDFAF3", padding: "48px 0 56px" }}>
        <div className="container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-eyebrow">Our Promise</span>
            <h2 className="heading-lg" style={{ marginBottom: "14px" }}>Rooted in Tradition</h2>
            <div className="gold-line" />
            <p style={{ fontFamily: "DM Sans", fontSize: "23px", color: "#4A4A4A", maxWidth: "880px", margin: "16px auto 0", lineHeight: 1.8 }}>
              Pure ingredients, classical recipes, modern guidance — by Dr. Harshali, BAMS.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════
          PRODUCTS
      ══════════════════ */}
      <section style={{ background: "white", padding: "26px 0 34px" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Formulations</span>
            <h2 className="heading-lg" style={{ marginBottom: "12px" }}>Products for Every Stage of Life</h2>
            <div className="gold-line" />
          </div>
          <div className="grid-2">

            {/* Suvarnaprashan */}
            <div className="product-card" style={{ background: "#FBF5E0", border: "1px solid #C9A84C30" }}>
              <div className="product-img-wrap">
                <Image src="/suvarnaprashan.jpg" alt="Suvarnaprashan" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", top: "12px", left: "12px", background: "linear-gradient(135deg,#C9A84C,#A8843A)", color: "white", fontFamily: "DM Sans", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase" }}>For Children</div>
              </div>
              <div style={{ padding: "22px 22px 24px" }}>
                <div style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "5px" }}>Ages 0–16</div>
                <h3 style={{ fontFamily: "Playfair Display,serif", fontSize: "clamp(20px,3vw,24px)", fontWeight: 700, color: "#3E2723", marginBottom: "8px" }}>Suvarnaprashan</h3>
                <p style={{ fontFamily: "DM Sans", fontSize: "14px", color: "#4A4A4A", lineHeight: 1.65, marginBottom: "16px" }}>Gold-enriched Ayurvedic drops that boost immunity, enhance memory, and support holistic development in children.</p>
                <ul style={{ listStyle: "none", marginBottom: "20px" }}>
                  {["Boosts immunity naturally","Enhances memory & focus","Supports development","100% classical formula"].map(b => (
                    <li key={b} style={{ fontFamily: "DM Sans", fontSize: "13px", color: "#4A4A4A", marginBottom: "7px", display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/919766768090?text=Hello%20Dr.%20Harshali!%20I%20am%20interested%20in%20Suvarnaprashan%20for%20my%20child.%20Please%20guide%20me%20on%20how%20to%20consult%20and%20order.`} target="_blank" rel="noopener noreferrer" className="wa-btn">
                  {WA_ICON} Consult &amp; Order on WhatsApp
                </a>
              </div>
            </div>

            {/* Chyavanprash */}
            <div className="product-card" style={{ background: "#E8F5E9", border: "1px solid #2E7D3230" }}>
              <div className="product-img-wrap">
                <Image src="/chyawanprash.webp" alt="Chyavanprash" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", top: "12px", left: "12px", background: "linear-gradient(135deg,#2E7D32,#1B5E20)", color: "white", fontFamily: "DM Sans", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase" }}>For Adults</div>
              </div>
              <div style={{ padding: "22px 22px 24px" }}>
                <div style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2E7D32", marginBottom: "5px" }}>Ages 14+</div>
                <h3 style={{ fontFamily: "Playfair Display,serif", fontSize: "clamp(20px,3vw,24px)", fontWeight: 700, color: "#3E2723", marginBottom: "8px" }}>Chyavanprash</h3>
                <p style={{ fontFamily: "DM Sans", fontSize: "14px", color: "#4A4A4A", lineHeight: 1.65, marginBottom: "16px" }}>Classical herbal jam with Amalaki — a daily rasayana for energy, immunity, and respiratory wellness.</p>
                <ul style={{ listStyle: "none", marginBottom: "20px" }}>
                  {["Sustained energy & stamina","Respiratory health support","Daily immunity booster","Rich in Amalaki & herbs"].map(b => (
                    <li key={b} style={{ fontFamily: "DM Sans", fontSize: "13px", color: "#4A4A4A", marginBottom: "7px", display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ color: "#2E7D32", fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/919766768090?text=Hello%20Dr.%20Harshali!%20I%20am%20interested%20in%20Chyavanprash.%20Please%20guide%20me%20on%20how%20to%20consult%20and%20order.`} target="_blank" rel="noopener noreferrer" className="wa-btn">
                  {WA_ICON} Consult &amp; Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════
          DOCTOR'S NOTE
      ══════════════════ */}
      <section style={{ position: "relative", padding: "80px 0", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80" alt="Forest" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,32,10,0.75)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E8C97A", marginBottom: "20px", display: "block" }}>✦ A Note from the Doctor ✦</span>
            <blockquote className="doctor-quote">
              "Ayurveda is not just medicine — it is a way of living in harmony with nature. My mission is to bring these ancient practices to modern families in a form that is safe, effective, and deeply rooted in tradition."
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(201,168,76,0.22)", border: "2px solid #E8C97A", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Playfair Display,serif", fontWeight: 700, color: "#E8C97A", fontSize: "20px", flexShrink: 0 }}>H</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "Playfair Display,serif", fontSize: "17px", fontWeight: 600, color: "white" }}>Dr. Harshali</div>
                <div style={{ fontFamily: "DM Sans", fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>BAMS · Ayurvedic Physician · Kharadi, Pune</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════
          TESTIMONIALS
      ══════════════════ */}
      <section style={{ background: "#F5EDD8", padding: "56px 0 64px" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Testimonials</span>
            <h2 className="heading-lg" style={{ marginBottom: "12px" }}>What Families Say</h2>
            <div className="gold-line" />
          </div>
          <div className="grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="testi-card">
                <div style={{ color: "#C9A84C", fontSize: "13px", marginBottom: "12px", letterSpacing: "3px" }}>★★★★★</div>
                <p style={{ fontFamily: "Playfair Display,serif", fontSize: "14px", color: "#1C1C1C", lineHeight: 1.75, marginBottom: "18px", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#E8F5E9", border: "2px solid #4CAF50", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Playfair Display,serif", fontWeight: 700, color: "#2E7D32", fontSize: "14px", flexShrink: 0 }}>{t.initial}</div>
                  <div>
                    <div style={{ fontFamily: "DM Sans", fontSize: "13px", fontWeight: 600, color: "#1C1C1C" }}>{t.name}</div>
                    <div style={{ fontFamily: "DM Sans", fontSize: "11px", color: "#8A8A8A" }}>{t.location} · {t.product}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════
          BLOG
      ══════════════════ */}
      <section style={{ background: "white", padding: "56px 0 64px" }}>
        <div className="container">
          <div className="blog-header-row">
            <div>
              <span className="section-eyebrow">Knowledge Hub</span>
              <h2 className="heading-lg">Learn from Dr. Harshali</h2>
            </div>
            <Link href="/blog" style={{ fontFamily: "DM Sans", fontSize: "14px", color: "#2E7D32", textDecoration: "none", fontWeight: 600, borderBottom: "2px solid #2E7D32", paddingBottom: "2px", whiteSpace: "nowrap" }}>All Articles →</Link>
          </div>
          <div className="grid-3">
            {blogPosts.map((b) => (
              <div key={b.title} className="card">
                <div className="blog-thumb">
                  <span style={{ fontSize: "38px" }}>{b.emoji}</span>
                </div>
                <div style={{ padding: "18px 18px 20px" }}>
                  <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, color: "#2E7D32", background: "#E8F5E9", padding: "3px 10px", borderRadius: "20px" }}>{b.tag}</span>
                  <div style={{ fontFamily: "Playfair Display,serif", fontSize: "15px", fontWeight: 600, color: "#3E2723", margin: "10px 0 6px", lineHeight: 1.4 }}>{b.title}</div>
                  <div style={{ fontFamily: "DM Sans", fontSize: "13px", color: "#8A8A8A", lineHeight: 1.6, marginBottom: "8px" }}>{b.excerpt}</div>
                  <div style={{ fontFamily: "DM Sans", fontSize: "11px", color: "#8A8A8A" }}>{b.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════
          CTA STRIP
      ══════════════════ */}
      <section style={{ position: "relative", padding: "72px 0", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&q=80" alt="Ayurvedic herbs" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,25,8,0.78)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E8C97A", marginBottom: "14px", display: "block" }}>✦ Take the Next Step ✦</span>
          <h2 style={{ fontFamily: "Playfair Display,serif", fontSize: "clamp(22px,4vw,38px)", fontWeight: 700, color: "white", marginBottom: "12px", lineHeight: 1.2 }}>Ready to Begin Your<br />Wellness Journey?</h2>
          <p style={{ fontFamily: "DM Sans", fontSize: "15px", color: "rgba(255,255,255,0.7)", maxWidth: "380px", margin: "0 auto 32px", lineHeight: 1.8 }}>Book a personalized consultation with Dr. Harshali.</p>
          <div className="cta-row">
            <a href={`https://wa.me/919766768090?text=Hello%20Dr.%20Harshali!%20I%20would%20like%20to%20book%20a%20consultation.`} target="_blank" rel="noopener noreferrer" className="wa-btn" style={{ maxWidth: "280px" }}>
              {WA_ICON} WhatsApp Consultation
            </a>
            <Link href="/products" className="btn-outline-light">View Products</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
