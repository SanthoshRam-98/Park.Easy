import React, { useState, useEffect } from "react";
const parkingLocations = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/19d3337a04453f082737e5d9d8b718956b5224eb13041d492cda141de0559054?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
    title: "Workspace",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ad770c6049406c67b25a28de05177de63a481dd7ac490aff7ff205d741f0b0b0?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
    title: "Shopping Mall",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7cf2741ef0db924c41e6fd247b0e543d3ac1509c8e3be651dd3b78407fe3f79b?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
    title: "Restaurants",
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1117abf4ee9e54c84da20e6bf06beb2f373374c1c0f99697162d78fc22c3aa0a?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
    title: "Residential Area",
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1c5d85de950ec42bfacb45af67610539ea063721c0ffbbf66ffbcdc7b9dbd071?apiKey=1e478041483c415d8c6ecd66dd4ddacc&",
    title: "Shops",
  },
];

function ParkingServices() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const parkingServicesStyle = {
    textAlign: "center",
    marginTop: isMobile ? "40px" : "212px",
  };

  const sectionTitleStyle = {
    color: "#ffd613",
    fontSize: isMobile ? "40px" : "48px",
    marginBottom: isMobile ? "40px" : "128px",
  };

  const serviceGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: isMobile ? "20px" : "66px 40px",
    maxWidth: "1274px",
    margin: "0 auto",
  };

  const serviceItemStyle = {
    flex: `1 1 ${isMobile ? "calc(50% - 20px)" : "calc(33.333% - 40px)"}`,
    background: "#1a1a1a",
    borderRadius: "16px",
    padding: isMobile ? "20px" : "24px",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  return (
    <section style={parkingServicesStyle}>
      <h2 style={sectionTitleStyle}>Our Parking Services</h2>
      <div style={serviceGridStyle}>
        {parkingLocations.map((location, index) => (
          <div
            key={index}
            style={serviceItemStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={location.image} alt={location.title} width="100" />
            <h3>{location.title}</h3>
            <p>{location.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ParkingServices;
