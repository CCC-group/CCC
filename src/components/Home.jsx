import { Typography, Button, Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh" 
      >
        <video autoPlay muted id="homeVideo" style={{ width: "60%" }}>
          <source
            src="src/assets/pexels-tea-oebel-6568706 (2160p).mp4"
            type="video/mp4"
          />
        </video>

        <Button
          variant="contained"
          color="primary"
          style={{ borderRadius: 20, marginTop: "2%" }}
        >
          <Typography variant="h7" fontWeight="bold">
            Get a Appointment <br />
            Click here
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
    </>
  );
};

export default Home;
