import React from 'react';
import { FaLeaf, FaSeedling, FaBook, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.css';

const HomePage = () => {
  // Sample plant data - in a real app, this would come from an API
  const plantOfTheDay = {
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    description: "Known for its calming properties and beautiful purple flowers, lavender is a versatile herb used in aromatherapy, cooking, and traditional medicine.",
    uses: ["Aromatherapy", "Sleep aid", "Culinary herb", "Skin care"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzT002BX_yg4-5CrqP6dvMH4N-2CmZuFeGtQ&s"
  };

  const showcasePlants = [
    {
      name: "Peppermint",
      scientificName: "Mentha × piperita",
      description: "A refreshing herb known for its digestive benefits and cooling properties.",
      image: "https://media.istockphoto.com/id/185240131/photo/as.webp?a=1&b=1&s=612x612&w=0&k=20&c=XaDGhok71ziP862pcWr4tQXnHyxnsynpEL-BzJqJB9o="
    },
    {
      name: "Chamomile",
      scientificName: "Matricaria chamomilla",
      description: "A gentle herb famous for its calming effects and sleep-inducing properties.",
      image: "https://images.unsplash.com/photo-1683372466590-f01038538026?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYW1vbWlsZSUyMHBsYW50fGVufDB8fDB8fHww"
    },
    {
      name: "Echinacea",
      scientificName: "Echinacea purpurea",
      description: "A powerful immune-boosting herb with beautiful purple flowers.",
      image: "https://plus.unsplash.com/premium_photo-1664527009207-460d1e46a19a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Rosemary",
      scientificName: "Salvia rosmarinus",
      description: "A fragrant herb known for its memory-enhancing properties and culinary uses.",
      image: "https://images.unsplash.com/photo-1618679639167-41f5df274ca9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZW1hcnklMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Ginger",
      scientificName: "Zingiber officinale",
      description: "A warming root with powerful anti-inflammatory and digestive benefits.",
      image: "https://images.unsplash.com/photo-1603431777782-912e3b76f60d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2luZ2VyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0'
        }
      }
    ]
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line">Welcome to</span>
                <span className="title-highlight">Herbarium</span>
              </h1>
              <p className="hero-subtitle">Your Virtual Garden of Healing Plants</p>
              <p className="hero-description">
                Discover the ancient wisdom of herbal medicine through our interactive platform. 
                Learn about medicinal plants, their properties, and how to use them safely.
              </p>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaLeaf />
                </div>
                <div className="stat-number">100+</div>
                <div className="stat-label">Medicinal Plants</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBook />
                </div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Traditional Uses</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaSeedling />
                </div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Growing Guides</div>
              </div>
            </div>

            <div className="hero-cta">
              <button className="explore-btn">Explore Plants</button>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>

          <div className="plant-of-the-day">
            <div className="plant-header">
              <FaStar className="star-icon" />
              <h3>Plant of the Day</h3>
            </div>
            <div className="plant-card">
              <div className="plant-image">
                <img src={plantOfTheDay.image} alt={plantOfTheDay.name} />
              </div>
              <div className="plant-info">
                <h4>{plantOfTheDay.name}</h4>
                <p className="scientific-name">{plantOfTheDay.scientificName}</p>
                <p className="plant-description">{plantOfTheDay.description}</p>
                <div className="plant-uses">
                  {plantOfTheDay.uses.map((use, index) => (
                    <span key={index} className="use-tag">{use}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plant-showcase">
        <div className="showcase-header">
          <h2>Explore Our Plant Collection</h2>
          <p>Discover the healing power of nature's pharmacy</p>
        </div>
        <div className="showcase-container">
          <Slider {...sliderSettings}>
            {showcasePlants.map((plant, index) => (
              <div key={index} className="showcase-card">
                <div className="plant-image">
                  <img src={plant.image} alt={plant.name} />
                </div>
                <div className="plant-details">
                  <h3>{plant.name}</h3>
                  <p className="scientific-name">{plant.scientificName}</p>
                  <p className="description">{plant.description}</p>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Why Choose Herbarium?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌿</div>
            <h3>Comprehensive Plant Library</h3>
            <p>Access detailed information about hundreds of herbs, including their medicinal properties, growing conditions, and traditional uses. 
               Each plant profile includes high-quality images, care instructions, and potential health benefits.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Expert Growing Guides</h3>
            <p>Learn the art of herb cultivation with our step-by-step guides. From soil preparation to harvesting techniques, 
               we provide everything you need to grow a thriving herbal garden, whether indoors or outdoors.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Thriving Community</h3>
            <p>Connect with fellow herb enthusiasts, share experiences, and learn from experts. Join our forums, 
               participate in live Q&A sessions, and access exclusive content from herbal medicine practitioners.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Smart Search & Filtering</h3>
            <p>Quickly find the perfect herbs for your needs with our advanced search system. Filter by medicinal properties, 
               growing conditions, or traditional uses to discover plants that match your requirements.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile-Friendly Access</h3>
            <p>Access our comprehensive database anytime, anywhere. Our responsive design ensures you can 
               reference plant information while working in your garden or shopping for herbs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Personal Garden Planner</h3>
            <p>Plan and track your herbal garden with our interactive tools. Get personalized planting schedules, 
               care reminders, and progress tracking to ensure your garden thrives.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Start Your Herbal Journey?</h2>
          <p>Join thousands of herb enthusiasts who are already growing their knowledge and gardens with Herbarium.</p>
          <div className="cta-buttons">
            <button className="explore-btn">Explore Plants</button>
            <button className="signup-btn">Sign Up Now</button>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">What Our Community Says</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"The detailed growing guides helped me transform my small balcony into a thriving herb garden!"</p>
            <p className="testimonial-author">- Sarah M.</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"I've learned so much about medicinal herbs and their traditional uses. Herbarium is a treasure trove of knowledge!"</p>
            <p className="testimonial-author">- James T.</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The community support is incredible. I've made so many friends who share my passion for herbs!"</p>
            <p className="testimonial-author">- Maria L.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 