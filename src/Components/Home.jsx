import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaBullhorn } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp ,FaMapMarkedAlt,FaPhoneAlt,FaVideo} from 'react-icons/fa'; // for FAQ toggles
import axios from 'axios'; // 📦 Make sure axios is installed

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
  const [weather, setWeather] = useState(null);

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

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'f3511f8915253b5609576994e5d5f12b';
        const city = 'Ratlam';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        console.log(response.data);
        setWeather({
          temp: response.data.main.temp, 
          desc: response.data.weather[0].description.toLowerCase(),
          icon: response.data.weather[0].icon,
        });
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    };

    fetchWeather();
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

  <div className="info-card">
    <div className="card-header">
      <FaVideo className="card-icon" />
      <h3>Webinars</h3>
    </div>
    <p>Click here to join Important Webinars</p>
    <a href="https://webinar.alvazarat.org" className="card-button">Join Webinar</a>
  </div>
</section>

{weather && (
  <section className="weather-section">
    <h2 className="weather-title">Current Weather - Ratlam</h2>
    <div className="weather-card">
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.desc}
        className="weather-icon"
      />
      <p className="weather-temp">{weather.temp}°C</p>
      <p className="weather-desc" style={{ textTransform: "capitalize" }}>
        {weather.desc}
      </p>

      {/* Weather Warning Logic */}
      <div className="weather-warning">
        {weather.desc.includes("rain") && (
          <p className="warning-text">⚠️ It's raining — carry an umbrella!</p>
        )}
        {weather.desc.includes("thunderstorm") && (
          <p className="warning-text">⚠️ Thunderstorms expected — stay indoors.</p>
        )}
        {weather.temp > 35 && (
          <p className="warning-text">⚠️ It's very hot — stay hydrated!</p>
        )}
        {weather.temp < 10 && (
          <p className="warning-text">⚠️ It's cold — Keep Yourself Warm.</p>
        )}
        {weather.desc.includes("clear") && (
          <p className="warning-text">⚠️ Clear skies — have a great day!</p>
        )}
      </div>
    </div>
  </section>
)}

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
