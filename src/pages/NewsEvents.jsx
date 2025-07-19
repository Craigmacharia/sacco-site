import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const NewsContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #f9fbf4;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  color: #2a4365;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 2rem;
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

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #4a5568;
  font-size: 1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  padding: 0 1rem;

  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`;

const EventCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  transition: all 0.3s ease;
  overflow: hidden;
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
    margin-bottom: 1rem;
    font-size: 1.3rem;
    min-height: auto;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .media-container {
    border-radius: 10px;
    overflow: hidden;
    margin: 1rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    position: relative;
    aspect-ratio: 16/9;
    
    img, video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.03);
    }
  }

  .event-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    background-color: #f0f4f8;
    padding: 0.4rem 0.8rem;
    border-radius: 50px;
    font-size: 0.8rem;
    color: #2d3748;

    svg {
      margin-right: 0.3rem;
      color: #2BC0E4;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 576px) {
    .event-meta {
      gap: 0.5rem;
    }

    .meta-item {
      padding: 0.3rem 0.7rem;
      font-size: 0.75rem;
    }
  }
`;

const CarouselContainer = styled.div`
  margin-bottom: 3rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  position: relative;

  .carousel-item {
    height: 400px;
    
    img, video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .carousel-caption {
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 800px;
    background: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    
    h3 {
      font-size: 1.3rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      color: white;
    }

    p {
      font-size: 1rem;
      margin-bottom: 0;
      color: rgba(255, 255, 255, 0.9);
    }
  }

  .carousel-indicators {
    bottom: 10px;

    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 5px;
      background-color: rgba(255, 255, 255, 0.5);
      border: none;

      &.active {
        background-color: #2BC0E4;
      }
    }
  }

  @media (max-width: 768px) {
    .carousel-item {
      height: 350px;
    }

    .carousel-caption {
      padding: 0.8rem;
      
      h3 {
        font-size: 1.1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 576px) {
    .carousel-item {
      height: 300px;
    }

    .carousel-caption {
      bottom: 20px;
      padding: 0.6rem;
      
      h3 {
        font-size: 1rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 0 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.2rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const NewsletterSection = styled.div`
  background: linear-gradient(135deg, #2BC0E4 0%, #4CA1AF 100%);
  padding: 2rem;
  border-radius: 12px;
  margin: 3rem 0.5rem;
  color: white;
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto 1.5rem;
    font-size: 1rem;
    opacity: 0.9;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 576px) {
    padding: 1.2rem 1rem;
    margin: 2rem 0.5rem;
    
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
`;

const ImagePlaceholder = styled.div`
  background-color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16/9;
  color: #718096;
  font-weight: 600;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SectionHeader = styled.h2`
  color: #2a4365;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }
`;

function NewsEvents() {
  const featuredEvents = [
    {
      title: "AGM 2024 Recap",
      description: "We held our successful Annual General Meeting with record attendance.",
      media: {
        type: "image",
        src: "agm.png",
        alt: "Members attending AGM 2024"
      },
      date: "March 15, 2024",
      location: "Nyeri Social Hall",
      attendees: "250+ members"
    },
    {
      title: "Financial Literacy Drive",
      description: "Our financial education program trained members.",
      media: {
        type: "image",
        src: "drive.png",
        alt: "Financial literacy training"
      },
      date: "February 2024",
      location: "Multiple Locations",
      attendees: "500+ members"
    },
    {
      title: "Branch Opening - Karatina",
      description: "Celebrated the opening of our new Karatina branch.",
      media: {
        type: "image",
        src: "branch.png",
        alt: "New branch opening"
      },
      date: "January 20, 2024",
      location: "Karatina Town",
      attendees: "150+ members"
    }
  ];

  const pastEvents = [
    {
      title: "Sacco Golf Tournament",
      description: "3rd annual tournament raised funds for community.",
      media: {
        type: "video",
        src: "golf.mp4",
        alt: "Golf tournament"
      },
      date: "November 10, 2023",
      location: "Nyeri Golf Club",
      attendees: "72 participants"
    },
    {
      title: "Youth Workshop",
      description: "Young members completed our entrepreneurship program.",
      media: {
        type: "image",
        src: "youth.png",
        alt: "Youth workshop"
      },
      date: "October 2023",
      location: "Main Office",
      attendees: "50 members"
    },
    {
      title: "Mobile App Launch",
      description: "Launched our new mobile banking app with enhanced features.",
      media: {
        type: "image",
        src: "fon.png",
        alt: "Mobile app launch"
      },
      date: "September 5, 2023",
      location: "Virtual Event",
      attendees: "300+ participants"
    }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <NewsContainer>
        <SectionTitle>News & Events</SectionTitle>
        <SectionSubtitle>
          Stay updated with our latest activities, achievements, and upcoming events designed to empower our members and strengthen our community.
        </SectionSubtitle>
        
        <CarouselContainer>
          <Carousel fade interval={5000} indicators={true}>
            {featuredEvents.map((event, index) => (
              <Carousel.Item key={index}>
                <ImagePlaceholder>
                  {event.media.type === 'image' ? (
                    <img 
                      src={event.media.src} 
                      alt={event.media.alt}
                      className="d-block w-100"
                      loading="lazy"
                    />
                  ) : (
                    <video autoPlay muted loop className="d-block w-100">
                      <source src={event.media.src} type="video/mp4" />
                    </video>
                  )}
                </ImagePlaceholder>
                <Carousel.Caption>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </CarouselContainer>

        <SectionHeader>Upcoming Events</SectionHeader>
        <EventGrid>
          {featuredEvents.map((event, index) => (
            <EventCard key={index}>
              <div className="event-meta">
                <span className="meta-item">
                  <FaCalendarAlt /> {event.date}
                </span>
                <span className="meta-item">
                  <FaMapMarkerAlt /> {event.location}
                </span>
                <span className="meta-item">
                  <FaUsers /> {event.attendees}
                </span>
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              
              <div className="media-container">
                <ImagePlaceholder>
                  {event.media.type === 'image' ? (
                    <img 
                      src={event.media.src} 
                      alt={event.media.alt}
                      loading="lazy"
                    />
                  ) : (
                    <video controls>
                      <source src={event.media.src} type="video/mp4" />
                    </video>
                  )}
                </ImagePlaceholder>
              </div>
            </EventCard>
          ))}
        </EventGrid>

        <SectionHeader>Past Events</SectionHeader>
        <EventGrid>
          {pastEvents.map((event, index) => (
            <EventCard key={index}>
              <div className="event-meta">
                <span className="meta-item">
                  <FaCalendarAlt /> {event.date}
                </span>
                <span className="meta-item">
                  <FaMapMarkerAlt /> {event.location}
                </span>
                <span className="meta-item">
                  <FaUsers /> {event.attendees}
                </span>
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              
              <div className="media-container">
                <ImagePlaceholder>
                  {event.media.type === 'image' ? (
                    <img 
                      src={event.media.src} 
                      alt={event.media.alt}
                      loading="lazy"
                    />
                  ) : (
                    <video controls>
                      <source src={event.media.src} type="video/mp4" />
                    </video>
                  )}
                </ImagePlaceholder>
              </div>
            </EventCard>
          ))}
        </EventGrid>

        <NewsletterSection>
          <h3>Go Herb Sacco</h3>
          <p>Join the fastest growing youth sacco in Nyeri county today.</p>
        </NewsletterSection>
      </NewsContainer>
    </>
  );
}

export default NewsEvents;