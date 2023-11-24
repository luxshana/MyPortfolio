import React, { useState, useEffect } from 'react';
import Lux from '../../Componets/images/Lux.png';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import my from '../../Componets/images/01.jpg';

const AboutContainer = styled('div')(({ theme }) => ({
  backgroundImage: `url(${my})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',

  position: 'relative'
}));

const TypingAnimation = ({ text, speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const controls = useAnimation();

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    controls.start({
      x: '0%',
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
    });
  };

  const openFacebookProfile = () => {
    window.open('https://www.linkedin.com/in/luxshana-sivapatham-43637b217/');
  };

  return (
    <AboutContainer className='about' id='/'>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
        <div className='col-2' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem' }}>
            <Typography variant="h3">
              <TypingAnimation text="Hi, I'm Luxshana Sivapatham" speed={30} />
            </Typography>
            <Typography variant="h4">A Software Developer Based in Sri Lanka</Typography>
            <span className='line'></span>
            <Box p={3}>
              <Button variant="contained" color="success" onClick={openFacebookProfile} >
                Hire me
              </Button>
            </Box>
          </div>
          
        </Grid>
        <Grid item xs={12} md={6}>
        <motion.img
            src={Lux}
            alt='john'
            width={780}
            height={800}
            style={{
              maxWidth: '100%',
              height:'100%',
              opacity: isImageLoaded ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
            }}
            onLoad={handleImageLoad}
            initial={{
              x: '-100%',
              opacity: 0,
            }}
            animate={controls}
          />
        </Grid>
      </Grid>
    </AboutContainer>
  );
};

export default About;