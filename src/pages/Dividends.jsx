import React, { useState } from "react";
import styled from "styled-components";
import { FaCalculator, FaCoins, FaPercentage } from "react-icons/fa";

const DividendsContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background-color: #f9fbf4;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  color: #2a4365;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, #2BC0E4 0%, #E4ECC6 100%);
    border-radius: 2px;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const CalculatorCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 2.5rem;
  margin: 2rem auto;
  max-width: 800px;
  border-left: 4px solid #2BC0E4;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const InputContainer = styled.div`
  flex: 1;
  position: relative;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2a4365;
    font-weight: 600;
  }

  input, select {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: 'Quicksand', sans-serif;

    &:focus {
      outline: none;
      border-color: #2BC0E4;
      box-shadow: 0 0 0 3px rgba(43, 192, 228, 0.2);
    }
  }

  .input-icon {
    position: absolute;
    right: 1rem;
    top: 2.5rem;
    color: #718096;
  }
`;

const CalculateButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #2BC0E4 0%, #4CA1AF 100%);
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1.8rem;
  min-width: 150px;
  height: 48px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: linear-gradient(90deg, #4CA1AF 0%, #2BC0E4 100%);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const ResultCard = styled.div`
  background-color: #f0f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
  border-left: 4px solid #2BC0E4;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2BC0E4;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  p {
    margin: 0;
    color: #2a4365;
    font-size: 1.1rem;

    strong {
      font-size: 1.3rem;
      color: #2BC0E4;
    }
  }
`;

const Dividends = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(10);
  const [result, setResult] = useState(null);

  const calculateDividends = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }
    const value = (parseFloat(amount) * rate) / 100;
    setResult(value.toFixed(2));
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <DividendsContainer>
        <SectionTitle>Dividends Calculator</SectionTitle>
        
        <CalculatorCard>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', textAlign: 'center' }}>
            We distribute annual dividends to our members based on their savings and shares. 
            The average dividend rate for the past 3 years was <strong>10-12%</strong>.
          </p>

          <form onSubmit={calculateDividends}>
            <InputGroup>
              <InputContainer>
                <label htmlFor="amount">Your Shares Amount (KES)</label>
                <input
                  type="number"
                  id="amount"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="input-icon">
                  <FaCoins />
                </div>
              </InputContainer>

              <InputContainer style={{ maxWidth: '200px' }}>
                <label htmlFor="rate">Dividend Rate (%)</label>
                <select
                  id="rate"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                >
                  <option value="8">8%</option>
                  <option value="9">9%</option>
                  <option value="10">10%</option>
                  <option value="11">11%</option>
                  <option value="12">12%</option>
                </select>
                <div className="input-icon">
                  <FaPercentage />
                </div>
              </InputContainer>
            </InputGroup>

            <CalculateButton type="submit">
              <FaCalculator /> Calculate
            </CalculateButton>
          </form>

          {result && (
            <ResultCard>
              <FaCoins />
              <p>
                Estimated Annual Dividends: <strong>KES {result}</strong>
              </p>
            </ResultCard>
          )}

          <div style={{ marginTop: '2rem', color: '#4a5568', fontSize: '0.9rem' }}>
            <p>
              <strong>Note:</strong> Dividend rates are determined annually based on SACCO performance. 
              This calculator provides estimates only. Actual dividends may vary.
            </p>
          </div>
        </CalculatorCard>
      </DividendsContainer>
    </>
  );
};

export default Dividends;