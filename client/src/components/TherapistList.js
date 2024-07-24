import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TherapistCard from './TherapistCard';

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
        if (response.data && Array.isArray(response.data.data)) {
          setTherapists(response.data.data);
        } else {
          setError('Invalid data format');
        }
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
    <div>
      {therapists.length > 0 ? (
        therapists.map((therapist) => (
          <TherapistCard key={therapist.id} therapist={therapist} />
        ))
      ) : (
        <div>No therapists available</div>
      )}
    </div>
  );
};

export default TherapistList;
