import React from 'react';
import './index.css';

// Components
const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__container container">
        <a href="#home" className="nav__logo">Portfolio</a>
        <ul className="nav__menu">
          <li><a href="#home" className="nav__link">Home</a></li>
          <li><a href="#about" className="nav__link">About</a></li>
          <li><a href="#portfolio" className="nav__link">Portfolio</a></li>
          <li><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__subtitle">UX/UI Designer</div>
        <h1>Creating intuitive digital experiences</h1>
        <p className="hero__description">
          Passionate about designing mobile applications that solve real problems 
          and delight users through thoughtful interaction design and user research.
        </p>
        <div className="hero__cta">
          <a href="#portfolio" className="btn btn--primary">View My Work</a>
          <a href="#contact" className="btn btn--secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about">
          <div>
            <div className="card__image about__image"></div>
          </div>
          <div>
            <h2>About Me</h2>
            <p className="text-large">
              I'm a UX/UI designer with a passion for creating meaningful digital experiences. 
              Currently focused on mobile app design, I believe great design happens when 
              user needs, business goals, and technical possibilities align perfectly.
            </p>
            <p>
              My approach combines user research, iterative design, and close collaboration 
              with development teams to create products that are not only beautiful but 
              also functional and accessible.
            </p>
            <div className="about__skills">
              <span className="skill-tag">User Research</span>
              <span className="skill-tag">UI Design</span>
              <span className="skill-tag">Prototyping</span>
              <span className="skill-tag">Mobile Design</span>
              <span className="skill-tag">Design Systems</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Sketch</span>
              <span className="skill-tag">Adobe Creative Suite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="section section--alt">
      <div className="container">
        <h2>Featured Project</h2>
        <div className="portfolio__item">
          <div className="card__image portfolio__image"></div>
          <div className="portfolio__meta">
            <span className="portfolio__tag">Mobile App</span>
            <span className="portfolio__tag">UX Research</span>
            <span className="portfolio__tag">UI Design</span>
          </div>
          <h3>Mobile App Design Project</h3>
          <p className="text-large">
            A comprehensive mobile application designed to solve [specific problem]. 
            This project showcases my end-to-end design process from initial research 
            to final implementation.
          </p>
          
          <div style={{ marginTop: 'var(--space-xl)' }}>
            <h3>The Challenge</h3>
            <p>
              [Description of the problem you were solving, who the users are, 
              and what challenges you faced in the design process.]
            </p>
            
            <h3>My Process</h3>
            <div className="grid grid--2" style={{ margin: 'var(--space-lg) 0' }}>
              <div className="card">
                <div className="card__content">
                  <h4 style={{ color: 'var(--primary-warm)', marginBottom: 'var(--space-sm)' }}>1. Research</h4>
                  <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                    User interviews, competitive analysis, and persona development 
                    to understand user needs and pain points.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card__content">
                  <h4 style={{ color: 'var(--primary-warm)', marginBottom: 'var(--space-sm)' }}>2. Ideation</h4>
                  <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                    Sketching, wireframing, and exploring multiple design solutions 
                    through rapid prototyping.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card__content">
                  <h4 style={{ color: 'var(--primary-warm)', marginBottom: 'var(--space-sm)' }}>3. Design</h4>
                  <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                    Creating high-fidelity designs with a focus on accessibility 
                    and consistent design patterns.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card__content">
                  <h4 style={{ color: 'var(--primary-warm)', marginBottom: 'var(--space-sm)' }}>4. Testing</h4>
                  <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>
                    User testing sessions to validate design decisions and 
                    iterate based on feedback.
                  </p>
                </div>
              </div>
            </div>
            
            <h3>The Solution</h3>
            <p>
              [Description of your final design solution, key features, and how it 
              addresses the original problem. Include metrics or feedback if available.]
            </p>
            
            <h3>Key Learnings</h3>
            <p>
              [Insights gained from this project, challenges overcome, and how this 
              experience influenced your design approach.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <h2>Let's Work Together</h2>
          <p className="text-large">
            Interested in collaborating? I'd love to hear about your project.
          </p>
        </div>
        
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-input" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-input" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              className="form-input" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              className="form-textarea" 
              required
            ></textarea>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
          </div>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
          <p className="text-small">
            Or reach out directly at <a href="mailto:hello@example.com" style={{ color: 'var(--primary-warm)' }}>hello@example.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          <a href="https://linkedin.com/in/yourprofile" className="footer__link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://dribbble.com/yourprofile" className="footer__link" target="_blank" rel="noopener noreferrer">
            Dribbble
          </a>
          <a href="https://behance.net/yourprofile" className="footer__link" target="_blank" rel="noopener noreferrer">
            Behance
          </a>
          <a href="mailto:hello@example.com" className="footer__link">
            Email
          </a>
        </div>
        <p className="text-small">
          © 2026 UX/UI Portfolio. Designed with care.
        </p>
      </div>
    </footer>
  );
};

// Smooth scrolling for navigation links
const handleSmoothScroll = (e) => {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Main App Component
function App() {
  React.useEffect(() => {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;