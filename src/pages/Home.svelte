<script>
  import { APP_CONFIG, ROUTES } from '../config/constants.js'
</script>

<section class="hero">
  <div class="hero-content">
    <!-- Centered Logo Design -->
    <div class="logo-showcase">
      <div class="circuit-lines">
        <div class="circuit-line line-1"></div>
        <div class="circuit-line line-2"></div>
        <div class="circuit-line line-3"></div>
        <div class="circuit-line line-4"></div>
      </div>
      <div class="logo-container">
        <div class="logo-glow"></div>
        <img src="/src/assets/club-logo.jpg" alt="Colorado School of Mines AI/ML Club Logo" class="hero-logo" />
      </div>
    </div>

    <div class="hero-text">
      <h1>{APP_CONFIG.clubName}</h1>
      <p class="lead">Empowering students to explore artificial intelligence and machine learning through hands-on workshops, collaborative projects, and industry connections.</p>

      <div class="cta-row">
        <a class="btn primary" href={ROUTES.EVENTS}>
          <span>Upcoming Events</span>
          <span class="arrow">→</span>
        </a>
        <a class="btn secondary" href={ROUTES.CONTACT}>Contact Us</a>
      </div>
    </div>
  </div>

  <div class="features">
    <div class="feature-card">
      <img src="/src/assets/training.jpg" alt="AI/ML Training" class="feature-image" />
      <div class="feature-content">
        <div class="feature-icon">🎓</div>
        <h3>Workshops & Training</h3>
        <p>Regular hands-on workshops covering machine learning fundamentals, deep learning frameworks, and cutting-edge AI techniques.</p>
      </div>
    </div>

    <div class="feature-card">
      <img src="/src/assets/competition.jpg" alt="AI/ML Projects" class="feature-image" />
      <div class="feature-content">
        <div class="feature-icon">🚀</div>
        <h3>Collaborative Projects</h3>
        <p>Work on real-world machine learning projects, participate in competitions, and build your portfolio with guidance from experienced mentors.</p>
      </div>
    </div>

    <div class="feature-card">
      <img src="/src/assets/networking.jpg" alt="Industry Connections" class="feature-image" />
      <div class="feature-content">
        <div class="feature-icon">🤝</div>
        <h3>Industry Connections</h3>
        <p>Network with professionals, attend guest lectures, and explore career opportunities in AI and machine learning.</p>
      </div>
    </div>
  </div>

  <div class="mission-section">
    <h2>Our Mission</h2>
    <p class="mission-text">
      Artificial Intelligence and Machine Learning Club aims to foster a collaborative environment for students interested in the vast domain of machine learning. The club seeks to promote understanding, research, and application of machine learning concepts. AI/ML at Mines strives to provide resources, mentorship, workshops, competitions, and projects to help members learn about artificial intelligence and machine learning techniques, ethics, and advancements. It's a platform for sharing knowledge, collaborating on projects, and staying updated with the latest breakthroughs.
    </p>
  </div>
</section>

<style>
  .hero {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 0;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
    text-align: center;
  }

  /* Logo Showcase Section */
  .logo-showcase {
    position: relative;
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }

  .circuit-lines {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .circuit-line {
    position: absolute;
    background: linear-gradient(90deg, transparent, var(--cyan), transparent);
    height: 2px;
    animation: pulse 3s ease-in-out infinite;
  }

  .line-1 {
    width: 60%;
    top: 20%;
    left: -10%;
    animation-delay: 0s;
  }

  .line-2 {
    width: 70%;
    top: 40%;
    right: -15%;
    animation-delay: 0.5s;
  }

  .line-3 {
    width: 50%;
    top: 60%;
    left: 5%;
    animation-delay: 1s;
  }

  .line-4 {
    width: 65%;
    top: 80%;
    right: -5%;
    animation-delay: 1.5s;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.2;
      box-shadow: 0 0 5px var(--cyan-subtle);
    }
    50% {
      opacity: 0.6;
      box-shadow: 0 0 20px var(--cyan-subtle), 0 0 40px var(--cyan-subtle);
    }
  }

  .logo-container {
    position: relative;
    z-index: 2;
    max-width: 400px;
    width: 90%;
  }

  .logo-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%);
    filter: blur(40px);
    animation: glow 4s ease-in-out infinite;
    z-index: -1;
  }

  @keyframes glow {
    0%, 100% {
      opacity: 0.4;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.7;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  .hero-logo {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 20px;
    box-shadow: 
      0 10px 40px rgba(0, 0, 0, 0.5),
      0 0 60px var(--accent-subtle),
      0 0 100px rgba(0, 206, 209, 0.1);
    border: 2px solid var(--border-accent);
    transition: transform 0.3s ease;
  }

  .hero-logo:hover {
    transform: scale(1.02);
    box-shadow: 
      0 15px 50px rgba(0, 0, 0, 0.6),
      0 0 80px var(--accent-subtle),
      0 0 120px rgba(0, 206, 209, 0.15);
  }

  .hero-text {
    max-width: 800px;
  }
  
  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin: 0 0 1.5rem;
    color: var(--text-bright);
  }
  
  .lead {
    color: var(--muted);
    font-size: 1.15rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
  }
  
  .cta-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .btn {
    padding: 1rem 2rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1.05rem;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
  }

  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  .btn:hover::before {
    left: 100%;
  }
  
  .primary {
    background: linear-gradient(135deg, var(--accent-bright), var(--accent));
    color: #0A1628;
    box-shadow: 
      0 4px 15px var(--accent-subtle),
      0 0 30px rgba(212, 175, 55, 0.2);
    border: 1px solid var(--accent-bright);
  }
  
  .primary:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 8px 25px var(--accent-subtle),
      0 0 50px rgba(212, 175, 55, 0.3);
  }
  
  .primary .arrow {
    transition: transform 0.3s;
  }
  
  .primary:hover .arrow {
    transform: translateX(5px);
  }
  
  .secondary {
    background: transparent;
    color: var(--cyan-bright);
    border: 2px solid var(--border-cyan);
  }
  
  .secondary:hover {
    background: var(--cyan-subtle);
    border-color: var(--cyan-bright);
    box-shadow: 0 0 20px var(--cyan-subtle);
  }
  
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
  }

  .feature-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
  }

  .feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent), var(--cyan));
  }

  .feature-card:hover {
    transform: translateY(-8px);
    border-color: var(--border-accent);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  }

  .feature-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .feature-card:hover .feature-image {
    transform: scale(1.05);
  }

  .feature-content {
    padding: 1.5rem;
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 0 10px var(--accent));
  }

  .feature-card h3 {
    color: var(--text-bright);
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .feature-card p {
    color: var(--text-muted);
    line-height: 1.6;
  }

  .mission-section {
    margin-top: 5rem;
    padding: 3rem 2rem;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .mission-section h2 {
    color: var(--accent-bright);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  .mission-text {
    color: var(--text);
    font-size: 1.15rem;
    line-height: 1.8;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    .hero-content {
      padding: 2rem 1rem;
    }

    .logo-container {
      max-width: 320px;
    }
    
    h1 {
      font-size: 2.75rem;
    }
    
    .features {
      gap: 1.5rem;
    }
  }
  
  @media (max-width: 600px) {
    .hero {
      padding: 1.5rem 0;
    }

    .logo-container {
      max-width: 280px;
    }
    
    h1 {
      font-size: 2.25rem;
    }
    
    .lead {
      font-size: 1rem;
    }
    
    .cta-row {
      flex-direction: column;
      width: 100%;
    }
    
    .btn {
      width: 100%;
      justify-content: center;
    }

    .circuit-line {
      display: none;
    }
  }
</style>
