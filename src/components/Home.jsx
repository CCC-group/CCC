import { Typography, Button, Box } from "@mui/material";

const Home = () => {
  const columnStyle = {
    flex: 1,
    padding: "20px",
    textAlign: "center",
    color: "white",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "lightblue", // Change this to your desired shade of blue
  };
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

      <div id="homeContainer">
        <div className="homeCol" style={{ backgroundColor: "#2243b6" }}>
          <Typography variant="h4">Our Company</Typography>
          <p>Your text or content here</p>
          <button>Button 1</button>
        </div>

        <div className="homeCol" style={{ backgroundColor: "#00008b"}}>
          <Typography variant="h4">Financial Literacy Education</Typography>
          <p>Your text or content here</p>
          <button>Button 2</button>
        </div>

        <div className="homeCol" style={{ backgroundColor: "#318ce7" }}>
          <Typography variant="h4">Get a Quote</Typography>
          <p>Your text or content here</p>
          <button>Button 3</button>
        </div>
      </div>
    </>
  );
};

export default Home;
