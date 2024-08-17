import React, { useState, useEffect } from "react";

const perks = [
  {
    id: 1,
    number: "01",
    title: "Faster Booking",
    description: "You can book a parking space in just a few steps",
  },
  {
    id: 2,
    number: "02",
    title: "Cheaper Price",
    description: "We offer cost-effective parking subscription plans",
  },
  {
    id: 3,
    number: "03",
    title: "Enhanced Security",
    description: "Equipped with CCTV and array system",
  },
  {
    id: 4,
    number: "04",
    title: "Covered Parking",
    description: "Offers convenience and enhanced security",
  },
];

function ProductPerks() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.productPerks}>
      <h2 style={styles.sectionTitle}>Our Product Perks</h2>
      <div style={styles.perksGrid}>
        {perks.map((perk) => (
          <div
            key={perk.id}
            style={{
              ...styles.perkItem,
              marginBottom: isMobile ? "40px" : "64px",
            }}
          >
            <div style={styles.perkNumber}>{perk.number}</div>
            <div style={styles.perkContent}>
              <h3 style={styles.perkTitle}>{perk.title}</h3>
              <p style={styles.perkDescription}>{perk.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  productPerks: {
    backgroundColor: "#000",
    padding: "90px 80px",
    marginTop: "212px",
    width: "100%",
  },
  sectionTitle: {
    color: "#ffd613",
    font: "400 48px Poppins, sans-serif",
    textAlign: "center",
    marginBottom: "128px",
  },
  perksGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "979px",
    margin: "0 auto",
  },
  perkItem: {
    display: "flex",
    gap: "20px",
    width: "calc(50% - 20px)",
  },
  perkNumber: {
    fontSize: "48px",
    fontWeight: "600",
    color: "#ffd613",
  },
  perkContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  perkTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#ffd613",
    marginBottom: "16px",
  },
  perkDescription: {
    fontSize: "18px",
    color: "#fff",
  },
};

export default ProductPerks;
