import React from 'react';
import './TravelGuides.css';
import { FaCarSide,FaTaxi } from 'react-icons/fa';

const fares = [
  {
    from: 'Ratlam Station',
    to: 'Kalimi Dome',
    fare: '₹100 - ₹120',
    distance: '3.5 km'
  },
  {
    from: 'Ratlam Station',
    to: 'Burhani Zone',
    fare: '₹70 - ₹80',
    distance: '3.4 km'
  },
  {
    from: 'Ratlam Station',
    to: 'Saifee Zone',
    fare: '₹80 - ₹100',
    distance: '3.7 km'
  },
  {
    from: 'Ratlam Station',
    to: 'Najmi Zone',
    fare: '₹80 - ₹100',
    distance: '4.0 km'
  },
  {
    from: 'Burhani Zone',
    to: 'Kalimi Zone',
    fare: '₹60 - ₹70',
    distance: '1.6 km'
  },
  {
    from: 'Saifee Zone',
    to: 'Kalimi Zone',
    fare: '₹50',
    distance: '1.2 km'
  }
  /* {
    from: 'Burhani Park',
    to: 'Madarasa Campus',
    fare: '₹30 - ₹50',
    distance: '1 km'
  } */
];

const TravelGuides = () => {
  return (
    <div className="travel-guides-container">
      <div className="header-section">
        <FaTaxi      className="header-icon" />
        <h2>Transport Fare Guide</h2>
        <p>Approximate auto rickshaw fares and distances for major locations</p>
      </div>

      <div className="cards-container">
        {fares.map((fare, index) => (
          <div className="fare-card" key={index}>
            <div className="card-header">
              {fare.from} <span className="to-separator">to</span> {fare.to}
            </div>
            <div className="card-distance">{fare.distance}</div>
            <div className="card-fare">{fare.fare}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelGuides;
