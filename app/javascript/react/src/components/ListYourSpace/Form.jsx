import React, { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const styles = (width) => ({
  container: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    display: "flex",
    flexDirection: "column",
    marginTop: width <= 991 ? "40px" : "212px",
    padding: width <= 991 ? "0 20px 100px" : "101px 70px",
  },
  title: {
    color: "rgba(255, 214, 19, 1)",
    textAlign: "center",
    fontWeight: 400,
    fontSize: width <= 991 ? "40px" : "48px",
    fontFamily: "Poppins, sans-serif",
  },
  content: {
    display: "flex",
    margin: width <= 991 ? "40px 0 10px" : "87px 0 -22px",
    gap: "100px",
    flexDirection: width <= 991 ? "column" : "row",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    width: width <= 991 ? "100%" : "60%",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginTop: "36px",
  },
  label: {
    color: "rgba(99, 99, 99, 1)",
    fontWeight: 400,
  },
  input: {
    borderRadius: "10px",
    border: "1px solid rgba(99, 99, 99, 1)",
    padding: width <= 991 ? "10px" : "14px 36px",
    fontSize: "24px",
    fontFamily: "Poppins, sans-serif",
    marginTop: "8px",
    backgroundColor: "transparent",
  },
  phoneInputGroup: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  },
  countryCode: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    border: "1px solid rgba(99, 99, 99, 1)",
    borderRadius: "10px",
    padding: "14px 21px",
  },
  countryName: {
    color: "rgba(255, 214, 19, 1)",
    fontWeight: 600,
  },
  countryFlag: {
    aspectRatio: "1",
    width: "24px",
    objectFit: "contain",
  },
  submitButton: {
    borderRadius: "50px",
    color: "rgba(0, 0, 0, 1)",
    fontSize: "18px",
    fontWeight: 500,
    padding: width <= 991 ? "0 20px" : "22px 70px",
    marginTop: "36px",
    border: "none",
    backgroundColor: "rgb(255, 214, 19)",
    cursor: "pointer",
    marginRight: "auto",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    width: width <= 991 ? "100%" : "40%",
    marginTop: width <= 991 ? "40px" : "0",
  },
  sideImage: {
    aspectRatio: "0.86",
    objectFit: "contain",
    width: "100%",
  },
});

function Form() {
  const { width } = useWindowSize();
  const currentStyles = styles(width);

  return (
    <section style={currentStyles.container}>
      <h2 style={currentStyles.title}>
        Earn Money By renting out your parking space
      </h2>
      <form style={currentStyles.content}>
        <div style={currentStyles.leftColumn}>
          <div style={currentStyles.field}>
            <label htmlFor="nameInput" style={currentStyles.label}>
              Name
            </label>
            <input
              type="text"
              id="nameInput"
              placeholder="Enter your name"
              aria-label="Enter your name"
              style={currentStyles.input}
            />
          </div>
          <div style={currentStyles.field}>
            <label htmlFor="phoneInput" style={currentStyles.label}>
              Phone
            </label>
            <div style={currentStyles.phoneInputGroup}>
              <div style={currentStyles.countryCode}>
                <span style={currentStyles.countryName}>IND</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c9aabc102e6130d8276254aad1da7046c2f805ae859be24d9f87e5677cbd062?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
                  style={currentStyles.countryFlag}
                  alt="Country Flag"
                />
              </div>
              <input
                type="tel"
                id="phoneInput"
                placeholder="Enter your phone number"
                aria-label="Enter your phone number"
                style={currentStyles.input}
              />
            </div>
          </div>
          <div style={currentStyles.field}>
            <label htmlFor="parkingSpacesInput" style={currentStyles.label}>
              No. of parking spaces
            </label>
            <input
              type="number"
              id="parkingSpacesInput"
              placeholder="Enter number of parking spaces"
              aria-label="Enter number of parking spaces"
              style={currentStyles.input}
            />
          </div>
          <div style={currentStyles.field}>
            <label htmlFor="locationInput" style={currentStyles.label}>
              Enter your location
            </label>
            <input
              type="text"
              id="locationInput"
              placeholder="Enter your location"
              aria-label="Enter your location"
              style={currentStyles.input}
            />
          </div>
          <button type="submit" style={currentStyles.submitButton}>
            Submit
          </button>
        </div>
        <div style={currentStyles.rightColumn}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c177d236e92df0631292589538106b3154697cd7ebf768f046825627d2676c7c?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
            style={currentStyles.sideImage}
            alt="Side Image"
          />
        </div>
      </form>
    </section>
  );
}

export default Form;
