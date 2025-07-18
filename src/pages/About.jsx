import styled from 'styled-components';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt } from 'react-icons/fa';

// Styled components
const AboutContainer = styled.div`
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
  display: flex;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: #E4ECC6;
  }

  svg {
    margin-right: 10px;
    font-size: 1.8rem;
  }
`;

const HeroImage = styled.div`
  background-image: url('beer.png');
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 10px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(43, 192, 228, 0.2), rgba(228, 236, 198, 0.3));
  }
`;

const ContentText = styled.p`
  color: #444;
  line-height: 1.7;
  font-size: 1.05rem;
`;

const ExpandableSection = styled.div`
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const ExpandableHeader = styled.div`
  background-color: #2BC0E4;
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;

  svg {
    transition: transform 0.3s ease;
  }
`;

const ExpandableContent = styled.div`
  background-color: white;
  padding: ${props => props.isOpen ? '1.5rem' : '0'};
  height: ${props => props.isOpen ? 'auto' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const BoardMemberCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const BoardMemberInfo = styled.div`
  padding: 1.2rem;

  strong {
    color: #2BC0E4;
    font-weight: 600;
    display: block;
    margin-bottom: 0.3rem;
  }

  small {
    color: #666;
    font-size: 0.85rem;
  }
`;

const BranchCard = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: white;
  border: 1px solid #E4ECC6;
  padding: 0.6rem 1.2rem;
  margin: 0 0.8rem 0.8rem 0;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #E4ECC6;
    transform: translateY(-2px);
  }

  svg {
    color: #2BC0E4;
    margin-right: 8px;
    font-size: 0.9rem;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 2rem;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #2BC0E4;
  }

  &:after {
    content: '';
    position: absolute;
    left: 7px;
    top: 20px;
    width: 2px;
    height: calc(100% - 15px);
    background-color: #E4ECC6;
  }

  &:last-child:after {
    display: none;
  }

  strong {
    color: #2BC0E4;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

function About() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const boardMembers = [
    {
      name: "John Mwangi",
      role: "Chairman",
      tenure: "Since 2018",
      bio: "20+ years in financial services",
      image: "sponsor.png"
    },
    {
      name: "Grace Njeri",
      role: "Secretary",
      tenure: "Since 2015",
      bio: "Community development specialist",
      image: "janet.png"
    },
    {
      name: "Peter Otieno",
      role: "Treasurer",
      tenure: "Since 2020",
      bio: "Certified public accountant",
      image: "depa.png"
    }
  ];

  const branches = [
    "Nairobi CBD", "Nyeri Town", "Nakuru", "Karatina", "Murang'a", "Thika"
  ];

  const milestones = [
    { year: "2012", event: "Founded with 50 members" },
    { year: "2015", event: "Reached 1,000 members" },
    { year: "2018", event: "Launched mobile banking" },
    { year: "2021", event: "Expanded to 6 branches" },
    { year: "2023", event: "Ksh 100M+ in assets" }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <AboutContainer>
        <HeroImage />
        
        <SectionTitle>
           About Us
        </SectionTitle>
        <ContentText>
          Founded in 2012, SaccoX was established to empower our members financially through accessible savings and credit services. 
          What began as a small community initiative has grown into a trusted financial partner for over 5,000 members.
        </ContentText>

        <ExpandableSection>
          <ExpandableHeader onClick={() => toggleSection('mission')}>
            <span>Our Mission & Values</span>
            {expandedSection === 'mission' ? <FaChevronUp /> : <FaChevronDown />}
          </ExpandableHeader>
          <ExpandableContent isOpen={expandedSection === 'mission'}>
            <ContentText>
              To provide innovative financial solutions that empower our members to achieve their personal and business goals 
              through cooperative savings and responsible credit.
            </ContentText>
            <ContentText>
              <strong>Our Core Values:</strong> Integrity, Transparency, Member Focus, Innovation, and Community Development.
            </ContentText>
            <img src="sponsor.png" alt="Our Team" className="img-fluid rounded mt-3" />
          </ExpandableContent>
        </ExpandableSection>

        <SectionTitle>
           Board Members
        </SectionTitle>
        <BoardGrid>
          {boardMembers.map((member, index) => (
            <BoardMemberCard key={index}>
              <img src={member.image} alt={member.name} />
              <BoardMemberInfo>
                <strong>{member.name}</strong>
                <div>{member.role} ({member.tenure})</div>
                <small>{member.bio}</small>
              </BoardMemberInfo>
            </BoardMemberCard>
          ))}
        </BoardGrid>

        <SectionTitle>
           Our Branches
        </SectionTitle>
        <div>
          {branches.map((branch, index) => (
            <BranchCard key={index}>
              <FaMapMarkerAlt /> {branch}
            </BranchCard>
          ))}
        </div>

        <SectionTitle>
           Key Milestones
        </SectionTitle>
        <div>
          {milestones.map((item, index) => (
            <TimelineItem key={index}>
              <strong>{item.year}:</strong> {item.event}
            </TimelineItem>
          ))}
        </div>
      </AboutContainer>
    </>
  );
}

export default About;