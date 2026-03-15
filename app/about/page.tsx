import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "#FDFAF3", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg,#0B1A0D 0%,#1B5E20 100%)", padding: "72px 0 64px", textAlign: "center" }}>
          <div className="container">
            <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E8C97A", display: "block", marginBottom: "14px" }}>
              Our Story
            </span>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>
              Meet Dr. Harshali
            </h1>
            <p style={{ fontFamily: "DM Sans", fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              A dedicated Ayurvedic physician bringing ancient healing wisdom to modern families across Pune.
            </p>
          </div>
        </section>

        {/* Doctor profile */}
        <section style={{ padding: "72px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "48px", alignItems: "start" }}>
              <div>
                <div style={{ width: "100%", aspectRatio: "1", background: "linear-gradient(135deg,#E8F5E9,#FBF5E0)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "80px", marginBottom: "24px" }}>
                  👩‍⚕️
                </div>
                <div style={{ background: "white", borderRadius: "12px", padding: "24px", border: "1px solid rgba(201,168,76,0.18)" }}>
                  <div style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2E7D32", marginBottom: "8px" }}>Qualifications</div>
                  {["BAMS — Ayurvedic Medical Degree", "10+ Years Clinical Practice", "Specialisation in Pediatric Ayurveda", "Expert in Classical Formulations"].map(q => (
                    <div key={q} style={{ fontFamily: "DM Sans", fontSize: "14px", color: "#4A4A4A", padding: "8px 0", borderBottom: "1px solid rgba(0,0,0,0.05)", display: "flex", gap: "10px" }}>
                      <span style={{ color: "#C9A84C" }}>✓</span>{q}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2E7D32", display: "block", marginBottom: "12px" }}>About</span>
                <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: "#3E2723", marginBottom: "20px", lineHeight: 1.2 }}>
                  Healing Through Ancient Wisdom
                </h2>
                <div style={{ width: "44px", height: "3px", background: "linear-gradient(90deg,#C9A84C,#E8D5A3)", borderRadius: "2px", marginBottom: "24px" }} />
                <p style={{ fontFamily: "DM Sans", fontSize: "15px", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "16px" }}>
                  Dr. Harshali is a passionate Ayurvedic physician based in Kharadi, Pune, with over a decade of experience in classical Ayurvedic practice. Her journey began with a deep respect for India's ancient healing traditions and a vision to make authentic Ayurveda accessible to every family.
                </p>
                <p style={{ fontFamily: "DM Sans", fontSize: "15px", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "16px" }}>
                  Specialising in pediatric Ayurveda and classical formulations, Dr. Harshali personally oversees every product under the Indi Ayurveda brand — ensuring purity, authenticity, and efficacy in every batch.
                </p>
                <p style={{ fontFamily: "DM Sans", fontSize: "15px", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "32px" }}>
                  Her flagship product, Suvarnaprashan, has benefited hundreds of children across Pune, while her Chyavanprash formulation continues to support adult wellness in the classical Shastriya tradition.
                </p>
                <a href="https://wa.me/919XXXXXXXXX?text=Hello%20Dr.%20Harshali!%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "#25D366", color: "white", padding: "13px 28px", borderRadius: "8px", fontFamily: "DM Sans", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ background: "white", padding: "72px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2E7D32", display: "block", marginBottom: "12px" }}>Journey</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: "#3E2723", marginBottom: "14px" }}>Ayurveda Journey</h2>
              <div style={{ width: "44px", height: "3px", background: "linear-gradient(90deg,#C9A84C,#E8D5A3)", borderRadius: "2px", margin: "0 auto" }} />
            </div>
            <div style={{ maxWidth: "640px", margin: "0 auto" }}>
              {[
                ["2010", "BAMS Graduation", "Completed Ayurvedic Medical degree with distinction."],
                ["2013", "Clinical Practice Begins", "Started treating patients with classical Ayurvedic protocols in Pune."],
                ["2016", "Indi Ayurveda Founded", "Established Indi Ayurveda clinic in Kharadi, Pune"],
                ["2018", "Suvarnaprashan Launch", "Introduced authentic Suvarnaprashan drops for children."],
                ["2021", "Chyavanprash Range", "Launched classical Chyavanprash formulation for adults."],
                ["2024", "Digital Expansion", "Brought consultations and products online to serve families everywhere."],
              ].map(([year, title, desc], i) => (
                <div key={year} style={{ display: "flex", gap: "24px", marginBottom: "36px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: i % 2 === 0 ? "#FBF5E0" : "#E8F5E9", border: `2px solid ${i % 2 === 0 ? "#C9A84C" : "#2E7D32"}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans", fontSize: "11px", fontWeight: 700, color: i % 2 === 0 ? "#C9A84C" : "#2E7D32" }}>{year}</div>
                    {i < 5 && <div style={{ width: "2px", flex: 1, background: "rgba(201,168,76,0.2)", marginTop: "8px" }} />}
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <div style={{ fontFamily: "Playfair Display, serif", fontSize: "17px", fontWeight: 600, color: "#3E2723", marginBottom: "6px" }}>{title}</div>
                    <div style={{ fontFamily: "DM Sans", fontSize: "14px", color: "#8A8A8A", lineHeight: 1.7 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
