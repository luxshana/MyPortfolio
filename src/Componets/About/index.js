import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // You can send the form data to a server or perform any desired actions

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };
  const openFacebookProfile = () => {
    window.open('https://drive.google.com/file/d/1alA67sHPj6-YaP8kTpW2hs0YFjEvkVUz/view?usp=sharing');
  };
  return (
    <Grid container spacing={2} sx={{ bgcolor: "black" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ color: "white", fontWeight: "300",p:5,display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}
      >
        <Box>
        <ListItemButton component="a">
          <ListItemIcon>
            <EmailIcon color="success" size='large' />
          </ListItemIcon>
          <ListItemText primary="lakshanasiva98@gmail.com" />
        </ListItemButton>
        <ListItemButton component="a">
          <ListItemIcon>
            <FmdGoodIcon color="success" size='large' />
          </ListItemIcon>
          <ListItemText primary="Sri lanka , Jaffna" />
        </ListItemButton>
        <ListItemButton component="a">
          <ListItemIcon>
            <GitHubIcon color="success" size='large'/>
          </ListItemIcon>
          <ListItemText primary="https://github.com/luxshana" />
        </ListItemButton>
        <ListItemButton component="a">
          <ListItemIcon>
            <LinkedInIcon color="success" size='large' />
          </ListItemIcon>
          <ListItemText primary="https://www.linkedin.com/in/luxshana-sivapatham-43637b217/" />
        </ListItemButton>
        <ListItemButton component="a">
        <Button color="success"variant="contained"  onClick={openFacebookProfile} >Download cv</Button>
        </ListItemButton>
        </Box>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Box
          className="contact"
          id="about"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "2rem",
          }}
        >
          {/* Contact Form */}
          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Send me a message
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              <TextField
                label="Your Name"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "#fff",
                    bgcolor: "#353434",
                  },
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Your Email"
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    color: "#fff",
                    bgcolor: "#353434",
                  },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                required
                InputProps={{
                  sx: {
                    color: "#fff",
                    bgcolor: "#353434",
                  },
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactPage;