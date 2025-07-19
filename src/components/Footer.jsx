import styled from "styled-components";

const StyledFooter = styled.footer`
  font-family: 'Quicksand', sans-serif;
  background: linear-gradient(135deg, #1a9fc1 0%, #2BC0E4 50%, #1a9fc1 100%);
  color: #fff;
  padding: 3rem 0 2rem;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%);
    z-index: 1;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 2;
  }

  .footer-main {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 1.5rem 0;
  }

  a {
    color: #fff !important;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    position: relative;
    display: inline-flex;
    align-items: center;

    &:hover {
      color: #E4ECC6 !important;
      background-color: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: #E4ECC6;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 60%;
    }
  }

  .copyright {
    margin-right: 0.5rem;
    font-weight: 500;
  }

  .divider {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.9rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;

    .footer-main {
      flex-direction: column;
      gap: 0.8rem;
      text-align: center;
    }

    .footer-links {
      flex-wrap: wrap;
      gap: 1rem;
    }

    a {
      padding: 0.4rem 0.8rem;
    }
  }
`;

function Footer() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <StyledFooter>
        <div className="footer-content">
          <div className="footer-main">
            <span className="copyright">&copy; {new Date().getFullYear()} Herbsacco</span>
            <span className="divider">|</span>
            <a href="mailto:cmacharia482@gmail.com">info@herbsacco.org</a>
            <span className="divider">|</span>
            <a href="https://wa.me/254110928039" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
          
          <div className="footer-links">
            <a href="https://facebook.com/craig.macharia.2025" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com/craig.macharia" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          
          <div className="footer-bottom">
            <p>Empowering our members through financial services since 2023</p>
          </div>
        </div>
      </StyledFooter>
    </>
  );
}

export default Footer;