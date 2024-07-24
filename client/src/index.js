export { default as SpaCard } from './spa/SpaCard';
export { default as TherapistCard } from './therapist/TherapistCard';
export { default as Login } from './auth/Login';
export { default as Register } from './auth/Register';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
