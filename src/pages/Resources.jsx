import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./resources.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
{
id: 1,
name: "Startup Business Plan",
category: "PLANNING & STRATEGY",
icon: "📋",
description:
"Turn your startup idea into a structured business plan. Define your vision, target customers, value proposition, revenue model, and execution strategy before you launch.",
benefits: [
"Define your business model",
"Identify your target audience",
"Create a clear launch roadmap",
],
price: 499,
},
{
id: 2,
name: "Market Research Toolkit",
category: "MARKET & CUSTOMERS",
icon: "🔎",
description:
"Understand your market before investing your time and money. Explore customer needs, analyse competitors, identify market opportunities, and validate whether your idea solves a real problem.",
benefits: [
"Understand customer problems",
"Analyse competitors",
"Validate your startup idea",
],
price: 299,
},
{
id: 3,
name: "Financial Planning Sheet",
category: "FINANCE & GROWTH",
icon: "📊",
description:
"Get a clearer picture of your startup's finances. Organise your expected expenses, estimate revenue, calculate profit margins, and plan how much capital your business may need.",
benefits: [
"Track expenses and revenue",
"Estimate startup costs",
"Plan your financial runway",
],
price: 399,
},
{
id: 4,
name: "Pitch Deck Template",
category: "FUNDING & INVESTORS",
icon: "🚀",
description:
"Present your startup idea with confidence using a structured pitch deck. Explain the problem, your solution, market opportunity, business model, competitive advantage, and growth strategy.",
benefits: [
"Present your idea clearly",
"Explain your market opportunity",
"Structure your investor pitch",
],
price: 199,
},
];

function Resources() {
const { addToCart, cartCount } = useCart();
const [addedProducts, setAddedProducts] = useState([]);

const handleAddToCart = (product) => {
addToCart(product);

setAddedProducts((previous) =>
  previous.includes(product.id)
    ? previous
    : [...previous, product.id]
);


};

return (
<> <Navbar />

```
  <main className="resources-page">
    {/* ================= HEADER ================= */}

    <header className="resources-header">
      <div>
        <p className="resources-eyebrow">
          STARTUPVERSE TOOLKIT
        </p>

        <h1>
          Build Your Startup <span>Smarter.</span>
        </h1>

        <p>
          Practical tools and resources to help you validate your idea,
          plan your finances, understand your market, and take your first
          steps towards building a startup.
        </p>
      </div>

      <Link to="/cart" className="resources-cart-link">
        🛒 View Cart <span>({cartCount})</span>
      </Link>
    </header>

    {/* ================= INTRODUCTION ================= */}

    <section className="resources-intro">
      <div>
        <p className="resources-section-label">
          YOUR STARTUP TOOLKIT
        </p>

        <h2>
          Less confusion. <span>More execution.</span>
        </h2>
      </div>

      <p>
        Choose a resource that matches your current stage and start
        turning your ideas into actionable plans.
      </p>
    </section>

    {/* ================= RESOURCE CARDS ================= */}

    <section
      className="resources-grid"
      aria-label="Startup resources"
    >
      {products.map((product) => {
        const isAdded = addedProducts.includes(product.id);

        return (
          <article className="resource-card" key={product.id}>
            <div className="resource-card-top">
              <div className="resource-icon" aria-hidden="true">
                {product.icon}
              </div>

              <span className="resource-category">
                {product.category}
              </span>
            </div>

            <h2>{product.name}</h2>

            <p className="resource-description">
              {product.description}
            </p>

            <div className="resource-benefits">
              <h3>What you'll get</h3>

              <ul>
                {product.benefits.map((benefit) => (
                  <li key={benefit}>
                    <span aria-hidden="true">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="resource-card-footer">
              <div className="resource-price">
                <span>One-time price</span>
                <strong>₹{product.price}</strong>
              </div>

              <button
                type="button"
                className={`resource-add-button ${
                  isAdded ? "is-added" : ""
                }`}
                onClick={() => handleAddToCart(product)}
                aria-label={`Add ${product.name} to cart`}
              >
                {isAdded ? "Added ✓" : "Add to Cart +"}
              </button>
            </div>
          </article>
        );
      })}
    </section>

    {/* ================= BOTTOM NOTE ================= */}

    <section className="resources-note">
      <span aria-hidden="true">✦</span>

      <div>
        <h3>Build with clarity, not guesswork.</h3>

        <p>
          The right planning tools can help you organise your thinking.
          Remember to validate your assumptions with real customers and
          adapt your plans as you learn.
        </p>
      </div>
    </section>
  </main>

  <Footer />
</>


);
}

export default Resources;
