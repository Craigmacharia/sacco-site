import styled from 'styled-components';
import { FaIdCard, FaFileAlt, FaDownload, FaCheck } from 'react-icons/fa';

const JoinContainer = styled.div`
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

const ContentCard = styled.div`
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

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;

  li {
    position: relative;
    padding-left: 2.5rem;
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
    color: #4a5568;
    line-height: 1.6;

    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #2BC0E4;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const DocumentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.8rem 1rem;
    background-color: #f0f4f8;
    border-radius: 8px;
    color: #2a4365;
    font-weight: 500;

    svg {
      margin-right: 0.8rem;
      color: #2BC0E4;
    }
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(90deg, #2BC0E4 0%, #4CA1AF 100%);
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: linear-gradient(90deg, #4CA1AF 0%, #2BC0E4 100%);
    color: white;
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const Join = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <JoinContainer>
        <SectionTitle>How to Join Our SACCO</SectionTitle>
        
        <ContentCard>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', textAlign: 'center', marginBottom: '2rem' }}>
            Becoming a member is easy and rewarding. Here's how you can join:
          </p>

          <h3 style={{ color: '#2a4365', marginBottom: '1rem' }}>Membership Requirements:</h3>
          <RequirementsList>
            <li>Be at least 18 years old</li>
            <li>Have a valid national ID or passport</li>
            <li>Pay a one-time registration fee of KES 1,000</li>
            <li>Make a minimum initial deposit of KES 2,000</li>
            <li>Commit to regular monthly savings</li>
            <li>Till Number: 344567</li>
          </RequirementsList>

          <h3 style={{ color: '#2a4365', marginBottom: '1rem' }}>Payment Process:</h3>
          <RequirementsList>
            <li>Have a valid M-pesa account</li>
            <li>Open the app and go to mpesa</li>
            <li>Select Lipa na till</li>
            <li>Enter Till Number: 344567</li>
            <li>Enter amount as 1000</li>
            <li>Enter your PIN and send</li>
          </RequirementsList>

          <h3 style={{ color: '#2a4365', marginBottom: '1rem' }}>Required Documents:</h3>
          <DocumentsList>
            <li><FaIdCard /> Copy of National ID/Passport</li>
            <li><FaFileAlt /> Completed membership application form</li>
            <li><FaFileAlt /> 2 recent passport-size photos</li>
            <li><FaFileAlt /> Proof of income (payslip/business license)</li>
          </DocumentsList>

          <p style={{ color: '#4a5568', marginTop: '2rem' }}>
            After submitting your documents, your application will be processed within 2 working days.
          </p>

          <DownloadButton
            href="/forms/Sacco_Membership_Form.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Download Membership Form
          </DownloadButton>
        </ContentCard>
      </JoinContainer>
    </>
  );
};

export default Join;