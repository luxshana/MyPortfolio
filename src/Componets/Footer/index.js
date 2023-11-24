import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // You can send the form data to a server or perform any desired actions

    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box
      className='contact'
      id='about'
      sx={{
        backgroundColor: '#353434',
        color: '#fff',
        padding: '2rem',
   
      }}
    >
      {/* Your form code here */}
      
      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: '#353434',
          color: 'white',
          py: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='body2' sx={{ ml: 2, fontSize: 20 }}>
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </Typography>

        <Box sx={{ display: 'flex', mr: 2 }}>
          <Box
            component="a"
            href='https://github.com/luxshana'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ mx: 1, color: 'white', fontSize: '1.5rem' }}
          >
            <GitHubIcon />
          </Box>
          {/* <Box
            component="a"
            href='https://www.instagram.com/your-instagram-page'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ mx: 1, color: 'green', fontSize: '1.5rem' }}
          >
            <InstagramIcon />
          </Box> */}
          <Box
            component="a"
            href='https://www.linkedin.com/in/luxshana-sivapatham-43637b217/'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ mx: 1, color: 'white', fontSize: '1.5rem' }}
          >
            <LinkedInIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;