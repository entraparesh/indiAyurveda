import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ConsultationPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--cream)", minHeight: "100vh" }}>
        <section className="section-pad">
          <div className="container" style={{ maxWidth: "760px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h1 style={{ fontFamily: "Lora", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 600, color: "var(--bark)", marginBottom: "12px" }}>
                Book an Online Consultation
              </h1>
              <p style={{ fontFamily: "DM Sans", fontSize: "15px", color: "var(--text-secondary)" }}>
                Consult Dr. Harshali from the comfort of your home
              </p>
            </div>

            <div style={{ background: "white", borderRadius: "12px", padding: "40px", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                {[
                  { label: "Full Name *", type: "text", placeholder: "Your full name" },
                  { label: "Email *", type: "email", placeholder: "your@email.com" },
                  { label: "Phone *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { label: "City", type: "text", placeholder: "Pune" },
                ].map((f) => (
                  <div key={f.label}>
                    <label style={{ fontFamily: "DM Sans", fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "6px", padding: "10px 14px", fontFamily: "DM Sans", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "var(--cream)" }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: "DM Sans", fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>Health Concern</label>
                  <select style={{ width: "100%", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "6px", padding: "10px 14px", fontFamily: "DM Sans", fontSize: "14px", outline: "none", background: "var(--cream)" }}>
                    <option>Child health / Immunity</option>
                    <option>General wellness</option>
                    <option>Suvarnaprashan query</option>
                    <option>Chyavanprash query</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: "DM Sans", fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>Preferred Date *</label>
                  <input type="date" style={{ width: "100%", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "6px", padding: "10px 14px", fontFamily: "DM Sans", fontSize: "14px", outline: "none", background: "var(--cream)", boxSizing: "border-box" }} />
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <label style={{ fontFamily: "DM Sans", fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>Message (optional)</label>
                <textarea rows={3} placeholder="Any specific health concerns or questions for Dr. Harshali..." style={{ width: "100%", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "6px", padding: "10px 14px", fontFamily: "DM Sans", fontSize: "14px", outline: "none", background: "var(--cream)", resize: "vertical", boxSizing: "border-box" }} />
              </div>

              <button className="btn-gold" style={{ marginTop: "24px", width: "100%", textAlign: "center", fontSize: "15px", padding: "14px" }}>
                Confirm Appointment
              </button>
              <p style={{ fontFamily: "DM Sans", fontSize: "12px", color: "var(--text-muted)", textAlign: "center", marginTop: "12px" }}>
                Confirmation will be sent via Email. We'll confirm within 24 hours.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "40px", textAlign: "center" }}>
              {[["📋", "Fill Form", "Share your details"], ["✅", "Get Confirmed", "Within 24 hrs"], ["💬", "Consult Online", "Via WhatsApp/Video"]].map(([icon, title, sub]) => (
                <div key={title} style={{ padding: "24px 16px", background: "white", borderRadius: "8px", border: "1px solid rgba(201,168,76,0.15)" }}>
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>{icon}</div>
                  <div style={{ fontFamily: "Lora", fontSize: "14px", fontWeight: 600, color: "var(--bark)", marginBottom: "4px" }}>{title}</div>
                  <div style={{ fontFamily: "DM Sans", fontSize: "12px", color: "var(--text-muted)" }}>{sub}</div>
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