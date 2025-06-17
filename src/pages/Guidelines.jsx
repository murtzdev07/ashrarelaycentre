import React from 'react';
import './Guidelines.css';
import { FaRegListAlt, FaUserShield, FaTshirt, FaHandsHelping, FaIdCardAlt, FaRecycle } from 'react-icons/fa';

const Guidelines = () => {
  const guidelines = [
    /* {
      icon: <FaTshirt />,
      title: 'Dress Code & Attendance',
      content: (
        <ul>
          <li>Wear proper Libas-ul-Anwar during Waaz and Majlis.</li>
          <li>Arrive Before time and attend full sessions daily.</li>
        </ul>
      ),
    }, */
    {
      icon: <FaHandsHelping />,
      title: 'Respect & Behavior',
      content: (
        <ul>
          <li>Maintain silence & Switch off your Electronic Devices during Waaz.</li>
          <li>Follow volunteer instructions.</li>
          <li>Offer assistance to elders and children.</li>
          <li>Always strive to maintain respectful and harmonious relations with people of all faiths. </li>
        </ul>
      ),
    },
    {
      icon: <FaRecycle />,
      title: 'Cleanliness & Safety',
      content: (
        <ul>
          <li>Use dustbins; avoid littering.</li>
          <li>Carry Shoe-Bags with you.</li>
          <li>Report emergencies or issues to staff.</li>
        </ul>
      ),
    },
    {
      icon: <FaIdCardAlt />,
      title: 'ID & Entry Pass',
      content: (
        <ul>
          <li>Always carry your ITS ID & Raza letter & Pass.</li>
          <li>Use designated entry and exit gates.</li>
        </ul>
      ),
    },
    {
      icon: <FaUserShield />,
      title: 'Security Compliance',
      content: (
        <ul>
          <li>Do not bring restricted items.</li>
          <li>Cooperate with security checks.</li>
        </ul>
      ),
    },
  ];

 return (
  <div className="guidelines-container">
    <h2 className="guidelines-section-title">
      <FaRegListAlt /> General Guidelines
    </h2>
    <div className="guidelines-list">
      {guidelines.map((item, index) => (
        <div key={index} className="guideline-card">
          <div className="guideline-header">
            <span className="guideline-icon">{item.icon}</span>
            <h3 className="guideline-title">{item.title}</h3>
          </div>
          <div className="guideline-content">{item.content}</div>
        </div>
      ))}
    </div>
  </div>
);
}
export default Guidelines;
