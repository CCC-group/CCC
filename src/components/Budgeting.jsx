import React from "react";
import { Card, Typography, Grid, CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import services from "../assets/services.json";

const Budgeting = () => {
  return (
    <Grid container spacing={2}>
      {services.map((service, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card sx={{ border: '1px solid #ccc' }}>
            <CardContent>
              <img src={service.icon} alt="icon image" style={{ marginBottom: '10px' }} />
              <CardHeader
                title={service.service}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
              />
              <Typography variant="body1" component="div" >
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Budgeting;
