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

  .card-img-top {
    height: 180px;
    object-fit: cover;
    width: 100%;
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
  background-color: #2BC0E4;
  padding: 3rem 0;
  color: white;

  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const PrimaryButton = styled.a`
  background-color: #2BC0E4 !important;
  border: none;
  color: white !important;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1da8cc !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
                  image: "beer.png"
                },
                { 
                  icon: "bi-cash-coin", 
                  title: "Loans", 
                  desc: "Fast and affordable loans with flexible repayment.",
                  image: "doc.png"
                },
                { 
                  icon: "bi-people", 
                  title: "Community", 
                  desc: "Empowering members through education and support.",
                  image: "egg.png"
                }
              ].map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <ServiceCard className="card">
                    <img src={item.image} className="card-img-top" alt={item.title} />
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
  <FeatureList className="card">
    <div style={{
      width: '100%',
      height: '200px',
      overflow: 'hidden',
      borderRadius: '8px 8px 0 0',
      marginBottom: '1.5rem'
    }}>
      <img 
        src="egg.png" 
        alt="Happy members" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
    <p>Member-owned and transparent</p>
    <p>Competitive loan interest rates</p>
    <p>Secure savings options</p>
    <p>Mobile & digital services</p>
    <p>Financial education programs</p>
    <p>Dedicated member support</p>
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
                  image: "depa.png"
                },
                { 
                  id: "school-fees-loan", 
                  title: "School Fees Loan", 
                  desc: "Ensure uninterrupted education for your children.",
                  image: "big.png"
                },
                { 
                  id: "development-loan", 
                  title: "Development Loan", 
                  desc: "For business, construction, or long-term goals.",
                  image: "doc.png"
                }
              ].map(service => (
                <div className="col-md-4 mb-4" key={service.id}>
                  <ServiceCard className="card">
                    <img src={service.image} className="card-img-top" alt={service.title} />
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
                <div className="col-md-3" key={index}>
                  <img src={stat.icon} alt="" style={{height: "60px", marginBottom: "1rem"}} />
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