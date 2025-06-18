import React from "react";
import "./Helpline.css";

const Helpline = () => {
  return (
    <div className="helpline-container">
      <div className="helpline-card">
        <div className="logo-container">
          <img src="/ratlamrelayoff.svg" alt="Ratlam Relay Logo" className="helpline-logo" />
        </div>

        <div className="helpline-header">
          <h2>Ratlam Relay Centre Helpline</h2>
          <p>
            Ashara Mubarakah 1447H<br />
            <span>(Only For Registered Mumineen who have selected Ratlam Relay Centre)</span>
          </p>
        </div>

        <form
          className="helpline-form"
          action="https://formsubmit.co/helplinedeskratlam@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <div className="form-group">
            <label htmlFor="its">ITS *</label>
            <input type="text" id="its" name="ITS" required />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="whatsapp">Whatsapp Number *</label>
            <input type="tel" id="whatsapp" name="Whatsapp" required />
          </div>

          <div className="form-group">
            <label htmlFor="jamaat">Your Jamaat *</label>
            <input type="text" id="jamaat" name="Jamaat" required />
          </div>

          <div className="radio-group">
              <label className="radio-item">Choose Category*</label>
  <label className="radio-item">
    <input type="radio" name="category" value="Accommodation" required />
    Accommodation
  </label>
  <label className="radio-item">
    <input type="radio" name="category" value="Transportation" />
    Transportation
  </label>
  <label className="radio-item">
    <input type="radio" name="category" value="Info & Relay Centres" />
    Info & Relay Centres
  </label>
  <label className="radio-item">
    <input type="radio" name="category" value="Mawaid" />
    Mawaid
  </label>
  <label className="radio-item">
    <input type="radio" name="category" value="Other" />
    Other
  </label>
</div>

          <div className="form-group">
            <label htmlFor="query">Describe your query *</label>
            <textarea id="query" name="Query" rows="3" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Helpline;
