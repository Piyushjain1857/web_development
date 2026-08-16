import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("All fields are required");
      return;
    }

    setError("");

    // ============================
    // API CALL WILL GO HERE
    // ============================
    /*
    fetch("https://your-api.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    */

    setSubmittedData(formData);

    // Optional: Clear Form After Submission
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>

        <br />

        <div>
          <label>Phone Number:</label>
          <br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        </div>

        <br />

        {error && <p>{error}</p>}

        <button type="submit">Submit</button>
      </form>

      {/* Render Submitted Data */}
      {submittedData && (
        <div>
          <h3>Submitted Data</h3>

          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>

          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>

          <p>
            <strong>Phone:</strong> {submittedData.phone}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
