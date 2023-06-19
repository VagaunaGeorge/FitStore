import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    // Perform form submission logic here

    setIsSubmitting(true);

    try {
      // Simulating an asynchronous API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show toast notification
      toast.success('Your message is sent', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      // Reset form and submission state
      e.target.reset();
    } catch (error) {
      toast.error('Error occurred. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        FitStore
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <ToastContainer />
    </div>
  );
}
