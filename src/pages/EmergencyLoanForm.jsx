import React, { useState } from "react";
import styled from "styled-components";

// Styled components with consistent Quicksand font
const FormContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-family: 'Quicksand', sans-serif;
`;

const FormTitle = styled.h2`
  color: #2BC0E4;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
  font-family: 'Quicksand', sans-serif;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  font-family: 'Quicksand', sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  position: relative;
  font-family: 'Quicksand', sans-serif;

  &:nth-child(5),
  &:nth-child(6) {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    &:nth-child(5),
    &:nth-child(6) {
      grid-column: span 1;
    }
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
  font-family: 'Quicksand', sans-serif;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #E4ECC6;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: #f8faf5;
  font-family: 'Quicksand', sans-serif;

  &:focus {
    outline: none;
    border-color: #2BC0E4;
    box-shadow: 0 0 0 2px rgba(43, 192, 228, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #E4ECC6;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s;
  background-color: #f8faf5;
  font-family: 'Quicksand', sans-serif;
  line-height: 1.6;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);

  &:focus {
    outline: none;
    border-color: #2BC0E4;
    box-shadow: 0 0 0 2px rgba(43, 192, 228, 0.2), 
                inset 0 1px 3px rgba(0,0,0,0.05);
  }

  &::placeholder {
    color: #888;
    font-style: italic;
  }
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  padding: 1rem;
  background: #2BC0E4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Quicksand', sans-serif;

  &:hover {
    background: #1da8cc;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const SuccessMessage = styled.div`
  grid-column: span 2;
  padding: 1.5rem;
  background-color: #E4ECC6;
  color: #2a5a2a;
  border-radius: 5px;
  text-align: center;
  margin-top: 1rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const ErrorMessage = styled.div`
  grid-column: span 2;
  color: #e74c3c;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const EmergencyLoanForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    nationalId: "",
    phoneNumber: "",
    amount: "",
    reason: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/Tazilhgathoni@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "Application Type": "Emergency Loan",
          "Full Name": formData.fullName,
          "National ID": formData.nationalId,
          "Phone Number": formData.phoneNumber,
          "Loan Amount (KES)": formData.amount,
          "Reason for Loan": formData.reason,
          "_subject": "New Loan Application - " + formData.fullName,
          "_template": "table"
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          nationalId: "",
          phoneNumber: "",
          amount: "",
          reason: ""
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      setError("Failed to submit application. Please try again later.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <FormContainer>
        <FormTitle>Loan Application</FormTitle>
        {submitted ? (
          <SuccessMessage>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#2a5a2a">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
            </svg>
            Thank you for your application! We'll contact you within 24 hours.
          </SuccessMessage>
        ) : (
          <StyledForm onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://yourwebsite.com/thank-you" />

            <FormGroup>
              <FormLabel>Full Name</FormLabel>
              <FormInput
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Dexter Morgan"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>National ID</FormLabel>
              <FormInput
                type="text"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                pattern="[0-9]{8}"
                title="8-digit National ID"
                placeholder="Enter your national ID"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Phone Number</FormLabel>
              <FormInput
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="10-digit phone number"
                placeholder="Enter your phone number"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Amount (KES)</FormLabel>
              <FormInput
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                min="1000"
                max="500000"
                placeholder="Enter loan amount"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Reason for Loan</FormLabel>
              <FormTextarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Please provide details about why you need this loan."
                required
              />
            </FormGroup>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </SubmitButton>
          </StyledForm>
        )}
      </FormContainer>
    </>
  );
};

export default EmergencyLoanForm;