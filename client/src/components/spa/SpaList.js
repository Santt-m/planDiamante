import React, { useEffect, useState } from 'react';
import SpaCard from './SpaCard';

const SpaList = () => {
    const [spas, setSpas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/spas')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('API response:', data);
                if (Array.isArray(data.data)) {
                    setSpas(data.data);
                } else {
                    throw new Error('Response is not an array');
                }
            })
            .catch(error => console.error('Error fetching spas:', error));
    }, []);

    return (
        <div>
            <h1>Spa List</h1>
            <div>
                {spas.map(spa => (
                    <SpaCard key={spa._id} spa={spa} />
                ))}
            </div>
        </div>
    );
};

export default SpaList;
