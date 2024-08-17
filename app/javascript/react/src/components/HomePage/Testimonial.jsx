import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Charlie",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8bba30e0b511dca6b35dc5b94299b2647049a9277acfe84eb91ab282d955166e?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
    quote:
      "I tried Park.Easy car wash service on the recommendation of a friend, and there has been no looking back since then.",
  },
  {
    id: 2,
    name: "Kumar",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8bba30e0b511dca6b35dc5b94299b2647049a9277acfe84eb91ab282d955166e?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
    quote:
      "I can quickly check for open spots and secure one with ease. The convenience is unmatched.",
  },
  {
    id: 3,
    name: "Jessica",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8bba30e0b511dca6b35dc5b94299b2647049a9277acfe84eb91ab282d955166e?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
    quote:
      "Park.Easy has been a lifesaver in urban areas with limited parking options. I no longer waste time driving around aimlessly.",
  },
];

function Testimonials() {
  return (
    <section style={styles.testimonialContainer} id="testimonial">
      <h2 style={styles.sectionTitle}>Our Happy Customers</h2>
      <div style={styles.testimonialGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={styles.testimonialItem}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={styles.testimonialImage}
            />
            <h3 style={styles.testimonialName}>{testimonial.name}</h3>
            <p
              style={{
                ...styles.testimonialQuote,
                backgroundColor:
                  testimonial.id === 1 || testimonial.id === 3
                    ? "rgba(211, 211, 211, 0.13)" // rgba for 13% opacity
                    : "rgb(255, 214, 19)", // Background color for id 2
                color:
                  testimonial.id === 2
                    ? "black" // Text color for id 2
                    : "white", // Text color for id 1 and 3
              }}
            >
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  testimonialContainer: {
    marginTop: "212px",
    textAlign: "center",
  },
  sectionTitle: {
    color: "#ffd613",
    fontSize: "48px",
    marginBottom: "34px",
  },
  testimonialGrid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1148px",
    margin: "0 auto",
  },
  testimonialItem: {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    borderRadius: "8px",
    color: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#1a1a1a",
    margin: "8px",
  },
  testimonialImage: {
    width: "80px", // Reduced size of the icon
    height: "80px", // Reduced size of the icon
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  },
  testimonialName: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  testimonialQuote: {
    fontSize: "16px",
    borderRadius: "8px",
    padding: "16px",
    fontStyle: "italic",
  },
  "@media (max-width: 991px)": {
    sectionTitle: {
      fontSize: "40px",
    },
    testimonialGrid: {
      flexDirection: "column",
      alignItems: "center",
    },
    testimonialItem: {
      marginBottom: "40px",
    },
    testimonialName: {
      fontSize: "20px",
    },
    testimonialQuote: {
      fontSize: "16px",
    },
  },
};

export default Testimonials;
