export default function WhatsAppButton() {
  const href =
    "https://wa.me/919766768090?text=Hello%20Dr.%20Harshali!%20I%20would%20like%20to%20know%20more%20about%20your%20Ayurvedic%20products.";

  const style: React.CSSProperties = {
    position: "fixed",
    bottom: "28px",
    right: "24px",
    zIndex: 100,
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
    transition: "transform 0.2s",
    textDecoration: "none",
    fontSize: "24px",
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" style={style}>
      {"💬"}
    </a>
  );
}
