import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TherapistCard from './TherapistCard';

const TherapistList = () => {
  const [therapists, setTherapists] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL + '/therapists';

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTherapists(response.data);
        console.log('Terapeutas obtenidos del servidor:', response.data);
      } catch (error) {
        console.error('Error fetching therapists:', error);
      }
    };

    fetchTherapists();
  }, [apiUrl]);

  return (
    <div>
      {therapists.map(therapist => (
        <TherapistCard key={therapist._id} therapist={therapist} />
      ))}
    </div>
  );
};

export default TherapistList;
