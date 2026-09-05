const startups = [
  {
    name: "Zomato",
    category: "Food Tech",
    story:
      "Started as a restaurant discovery platform and evolved into one of India's largest food and commerce companies."
  },
  {
    name: "Swiggy",
    category: "Food Delivery",
    story:
      "Built around solving the logistics problem in food delivery and scaled into a major consumer platform."
  },
  {
    name: "Zepto",
    category: "Quick Commerce",
    story:
      "Built around extremely fast grocery delivery and became one of India's prominent quick-commerce startups."
  },
  {
    name: "Razorpay",
    category: "FinTech",
    story:
      "Focused on making online payments and financial infrastructure easier for businesses."
  },
  {
    name: "Meesho",
    category: "E-commerce",
    story:
      "Built a social-commerce model that enabled individuals and small businesses to sell products online."
  },
  {
    name: "CRED",
    category: "FinTech",
    story:
      "Created a premium-focused platform around credit card payments and financial services."
  }
];

function Startups() {
  return (
    <section className="page-section">

      <div className="page-header">
        <p className="eyebrow">CASE STUDIES</p>
        <h1>Startup Stories</h1>
        <p>
          Learn how successful startups started, what problem they solved and
          how they grew.
        </p>
      </div>

      <div className="startup-grid">

        {startups.map((startup) => (
          <div className="startup-card" key={startup.name}>

            <span className="category">
              {startup.category}
            </span>

            <h2>{startup.name}</h2>

            <p>{startup.story}</p>

            <button>
              Read Story →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Startups;