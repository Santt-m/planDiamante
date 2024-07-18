import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SpaCard from './SpaCard';

const SpaList = () => {
  const [spas, setSpas] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL + '/spas';

  useEffect(() => {
    const fetchSpas = async () => {
      try {
        const response = await axios.get(apiUrl);
        setSpas(response.data);
        console.log('Spas obtenidos del servidor:', response.data);
      } catch (error) {
        console.error('Error fetching spas:', error);
      }
    };

    fetchSpas();
  }, [apiUrl]);

  return (
    <div>
      {spas.map(spa => (
        <SpaCard key={spa._id} spa={spa} />
      ))}
    </div>
  );
};

export default SpaList;
