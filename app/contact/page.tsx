"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const WA_NUMBER = "919XXXXXXXXX";

const faqs = [
  { q: "What age is Suvarnaprashan suitable for?", a: "Suvarnaprashan is suitable for children from 0 to 16 years of age. It is most effective when started early and given consistently." },
  { q: "How often should Suvarnaprashan be given?", a: "Ideally on every Pushya Nakshatra day (once a month) for best results. It can also be given daily as prescribed by Dr. Harshali during consultation." },
  { q: "Can adults take Chyavanprash daily?", a: "Yes, Chyavanprash is ideal for daily use by adults aged 14 and above. One teaspoon in the morning with warm milk is the classical recommendation." },
  { q: "How do I book an online consultation?", a: "You can book a consultation via WhatsApp by clicking the 'Book Consultation' button, or fill in the form on our Consultation page. We confirm within 24 hours." },
  { q: "Are your products certified?", a: "Yes, all Indi Ayurveda products are prepared following classical Shastriya formulas under the supervision of Dr. Harshali, BAMS, and comply with Ayurvedic standards." },
  { q: "Do you ship outside Pune?", a: "Yes, we currently ship across Maharashtra. For other states, please contact us on WhatsApp to check availability." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "#FDFAF3", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg,#0B1A0D 0%,#1B5E20 100%)", padding: "72px 0 64px", textAlign: "center" }}>
          <div className="container">
            <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E8C97A", display: "block", marginBottom: "14px" }}>Get in Touch</span>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>
              We'd Love to Hear from You
            </h1>
            <p style={{ fontFamily: "DM Sans", fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
              Reach out via WhatsApp, email, or fill in the form below.
            </p>
          </div>
        </section>

        {/* Contact grid */}
        <section style={{ padding: "72px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "48px" }}>

              {/* Left — info */}
              <div>
                <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "26px", fontWeight: 700, color: "#3E2723", marginBottom: "32px" }}>Contact Information</h2>

                {[
                  ["📍", "Address", "Kharadi, Pune, Maharashtra"],
                  ["📞", "Phone", "+91 8698161990"],
                  ["✉️", "Email", "contact@indiayurveda.com"],
                  ["🕐", "Hours", "Mon–Sat: 9 AM – 7 PM"],
                ].map(([icon, label, val]) => (
                  <div key={String(label)} style={{ display: "flex", gap: "16px", marginBottom: "24px", alignItems: "flex-start" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontFamily: "DM Sans", fontSize: "12px", fontWeight: 600, color: "#8A8A8A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3px" }}>{label}</div>
                      <div style={{ fontFamily: "DM Sans", fontSize: "15px", color: "#3E2723", fontWeight: 500 }}>{val}</div>
                    </div>
                  </div>
                ))}

                {/* Social */}
                <div style={{ marginTop: "32px" }}>
                  <div style={{ fontFamily: "DM Sans", fontSize: "12px", fontWeight: 600, color: "#8A8A8A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px" }}>Follow Us</div>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {[["📷 Instagram","#"],["📘 Facebook","#"],["▶ YouTube","#"]].map(([l,h]) => (
                      <a key={l} href={h} style={{ fontFamily: "DM Sans", fontSize: "13px", color: "#2E7D32", border: "1px solid #2E7D32", padding: "7px 16px", borderRadius: "20px", textDecoration: "none", fontWeight: 500 }}>{l}</a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp quick connect */}
                <a href={`https://wa.me/919766768090?text=Hello%20Dr.%20Harshali!%20I%20have%20a%20query.`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#25D366", color: "white", padding: "14px 20px", borderRadius: "10px", fontFamily: "DM Sans", fontWeight: 600, fontSize: "15px", textDecoration: "none", marginTop: "28px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat with Us on WhatsApp
                </a>
              </div>

              {/* Right — form */}
              <div style={{ background: "white", borderRadius: "16px", padding: "36px", border: "1px solid rgba(201,168,76,0.18)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
                <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "22px", fontWeight: 700, color: "#3E2723", marginBottom: "24px" }}>Send a Message</h2>
                {[
                  { label: "Full Name *", type: "text", placeholder: "Your name" },
                  { label: "Email *", type: "email", placeholder: "your@email.com" },
                  { label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                ].map(f => (
                  <div key={f.label} style={{ marginBottom: "16px" }}>
                    <label style={{ fontFamily: "DM Sans", fontSize: "12px", fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: "6px" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "8px", padding: "11px 14px", fontFamily: "DM Sans", fontSize: "14px", outline: "none", background: "#FDFAF3", boxSizing: "border-box" }} />
                  </div>
                ))}
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ fontFamily: "DM Sans", fontSize: "12px", fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: "6px" }}>Message *</label>
                  <textarea rows={4} placeholder="How can Dr. Harshali help you?" style={{ width: "100%", border: "1px solid rgba(0,0,0,0.12)", borderRadius: "8px", padding: "11px 14px", fontFamily: "DM Sans", fontSize: "14px", outline: "none", background: "#FDFAF3", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button style={{ width: "100%", background: "linear-gradient(135deg,#C9A84C,#A8843A)", color: "white", padding: "14px", borderRadius: "8px", fontFamily: "DM Sans", fontWeight: 600, fontSize: "15px", border: "none", cursor: "pointer" }}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ background: "white", padding: "72px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2E7D32", display: "block", marginBottom: "12px" }}>FAQ</span>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: "#3E2723", marginBottom: "14px" }}>Frequently Asked Questions</h2>
              <div style={{ width: "44px", height: "3px", background: "linear-gradient(90deg,#C9A84C,#E8D5A3)", borderRadius: "2px", margin: "0 auto" }} />
            </div>
            <div style={{ maxWidth: "720px", margin: "0 auto" }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", marginBottom: "4px" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "18px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                    <span style={{ fontFamily: "DM Sans", fontSize: "15px", fontWeight: 600, color: "#3E2723", lineHeight: 1.4 }}>{f.q}</span>
                    <span style={{ color: "#C9A84C", fontSize: "20px", flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ fontFamily: "DM Sans", fontSize: "14px", color: "#4A4A4A", lineHeight: 1.8, paddingBottom: "18px" }}>
                      {f.a}
                    </div>
                  )}
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
