import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

function Testimonials() {
  const testimonials = [
    { id: 1, text: "Testimonial 1" },
    { id: 2, text: "Testimonial 2" },
    { id: 3, text: "Testimonial 3" },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative", // Change to relative to position children inside
      }}
    >
      <Box
        position="absolute"
        width="100%"
        justifyContent="center"
        maxWidth="800px"
        height="40%"
        transform="translate(-50%, -50%)"
        backgroundColor="rgba(255, 255, 255, 0.7)"
        borderRadius="10px"
        padding="20px"
        boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"
      >
        <div style={{ textAlign: "center", padding: "15px", marginTop: "3px" }}>
          <Typography>
            <span
              style={{
                color: "#2243b6",
                fontSize: "1.5em",
                verticalAlign: "middle",
              }}
            >
              &mdash;&mdash;&mdash;&mdash;&mdash;
            </span>{" "}
            <h2
              style={{
                color: "black",
                display: "inline",
                margin: "0 10px",
                verticalAlign: "middle",
                fontWeight: "lighter",
              }}
            >
              Testimonials
            </h2>{" "}
            <span
              style={{
                color: "#2243b6",
                fontSize: "1.5em",
                verticalAlign: "middle",
              }}
            >
              &mdash;&mdash;&mdash;&mdash;&mdash;
            </span>
          </Typography>
        </div>
        <Slider {...settings} style={{ position: "relative" }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div key={testimonial.id}>
                <div style={{ fontSize: "1.2em", textAlign: "center" }}>{testimonial.text}</div>
              </div>
            </div>
          ))}
        </Slider>
      </Box>
      <img
        src="/imgs/people.jpg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: "0.5",
        }}
        alt="People"
      />
    </div>
  );
}

export default Testimonials;
