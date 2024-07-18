import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TherapistCard from './TherapistCard';
import { Grid } from '@mui/material';

const TherapistList = () => {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log('API URL:', apiUrl); // Verifica la URL de la API
    const fetchTherapists = async () => {
      try {
        const response = await axios.get(`${apiUrl}/therapists`);
        setTherapists(response.data);
      } catch (error) {
        setError('Error fetching therapists');
        console.error('Error fetching therapists', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTherapists();
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Grid container spacing={3}>
      {therapists.map((therapist) => (
        <Grid item xs={12} sm={6} md={4} key={therapist._id}>
          <TherapistCard therapist={therapist} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TherapistList;
