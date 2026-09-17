import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="site-header">
        <div className="nav-wrap">

          <Link to="/" className="brand">
            <svg className="orbit-mark" viewBox="0 0 34 34" aria-hidden="true">
              <circle className="ring" cx="17" cy="17" r="15" />
              <circle className="ring" cx="17" cy="17" r="9" />
              <circle className="core" cx="17" cy="17" r="3" />
              <circle className="dot" cx="17" cy="2" r="2" />
            </svg>

            Startup<span className="verse">Verse</span>
          </Link>

          <button
            className="nav-toggle"
            type="button"
            aria-label="Menu kholo"
          >
            ☰
          </button>

          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/roadmap">Roadmap</Link>
              </li>

              <li>
                <Link to="/skills">Skills</Link>
              </li>

              <li>
                <Link to="/fundamentals">Market Fundamentals</Link>
              </li>

              <li>
                <Link to="/dictionary">Dictionary</Link>
              </li>

              <li>
                <Link to="/success-stories">Success Stories</Link>
              </li>
            </ul>
          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <main>

        <section className="hero">
          <div className="container hero-grid">

            <div>

              <span className="eyebrow">
                India ka startup ecosystem, ek jagah
              </span>

              <h1>
                The idea.
                <br />
                And It's <em>orbit.</em>
              </h1>

              <p className="lead">
                Startup shuru karne ka sochte ho,
                par pata nahi kahan se shuru karein?
                StartupVerse mein milega roadmap,
                zaroori skills, market ke fundamentals,
                saari startup terms ki simple explanation,
                real success stories —
                sab ek jagah, Hinglish mein.
              </p>


              <div className="cta-row">

                <Link to="/roadmap" className="btn btn-primary">
                  Roadmap →
                </Link>

                <Link to="/dictionary" className="btn btn-ghost">
                  Dictionary
                </Link>

              </div>


              {/* FOUNDER TIP */}
              <div className="callout" style={{ marginTop: "40px" }}>

                <strong>Aaj ka founder tip:</strong>

                <p style={{ margin: "8px 0 0" }}>
                  Start early by focusing intensely on solving a single
                  real customer problem and launching a simple version
                  of your product to get feedback fast.
                </p>

              </div>

            </div>


            {/* ================= ORBIT ================= */}
            <div className="hero-orbit" aria-hidden="true">

              <svg viewBox="0 0 520 520">

                {/* Outer ring */}
                <g className="orbit-anim-ring slow">
                  <circle
                    cx="260"
                    cy="260"
                    r="220"
                    fill="none"
                    stroke="#2B2F57"
                    strokeWidth="1"
                  />
                </g>


                {/* Middle ring */}
                <g className="orbit-anim-ring">
                  <circle
                    cx="260"
                    cy="260"
                    r="160"
                    fill="none"
                    stroke="#2B2F57"
                    strokeWidth="1"
                  />
                </g>


                {/* Inner ring */}
                <g className="orbit-anim-ring fast">
                  <circle
                    cx="260"
                    cy="260"
                    r="100"
                    fill="none"
                    stroke="#2B2F57"
                    strokeWidth="1"
                  />
                </g>


                {/* Center IDEA */}
                <circle
                  cx="260"
                  cy="260"
                  r="30"
                  fill="#FFB238"
                />

                <text
                  x="260"
                  y="265"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono"
                  fontSize="10"
                  fill="#0F1226"
                  fontWeight="700"
                >
                  IDEA
                </text>


                {/* Green dot */}
                <g className="orbit-anim-ring fast">
                  <circle
                    cx="260"
                    cy="160"
                    r="7"
                    fill="#59E3A6"
                  />
                </g>


                {/* Yellow dot */}
                <g className="orbit-anim-ring">
                  <circle
                    cx="420"
                    cy="260"
                    r="7"
                    fill="#FFB238"
                  />
                </g>


                {/* Yellow dot */}
                <g className="orbit-anim-ring">
                  <circle
                    cx="100"
                    cy="260"
                    r="7"
                    fill="#FFB238"
                  />
                </g>


                {/* Green dot */}
                <g className="orbit-anim-ring slow">
                  <circle
                    cx="260"
                    cy="40"
                    r="7"
                    fill="#59E3A6"
                  />
                </g>


                {/* White dot */}
                <g className="orbit-anim-ring slow">
                  <circle
                    cx="480"
                    cy="260"
                    r="6"
                    fill="#F5F3EA"
                  />
                </g>

              </svg>

            </div>

          </div>
        </section>


        {/* ================= EXPLORE ================= */}
        <div className="container">

          <div className="section-head">

            <h2>Ek sawaal, ek jagah jawaab</h2>

            <p>
              Jo bhi confusion ho —
              "kya skills chahiye",
              "B2B aur D2C mein farq kya hai",
              "Ek Startup UNICORN kaise banta hai" —
              yahan alag-alag section mein
              sab kuch milega.
            </p>

          </div>


          <div className="grid grid-3">

            {/* ROADMAP */}
            <Link to="/roadmap" className="card-link">
              <div className="card">

                <span className="tag">
                  Step-by-step
                </span>

                <h3>
                  Startup Roadmap
                </h3>

                <p>
                  Idea se lekar launch tak —
                  pura process, stage by stage, samjho.
                </p>

              </div>
            </Link>


            {/* SKILLS */}
            <Link to="/skills" className="card-link">
              <div className="card">

                <span className="tag">
                  Self check
                </span>

                <h3>
                  Zaroori Skills
                </h3>

                <p>
                  Founder banne ke liye kaunsi skills
                  kaam aati hain, aur kaise seekhein.
                </p>

              </div>
            </Link>


            {/* FUNDAMENTALS */}
            <Link to="/fundamentals" className="card-link">
              <div className="card">

                <span className="tag">
                  Basics
                </span>

                <h3>
                  Market Fundamentals
                </h3>

                <p>
                  TAM-SAM-SOM, unit economics,
                  product-market fit —
                  clearly samjhaya gaya.
                </p>

              </div>
            </Link>


            {/* DICTIONARY */}
            <Link to="/dictionary" className="card-link">
              <div className="card">

                <span className="tag">
                  Dictionary
                </span>

                <h3>
                  Startup Dictionary
                </h3>

                <p>
                  B2B, D2C, SaaS, cap table,
                  burn rate — har term simple
                  language mein.
                </p>

              </div>
            </Link>


            {/* SUCCESS STORIES */}
            <Link to="/success-stories" className="card-link">
              <div className="card">

                <span className="tag">
                  Case studies
                </span>

                <h3>
                  Success Stories
                </h3>

                <p>
                  Zomato, Swiggy, Zepto jaise
                  startups ki journey aur
                  unse seekh.
                </p>

              </div>
            </Link>

          </div>


          {/* ================= WHY STARTUPVERSE ================= */}
          <div className="orbit-divider">
            Kyun StartupVerse
          </div>


          <div
            className="grid grid-3"
            style={{ marginBottom: "40px" }}
          >

            <div className="card">

              <h3>
                Sab kuch Hinglish mein
              </h3>

              <p>
                Complicated business jargon nahi —
                jaisi bhasha tum sochte ho,
                waisi hi yahan likha hai.
              </p>

            </div>


            <div className="card">

              <h3>
                Real examples
              </h3>

              <p>
                Sirf theory nahi — Indian startups
                ke real founders, unki decisions
                aur unke experiences se seekh.
              </p>

            </div>


            <div className="card">

              <h3>
                Beginner-friendly
              </h3>

              <p>
                Agar tumne kabhi startup ke baare
                mein socha bhi nahi, phir bhi
                yahan se shuru kar sakte ho.
              </p>

            </div>

          </div>

        </div>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="site-footer">

        <div className="container footer-grid">

          <p className="footer-note">
            StartupVerse ek learning resource hai —
            investment ya legal advice nahi.
            Koi bhi startup shuru karne se pehle
            apni research aur zaroorat ke hisaab se
            professional advice zaroor lo.
          </p>


          <div className="footer-links">

            <Link to="/">Home</Link>

            <Link to="/roadmap">
              Roadmap
            </Link>

            <Link to="/dictionary">
              Dictionary
            </Link>

            <Link to="/fundamentals">
              Market Fundamentals
            </Link>

          </div>

        </div>

      </footer>

    </>
  );
}

export default Home;