import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { dataSet } from '../../Constants/jsonData';

const DemoContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'black',
  padding: '20px',
}));

const SkillBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  padding: '10px',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s ease', // Add transition for smooth effect
  '&:hover': {
    backgroundColor: '#2a2a2a', // Change the background color on hover
  },
}));

const SkillName = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: 'bold',
}));

const SkillPercentage = styled(Typography)(({ theme }) => ({
  color: '#bdbdbd',
  fontSize: '14px',
}));

const Demo = () => {
  return (
    <DemoContainer className='demo' id='demo'>
      <Box sx={{ bgcolor: 'black', py: 4 }}>
        <Typography variant='h3' color='white' align='center'>
          Skills
        </Typography>
        <Grid container spacing={3} justifyContent='center'>
          {dataSet.map((data) => (
            <Grid item xs={12} sm={6} md={4} key={data.name}>
              <SkillBox>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, y: -50 }}
                  >
                    <SkillName variant='h5' sx={{ mb: 1 }}>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {data.name.charAt(0)}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {data.name.slice(1)}
                      </motion.span>
                    </SkillName>
                  </motion.div>
                </AnimatePresence>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${data.proficiency}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: 'green', // Change the color here
                  }}
                />
                <SkillPercentage variant='body2'>{data.proficiency}%</SkillPercentage>
              </SkillBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </DemoContainer>
  );
};

export default Demo;