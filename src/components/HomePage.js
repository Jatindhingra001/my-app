import React from 'react';
import { FaLeaf, FaSeedling, FaBook, FaStar } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  // Sample plant data - in a real app, this would come from an API
  const plantOfTheDay = {
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    description: "Known for its calming properties and beautiful purple flowers, lavender is a versatile herb used in aromatherapy, cooking, and traditional medicine.",
    uses: ["Aromatherapy", "Sleep aid", "Culinary herb", "Skin care"],
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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