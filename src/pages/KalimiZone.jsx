import React from 'react';
import './zones.css';

const KalimiZone = () => {
  return (
    <div className="zones-container">
      <h1 className="zones-title">KALIMI ZONE</h1>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#333' }}>
        Welcome to Kalimi Zone – Waaz Relay centre for mumineen.
      </p>

      {/* Capacity container */}
     {/*  <div
        style={{
          border: '2px solid goldenrod',
          borderRadius: '10px',
          padding: '15px 20px',
          margin: '30px auto',
          maxWidth: '400px',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#333',
          backgroundColor: 'white',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          fontSize: '1.2rem'
        }}
      >
        Total Capacity: 3,000
      </div> */}

      {/* Map container */}
      <div
        className="map-container"
        style={{
          marginTop: '20px',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
        }}
      >
        <iframe
          title="Kalimi Map"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1292.6821091979073!2d75.0257989148246!3d23.325437167133558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3963fe9cb8f9a4db%3A0x9fcc87f554c1c0b4!2s82GG%2B7JC%20Masjid%2C%20Kalimi%20Colony%2C%20Ratlam%20(Dawoodi%20Bohra)%2C%20Laxman%20Pura%2C%20Ratlam%2C%20Madhya%20Pradesh%20457001!3m2!1d23.325698499999998!2d75.02651449999999!5e1!3m2!1sen!2sin!4v1749614191681!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default KalimiZone;
