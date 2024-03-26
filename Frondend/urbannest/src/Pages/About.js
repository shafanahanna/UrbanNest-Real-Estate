import React, { useState } from "react";
import axios from "axios";

function Twilio() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefualt();
    try {
      const response = await axios.post("/request-otp", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.success === false) {
        setError(response.data.message);
        return;
      }
      setError(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form id="otpForm" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        id="phoneNumber"
        placeholder="phoneNumber"
        required
      />
      <button type="submit">Request OTP</button>
    </form>
  );
}
export default Twilio;
