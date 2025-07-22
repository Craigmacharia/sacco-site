import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactContainer = styled.div`
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
    margin-bottom: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled.form`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  transition: all 0.3s ease;
  border-left: 4px solid #2BC0E4;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  label {
    color: #2a4365;
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: block;
  }

  input, textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
    font-family: 'Quicksand', sans-serif;

    &:focus {
      outline: none;
      border-color: #2BC0E4;
      box-shadow: 0 0 0 3px rgba(43, 192, 228, 0.2);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  transition: all 0.3s ease;
  border-left: 4px solid #2BC0E4;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #2a4365;
    font-weight: 700;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;

    svg {
      color: #2BC0E4;
      font-size: 1.2rem;
      margin-right: 1rem;
      margin-top: 0.2rem;
    }

    div {
      flex: 1;

      h4 {
        color: #2a4365;
        font-weight: 600;
        margin-bottom: 0.3rem;
        font-size: 1.1rem;
      }

      p, a {
        color: #4a5568;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #2BC0E4;
        }
      }
    }
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const ActionButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #2BC0E4 0%, #4CA1AF 100%);
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: none;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: linear-gradient(90deg, #4CA1AF 0%, #2BC0E4 100%);
    color: white;
  }

  &.whatsapp {
    background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
    margin-top: auto;

    &:hover {
      background: linear-gradient(90deg, #128C7E 0%, #25D366 100%);
    }
  }
`;

const Contact = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <ContactContainer>
        <SectionTitle>Contact Us</SectionTitle>
        
        <ContactGrid>
          <ContactForm>
            <div>
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your name" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                placeholder="Your message..." 
                required
              ></textarea>
            </div>
            
            <ActionButton href="mailto:info@sacco.org">
              Send Message
            </ActionButton>
          </ContactForm>
          
          <ContactInfo>
            <h3>Main Branch</h3>
            
            <div className="info-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>SACCO Plaza, Kago Road<br />Nyeri Town, Kenya</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p>+254 712 345 678</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <a href="mailto:cmacharia482@gmail.com">info@sacco.org</a>
              </div>
            </div>
            
            <ActionButton 
              href="https://wa.me/254755453975" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp style={{ marginRight: '8px' }} />
              Chat with Us on WhatsApp
            </ActionButton>
          </ContactInfo>
        </ContactGrid>
      </ContactContainer>
    </>
  );
};

export default Contact;