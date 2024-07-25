import React, { useEffect, useState } from 'react';
import TherapistCard from './TherapistCard';

const TherapistList = () => {
    const [therapists, setTherapists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/therapists')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('API response:', data);
                if (Array.isArray(data.data)) {
                    setTherapists(data.data);
                } else {
                    throw new Error('Response is not an array');
                }
            })
            .catch(error => console.error('Error fetching therapists:', error));
    }, []);

    return (
        <div>
            <h1>Therapist List</h1>
            <div>
                {therapists.map(therapist => (
                    <TherapistCard key={therapist._id} therapist={therapist} />
                ))}
            </div>
        </div>
    );
};

export default TherapistList;
