import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

const WA_NUMBER = "919XXXXXXXXX";

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "#FDFAF3", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg,#0B1A0D 0%,#1B5E20 100%)", padding: "72px 0 64px", textAlign: "center" }}>
          <div className="container">
            <span style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E8C97A", display: "block", marginBottom: "14px" }}>Our Formulations</span>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>
              Products for Every Stage of Life
            </h1>
            <p style={{ fontFamily: "DM Sans", fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
              Handcrafted Ayurvedic formulations by Dr. Harshali — pure, classical, and trusted.
            </p>
          </div>
        </section>

        {/* Products */}
        <section style={{ padding: "72px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "40px" }}>

              {/* Suvarnaprashan */}
              <div style={{ background: "#FBF5E0", borderRadius: "16px", overflow: "hidden", border: "1px solid #C9A84C30", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                <div style={{ position: "relative", height: "260px" }}>
                  <Image src="/suvarnaprashan.jpg" alt="Suvarnaprashan" fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "14px", left: "14px", background: "linear-gradient(135deg,#C9A84C,#A8843A)", color: "white", fontFamily: "DM Sans", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", padding: "5px 14px", borderRadius: "20px", textTransform: "uppercase" }}>For Children</div>
                </div>
                <div style={{ padding: "32px" }}>
                  <div style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "6px" }}>Ages 0–16</div>
                  <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "28px", fontWeight: 700, color: "#3E2723", marginBottom: "12px" }}>Suvarnaprashan</h2>
                  <p style={{ fontFamily: "DM Sans", fontSize: "15px", color: "#4A4A4A", lineHeight: 1.75, marginBottom: "24px" }}>
                    Gold-enriched classical Ayurvedic drops that boost immunity, enhance memory, and support holistic development in children. Prepared on every Pushya Nakshatra day for maximum efficacy.
                  </p>
                  <ul style={{ listStyle: "none", marginBottom: "28px" }}>
                    {["Boosts immunity naturally","Enhances memory & focus","Supports brain development","Improves digestion","100% classical Shastriya formula"].map(b => (
                      <li key={b} style={{ fontFamily: "DM Sans", fontSize: "14px", color: "#4A4A4A", marginBottom: "10px", display: "flex", gap: "10px", alignItems: "center" }}>
                        <span style={{ color: "#C9A84C", fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/919766768090?text=Hello%20Dr.%20Harshali!%20I%20am%20interested%20in%20Suvarnaprashan%20for%20my%20child.%20Please%20guide%20me.`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "9px", background: "#25D366", color: "white", padding: "14px", borderRadius: "8px", fontFamily: "DM Sans", fontWeight: 600, fontSize: "14px", textDecoration: "none", boxShadow: "0 4px 14px rgba(37,211,102,0.35)" }}>
                    {WA_ICON} Consult &amp; Order on WhatsApp
                  </a>
                </div>
              </div>

              {/* Chyavanprash */}
              <div style={{ background: "#E8F5E9", borderRadius: "16px", overflow: "hidden", border: "1px solid #2E7D3230", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                <div style={{ position: "relative", height: "260px" }}>
                  <Image src="/chyawanprash.webp" alt="Chyavanprash" fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "14px", left: "14px", background: "linear-gradient(135deg,#2E7D32,#1B5E20)", color: "white", fontFamily: "DM Sans", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", padding: "5px 14px", borderRadius: "20px", textTransform: "uppercase" }}>For Adults</div>
                </div>
                <div style={{ padding: "32px" }}>
                  <div style={{ fontFamily: "DM Sans", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2E7D32", marginBottom: "6px" }}>Ages 14+</div>
                  <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "28px", fontWeight: 700, color: "#3E2723", marginBottom: "12px" }}>Chyavanprash</h2>
                  <p style={{ fontFamily: "DM Sans", fontSize: "15px", color: "#4A4A4A", lineHeight: 1.75, marginBottom: "24px" }}>
                    Classical herbal jam with Amalaki at its core — a daily rasayana for energy, immunity, and respiratory wellness in adults. Prepared using the original Shastriya recipe.
                  </p>
                  <ul style={{ listStyle: "none", marginBottom: "28px" }}>
                    {["Sustained energy & stamina","Respiratory health support","Daily immunity booster","Rich in Vitamin C (Amalaki)","Supports heart & digestion"].map(b => (
                      <li key={b} style={{ fontFamily: "DM Sans", fontSize: "14px", color: "#4A4A4A", marginBottom: "10px", display: "flex", gap: "10px", alignItems: "center" }}>
                        <span style={{ color: "#2E7D32", fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/919766768090?text=Hello%20Dr.%20Harshali!%20I%20am%20interested%20in%20Chyavanprash.%20Please%20guide%20me.`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "9px", background: "#25D366", color: "white", padding: "14px", borderRadius: "8px", fontFamily: "DM Sans", fontWeight: 600, fontSize: "14px", textDecoration: "none", boxShadow: "0 4px 14px rgba(37,211,102,0.35)" }}>
                    {WA_ICON} Consult &amp; Order on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{ background: "#F5EDD8", padding: "40px 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "DM Sans", fontSize: "13px", color: "#8A8A8A", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
              ⚕ These are Ayurvedic supplements prepared under the supervision of Dr. Harshali, BAMS. They are not substitutes for medical advice. Please consult a qualified physician for any health concerns.
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
