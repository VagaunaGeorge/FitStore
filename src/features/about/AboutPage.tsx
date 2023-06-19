import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
    lat: 45.031428,
    lng: 23.268939
  };
  

const AboutPage: React.FC = () => {
  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Typography gutterBottom variant="h4">
            About us
          </Typography>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            We are an online e-commerce store specializing in winter sports equipment. Whether you're into skiing,
            snowboarding, we've got you covered with a wide range of high-quality gear and
            accessories.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Visit our store or give us a call to learn more about our products and services.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body2" gutterBottom>
                Phone: (+40) 761157357
              </Typography>
              <Typography variant="body2" gutterBottom>
                Email: georgevagauna@student.upt.ro
              </Typography>
              <Typography variant="body2" gutterBottom>
                Address: Gorj, Targu-Jiu, street Unirii  nr.20
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <LoadScript googleMapsApiKey="AIzaSyAPd95urArb_15eKwWOh4R8wS8nmbJ1l8Q">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
