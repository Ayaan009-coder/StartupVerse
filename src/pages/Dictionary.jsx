import { useState, useMemo, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./dictionary.css";
import  {useDictionary} from "../context/DictionaryContext"
const CATEGORIES = ["All", "Metrics & Finance", "Business Models", "Funding", "Product & Tech", "Strategy"];
const DICTIONARY_DATA = [
  {
    term: "MVP",
    fullForm: "Minimum Viable Product",
    category: "Product & Tech",
    meaning: "A basic version of a product launched with core features to test an idea with real users quickly.",
    example: "Dropbox started with a simple 3-minute demo video showing how file syncing worked."
  },
  {
    term: "B2B",
    fullForm: "Business to Business",
    category: "Business Models",
    meaning: "A business model where one company sells products or services to another company.",
    example: "Slack, Salesforce, and AWS are classic B2B companies."
  },
  {
    term: "B2C",
    fullForm: "Business to Consumer",
    category: "Business Models",
    meaning: "A business model where a company sells products or services directly to individual consumers.",
    example: "Netflix, Spotify, and Nike."
  },
  {
    term: "D2C",
    fullForm: "Direct to Consumer",
    category: "Business Models",
    meaning: "A brand manufactures and ships directly to end customers without traditional retail middlemen.",
    example: "Warby Parker, Dollar Shave Club, and Glossier."
  },
  {
    term: "CAC",
    fullForm: "Customer Acquisition Cost",
    category: "Metrics & Finance",
    meaning: "The total marketing and sales cost spent to acquire one new paying customer.",
    formula: "CAC = Total Sales & Marketing Spend / Number of Customers Acquired"
  },
  {
    term: "LTV",
    fullForm: "Lifetime Value (CLV)",
    category: "Metrics & Finance",
    meaning: "The total gross profit or revenue a business expects to earn from a customer over their relationship.",
    formula: "Healthy SaaS benchmarks aim for LTV:CAC ratio >= 3:1"
  },
  {
    term: "PMF",
    fullForm: "Product-Market Fit",
    category: "Strategy",
    meaning: "When a product successfully solves a real, painful problem and customers pull the product from you.",
    example: "Coined by Marc Andreessen: 'The customers are buying the product as fast as you can make it.'"
  },
  {
    term: "ARR",
    fullForm: "Annual Recurring Revenue",
    category: "Metrics & Finance",
    meaning: "The normalized annual value of recurring subscription revenue.",
    formula: "ARR = MRR × 12"
  },
  {
    term: "MRR",
    fullForm: "Monthly Recurring Revenue",
    category: "Metrics & Finance",
    meaning: "The predictable revenue a subscription-based business earns every month.",
    formula: "MRR = Total active subscribers × Average Monthly Revenue per User (ARPU)"
  },
  {
    term: "Burn Rate",
    fullForm: "Cash Burn Rate",
    category: "Metrics & Finance",
    meaning: "The net amount of negative cash flow a startup spends each month.",
    example: "If you spend $50k/month and make $20k, your net burn is $30k/month."
  },
  {
    term: "Runway",
    fullForm: "Startup Cash Runway",
    category: "Metrics & Finance",
    meaning: "The number of months a startup can operate before running completely out of cash.",
    formula: "Runway (months) = Cash in Bank / Monthly Net Burn Rate"
  },
  {
    term: "Unicorn",
    fullForm: "Startup Valued at $1 Billion+",
    category: "Funding",
    meaning: "A privately held startup company valued at $1 billion or more.",
    example: "Term coined by venture capitalist Aileen Lee in 2013."
  },
  {
    term: "Decacorn",
    fullForm: "Startup Valued at $10 Billion+",
    category: "Funding",
    meaning: "A private company valued at over $10 billion (e.g., Stripe, Canva, ByteDance).",
    example: "Over 50+ startups have crossed decacorn status globally."
  },
  {
    term: "Pivot",
    fullForm: "Business Model Change",
    category: "Strategy",
    meaning: "Shifting the core business strategy, customer segment, or product based on feedback.",
    example: "Instagram began as 'Burbn', a check-in app, before pivoting solely to photos."
  },
  {
    term: "USP",
    fullForm: "Unique Selling Proposition",
    category: "Strategy",
    meaning: "The single defining benefit that makes your product distinctly superior to competitors.",
    example: "FedEx: 'When it absolutely, positively has to be there overnight.'"
  },
  {
    term: "KPI",
    fullForm: "Key Performance Indicator",
    category: "Strategy",
    meaning: "A quantifiable metric used to evaluate success in reaching critical operational targets.",
    example: "Active Users (DAU/MAU), Churn, or Conversion Rate."
  },
  {
    term: "SaaS",
    fullForm: "Software as a Service",
    category: "Business Models",
    meaning: "Software licensed on a subscription basis and hosted centrally in the cloud.",
    example: "Google Workspace, Figma, Notion."
  },
  {
    term: "API",
    fullForm: "Application Programming Interface",
    category: "Product & Tech",
    meaning: "A set of protocols that allows different software tools to communicate and share data.",
    example: "Stripe API allows apps to accept payments without building banking integrations."
  },
  {
    term: "Seed Funding",
    fullForm: "Early-Stage Funding",
    category: "Funding",
    meaning: "The initial official capital raised to prove a concept, validate PMF, or build a team.",
    example: "Typically ranges between $500k to $3M depending on geography."
  },
  {
    term: "Bootstrapping",
    fullForm: "Self-Funded Startup",
    category: "Funding",
    meaning: "Building and growing a business purely on founder capital and customer revenues without VC funding.",
    example: "Mailchimp, Basecamp, and GitHub (in its earliest years) bootstrapped."
  },
  {
    term: "Angel Investor",
    fullForm: "Individual Startup Investor",
    category: "Funding",
    meaning: "A high-net-worth individual who invests personal funds into early-stage ventures in exchange for equity.",
    example: "Often former founders or operators who offer mentorship along with capital."
  },
  {
    term: "Venture Capital",
    fullForm: "VC Investment",
    category: "Funding",
    meaning: "Institutional pooled funds that invest large sums into high-risk, high-growth potential companies.",
    example: "Sequoia Capital, Andreessen Horowitz (a16z), Y Combinator."
  },
  {
    term: "Valuation",
    fullForm: "Business Valuation",
    category: "Funding",
    meaning: "The estimated monetary worth of a company, split into Pre-money and Post-money.",
    formula: "Post-Money Valuation = Pre-Money Valuation + New Investment Capital"
  },
  {
    term: "Equity",
    fullForm: "Ownership in a Company",
    category: "Funding",
    meaning: "Ownership shares in a company representing a financial claim on its assets and future profits.",
    example: "Founders typically dilute equity across funding rounds."
  },
  {
    term: "Churn Rate",
    fullForm: "Customer Churn Rate",
    category: "Metrics & Finance",
    meaning: "The percentage of subscribers or customers who cancel or do not renew in a given time period.",
    formula: "Churn Rate (%) = (Customers Lost / Total Customers at Start) × 100"
  },
  {
    term: "IPO",
    fullForm: "Initial Public Offering",
    category: "Funding",
    meaning: "The transition of a private company into a publicly traded corporation by offering shares on a stock exchange.",
    example: "Airbnb's IPO in 2020 raised over $3.5B."
  }
];
function Dictionary() {
  const [search, setSearch] = useState("");
  
  // Context se favorites aur toggleFavorite lena:
  const { favorites, toggleFavorite } = useDictionary();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLetter, setSelectedLetter] = useState("ALL");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [copiedTerm, setCopiedTerm] = useState(null);
  // Favorites stored in LocalStorage
    
  const handleCopy = (item) => {
    const text = `${item.term} (${item.fullForm})\n${item.meaning}${
      item.formula ? `\nFormula: ${item.formula}` : ""
    }${item.example ? `\nExample: ${item.example}` : ""}`;
    navigator.clipboard.writeText(text);
    setCopiedTerm(item.term);
    setTimeout(() => setCopiedTerm(null), 1800);
  };
  // Unique alphabet letters present in dictionary
  const alphabet = useMemo(() => {
    const letters = new Set(
      DICTIONARY_DATA.map((item) => item.term[0].toUpperCase())
    );
    return ["ALL", ...Array.from(letters).sort()];
  }, []);
  // Filtered terms
  const filteredTerms = useMemo(() => {
    const query = search.trim().toLowerCase();
    return DICTIONARY_DATA.filter((item) => {
      // Favorites filter
      if (showFavoritesOnly && !favorites.includes(item.term)) {
        return false;
      }
      // Category filter
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      // Letter filter
      if (
        selectedLetter !== "ALL" &&
        item.term[0].toUpperCase() !== selectedLetter
      ) {
        return false;
      }
      // Search query
      if (!query) return true;
      return (
        item.term.toLowerCase().includes(query) ||
        item.fullForm.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query) ||
        (item.example && item.example.toLowerCase().includes(query)) ||
        (item.formula && item.formula.toLowerCase().includes(query))
      );
    });
  }, [search, selectedCategory, selectedLetter, showFavoritesOnly, favorites]);
  // Pick a random term to inspect
  const handleRandomTerm = () => {
    const random =
      DICTIONARY_DATA[Math.floor(Math.random() * DICTIONARY_DATA.length)];
    setSearch(random.term);
    setSelectedCategory("All");
    setSelectedLetter("ALL");
    setShowFavoritesOnly(false);
  };
  return (
    <>
      <Navbar />
      <main>
        <div className="dictionary-page">
          {/* HERO */}
          <section className="hero">
            <div className="container">
              <p className="eyebrow">FOUNDER'S KNOWLEDGE BASE</p>
              <h1>
                Startup <em>Dictionary</em>
              </h1>
              <p className="lead">
                Master venture capital, business models, and startup metrics in plain English.
              </p>
              <div className="hero-actions">
                <button
                  type="button"
                  className="random-btn"
                  onClick={handleRandomTerm}
                >
                  🎲 Learn a Random Term
                </button>
                <button
                  type="button"
                  className={`fav-toggle-btn ${showFavoritesOnly ? "active" : ""}`}
                  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                >
                  ⭐ Saved Terms ({favorites.length})
                </button>
              </div>
            </div>
          </section>
          {/* CONTROLS & CONTENT */}
          <section>
            <div className="container">
              {/* SEARCH INPUT BAR */}
              <div className="search-wrapper">
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search by term, acronym, definition, or formula..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button
                    className="clear-search-btn"
                    onClick={() => setSearch("")}
                    title="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
              {/* CATEGORY FILTER PILLS */}
              <div className="category-filters">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {/* A-Z ALPHABET BAR */}
              <div className="alphabet-bar">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    type="button"
                    className={`alphabet-btn ${selectedLetter === letter ? "active" : ""}`}
                    onClick={() => setSelectedLetter(letter)}
                  >
                    {letter}
                  </button>
                ))}
              </div>
              {/* RESULT STATS */}
              <div className="result-stats">
                <span>
                  Showing <strong>{filteredTerms.length}</strong> of{" "}
                  {DICTIONARY_DATA.length} terms
                </span>
                {(search || selectedCategory !== "All" || selectedLetter !== "ALL" || showFavoritesOnly) && (
                  <button
                    className="reset-filters-link"
                    onClick={() => {
                      setSearch("");
                      setSelectedCategory("All");
                      setSelectedLetter("ALL");
                      setShowFavoritesOnly(false);
                    }}
                  >
                    Reset all filters
                  </button>
                )}
              </div>
              {/* CARDS GRID */}
              <div className="dictionary-grid">
                {filteredTerms.length > 0 ? (
                  filteredTerms.map((item) => {
                    const isFav = favorites.includes(item.term);
                    const isCopied = copiedTerm === item.term;
                    return (
                      <div className="dictionary-card" key={item.term}>
                        <div className="card-header">
                          <div className="card-title-group">
                            <h2>{item.term}</h2>
                            {item.category && (
                              <span className="card-badge">{item.category}</span>
                            )}
                          </div>
                          <div className="card-actions">
                            <button
                              type="button"
                              className={`action-icon-btn ${isFav ? "favorited" : ""}`}
                              onClick={() => toggleFavorite(item.term)}
                              title={isFav ? "Remove from saved" : "Save term"}
                            >
                              {isFav ? "★" : "☆"}
                            </button>
                            <button
                              type="button"
                              className="action-icon-btn"
                              onClick={() => handleCopy(item)}
                              title="Copy definition"
                            >
                              {isCopied ? "✓" : "📋"}
                            </button>
                          </div>
                        </div>
                        <h3>{item.fullForm}</h3>
                        <p className="card-meaning">{item.meaning}</p>
                        {/* OPTIONAL FORMULA */}
                        {item.formula && (
                          <div className="card-formula">
                            <strong>Formula / Rule:</strong> {item.formula}
                          </div>
                        )}
                        {/* OPTIONAL REAL EXAMPLE */}
                        {item.example && (
                          <div className="card-example">
                            <strong>Example:</strong> {item.example}
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="empty-state">
                    <p>No matching terms found.</p>
                    <button
                      onClick={() => {
                        setSearch("");
                        setSelectedCategory("All");
                        setSelectedLetter("ALL");
                        setShowFavoritesOnly(false);
                      }}
                    >
                      Clear search & filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Dictionary;