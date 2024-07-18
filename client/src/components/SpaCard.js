import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const SpaCard = ({ spa }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${spa.image || 'https://via.placeholder.com/345x200'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        alignItems: 'flex-end',
        '&:hover .hover-content': {
          opacity: 1,
          maxHeight: '120px',
        },
        '& .default-content': {
          opacity: 1,
          maxHeight: '20px',
        },
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          padding: '8px',
          transition: 'opacity 0.6s, max-height 0.6s',
        }}
      >
        <Typography gutterBottom variant="h6" component="div" className="default-content">
          {spa.name}
        </Typography>
        <Typography variant="body2" className="default-content">
          {spa.specialty}
        </Typography>
        <Box className="hover-content" sx={{ opacity: 0, maxHeight: 0, overflow: 'hidden' }}>
          <Typography variant="body2">
            {spa.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SpaCard;
