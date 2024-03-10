import { Box, Typography } from "@mui/material";
import logo from "../imgs/CCC.jpg";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div>
      <div>
        <div style={{ textAlign: "center", padding: "15px" }}>
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
        </div>
        <div className="partnersContainer">
          <img
            className="partners"
            src="src/imgs/mutual-of-omaha-logo-blue-png.png"
            alt="Mutual of Omaha Logo"
          />
          <img
            className="partners"
            src="src/imgs/Silac.png"
            alt="Silac Logo"
          />
          <img
            className="partners"
            src="src/imgs/americanNational.png"
            alt="American National"
          />
          <img
            className="partners"
            src="src/imgs/forestersFinancialLogo.png"
            alt="Forester Financial"
          />
          <img
            className="partners"
            src="src/imgs/northAmerican.png"
            alt="North American"
          />
          <img
            className="partners"
            src="src/imgs/mediator.png"
            alt="Mediator Debt Solutions"
          />
          <img
            className="partners"
            src="src/imgs/lifeGroup.png"
            alt="National Life Group"
          />
        </div>
      </div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="15vh"
        backgroundColor="#1D66C0"
      >
        <div className="contact-box">
          <div style={{ margin: "40px" }}>
            <p>
              <FmdGoodIcon sx={{ fontSize: "large", marginRight: "3px" }} />
              <b>Office:</b> 1S450 Summit Ave, Oakbrook Terrace, IL 60181
            </p>
          </div>
          <div style={{ margin: "40px" }}>
            <p>
              <CallIcon sx={{ fontSize: "large", marginRight: "3px" }} />
              <b>Call</b> 708-232-3275
            </p>
          </div>
          <div style={{ margin: "40px" }}>
            <p>
              <EmailIcon sx={{ fontSize: "large", marginRight: "3px" }} />
              <b>Email:</b> cworkhappen@gmail.com
            </p>
          </div>
        </div>
      </Box>
      <div className="footer">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            width="120"
            height="114"
            className="d-inline-block align-text-top"
          />
        </a>
        <Typography
          variant="h7"
          style={{
            color: "white",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI",
            padding: "10px",
          }}
        >
          &copy;2024 All Rights Reserved
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
