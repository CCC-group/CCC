import { Typography, Button, Box, Link } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

const Home = () => {
  const handleOurTeam = () => {};
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        backgroundColor="#BAD3D4"
      >
        <video autoPlay muted id="homeVideo" style={{ width: "60%" }}>
          <source
            src="src/assets/pexels-tea-oebel-6568706 (2160p).mp4"
            type="video/mp4"
          />
        </video>

        <Button
          variant="contained"
          style={{
            borderRadius: 20,
            marginTop: "2%",
            backgroundColor: "#1D66C0",
            textTransform: "none",
          }}
        >
          <Typography variant="h7" fontWeight="bold">
            Get an Appointment <br />
            <Typography variant="h7" fontWeight="light">
              {" "}
              Click here
            </Typography>
          </Typography>
        </Button>
      </Box>

      <div className="home">
        <div className="home-1">
          <Typography variant="h4" fontWeight={"light"}>
            Welcome to Crystal Clear Consulting
          </Typography>
          <div className="home-2">
            <Typography variant="h1" fontWeight={"bolder"}>
              WE HELP TO CREATE FINANCIAL SECURITY
            </Typography>
          </div>
          <div className="home-2">
            <Typography variant="h6" fontWeight={"light"}>
              We empower individuals, families, and small business owners to
              achieve financial clarity, amplify generational wealth, and expand
              businesses through life insurance and strategic approaches!
            </Typography>
          </div>
        </div>
      </div>

      <div id="homeContainer">
        <div className="homeCol" style={{ backgroundColor: "#1D66C0" }}>
          <BusinessIcon sx={{ color: "white" }} fontSize="large" />

          <Typography
            variant="h4"
            style={{ padding: "10px", fontWeight: "lighter" }}
          >
            Our Company
          </Typography>
          <p>
            Empowering individuals to grasp and create a lasting financial
            heritage through education, knowledge, and strategic planning.
          </p>
          <Button
            style={{
              color: "white",
              border: "solid #BAD3D4 2px",
              fontSize: "20px",
              margin: "20px",
              textTransform: "none",
              lineHeight: "25px",
            }}
            variant="outlined"
            onClick={handleOurTeam}
          >
            <Typography variant="h7" style={{ lineHeight: "30px" }}>
              Meet the Team
              <br />
              <Link
                href={"/about"}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "lighter",
                }}
              >
                Click Here
              </Link>
              {/* <Typography variant='h7' fontWeight='light'> Click here</Typography> */}
            </Typography>
          </Button>
        </div>

        <div className="homeCol" style={{ backgroundColor: "#2243b6" }}>
          <SchoolIcon sx={{ color: "white" }} fontSize="large" />
          <Typography
            variant="h4"
            style={{ padding: "10px", fontWeight: "lighter" }}
          >
            Financial Literacy Education
          </Typography>
          <p>
            Teaching essential money skills: budgeting, saving, investing, debt
            management, and informed decision-making for a secure financial
            future.
          </p>
          <Button
            style={{
              color: "white",
              border: "solid #BAD3D4 2px",
              fontSize: "20px",
              margin: "20px",
              textTransform: "none",
              lineHeight: "25px",
            }}
            variant="outlined"
          >
            <Typography variant="h7">
              Learn More
              <br />
              <Typography variant="h7" fontWeight="light">
                {" "}
                Click here
              </Typography>
            </Typography>
          </Button>
        </div>

        <div className="homeCol" style={{ backgroundColor: "#3BC1DE" }}>
          <RequestQuoteIcon sx={{ color: "white" }} fontSize="large" />
          <Typography
            variant="h4"
            style={{ padding: "10px", fontWeight: "lighter" }}
          >
            Get a Quote
          </Typography>
          <p>
            Ensure your family's coverage, assess retirement needs, and seek aid
            for overdue rent. Schedule an appointment for financial guidance and
            support.
          </p>
          <Button
            style={{
              color: "white",
              border: "solid #BAD3D4 2px",
              fontSize: "20px",
              margin: "20px",
              textTransform: "none",
              lineHeight: "25px",
            }}
            variant="outlined"
          >
            <Typography variant="h7">
              Learn More
              <br />
              <Typography variant="h7" fontWeight="light">
                {" "}
                Click here
              </Typography>
            </Typography>
          </Button>
        </div>
      </div>

      <div>
        <div style={{ textAlign: "center", padding:'15px' }}>
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
              }}
            >
              Our Partners
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
          <div className="partnersContainer">
            <img
              className="partners"
              src="src/assets/imgs/mutual-of-omaha-logo-blue-png.png"
              alt="Mutual of Omaha Logo"
            />
            <img
              className="partners"
              src="src/assets/imgs/Silac.png"
              alt="Silac Logo"
            />
            <img
              className="partners"
              src="src/assets/imgs/americanNational.png"
              alt="American National"
            />
            <img
              className="partners"
              src="src/assets/imgs/forestersFinancialLogo.png"
              alt="Forester Financial"
            />
            <img
              className="partners"
              src="src/assets/imgs/northAmerican.png"
              alt="North American"
            />
            <img
              className="partners"
              src="src/assets/imgs/mediator.png"
              alt="Mediator Debt Solutions"
            />
            <img
              className="partners"
              src="src/assets/imgs/lifeGroup.png"
              alt="National Life Group"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
