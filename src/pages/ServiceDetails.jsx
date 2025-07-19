import { useParams } from "react-router-dom";
import styled from 'styled-components';

// Styled components
const ServiceContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    color: #2BC0E4; /* Skyline color */
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: #E4ECC6; /* Bora color */
    }
  }
  
  p.subtitle {
    color: #555;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const ServiceContent = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
`;

const ServiceSection = styled.div`
  margin-bottom: 2.5rem;
  
  h3 {
    color: #2BC0E4; /* Skyline color */
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    
    .icon {
      margin-right: 10px;
      font-size: 1.5rem;
    }
  }
  
  p, ul {
    color: #444;
    line-height: 1.7;
  }
  
  ul {
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      position: relative;
      
      &:before {
        content: '•';
        color: #2BC0E4; /* Skyline color */
        font-weight: bold;
        position: absolute;
        left: -1rem;
      }
    }
  }
`;

const ApplyButton = styled.a`
  display: inline-block;
  background-color: #2BC0E4 !important; /* Skyline color */
  color: white !important;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 1rem;
  border: none;
  
  &:hover {
    background-color: #1da8cc !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(43, 192, 228, 0.3);
  }
`;

function ServiceDetails() {
  const { id } = useParams();
  
  // Get service data - in a real app this would come from an API or data file
  const service = {
    id: id,
    title: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: "This service provides members with flexible financial solutions tailored to their specific needs.",
    eligibility: [
      "Must be a registered member for at least 3 months",
      "Minimum monthly savings contribution of Ksh 1,000",
      "Valid national ID",
      "Two guarantors who are also members"
    ],
    benefits: [
      "Low interest rates compared to commercial banks",
      "Flexible repayment periods up to 36 months",
      "No hidden charges or fees",
      "Quick approval process within 48 hours"
    ],
    terms: [
      "Minimum loan amount: Ksh 5,000",
      "Maximum loan amount: Ksh 500,000",
      "Interest rate: 12% per annum reducing balance",
      "1% insurance fee on principal amount"
    ],
    howToApply: "Visit any of our branches with your membership card, national ID, and latest pay slip (if employed). Our loan officers will guide you through the simple application process."
  };

  return (
    <>
      {/* Add Google Fonts link if not already included */}
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" />
      
      <ServiceContainer className="container py-5">
        <ServiceHeader>
          <h2>{service.title}</h2>
          <p className="subtitle">{service.description}</p>
        </ServiceHeader>
        
        <ServiceContent>
          <ServiceSection>
            <h3>
              <i className="bi bi-check-circle-fill icon"></i>
              Eligibility Requirements
            </h3>
            <ul>
              {service.eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </ServiceSection>
          
          <ServiceSection>
            <h3>
              <i className="bi bi-star-fill icon"></i>
              Benefits
            </h3>
            <ul>
              {service.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </ServiceSection>
          
          <ServiceSection>
            <h3>
              <i className="bi bi-file-text-fill icon"></i>
              Terms & Conditions
            </h3>
            <ul>
              {service.terms.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </ServiceSection>
          
          <ServiceSection>
            <h3>
              <i className="bi bi-question-circle-fill icon"></i>
              How to Apply
            </h3>
            <p>{service.howToApply}</p>
            <ApplyButton href="/apply/emergency-loan" className="btn">Apply Now</ApplyButton>
          </ServiceSection>
        </ServiceContent>
      </ServiceContainer>
    </>
  );
}

export default ServiceDetails;