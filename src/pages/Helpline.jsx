import React, { useState } from "react";
import "./Helpline.css";

const Helpline = () => {
  const [formData, setFormData] = useState({
    its: "",
    name: "",
    email: "",
    whatsapp: "",
    jamaat: "",
    category: "",
    query: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Submitting...");

  const formBody = new URLSearchParams(formData).toString();

  try {
    const response = await fetch( "https://script.google.com/macros/s/AKfycbxhDmyOQjfyMwkDAGYcs6T6nEnvdf8GP4RX5VwfOEKWNb9RoqRsRU8qeXfq5N9wJskP/exec", 
      {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

   const text = await response.text();
console.log("Raw response:", text);

let result;
try {
  result = JSON.parse(text);
} catch (e) {
  console.error("Failed to parse response:", e);
  setStatus("Submission failed: invalid response.");
  return;
}
    if (result.status === "success") {
      alert("Form submitted successfully!");

      // Reset the form
      setFormData({
        its: "",
        name: "",
        email: "",
        whatsapp: "",
        jamaat: "",
        category: "",
        query: "",
      });

      setStatus(null); // Optionally clear the status
    } else {
      setStatus("Error: " + result.message);
      setFormData({
        its: "",
        name: "",
        email: "",
        whatsapp: "",
        jamaat: "",
        category: "",
        query: "",
      });
      setStatus(null);
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    setStatus("Submission Successful.");
  }
};

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

        <form className="helpline-form" onSubmit={handleSubmit}>
          <input name="its" placeholder="ITS *" value={formData.its} onChange={handleChange} required />
          <input name="name" placeholder="Name *" value={formData.name} onChange={handleChange} required />
          <input name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
          <input name="whatsapp" placeholder="Whatsapp *" value={formData.whatsapp} onChange={handleChange} required />
          <input name="jamaat" placeholder="Your Jamaat *" value={formData.jamaat} onChange={handleChange} required />

          <div className="radio-group">
            <label>Choose Category *</label>
            {["Accommodation", "Transportation", "Info & Relay Centres", "Mawaid", "Other"].map((cat) => (
              <label key={cat}>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={formData.category === cat}
                  onChange={handleChange}
                  required
                />
                {cat}
              </label>
            ))}
          </div>

          <textarea
            name="query"
            placeholder="Describe your query *"
            value={formData.query}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Submit</button>
          { status && <p className="status-message">{status}</p>} 
        </form>
      </div>
    </div>
  );
};

export default Helpline;
