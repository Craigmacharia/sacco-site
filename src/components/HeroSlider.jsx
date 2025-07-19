import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled components
const HeroContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  position: relative;
  height: 450px; /* Reduced from 600px */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const HeroSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.8s ease-in-out;
  background-size: cover;
  background-position: center;
  background-color: #f5f5f5; /* Fallback color */
`;

const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(228, 236, 198, 0.9);
  padding: 1.5rem 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  
  h3 {
    color: #2BC0E4;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  p {
    color: #333;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#2BC0E4' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

class HeroSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      slides: [
        {
          image: 'farm.png',
          title: 'Empowering Members',
          text: 'Affordable loans to help grow your future',
          alt: 'Happy members discussing finances'
        },
        {
          image: 'cash.png',
          title: 'Secure Savings',
          text: 'Watch your money grow with our safe savings products',
          alt: 'Person holding a piggy bank'
        },
        {
          image: 'meeting.png',
          title: 'Trusted by Thousands',
          text: 'Serving the community with integrity since 2012',
          alt: 'Community of happy customers'
        }
      ]
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.nextSlide, 5000); // Slightly slower transition
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide = () => {
    this.setState(prevState => ({
      currentSlide: (prevState.currentSlide + 1) % this.state.slides.length
    }));
  };

  goToSlide = (index) => {
    clearInterval(this.interval);
    this.setState({ currentSlide: index });
    this.interval = setInterval(this.nextSlide, 5000);
  };

  render() {
    const { slides, currentSlide } = this.state;

    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        <HeroContainer>
          {slides.map((slide, index) => (
            <HeroSlide 
              key={index}
              active={index === currentSlide}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(/${slide.image})` }}

              aria-hidden={index !== currentSlide}
            >
              <SlideContent>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </SlideContent>
            </HeroSlide>
          ))}
          
          <Indicators>
            {slides.map((_, index) => (
              <Indicator 
                key={index}
                active={index === currentSlide}
                onClick={() => this.goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </Indicators>
        </HeroContainer>
      </>
    );
  }
}

export default HeroSlider;