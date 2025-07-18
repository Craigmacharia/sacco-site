import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

// Compact styled components
const NewsContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem;
`;

const SectionTitle = styled.h2`
  color: #2BC0E4;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #E4ECC6;
  }
`;

const EventCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  margin-bottom: 2rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  h5 {
    color: #2BC0E4;
    font-weight: 600;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
  }

  p {
    color: #444;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .media-container {
    border-radius: 6px;
    margin: 1rem 0;
  }

  .date-badge {
    background-color: #E4ECC6;
    color: #333;
    padding: 0.2rem 0.8rem;
    border-radius: 50px;
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }
`;

function NewsEvents() {
  const events = [
    {
      title: "AGM 2024 Recap",
      description: "We held our successful Annual General Meeting at Nyeri Social Hall with record attendance. Members reviewed our financial performance and approved our strategic plan for 2024-2026.",
      media: {
        type: "image",
        src: "egg.png",
        alt: "Members attending AGM 2024"
      },
      date: "March 15, 2024"
    },
    {
      title: "Financial Literacy Drive",
      description: "Our financial education program trained over 500 members in essential money management skills including budgeting and investment basics.",
      media: {
        type: "video",
        src: "vid.mp4",
        alt: "Financial literacy training"
      },
      date: "February 2024"
    },
    {
      title: "Branch Opening - Karatina",
      description: "Celebrated the opening of our new Karatina branch, bringing services closer to members in Central Kenya with special launch offers.",
      media: {
        type: "image",
        src: "big.png",
        alt: "New branch opening"
      },
      date: "January 20, 2024"
    },
    {
      title: "Sacco Golf Tournament",
      description: "3rd annual tournament raised Ksh 2.3 million for community education projects with 72 participants.",
      media: {
        type: "video",
        src: "golf.mp4",
        alt: "Golf tournament"
      },
      date: "November 10, 2023"
    },
    {
      title: "Youth Workshop",
      description: "50 young members completed our entrepreneurship program, with top ideas receiving startup funding.",
      media: {
        type: "image",
        src: "beer.png",
        alt: "Youth workshop"
      },
      date: "October 2023"
    }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <NewsContainer>
        <SectionTitle>News & Events</SectionTitle>
        
        {/* Compact Carousel */}
        <div className="mb-4">
          <Carousel fade interval={4000} controls={false}>
            {events.slice(0, 3).map((event, index) => (
              <Carousel.Item key={index}>
                <div className="ratio ratio-16x9">
                  {event.media.type === 'image' ? (
                    <img 
                      src={event.media.src} 
                      alt={event.media.alt}
                      className="d-block w-100 object-fit-cover"
                    />
                  ) : (
                    <video controls className="d-block w-100">
                      <source src={event.media.src} type="video/mp4" />
                    </video>
                  )}
                </div>
                <Carousel.Caption className="p-2">
                  <div className="bg-dark bg-opacity-75 p-2 rounded">
                    <h5 className="m-0" style={{fontSize: '1rem'}}>{event.title}</h5>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Compact Events List */}
        {events.map((event, index) => (
          <EventCard key={index}>
            <div className="date-badge">{event.date}</div>
            <h5>{event.title}</h5>
            <p>{event.description}</p>
            
            <div className="media-container">
              {event.media.type === 'image' ? (
                <img 
                  src={event.media.src} 
                  alt={event.media.alt}
                  className="img-fluid w-100"
                />
              ) : (
                <video controls width="100%" style={{maxHeight: '300px'}}>
                  <source src={event.media.src} type="video/mp4" />
                </video>
              )}
            </div>
          </EventCard>
        ))}
      </NewsContainer>
    </>
  );
}

export default NewsEvents;