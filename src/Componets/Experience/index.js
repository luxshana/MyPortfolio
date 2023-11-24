import React from 'react';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CodeIcon from '@mui/icons-material/Code';

const TestimonialsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: 'black',
  color: 'rgb(243, 241, 241)',
  padding: '10px',
  display: 'flex',
  flexDirection: 'row',
}));

const TestimonialsContent = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1240px',
  margin: '4rem auto',
  padding: '4rem 0rem',
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  color: 'white',
}));

const CustomTabPanel = ({ children, value, index }) => {
  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`}>
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Testimonials = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const responsibilities = [
    {
      id: 1,
      title: 'Intern Software Engineer',
      date: 'Apr 2022 - Nov 2022',
      description: [
        'Test functionalities',
        'Integrate API endpoints for developed frontends',
        'React.js',
        'Front-End Development',
      ],
    },
    {
      id: 2,
      title: 'Associate Software Engineer',
      date: 'Nov 2022 - Nov 2023',
      description: [
        'Responsive Web Design',
        'Test functionalities',
        'Debug and fix bugs',
        'Integrate API endpoints for developed frontends',
        'React.js',
        'Front-End Development',
      ],
    },
  ];

  return (
    <TestimonialsContainer className='testimonials' id='experience'>
      <TestimonialsContent className='container'>
        <Typography variant='h2'>Experience</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%' }}>
              <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' textColor="inherit" fontWeight={300}>
                {responsibilities.map((item) => (
                  <CustomTab key={item.id} label={item.title} {...a11yProps(item.id - 1)} />
                ))}
              </Tabs>
              {responsibilities.map((item) => (
                <CustomTabPanel key={item.id} value={value} index={item.id - 1}>
                  <Typography variant='h6'>{item.date}</Typography>
                  <ul>
                    {item.description.map((desc, index) => (
                      <li key={index} fontWeight={300}>{desc}</li>
                    ))}
                  </ul>
                </CustomTabPanel>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography><CodeIcon color='success' fontSize="large" /></Typography>
            <Typography variant='h2' fontWeight={300}>
              Software developer at XdotO concepts
            </Typography>
          </Grid>
        </Grid>
      </TestimonialsContent>
    </TestimonialsContainer>
  );
};

export default Testimonials;