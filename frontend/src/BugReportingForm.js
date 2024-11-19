/* Assuming you're using React for the frontend */
import React, { useState } from "react";
import axios from "axios";
import "./BugReportingForm.css";

const BugReportingForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    environment: "",
    stepsToReproduce: "",
    expectedOutcome: "",
    actualOutcome: "",
  });

  const steps = [
    { name: "title", label: "Bug Title" },
    { name: "description", label: "Bug Description" },
    { name: "priority", label: "Priority (Low, Medium, High)" },
    { name: "environment", label: "Environment (Browser/OS)" },
    { name: "stepsToReproduce", label: "Steps to Reproduce" },
    { name: "expectedOutcome", label: "Expected Outcome" },
    { name: "actualOutcome", label: "Actual Outcome" },
  ];

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/bugs", formData);
      alert("Bug reported successfully!");
      // Reset form and step after successful submission
      setFormData({
        title: "",
        description: "",
        priority: "",
        environment: "",
        stepsToReproduce: "",
        expectedOutcome: "",
        actualOutcome: "",
      });
      setStep(0);
    } catch (error) {
      console.error("Error submitting bug report: ", error);
      alert("Failed to report bug, please try again.");
    }
  };

  return (
    <div className="bug-reporting-container">
      <h2 className="form-title">Bug Reporting Form</h2>
      <div className="form-step">
        <label htmlFor={steps[step].name} className="form-label">
          {steps[step].label}
        </label>
        <input
          type="text"
          name={steps[step].name}
          value={formData[steps[step].name]}
          onChange={handleInputChange}
          className="form-input"
          placeholder={steps[step].label}
        />
      </div>
      <div className="form-navigation">
        {step > 0 && <button onClick={handlePreviousStep} className="btn prev-btn">Previous</button>}
        {step < steps.length - 1 ? (
          <button onClick={handleNextStep} className="btn next-btn">Next</button>
        ) : (
          <button onClick={handleSubmit} className="btn submit-btn">Submit</button>
        )}
      </div>
    </div>
  );
};

export default BugReportingForm;