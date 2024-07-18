import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Sobre Nosotros
      </Typography>
      <Typography variant="body1" gutterBottom>
        Plan Diamante es una plataforma dedicada a conectar a los mejores terapeutas y spas con clientes que buscan servicios de bienestar y relajación.
      </Typography>
    </Container>
  );
};

export default About;
