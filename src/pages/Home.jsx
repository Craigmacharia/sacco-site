import HeroSlider from "../components/HeroSlider";
import React from 'react';
import styled from 'styled-components';

// Styled components
const HomeContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
`;

const SectionTitle = styled.h2`
  color: #2BC0E4;
  font-weight: 700;
  margin-bottom: 2rem;
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
    background-color: #E4ECC6;
    
  }
`;

const ServiceCard = styled.div`
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  height: 100%;
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .card-img-container {
    height: 180px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
  }

  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover .card-img-top {
    transform: scale(1.05);
  }

  .card-body {
    padding: 2rem;
  }

  .card-title {
    color: #2BC0E4;
    font-weight: 600;
  }

  .card-text {
    color: #555;
    margin-bottom: 1.5rem;
  }

  .bi {
    color: #2BC0E4;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const FeatureList = styled.div`
  background-color: rgba(228, 236, 198, 0.3);
  border-radius: 10px;
  padding: 2rem;
  border-left: 4px solid #2BC0E4;

  p {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '✓';
      color: #2BC0E4;
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`;

const StatsSection = styled.section`
  background: linear-gradient(135deg, #2BC0E4 0%, #1a92b1 100%);
  padding: 3rem 0;
  color: white;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="25" cy="25" r="3" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="3" fill="rgba(255,255,255,0.1)"/><circle cx="25" cy="75" r="3" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="25" r="3" fill="rgba(255,255,255,0.1)"/></svg>');
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%);
  }

  .stat-item {
    position: relative;
    z-index: 1;
    padding: 1rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }

  .stat-icon {
    height: 60px;
    margin-bottom: 1rem;
    filter: brightness(0) invert(1);
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  .stat-item:hover .stat-icon {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: linear-gradient(90deg, #4CA1AF 0%, #2BC0E4 100%);
    color: white;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: white;
  color: #2a4365;
  border: 2px solid #2BC0E4;
  
  &:hover {
    background: #f0f4f8;
    color: #2a4365;
  }
`;

const TertiaryButton = styled(PrimaryButton)`
  background: white;
  color: #4a5568;
  border: 2px solid #e2e8f0;
  
  &:hover {
    background: #f0f4f8;
    color: #2a4365;
    border-color: #2BC0E4;
  }
`;



function Home() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" />
      
      <HomeContainer>
        <HeroSlider />

        <div className="container py-5">
          {/* What We Offer */}
          <section className="text-center mb-5">
            <SectionTitle>What We Offer</SectionTitle>
            <div className="row">
              {[
                { 
                  icon: "bi-piggy-bank", 
                  title: "Savings", 
                  desc: "Flexible options to grow your money safely.",
                  image: "cash.png"
                },
                { 
                  icon: "bi-cash-coin", 
                  title: "Loans", 
                  desc: "Fast and affordable loans with flexible repayment.",
                  image: "fon.png"
                },
                { 
                  icon: "bi-people", 
                  title: "Community", 
                  desc: "Empowering members through education and support.",
                  image: "edu.png"
                }
              ].map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <ServiceCard className="card">
                    <div className="card-img-container">
                      <img src={item.image} className="card-img-top" alt={item.title} />
                    </div>
                    <div className="card-body text-center">
                      <i className={`bi ${item.icon} fs-2`}></i>
                      <h5 className="card-title mt-3">{item.title}</h5>
                      <p className="card-text">{item.desc}</p>
                    </div>
                  </ServiceCard>
                </div>
              ))}
            </div>
          </section>

          {/* Why Join Us */}
<section className="mb-5">
  <SectionTitle className="text-center">Why Join Us?</SectionTitle>
  <FeatureList className="card p-4">
    <ImageContainer className="text-center mb-4">
      <img src="cash.png" alt="Happy members" className="img-fluid" style={{ maxHeight: "250px" }} />
    </ImageContainer>

    <p>Member-owned and transparent</p>
    <p>Competitive loan interest rates</p>
    <p>Secure savings options</p>
    <p>Mobile & digital services</p>
    <p>Financial education programs</p>
    <p>Dedicated member support</p>

    {/* Buttons to extra pages */}
    <ButtonGroup>
      <PrimaryButton href="/join">Become a Member</PrimaryButton>
      <SecondaryButton href="/dividends">View Dividends</SecondaryButton>
      <TertiaryButton href="/contact">Talk to Us</TertiaryButton>
    </ButtonGroup>

  </FeatureList>
</section>


          {/* Services Cards */}
          <section className="mb-5">
            <SectionTitle className="text-center">Our Services</SectionTitle>
            <div className="row">
              {[
                { 
                  id: "emergency-loan", 
                  title: "Emergency Loan", 
                  desc: "Quick access to funds during tough times.",
                  image: "uzima.png"
                },
                { 
                  id: "school-fees-loan", 
                  title: "School Fees Loan", 
                  desc: "Ensure uninterrupted education for your children.",
                  image: "edu.png"
                },
                { 
                  id: "development-loan", 
                  title: "Development Loan", 
                  desc: "For business, construction, or long-term goals.",
                  image: "build.png"
                }
              ].map(service => (
                <div className="col-md-4 mb-4" key={service.id}>
                  <ServiceCard className="card">
                    <div className="card-img-container">
                      <img src={service.image} className="card-img-top" alt={service.title} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{service.title}</h5>
                      <p className="card-text">{service.desc}</p>
                      <PrimaryButton href={`/services/${service.id}`} className="btn">Read More</PrimaryButton>
                    </div>
                  </ServiceCard>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Statistics Bar */}
        <StatsSection>
          <div className="container">
            <div className="row text-center">
              {[
                { value: "5,000+", label: "Members", icon: "/members-icon.png" },
                { value: "Ksh 80M+", label: "Loans Disbursed", icon: "/loans-icon.png" },
                { value: "10", label: "Years Serving", icon: "/years-icon.png" },
                { value: "6", label: "Branches", icon: "/branches-icon.png" }
              ].map((stat, index) => (
                <div className="col-md-3 stat-item" key={index}>
                  <img src={stat.icon} alt="" className="stat-icon" />
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </StatsSection>
      </HomeContainer>
    </>
  );
}

export default Home;