import styled from 'styled-components';
import { useState } from 'react';
import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaDownload
} from 'react-icons/fa';

// Styled components
const InfoContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background-color: #f9fbf4;
`;

const SectionTitle = styled.h2`
  color: #2a4365;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #2BC0E4 0%, #E4ECC6 100%);
    border-radius: 2px;
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  color: #4a5568;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const SearchBar = styled.div`
  display: flex;
  margin: 2rem 0;
  background: white;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  align-items: center;

  input {
    flex: 1;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    outline: none;
    background: transparent;
  }

  svg {
    color: #2BC0E4;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;

const SubSectionTitle = styled.h3`
  color: #2a4365;
  font-weight: 600;
  margin: 3rem 0 1.5rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  svg {
    margin-right: 12px;
    color: #2BC0E4;
  }
`;

const FileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const FileCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border-left: 4px solid #2BC0E4;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }

  .file-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    svg {
      color: #2BC0E4;
      font-size: 1.8rem;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .file-name {
      font-weight: 600;
      color: #2a4365;
      font-size: 1.1rem;
    }
  }

  .file-meta {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid #eee;
    font-size: 0.9rem;

    .file-format {
      background: #f0f4f8;
      color: #2a4365;
      padding: 0.3rem 0.8rem;
      border-radius: 50px;
      font-weight: 500;
    }

    .file-size {
      color: #718096;
    }
  }

  .download-btn {
    display: inline-flex;
    align-items: center;
    background: linear-gradient(90deg, #2BC0E4 0%, #4CA1AF 100%);
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
    font-weight: 500;
    text-decoration: none;
    margin-top: 1rem;
    transition: all 0.3s ease;
    width: fit-content;

    svg {
      margin-right: 0.5rem;
      color: white;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  }
`;

const FaqContainer = styled.div`
  margin-top: 2rem;
`;

const FaqItem = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border-left: 4px solid transparent;

  &:hover {
    border-left-color: #2BC0E4;
  }
`;

const FaqQuestion = styled.div`
  color: #2a4365;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  cursor: pointer;

  svg {
    transition: transform 0.3s ease;
    color: #2BC0E4;
  }
`;

const FaqAnswer = styled.div`
  color: #4a5568;
  padding-top: 1rem;
  line-height: 1.7;
  display: ${props => props.isOpen ? 'block' : 'none'};
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

function InfoCenter() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredDownloads = downloads.filter(file => 
    file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    file.format.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <InfoContainer>
        <SectionTitle>Information Center</SectionTitle>
        <SectionDescription>
          Find all the resources you need, from downloadable forms to answers for frequently asked questions.
        </SectionDescription>

        <SearchBar>
          <FaSearch />
          <input 
            type="text" 
            placeholder="Search documents or FAQs..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>

        <SubSectionTitle>
          <FaFilePdf /> Documents & Downloads
        </SubSectionTitle>
        
        <FileGrid>
          {filteredDownloads.map((file, index) => (
            <FileCard key={index}>
              <div className="file-header">
                {file.icon}
                <div className="file-name">{file.name}</div>
              </div>
              <div className="file-meta">
                <span className="file-format">{file.format}</span>
                <span className="file-size">{file.size}</span>
              </div>
              <a href={file.link} download className="download-btn">
                <FaDownload /> Download
              </a>
            </FileCard>
          ))}
        </FileGrid>

        <SubSectionTitle>
          <FaQuestionCircle /> Frequently Asked Questions
        </SubSectionTitle>
        
        <FaqContainer>
          {filteredFaqs.map((faq, index) => (
            <FaqItem key={index} onClick={() => toggleFaq(index)}>
              <FaqQuestion>
                {faq.question}
                {activeFaq === index ? <FaChevronUp /> : <FaChevronDown />}
              </FaqQuestion>
              <FaqAnswer isOpen={activeFaq === index}>
                {faq.answer}
              </FaqAnswer>
            </FaqItem>
          ))}
        </FaqContainer>
      </InfoContainer>
    </>
  );
}

export default InfoCenter;