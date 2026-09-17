import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-wrap">

        <Link to="/" className="brand">
          <svg
            className="orbit-mark"
            viewBox="0 0 34 34"
            aria-hidden="true"
          >
            <circle className="ring" cx="17" cy="17" r="15" />
            <circle className="ring" cx="17" cy="17" r="9" />
            <circle className="core" cx="17" cy="17" r="4" />
          </svg>

          <span>StartupVerse</span>
        </Link>

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
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;