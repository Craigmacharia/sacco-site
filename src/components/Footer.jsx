import styled from "styled-components";

const StyledFooter = styled.footer`
  font-family: 'Quicksand', sans-serif;
  background-color: #2BC0E4; /* Skyline color */
  color: #fff;
  padding: 2rem 0;
  margin-top: 3rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .footer-main {
    font-size: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem 1rem;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  a {
    color: #fff !important;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;

    &:hover {
      color: #E4ECC6 !important; /* Bora color */
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .copyright {
    margin-right: 0.5rem;
  }

  .divider {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    .footer-main {
      flex-direction: column;
      gap: 0.5rem;
    }

    .footer-links {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;

function Footer() {
  return (
    <>
      {/* Add Google Fonts link if not already included */}
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <StyledFooter>
        <div className="footer-content">
          <div className="footer-main">
            <span className="copyright">&copy; {new Date().getFullYear()} SaccoX</span>
            <span className="divider">|</span>
            <a href="mailto:info@saccox.org">info@saccox.org</a>
            <span className="divider">|</span>
            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
          <div className="footer-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </StyledFooter>
    </>
  );
}

export default Footer;