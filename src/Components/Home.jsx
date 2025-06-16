import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaBullhorn } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp ,FaMapMarkedAlt,FaPhoneAlt} from 'react-icons/fa'; // for FAQ toggles

const faqs = [
  {
    question: "How To Reach Waaz Venue Destination?",
    answer: "You can use Local public Transport or You can visit by walk if you are nearer to your alotted Venue."
  },
  {
    question: "Where is the Mumineen Help Desk located?",
    answer: "The Mumineen Help Desk is located near the main entrance of the Ratlam Relay Centre."
  },
  {
    question: "Can I use international credit/debit cards in Ratlam?",
    answer: "Yes, most international credit/debit cards are accepted at major hotels and stores. However, it is advisable to carry some local currency for small purchases."
  },
  {
    question: "What should I do if I have lost my ITS card?",
    answer: "Please report to the Mumineen Help Desk immediately. They will assist you with the necessary steps to get a replacement."
  }
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const targetDate = new Date("2025-06-27T00:00:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById("countdown").textContent = "Ashara has begun!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById("countdown").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>

      <div className="hero-background">
  <div className="image-container">
    <img
      src="/rtmrelaycenter.svg"
      alt="Ashara 1447H"
      className="centered-image"
    />
  </div>
</div>


      <section className="cards-container">
  <div className="info-card">
    <div className="card-header">
      <FaBullhorn className="card-icon" />
      <h3>Important Announcements</h3>
    </div>
    <p>Stay updated with the latest guidance and notices for Ashara Mubaraka 1447H.</p>
    <a href="/announcements" className="card-button">View Announcements</a>
  </div>

  <div className="info-card">
    <div className="card-header">
      <FaMapMarkedAlt className="card-icon" />
      <h3>Waaz Relay Centres</h3>
    </div>
    <p>Find your allocated relay zone and center for Waaz Talaqqi.</p>
    <a href="/zones" className="card-button">View Relay Zones</a>
  </div>

  <div className="info-card">
    <div className="card-header">
      <FaPhoneAlt className="card-icon" />
      <h3>Helpline </h3>
    </div>
    <p>Any Queries?? Just Visit Here</p>
    <a href="/helpline" className="card-button"> Visit Helpline </a>
  </div>
</section>


      {/* 🔻 FAQ Section Here */}
      <section className="announcement-container">
        <div className="announcement-section faq-section">
          <div className="left-announcement">
            <div className="announcement-header">
              <FaBullhorn />
              <span>Frequently Asked Questions</span>
            </div>

            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                key={index}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
