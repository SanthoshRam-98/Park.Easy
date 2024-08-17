import React from "react";

const servicesData = [
  {
    title: "Bike",
    subtitle: "EV Parking & Simple Parking",
    description:
      "Bike parking can supplement transit ridership both in bustling urban corridors and at regional stops and stations, and can replace time- and space-consuming on-bus bicycle racks ...",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fbd22ae4529bee4e72e6b62c7212a89c243c79921f3625313440993af83da2f2?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
    imageAlt: "Bike parking illustration",
  },
  {
    title: "Car",
    subtitle: "EV Parking & Simple Parking",
    description:
      "A car park is a space specially designed for all road users so that they can park their vehicles safely. In addition to being a functional place to park, parking is also an infrastructure that reduces the CO2 emissions of ...",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/66610e322732a6a56bd85293d0ac9fe8243f170876579a3283ff6b137e95a87a?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
    imageAlt: "Car parking illustration",
  },
];

const Services = () => {
  const servicesSectionStyles = {
    padding: "0 70px",
    marginTop: "159px",
    "@media (max-width: 991px)": {
      padding: "0 20px",
      marginTop: "40px",
    },
  };

  const sectionTitleStyles = {
    color: "#ffd613",
    fontSize: "55px",
    lineHeight: "1",
    fontWeight: "400",
    marginBottom: "128px",
    "@media (max-width: 991px)": {
      fontSize: "40px",
      marginBottom: "40px",
    },
  };

  const cardWrapperStyles = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    marginBottom: "128px",
    "@media (max-width: 991px)": {
      flexDirection: "column",
      marginBottom: "40px",
    },
  };

  const cardContentStyles = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
    color: "#ffffff",
  };

  const serviceTitleStyles = {
    fontSize: "30px",
    fontWeight: "400",
    marginBottom: "8px",
  };

  const serviceSubtitleStyles = {
    color: "#ffd613",
    fontSize: "36px",
    fontWeight: "400",
    marginBottom: "24px",
  };

  const serviceDescriptionStyles = {
    fontSize: "24px",
    marginBottom: "36px",
  };

  const knowMoreButtonStyles = {
    alignSelf: "flex-start",
    borderRadius: "50px",
    backgroundColor: "#ffd613",
    color: "#000000",
    fontSize: "18px",
    fontWeight: "500",
    padding: "22px 61px",
    border: "none",
    cursor: "pointer",
    "@media (max-width: 991px)": {
      alignSelf: "center",
      padding: "15px 40px",
    },
  };

  const serviceImageStyles = {
    flex: "1",
    aspectRatio: "1.34",
    objectFit: "contain",
    maxWidth: "100%",
  };

  return (
    <section style={servicesSectionStyles}>
      <h2 style={sectionTitleStyles}>Our Services</h2>
      {servicesData.map((service, index) => (
        <div
          key={index}
          style={{
            ...cardWrapperStyles,
            flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
          }}
        >
          <div style={cardContentStyles}>
            <h3 style={serviceTitleStyles}>{service.title}</h3>
            <h4 style={serviceSubtitleStyles}>{service.subtitle}</h4>
            <p style={serviceDescriptionStyles}>{service.description}</p>
            <button style={knowMoreButtonStyles}>Know More</button>
          </div>
          <img
            src={service.imageSrc}
            alt={service.imageAlt}
            loading="lazy"
            style={serviceImageStyles}
          />
        </div>
      ))}
    </section>
  );
};

export default Services;
