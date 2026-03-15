import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const posts = [
  { tag: "Parenting", title: "Suvarnaprashan: A Complete Guide for New Parents", excerpt: "Everything you need to know about gold-enriched immunity drops for your child — what it is, how it works, and when to give it.", time: "5 min read", emoji: "👶", color: "#C9A84C", bg: "#FBF5E0" },
  { tag: "Seasonal", title: "Ayurvedic Wellness Rituals for Monsoon Season", excerpt: "How to protect your family's health using ancient seasonal wisdom. Foods, herbs, and routines for Varsha Ritu.", time: "6 min read", emoji: "🌧️", color: "#2E7D32", bg: "#E8F5E9" },
  { tag: "मराठी", title: "चव्हाणप्राश: हिवाळ्यातील आरोग्याचे रहस्य", excerpt: "थंडीत चव्हाणप्राश का खावे आणि कसे घ्यावे याबद्दल संपूर्ण माहिती. डॉ. हर्षाली यांचे मार्गदर्शन.", time: "4 min read", emoji: "🌸", color: "#C9A84C", bg: "#FBF5E0" },
  { tag: "Immunity", title: "Top 5 Ayurvedic Herbs for Children's Immunity", excerpt: "Ashwagandha, Tulsi, Shatavari and more — discover which herbs are safe and effective for your little ones.", time: "7 min read", emoji: "🌿", color: "#2E7D32", bg: "#E8F5E9" },
  { tag: "Wellness", title: "What is Rasayana? The Ayurvedic Secret to Longevity", excerpt: "Rasayana therapy is Ayurveda's ultimate rejuvenation science. Learn how Chyavanprash is the most celebrated Rasayana.", time: "6 min read", emoji: "🏺", color: "#C9A84C", bg: "#FBF5E0" },
  { tag: "Parenting", title: "Pushya Nakshatra and Suvarnaprashan — Why Timing Matters", excerpt: "Ancient Ayurvedic texts describe Pushya Nakshatra as the most auspicious time for Suvarnaprashan administration.", time: "4 min read", emoji: "⭐", color: "#2E7D32", bg: "#E8F5E9" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "#FDFAF3", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg,#0B1A0D 0%,#1B5E20 100%)", padding: "72px 0 64px", textAlign: "center" }}>
          <div className="container">
            <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E8C97A", display: "block", marginBottom: "14px" }}>Knowledge Hub</span>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>
              Learn from Dr. Harshali
            </h1>
            <p style={{ fontFamily: "DM Sans", fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
              Educational articles on Ayurveda, parenting, and seasonal wellness — in English and Marathi.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section style={{ padding: "72px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "28px" }}>
              {posts.map((p) => (
                <div key={p.title} style={{ background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", transition: "transform 0.2s, box-shadow 0.2s" }}>
                  <div style={{ height: "140px", background: p.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "48px" }}>{p.emoji}</span>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, color: p.color, background: p.bg, padding: "4px 12px", borderRadius: "20px" }}>{p.tag}</span>
                    <div style={{ fontFamily: "Playfair Display, serif", fontSize: "17px", fontWeight: 600, color: "#3E2723", margin: "12px 0 8px", lineHeight: 1.4 }}>{p.title}</div>
                    <div style={{ fontFamily: "DM Sans", fontSize: "13px", color: "#8A8A8A", lineHeight: 1.7, marginBottom: "16px" }}>{p.excerpt}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "DM Sans", fontSize: "12px", color: "#8A8A8A" }}>{p.time}</span>
                      <span style={{ fontFamily: "DM Sans", fontSize: "13px", fontWeight: 600, color: p.color, cursor: "pointer" }}>Read more →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section style={{ background: "#F5EDD8", padding: "64px 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(22px,3vw,32px)", fontWeight: 700, color: "#3E2723", marginBottom: "12px" }}>Stay Updated</h2>
            <p style={{ fontFamily: "DM Sans", fontSize: "15px", color: "#4A4A4A", marginBottom: "28px" }}>Get Ayurvedic tips, seasonal guides and product updates in your inbox.</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", maxWidth: "460px", margin: "0 auto" }}>
              <input type="email" placeholder="your@email.com" style={{ flex: 1, minWidth: "200px", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "6px", padding: "12px 16px", fontFamily: "DM Sans", fontSize: "14px", outline: "none", background: "white" }} />
              <button style={{ background: "linear-gradient(135deg,#C9A84C,#A8843A)", color: "white", padding: "12px 24px", borderRadius: "6px", fontFamily: "DM Sans", fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe</button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
