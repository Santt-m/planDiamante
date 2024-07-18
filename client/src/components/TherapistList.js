import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TherapistList = () => {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
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
    <div>
      {therapists.length > 0 ? (
        therapists.map((therapist) => (
          <div key={therapist.id}>
            <h3>{therapist.name}</h3>
            <p>{therapist.specialty}</p>
          </div>
        ))
      ) : (
        <div>No therapists available</div>
      )}
    </div>
  );
};

export default TherapistList;
