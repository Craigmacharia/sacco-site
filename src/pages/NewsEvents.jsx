import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const NewsContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background-color: #f9fbf4;
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
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #4a5568;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const EventCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  transition: all 0.3s ease;
  overflow: hidden;
  border-left: 4px solid #2BC0E4;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #2a4365;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    min-height: 72px;
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    flex-grow: 1;
  }

  .media-container {
    border-radius: 10px;
    overflow: hidden;
    margin: 1.5rem 0;
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
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    background-color: #f0f4f8;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    color: #2d3748;
    white-space: nowrap;

    svg {
      margin-right: 0.5rem;
      color: #2BC0E4;
    }
  }

  .read-more {
    display: inline-block;
    background: linear-gradient(90deg, #2BC0E4 0%, #4CA1AF 100%);
    color: white;
    padding: 0.6rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: auto;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      background: linear-gradient(90deg, #4CA1AF 0%, #2BC0E4 100%);
    }
  }
`;

const CarouselContainer = styled.div`
  margin-bottom: 4rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  position: relative;

  .carousel-item {
    height: 500px;
    
    img, video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .carousel-caption {
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 900px;
    background: rgba(0, 0, 0, 0.8);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    
    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      color: white;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 0;
      color: rgba(255, 255, 255, 0.9);
    }
  }

  .carousel-indicators {
    bottom: 10px;

    button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 0 6px;
      background-color: rgba(255, 255, 255, 0.5);
      border: none;

      &.active {
        background-color: #2BC0E4;
      }
    }
  }
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
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

function NewsEvents() {
  const featuredEvents = [
    {
      title: "AGM 2024 Recap",
      description: "We held our successful Annual General Meeting.",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
        type: "image",
        src: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Golf tournament"
      },
      date: "November 10, 2023",
      location: "Nyeri Golf Club",
      attendees: "72 participants"
    },
    {
      title: "Youth Workshop",
      description: "Young members completed our entrepreneurship program, with top ideas receiving startup funding.",
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
      description: "Launched our new mobile banking app with enhanced features for easier account management.",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
                  <img 
                    src={event.media.src} 
                    alt={event.media.alt}
                    className="d-block w-100"
                    loading="lazy"
                  />
                </ImagePlaceholder>
                <Carousel.Caption>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </CarouselContainer>

        <h2 style={{color: '#2a4365', marginBottom: '2rem', fontSize: '2rem'}}>Upcoming Events</h2>
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
                  <img 
                    src={event.media.src} 
                    alt={event.media.alt}
                    loading="lazy"
                  />
                </ImagePlaceholder>
              </div>
              <a href="#register" className="read-more">Learn More</a>
            </EventCard>
          ))}
        </EventGrid>

        <h2 style={{color: '#2a4365', marginBottom: '2rem', fontSize: '2rem', marginTop: '4rem'}}>Past Events</h2>
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
                  <img 
                    src={event.media.src} 
                    alt={event.media.alt}
                    loading="lazy"
                  />
                </ImagePlaceholder>
              </div>
              <a href="#details" className="read-more">View Details</a>
            </EventCard>
          ))}
        </EventGrid>
      </NewsContainer>
    </>
  );
}

export default NewsEvents;