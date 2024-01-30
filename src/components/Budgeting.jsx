import { Button, Card, Typography, Grid, CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import services from "../assets/services.json";

const Budgeting = () => {
  return (
    <div className="service-body" style={{ flexGrow: 1, overflow: 'auto' }}>
      <div style={{ textAlign: "center", padding:'15px', marginTop:'30px' }}>
        <Typography>
          <span style={{
              color: "#2243b6",
              fontSize: "1.5em",
              verticalAlign: "middle",
            }}>
            &mdash;&mdash;&mdash;&mdash;&mdash;
          </span>{" "}
          <h2 style={{
              color: "black",
              display: "inline",
              margin: "0 10px",
              verticalAlign: "middle",
              fontWeight:'lighter'
            }}>
            What we do
          </h2>{" "}
          <span style={{
              color: "#2243b6",
              fontSize: "1.5em",
              verticalAlign: "middle",
            }}>
            &mdash;&mdash;&mdash;&mdash;&mdash;
          </span>
        </Typography>
        <Typography variant="h1" 
          style={{
            display:'flex', 
            justifyContent:'center', 
            margin: '10px', 
            fontWeight:'bold', 
            color: '#2243b6'
            }}>
              Our Services
        </Typography>
      </div>
      <Grid container columnSpacing={0} direction="row" justifyContent="space-around">
        {services.map((service, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx} style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
            <Card sx={{ border: '1px solid #ccc', maxWidth:'300px', marginBottom:'3px' }}>
              <CardContent >
                <img src={service.icon} alt="icon image" style={{ marginBottom: '5px' }} />
                <CardHeader
                  title={service.service}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                />
                <Typography 
                  variant="body1" 
                  component="div" 
                  style={{display:'flex', justifyContent:'center',textAlign:'center'}}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="service-button">
        <Button variant="contained" 
          style={{
              margin:'50px', 
              borderRadius:'20px', 
              fontSize: '20px', 
              fontWeight:'lighter'}}>
          <Typography variant="h7" fontWeight="bold">
            To learn More <br />
          <Typography fontWeight="light">
              {" "}
              Click here
          </Typography>
          </Typography>
        </Button>
      </div>
      <div style={{backgroundColor:'white'}}>
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
                fontWeight:'lighter'
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
    </div>
  );
};

export default Budgeting;
