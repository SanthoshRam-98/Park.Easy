import React, { useState, useEffect } from "react";

const parkingSolutions = [
  {
    id: 1,
    title: "EV Parking (Car & Bike)",
    description:
      "We provide dedicated spaces for EV parking where you can park, charge, and drive away, and repeat the same until your subscription ends. We offer hourly, daily, weekly, and monthly plans with enhanced security",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8ea18948372b9402d8dd82e602d4569568c7e50615a7c87fefa46bcc322c4024?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
  },
  {
    id: 2,
    title: "Simple Parking (Car & Bike)",
    description:
      "Discover nearby parking options with our hourly, weekly, daily, and monthly plans. No matter where you're headed, our team is here to assist you in finding the perfect parking spot near your location, whether it's at apartments, shops, malls, events, and more.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/74cd38d43f5158c1c54d626825e6be5800fdb91facd478ecd97c0dfb8ba382a1?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
  },
];

function ParkingSolutions() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.parkingSolutions}>
      <h2 style={styles.sectionTitle}>Parking Solutions</h2>
      {parkingSolutions.map((solution, index) => (
        <div
          key={solution.id}
          style={{
            ...styles.solutionItem,
            flexDirection: isMobile
              ? "column"
              : index % 2 === 0
              ? "row"
              : "row-reverse",
            marginBottom: isMobile ? "40px" : "128px",
          }}
        >
          <div style={styles.solutionContent}>
            <h3 style={styles.solutionTitle}>{solution.title}</h3>
            <p style={styles.solutionDescription}>{solution.description}</p>
          </div>
          <div style={styles.solutionImage}>
            <img
              src={solution.image}
              alt={solution.title}
              style={styles.solutionImageImg}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  parkingSolutions: {
    marginTop: "148px",
    width: "100%",
    maxWidth: "1300px",
    padding: "0 20px",
    margin: "0 auto",
  },
  sectionTitle: {
    color: "#ffd613",
    textAlign: "center",
    font: "400 48px Poppins, sans-serif",
    marginBottom: "128px",
  },
  solutionItem: {
    display: "flex",
    gap: "20px",
  },
  solutionContent: {
    flex: "0 0 59%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  solutionTitle: {
    color: "#ffd613",
    font: "400 36px Poppins, sans-serif",
    marginBottom: "36px",
  },
  solutionDescription: {
    color: "#fff",
    font: "400 24px Poppins, sans-serif",
  },
  solutionImage: {
    flex: "0 0 41%",
  },
  solutionImageImg: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
};

export default ParkingSolutions;
