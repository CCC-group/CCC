import { Typography, Button, Box, Link } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ModalForm from "./Modal";


const Home = ({open, handleOpen, handleClose}) => {
  const handleDownload = () => {
    // Replace 'path_to_your_spreadsheet' with the actual path to your spreadsheet file
    const spreadsheetUrl = `${import.meta.env.VITE_REACT_APP_SERVER}/downloads/spreadsheet`;

    // Create a link element
    const link = document.createElement('a');
    link.href = spreadsheetUrl;
    link.setAttribute('download', 'Blank Saving Spread sheet.xlsx');

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to initiate download
    link.click();

    // Remove the link from the body after download begins
    document.body.removeChild(link);
};
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        backgroundColor="#dcdcdc"
      >
        <Typography variant="h3" style={{
          marginTop:'20px',
          marginBottom: '30px',
          display:'flex', 
          justifyContent:'center', 
          color: '#2243b6',
        }}>
          Crystal Clear Consulting</Typography>
        <video autoPlay muted id="homeVideo" style={{ width: "50%", marginTop: "0px"  }}>
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
            Teaching essential money skills: debt management, and informed decision-making for a secure financial
            future. download our saving spread sheet to start your journey today
          </p>
          <Button
            style={{
              color: "white",
              border: "solid #BAD3D4 2px",
              fontSize: "20px",
              margin: "10px",
              textTransform: "none",
              lineHeight: "25px",
            }}
            variant="outlined"
            onClick={handleDownload}
          >
            <Typography variant="h7">
              Download
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
            onClick={handleOpen}
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
      <ModalForm open={open} handleClose={handleClose}/>
    </>
  );
};

export default Home;
