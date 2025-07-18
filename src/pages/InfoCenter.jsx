import styled from 'styled-components';
import { useState } from 'react';
import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';


// Styled components
const InfoContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  max-width: 900px;
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

const SubSectionTitle = styled.h4`
  color: #2BC0E4;
  font-weight: 600;
  margin: 2rem 0 1rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const FileCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  svg {
    color: #2BC0E4;
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    flex-grow: 1;

    &:hover {
      color: #2BC0E4;
    }
  }

  .file-size {
    color: #777;
    font-size: 0.85rem;
  }
`;

const FaqItem = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  cursor: pointer;
`;

const FaqQuestion = styled.div`
  color: #2BC0E4;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    transition: transform 0.3s ease;
  }
`;

const FaqAnswer = styled.div`
  color: #444;
  padding-top: 1rem;
  line-height: 1.6;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

function InfoCenter() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const downloads = [
    { 
      name: "Loan Application Form", 
      format: "PDF", 
      size: "2.4 MB", 
      icon: <FaFilePdf />, 
      link: "/assets/forms/loan-form.pdf" 
    },
    { 
      name: "Membership Application Form", 
      format: "PDF", 
      size: "1.8 MB", 
      icon: <FaFilePdf />, 
      link: "/assets/forms/membership-form.pdf" 
    },
    { 
      name: "SACCO By-Laws", 
      format: "PDF", 
      size: "3.2 MB", 
      icon: <FaFilePdf />, 
      link: "/assets/docs/bylaws.pdf" 
    },
    { 
      name: "Loan Calculator", 
      format: "Excel", 
      size: "1.1 MB", 
      icon: <FaFileExcel />, 
      link: "/assets/tools/loan-calculator.xlsx" 
    },
    { 
      name: "Annual Report 2023", 
      format: "PDF", 
      size: "5.7 MB", 
      icon: <FaFilePdf />, 
      link: "/assets/reports/annual-report-2023.pdf" 
    },
    { 
      name: "Member Handbook", 
      format: "Word", 
      size: "2.9 MB", 
      icon: <FaFileWord />, 
      link: "/assets/docs/member-handbook.docx" 
    }
  ];

  const faqs = [
    {
      question: "How do I join the SACCO?",
      answer: "To join our SACCO, download and complete the membership application form, provide copies of your ID, passport photo, and pay the required membership fee. Submit these documents at any of our branches."
    },
    {
      question: "What are the interest rates on loans?",
      answer: "Our loan interest rates range from 12% to 18% per annum on reducing balance, depending on the loan product and repayment period. Emergency loans have slightly higher rates while development loans have lower rates."
    },
    {
      question: "How long does loan approval take?",
      answer: "Standard loans are processed within 48 hours of receiving a complete application. Emergency loans can be approved within 24 hours. Development loans may take up to 5 working days for approval."
    },
    {
      question: "What documents do I need to apply for a loan?",
      answer: "You'll need your membership card, national ID, latest pay slip (if employed), business license (for business loans), and two guarantors who are also SACCO members."
    },
    {
      question: "Can I access my savings anytime?",
      answer: "Regular savings can be withdrawn with 7 days notice. Fixed deposits have specific maturity periods. Emergency withdrawals may be allowed under special circumstances with board approval."
    },
    {
      question: "How are dividends calculated?",
      answer: "Dividends are calculated based on your share capital and patronage (usage of our services) throughout the year. We declare dividends annually after our AGM."
    }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <InfoContainer>
        <SectionTitle>Info Center</SectionTitle>
        
        <SubSectionTitle>
          <FaFilePdf /> Downloads
        </SubSectionTitle>
        {downloads.map((file, index) => (
          <FileCard key={index}>
            {file.icon}
            <a href={file.link} download>{file.name} ({file.format})</a>
            <span className="file-size">{file.size}</span>
          </FileCard>
        ))}

        <SubSectionTitle>
          <FaQuestionCircle /> Frequently Asked Questions
        </SubSectionTitle>
        {faqs.map((faq, index) => (
          <FaqItem key={index} onClick={() => toggleFaq(index)}>
            <FaqQuestion>
              {faq.question}
              <FaChevronDown style={{ 
                transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' 
              }} />
            </FaqQuestion>
            <FaqAnswer isOpen={activeFaq === index}>
              {faq.answer}
            </FaqAnswer>
          </FaqItem>
        ))}
      </InfoContainer>
    </>
  );
}

export default InfoCenter;