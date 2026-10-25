import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDictionary } from "../context/DictionaryContext";
import { useTheme } from "../context/ThemeContext"; // <-- 1. Import Theme

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { favorites } = useDictionary();
  const { theme, toggleTheme } = useTheme(); // <-- 2. Theme hook

  return (
    <header className="site-header">
      <div className="nav-wrap">

        <Link to="/" className="brand">
          <svg className="orbit-mark" viewBox="0 0 34 34" aria-hidden="true">
            <circle className="ring" cx="17" cy="17" r="15" />
            <circle className="ring" cx="17" cy="17" r="9" />
            <circle className="core" cx="17" cy="17" r="4" />
          </svg>
          <span>
            Startup<span className="verse">Verse</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" end onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/roadmap" onClick={() => setMobileMenuOpen(false)}>Roadmap</NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={() => setMobileMenuOpen(false)}>Skills</NavLink>
            </li>
            <li>
              <NavLink to="/fundamentals" onClick={() => setMobileMenuOpen(false)}>Market Fundamentals</NavLink>
            </li>
            <li>
              <NavLink to="/dictionary" onClick={() => setMobileMenuOpen(false)}>
                Dictionary
                {favorites.length > 0 && (
                  <span className="nav-badge">★ {favorites.length}</span>
                )}
              </NavLink>
            </li>

           
            <li>
              <Link to="/resources">Resources</Link>
            </li>

            

<li>
  <Link to="/cart">
    Cart 🛒
  </Link>
</li>

 {/* ☀️ / 🌙 THEME TOGGLE BUTTON */}
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle-btn"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;