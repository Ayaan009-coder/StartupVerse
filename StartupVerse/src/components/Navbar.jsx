import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          Startup<span>Verse</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/dictionary">Dictionary</Link>
          <Link to="/startups">Startups</Link>
          <Link to="/podcasts">Podcasts</Link>
        </div>

        <Link to="/roadmap" className="nav-button">
          Start Learning
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;