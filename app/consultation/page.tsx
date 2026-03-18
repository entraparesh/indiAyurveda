"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WA_NUMBER = "919766768090";

export default function ConsultationPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--cream)", minHeight: "100vh" }}>
        <section className="section-pad">
          <div className="container" style={{ maxWidth: "760px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="section-eyebrow">Consult Dr. Harshali</span>
              <h1
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(28px, 5vw, 44px)",
                  fontWeight: 700,
                  color: "var(--bark)",
                  marginBottom: "12px",
                }}
              >
                Book an Online Consultation
              </h1>
              <div className="gold-line" />
              <p
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  marginTop: "14px",
                }}
              >
                Consult Dr. Harshali from the comfort of your home
              </p>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "40px",
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "20px",
                }}
              >
                {[
                  { label: "Full Name *", type: "text", placeholder: "Your full name", id: "cons-name" },
                  { label: "Email *", type: "email", placeholder: "your@email.com", id: "cons-email" },
                  { label: "Phone *", type: "tel", placeholder: "+91 XXXXX XXXXX", id: "cons-phone" },
                  { label: "City", type: "text", placeholder: "Pune", id: "cons-city" },
                ].map((f) => (
                  <div key={f.label}>
                    <label
                      htmlFor={f.id}
                      style={{
                        fontFamily: "DM Sans",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      style={{
                        width: "100%",
                        border: "1px solid rgba(0,0,0,0.15)",
                        borderRadius: "6px",
                        padding: "10px 14px",
                        fontFamily: "DM Sans",
                        fontSize: "14px",
                        outline: "none",
                        boxSizing: "border-box",
                        background: "var(--cream)",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="cons-concern"
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Health Concern
                  </label>
                  <select
                    id="cons-concern"
                    style={{
                      width: "100%",
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: "6px",
                      padding: "10px 14px",
                      fontFamily: "DM Sans",
                      fontSize: "14px",
                      outline: "none",
                      background: "var(--cream)",
                    }}
                  >
                    <option>Child health / Immunity</option>
                    <option>General wellness</option>
                    <option>Suvarnaprashan query</option>
                    <option>Chyavanprash query</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="cons-date"
                    style={{
                      fontFamily: "DM Sans",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Preferred Date *
                  </label>
                  <input
                    id="cons-date"
                    type="date"
                    style={{
                      width: "100%",
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: "6px",
                      padding: "10px 14px",
                      fontFamily: "DM Sans",
                      fontSize: "14px",
                      outline: "none",
                      background: "var(--cream)",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <label
                  htmlFor="cons-message"
                  style={{
                    fontFamily: "DM Sans",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Message (optional)
                </label>
                <textarea
                  id="cons-message"
                  rows={3}
                  placeholder="Any specific health concerns or questions for Dr. Harshali..."
                  style={{
                    width: "100%",
                    border: "1px solid rgba(0,0,0,0.15)",
                    borderRadius: "6px",
                    padding: "10px 14px",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    outline: "none",
                    background: "var(--cream)",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* ✅ FIXED: Proper button styling + working form data collection */}
              <button
                onClick={() => {
                  const name = (document.getElementById("cons-name") as HTMLInputElement)?.value || "";
                  const phone = (document.getElementById("cons-phone") as HTMLInputElement)?.value || "";
                  const email = (document.getElementById("cons-email") as HTMLInputElement)?.value || "";
                  const city = (document.getElementById("cons-city") as HTMLInputElement)?.value || "";
                  const concern = (document.getElementById("cons-concern") as HTMLSelectElement)?.value || "";
                  const date = (document.getElementById("cons-date") as HTMLInputElement)?.value || "";
                  const message = (document.getElementById("cons-message") as HTMLTextAreaElement)?.value || "";

                  if (!name || !phone) {
                    alert("Please fill in your Name and Phone number.");
                    return;
                  }

                  const text = [
                    `Hello Dr. Harshali! I would like to book a consultation.`,
                    `Name: ${name}`,
                    phone ? `Phone: ${phone}` : "",
                    email ? `Email: ${email}` : "",
                    city ? `City: ${city}` : "",
                    concern ? `Health Concern: ${concern}` : "",
                    date ? `Preferred Date: ${date}` : "",
                    message ? `Message: ${message}` : "",
                  ]
                    .filter(Boolean)
                    .join("\n");

                  window.open(
                    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
                    "_blank"
                  );
                }}
                style={{
                  marginTop: "28px",
                  width: "100%",
                  padding: "15px 24px",
                  background: "linear-gradient(135deg, #C9A84C, #A8843A)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(201,168,76,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(201,168,76,0.5)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(201,168,76,0.4)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Confirm Appointment via WhatsApp
              </button>

              <p
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  marginTop: "12px",
                }}
              >
                We&apos;ll confirm your appointment within 24 hours.
              </p>
            </div>

            {/* Steps */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                marginTop: "40px",
                textAlign: "center",
              }}
            >
              {[
                ["📋", "Fill Form", "Share your details"],
                ["✅", "Get Confirmed", "Within 24 hrs"],
                ["💬", "Consult Online", "Via WhatsApp/Video"],
              ].map(([icon, title, sub]) => (
                <div
                  key={title}
                  style={{
                    padding: "24px 16px",
                    background: "white",
                    borderRadius: "8px",
                    border: "1px solid rgba(201,168,76,0.15)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>{icon}</div>
                  <div
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--bark)",
                      marginBottom: "4px",
                    }}
                  >
                    {title}
                  </div>
                  <div style={{ fontFamily: "DM Sans", fontSize: "12px", color: "var(--text-muted)" }}>
                    {sub}
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
