import React from "react";
import "./Helpline.css";

const Helpline = () => {
  return (
    <div className="helpline-container">
      <div className="helpline-card">
        {/* Logo */}
        <div className="logo-container">
          <img src="/ratlamrelayoff.svg" alt="Ratlam Relay Logo" className="helpline-logo" />
        </div>

        {/* Title & Subheading */}
        <div className="helpline-header">
          <h2>Ratlam Relay Centre Helpline</h2>
          <p>
            Ashara Mubarakah 1447H<br />
            <span>(Only For Registered Mumineen who have selected Ratlam Relay Centre)</span>
          </p>
        </div>

        {/* Form */}
        <form
  className="helpline-form"
  action="https://formsubmit.co/helplinedeskratlam@gmail.com"
  method="POST"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="box" />

  <div className="form-group">
    <label>ITS *</label>
    <input type="text" name="ITS" required />
  </div>

  <div className="form-group">
    <label>Name *</label>
    <input type="text" name="Name" required />
  </div>

  <div className="form-group">
    <label>Email *</label>
    <input type="email" name="Email" required />
  </div>

  <div className="form-group">
    <label>Whatsapp Number *</label>
    <input type="tel" name="Whatsapp" required />
  </div>

  <div className="form-group">
    <label>Your Jamaat *</label>
    <input type="text" name="Jamaat" required />
  </div>

 <div class="form-group">
  <label for="category">Choose Category *</label>
  <div class="radio-group">
    <label><input type="radio" name="category" value="Accommodation"/> Accommodation</label>
    <label><input type="radio" name="category" value="Transportation"/> Transportation</label>
    <label><input type="radio" name="category" value="Zone Info & Relay Centres"/> Zone Info & Relay Centres</label>
    <label><input type="radio" name="category" value="Mawaid"/> Mawaid</label>
    <label><input type="radio" name="category" value="Other"/> Other</label>
  </div>
</div>


  <div className="form-group">
    <label>Describe your query *</label>
    <textarea name="Query" rows="3" required></textarea>
  </div>

  <button type="submit" className="submit-btn">Submit</button>
</form>

      </div>
    </div>
  );
};

export default Helpline;
