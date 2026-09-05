import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <section className="hero">
        <div className="hero-content">

          <p className="eyebrow">YOUR STARTUP JOURNEY STARTS HERE</p>

          <h1>
            From an idea
            <br />
            to a <span>startup.</span>
          </h1>

          <p className="hero-text">
            StartupVerse is a simple learning platform for anyone who wants
            to understand startups, build better ideas and learn from
            successful founders.
          </p>

          <div className="hero-buttons">
            <Link to="/roadmap" className="primary-button">
              Explore Roadmap
            </Link>

            <Link to="/dictionary" className="secondary-button">
              Learn Startup Terms
            </Link>
          </div>

        </div>
      </section>

      <section className="section">

        <div className="section-heading">
          <p className="eyebrow">EXPLORE</p>
          <h2>Everything in one place.</h2>
          <p>
            Learn the fundamentals, understand the terminology and discover
            how some of India's biggest startups were built.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="card-number">01</div>
            <h3>Startup Roadmap</h3>
            <p>
              A step-by-step guide from finding a problem to launching and
              growing your startup.
            </p>
            <Link to="/roadmap">Explore →</Link>
          </div>

          <div className="feature-card">
            <div className="card-number">02</div>
            <h3>Skills You Need</h3>
            <p>
              Learn the skills founders need across product, sales, marketing,
              finance and leadership.
            </p>
            <Link to="/skills">Explore →</Link>
          </div>

          <div className="feature-card">
            <div className="card-number">03</div>
            <h3>Startup Dictionary</h3>
            <p>
              Understand terms like B2B, D2C, CAC, LTV, MVP, PMF, ARR and
              hundreds of other startup concepts.
            </p>
            <Link to="/dictionary">Explore →</Link>
          </div>

        </div>
      </section>

      <section className="dark-section">

        <div className="section-heading">
          <p className="eyebrow">LEARN FROM THE BEST</p>
          <h2>Real startups. Real stories.</h2>
          <p>
            Explore the journey of companies that started small and became
            some of India's most recognised startups.
          </p>
        </div>

        <div className="startup-preview">

          <div>
            <h3>Zomato</h3>
            <p>From a simple food discovery platform to a global company.</p>
          </div>

          <div>
            <h3>Swiggy</h3>
            <p>How logistics and technology transformed food delivery.</p>
          </div>

          <div>
            <h3>Zepto</h3>
            <p>Building one of India's fastest growing quick-commerce brands.</p>
          </div>

        </div>

        <Link to="/startups" className="outline-button">
          Explore Startup Stories
        </Link>

      </section>

    </div>
  );
}

export default Home;