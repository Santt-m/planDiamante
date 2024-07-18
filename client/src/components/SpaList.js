import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpaList = () => {
  const [spas, setSpas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log('API URL:', apiUrl); // Verifica la URL de la API
    const fetchSpas = async () => {
      try {
        const response = await axios.get(`${apiUrl}/spas`);
        setSpas(response.data);
      } catch (error) {
        setError('Error fetching spas');
        console.error('Error fetching spas', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSpas();
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {spas.length > 0 ? (
        spas.map((spa) => (
          <div key={spa.id}>
            <h3>{spa.name}</h3>
            <p>{spa.location}</p>
          </div>
        ))
      ) : (
        <div>No spas available</div>
      )}
    </div>
  );
};

export default SpaList;
