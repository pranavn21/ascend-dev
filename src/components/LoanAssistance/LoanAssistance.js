import React, { useState } from "react";

const LoanAssistance = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    annualRevenue: "",
    loanAmount: "",
  });

  const [estimate, setEstimate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple loan estimate logic (placeholder for actual calculation)
    if (formData.annualRevenue && formData.loanAmount) {
      const approvalChance =
        parseFloat(formData.annualRevenue) > parseFloat(formData.loanAmount)
          ? "High"
          : "Low";
      setEstimate(`Approval Chance: ${approvalChance}`);
    } else {
      setEstimate("Please fill in all fields with valid numbers.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Loan Assistance Form</h2>
      <form onSubmit={handleSubmit}>
        
        
        <div style={{ marginBottom: "15px" }}>
          <label>
            Annual Revenue ($):
            <input
              type="number"
              name="annualRevenue"
              value={formData.annualRevenue}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Loan Amount Requested ($):
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Get Estimate
        </button>
      </form>
      {estimate && <p style={{ marginTop: "20px" }}>{estimate}</p>}
    </div>
  );
};

export default LoanAssistance;

