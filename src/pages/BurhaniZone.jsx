import React from 'react';
import './zones.css';

const BurhaniZone = () => {
  return (
    <div>
        <div className="zones-container">
          <h1 className="zones-title">BURHANI ZONE</h1>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#333' }}>
            Welcome to Burhani Zone – Waaz Relay centre for mumineen.
          </p>

          {/* Capacity container */}
          {/* <div
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
            Total Capacity: 1,800
          </div> */}

          {/* Map container with shadow */}
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
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d657.3734086210666!2d75.03736497436554!3d23.31982412387565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3963fd0b217fce3f%3A0x63c88e5d6deeecac!2s82CQ%2B33J%20Burhani%20Masjid%2C%20Ratlam%20(Dawoodi%20Bohra)%2C%20Bharava%20Kui%2C%20Bohra%20Baakhal%2C%20Ratlam%2C%20Madhya%20Pradesh%20457001!3m2!1d23.320218999999998!2d75.03764199999999!5e1!3m2!1sen!2sin!4v1749617250756!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    
  );
};

export default BurhaniZone;

