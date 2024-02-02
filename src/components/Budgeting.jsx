import { Button, Card, Typography, Grid, CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import services from "../assets/services.json";

const Budgeting = () => {
  return (
    <>
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
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
           Our Services
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
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card sx={{ border: "1px solid #ccc", height: "100%" }}>
              <CardContent
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={service.icon}
                  alt="icon image"
                  style={{
                    marginBottom: "10px",
                   
                  }}
                />
                <CardHeader
                  title={service.service}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                />
                <Typography
                  variant="body1"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Budgeting;
