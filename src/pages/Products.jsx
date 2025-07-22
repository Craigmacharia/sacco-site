import styled from 'styled-components';
import { 
  FaHandHoldingUsd, 
  FaPiggyBank, 
  FaFileDownload, 
  FaEnvelope,
  FaCalculator,
  FaChartLine,
  FaMobileAlt,
  FaShieldAlt,
  FaUserFriends
} from 'react-icons/fa';
import { useState } from 'react';

// Styled components
const ProductsContainer = styled.div`
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
  margin-bottom: 2.5rem;
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => props.color || '#2BC0E4'};
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: ${props => props.color || '#2BC0E4'};

  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }

  h3 {
    font-weight: 700;
    margin: 0;
    font-size: 1.5rem;
  }
`;

const ProductList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;

  li {
    position: relative;
    padding-left: 1.8rem;
    margin-bottom: 1rem;
    color: #4a5568;
    line-height: 1.6;

    &:before {
      content: '•';
      color: ${props => props.color || '#2BC0E4'};
      font-weight: bold;
      position: absolute;
      left: 0;
      font-size: 1.5rem;
      line-height: 1;
    }
  }
`;

const FeatureHighlight = styled.div`
  background-color: rgba(43, 192, 228, 0.1);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;

  svg {
    color: #2BC0E4;
    font-size: 1.5rem;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  p {
    margin: 0;
    color: #2a4365;
    font-weight: 500;
  }
`;

const DownloadSection = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin-top: 3rem;
  border-left: 4px solid #2BC0E4;

  h3 {
    color: #2a4365;
    font-weight: 700;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
      color: #2BC0E4;
    }
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const FormCard = styled.a`
  background-color: #f0f4f8;
  border-radius: 8px;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2a4365;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e2e8f0;
    transform: translateY(-3px);
  }

  svg {
    color: #2BC0E4;
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  span {
    font-weight: 600;
  }
`;

const LoanCalculator = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin-top: 3rem;
  border-left: 4px solid #2BC0E4;

  h3 {
    color: #2a4365;
    font-weight: 700;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
      color: #2BC0E4;
    }
  }
`;

const CalculatorForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
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
`;

const CalculateButton = styled.button`
  grid-column: 1 / -1;
  background: linear-gradient(90deg, #2BC0E4 0%, #4CA1AF 100%);
  color: white;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(90deg, #4CA1AF 0%, #2BC0E4 100%);
    transform: translateY(-2px);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const ResultCard = styled.div`
  background-color: #f0f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-left: 4px solid #2BC0E4;
  display: ${props => props.show ? 'flex' : 'none'};
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

function Products() {
  const [calculatorValues, setCalculatorValues] = useState({
    amount: '',
    period: '6',
    loanType: 'development'
  });
  const [calculationResult, setCalculationResult] = useState(null);

  const loanProducts = [
    "Emergency Loan - Quick access to funds for urgent needs (up to KES 500,000)",
    "Development Loan - For business growth or property development (up to KES 5M)",
    "School Fees Loan - Education financing with flexible repayment terms",
    "Asset Financing - Purchase vehicles or equipment (up to 90% financing)",
    "Salary Advance - Short-term loan against your salary (up to 50% of salary)",
    "Medical Loan - For healthcare expenses (0% interest for members)"
  ];

  const savingsOptions = [
    "Fixed Deposit - Higher interest for locked savings (3-12 month terms)",
    "Junior Savings - Special accounts for children with bonus interest",
    "Retirement Savings - Long-term savings plan with tax benefits",
    "Goal-Based Savings - Save for specific objectives with target tracking",
    "Daily Savings - Small daily contributions (Minimum KES 50 per day)",
    "SACCO Shares - Invest in ownership shares with annual dividends"
  ];

  const digitalFeatures = [
    "Mobile Banking App - Access your accounts anytime, anywhere",
    "USSD Banking - Banking services via *483# (No internet needed)",
    "Online Member Portal - View statements and manage accounts",
    "SMS Alerts - Real-time notifications for all transactions",
    "Cardless Withdrawals - Withdraw cash without your ATM card"
  ];

  const forms = [
    { name: "Loan Application Form", link: "loan_application.pdf" },
    { name: "Savings Account Form", link: "savings_account.pdf" },
    { name: "Membership Application", link: "membership_form.pdf" },
    { name: "Guarantor Form", link: "guarantor_form.pdf" }
  ];

  const calculateLoan = (e) => {
    e.preventDefault();
    // Simple calculation logic - would be replaced with actual loan calculation
    const amount = parseFloat(calculatorValues.amount);
    const period = parseInt(calculatorValues.period);
    
    if (isNaN(amount)) {
      alert("Please enter a valid loan amount");
      return;
    }

    let interestRate;
    switch(calculatorValues.loanType) {
      case 'emergency':
        interestRate = 0.12; // 12%
        break;
      case 'development':
        interestRate = 0.10; // 10%
        break;
      case 'school':
        interestRate = 0.08; // 8%
        break;
      default:
        interestRate = 0.10;
    }

    const totalInterest = amount * interestRate * (period / 12);
    const monthlyPayment = (amount + totalInterest) / period;

    setCalculationResult({
      totalAmount: (amount + totalInterest).toFixed(2),
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    });
  };

  const handleCalculatorChange = (e) => {
    setCalculatorValues({
      ...calculatorValues,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <ProductsContainer>
        <SectionTitle>Our Financial Products</SectionTitle>
        <p style={{ color: '#4a5568', fontSize: '1.1rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
          We offer a comprehensive range of financial products designed to help our members save, borrow, and grow their wealth with competitive rates and flexible terms.
        </p>

        <ProductGrid>
          <ProductCard color="#2BC0E4">
            <ProductHeader color="#2BC0E4">
              <FaHandHoldingUsd />
              <h3>Loan Products</h3>
            </ProductHeader>
            <ProductList color="#2BC0E4">
              {loanProducts.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ProductList>
            <FeatureHighlight>
              <FaChartLine />
              <p>Competitive interest rates starting from 8% per annum</p>
            </FeatureHighlight>
          </ProductCard>

          <ProductCard color="#4CA1AF">
            <ProductHeader color="#4CA1AF">
              <FaPiggyBank />
              <h3>Savings Options</h3>
            </ProductHeader>
            <ProductList color="#4CA1AF">
              {savingsOptions.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ProductList>
            <FeatureHighlight>
              <FaChartLine />
              <p>Earn dividends up to 12% on your savings annually</p>
            </FeatureHighlight>
          </ProductCard>

          <ProductCard color="#25D366">
            <ProductHeader color="#25D366">
              <FaMobileAlt />
              <h3>Digital Services</h3>
            </ProductHeader>
            <ProductList color="#25D366">
              {digitalFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ProductList>
            <FeatureHighlight>
              <FaShieldAlt />
              <p>Secure 256-bit encryption for all digital transactions</p>
            </FeatureHighlight>
          </ProductCard>

          
        </ProductGrid>

        <LoanCalculator>
          <h3>
            <FaCalculator /> Loan Calculator
          </h3>
          <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
            Estimate your loan repayment amounts based on different loan products and terms
          </p>
          
          <CalculatorForm onSubmit={calculateLoan}>
            <InputGroup>
              <label htmlFor="amount">Loan Amount (KES)</label>
              <input 
                type="number" 
                id="amount" 
                name="amount"
                placeholder="e.g. 100,000" 
                value={calculatorValues.amount}
                onChange={handleCalculatorChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="period">Repayment Period (Months)</label>
              <select
                id="period"
                name="period"
                value={calculatorValues.period}
                onChange={handleCalculatorChange}
              >
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
                <option value="36">36 Months</option>
              </select>
            </InputGroup>

            <InputGroup>
              <label htmlFor="loanType">Loan Type</label>
              <select
                id="loanType"
                name="loanType"
                value={calculatorValues.loanType}
                onChange={handleCalculatorChange}
              >
                <option value="development">Development Loan (10%)</option>
                <option value="emergency">Emergency Loan (12%)</option>
                <option value="school">School Fees Loan (8%)</option>
              </select>
            </InputGroup>

            <CalculateButton type="submit">
              <FaCalculator /> Calculate Repayment
            </CalculateButton>
          </CalculatorForm>

          <ResultCard show={calculationResult}>
            <FaHandHoldingUsd />
            <div>
              <p>Total Repayable: <strong>KES {calculationResult?.totalAmount}</strong></p>
              <p>Monthly Payment: <strong>KES {calculationResult?.monthlyPayment}</strong></p>
              <p>Total Interest: <strong>KES {calculationResult?.totalInterest}</strong></p>
            </div>
          </ResultCard>
        </LoanCalculator>

        <DownloadSection>
          <h3>
            <FaFileDownload /> Application Forms
          </h3>
          <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
            Download the necessary forms to apply for our products and services. Completed forms can be submitted at any of our branches or via email.
          </p>
          
          <FormGrid>
            {forms.map((form, index) => (
              <FormCard key={index} href={form.link} download>
                <FaFileDownload />
                <span>{form.name}</span>
              </FormCard>
            ))}
          </FormGrid>

          <div style={{ marginTop: '2rem', color: '#4a5568', display: 'flex', alignItems: 'center' }}>
            <FaEnvelope style={{ color: '#2BC0E4', marginRight: '1rem', fontSize: '1.5rem' }} />
            <div>
              <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>Submit completed forms to:</p>
              <p style={{ margin: 0 }}>
                Email: <a href="mailto:info@herbsacco.org" style={{ color: '#2BC0E4', fontWeight: '500' }}>info@herbsacco.org</a> or<br />
                Visit any of our branches
              </p>
            </div>
          </div>
        </DownloadSection>
      </ProductsContainer>
    </>
  );
}

export default Products;