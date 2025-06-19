import React from 'react';
import './zones.css';

const KalimiDomeZone = () => {
  return (
    <div>
        <div className="zones-container">
          <h1 className="zones-title">KALIMI DOME ZONE</h1>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#333' }}>
            Welcome to KALIMI DOME – a central Waaz centre for mumineen.
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
            Total Capacity: 10,400
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
              title="Kalimi Dome Map"
              src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d861.2799617165799!2d75.02743832944614!3d23.32612635802497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d23.326684099999998!2d75.0275254!5e1!3m2!1sen!2sin!4v1749539349712!5m2!1sen!2sin"
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

export default KalimiDomeZone;
