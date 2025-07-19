import styled from 'styled-components';
import { FaHandHoldingUsd, FaPiggyBank, FaFileDownload, FaEnvelope } from 'react-icons/fa';

// Styled components
const ProductsContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const SectionTitle = styled.h2`
  color: #2BC0E4;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: #E4ECC6;
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #2BC0E4;

  svg {
    font-size: 1.8rem;
    margin-right: 1rem;
  }

  h5 {
    font-weight: 600;
    margin: 0;
    font-size: 1.4rem;
  }
`;

const ProductList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;

  li {
    position: relative;
    padding-left: 1.8rem;
    margin-bottom: 0.8rem;
    color: #444;

    &:before {
      content: '•';
      color: #2BC0E4;
      font-weight: bold;
      position: absolute;
      left: 0;
      font-size: 1.5rem;
      line-height: 1;
    }
  }
`;

const DownloadSection = styled.div`
  background-color: rgba(228, 236, 198, 0.3);
  border-left: 4px solid #2BC0E4;
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
  margin-top: 2rem;

  h6 {
    display: flex;
    align-items: center;
    color: #2BC0E4;
    font-weight: 600;
    margin-bottom: 1rem;

    svg {
      margin-right: 0.8rem;
    }
  }

  a {
    color: #2BC0E4;
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-top: 0.5rem;

    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Products() {
  const loanProducts = [
    "Emergency Loan - Quick access to funds for urgent needs",
    "Development Loan - For business growth or property development",
    "School Fees Loan - Education financing with flexible repayment",
    "Asset Financing - Purchase vehicles or equipment",
    "Salary Advance - Short-term loan against your salary",
    "Medical Loan - For healthcare expenses"
  ];

  const savingsOptions = [
    "Fixed Deposit - Higher interest for locked savings",
    "Junior Savings - Special accounts for children",
    "Retirement Savings - Long-term savings plan",
    "Goal-Based Savings - Save for specific objectives",
    "Daily Savings - Small daily contributions",
    "SACCO Shares - Invest in ownership shares"
  ];

  const forms = [
    { name: "Loan Application Form", link: "test.pdf" },
    { name: "Savings Account Form", link: "AGM.pdf" },
    { name: "Membership Application", link: "test.pdf" }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <ProductsContainer>
        <SectionTitle>Our Products</SectionTitle>
        <p style={{ color: '#555', fontSize: '1.1rem', maxWidth: '700px' }}>
          We offer various financial services tailored to our members' needs with competitive rates and flexible terms.
        </p>

        <ProductCard>
          <ProductHeader>
            <FaHandHoldingUsd />
            <h5>Loan Products</h5>
          </ProductHeader>
          <ProductList>
            {loanProducts.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ProductList>
        </ProductCard>

        <ProductCard>
          <ProductHeader>
            <FaPiggyBank />
            <h5>Savings Options</h5>
          </ProductHeader>
          <ProductList>
            {savingsOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ProductList>
        </ProductCard>

        <DownloadSection>
          <h6>
            <FaFileDownload /> Application Forms
          </h6>
          <p style={{ color: '#444', marginBottom: '1rem' }}>
            Download and fill the relevant application form, then submit via email or at any of our branches.
          </p>
          {forms.map((form, index) => (
            <a key={index} href={form.link} download>
              <FaFileDownload /> {form.name} (PDF)
            </a>
          ))}
          <p style={{ marginTop: '1.5rem', color: '#444' }}>
            <FaEnvelope style={{ color: '#2BC0E4', marginRight: '0.5rem' }} />
            Email completed forms to: <a href="mailto:cmacharia482@gmail.com">info@herbsacco.org</a>
          </p>
        </DownloadSection>
      </ProductsContainer>
    </>
  );
}

export default Products;