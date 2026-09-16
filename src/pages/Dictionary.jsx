
import { useState } from "react";

function Dictionary() {
  const [search, setSearch] = useState("");

  const terms = [
    {
      term: "MVP",
      fullForm: "Minimum Viable Product",
      meaning:
        "A basic version of a product with enough features to test the idea with real users."
    },
    {
      term: "B2B",
      fullForm: "Business to Business",
      meaning:
        "A business model where one company sells products or services to another company."
    },
    {
      term: "B2C",
      fullForm: "Business to Consumer",
      meaning:
        "A business model where a company directly sells products or services to customers."
    },
    {
      term: "D2C",
      fullForm: "Direct to Consumer",
      meaning:
        "A company sells its products directly to customers without relying on traditional retailers."
    },
    {
      term: "CAC",
      fullForm: "Customer Acquisition Cost",
      meaning:
        "The average amount of money a company spends to acquire one new customer."
    },
    {
      term: "LTV",
      fullForm: "Lifetime Value",
      meaning:
        "The total revenue a business expects to earn from a customer during their relationship."
    },
    {
      term: "PMF",
      fullForm: "Product-Market Fit",
      meaning:
        "When a product successfully solves a real problem and customers strongly want it."
    },
    {
      term: "ARR",
      fullForm: "Annual Recurring Revenue",
      meaning:
        "The recurring revenue a company expects to generate from customers over one year."
    },
    {
      term: "MRR",
      fullForm: "Monthly Recurring Revenue",
      meaning:
        "The predictable revenue a company expects to generate from customers every month."
    },
    {
      term: "ROI",
      fullForm: "Return on Investment",
      meaning:
        "A measure used to understand how much return is generated from an investment."
    },
    {
      term: "Burn Rate",
      fullForm: "Cash Burn Rate",
      meaning:
        "The rate at which a startup spends its available cash."
    },
    {
      term: "Runway",
      fullForm: "Startup Cash Runway",
      meaning:
        "The amount of time a startup can continue operating before it runs out of cash."
    },
    {
      term: "Unicorn",
      fullForm: "Startup Valued at $1 Billion+",
      meaning:
        "A privately held startup that reaches a valuation of at least one billion dollars."
    },
    {
      term: "Decacorn",
      fullForm: "Startup Valued at $10 Billion+",
      meaning:
        "A privately held startup that reaches a valuation of at least ten billion dollars."
    },
    {
      term: "Pivot",
      fullForm: "Business Model Change",
      meaning:
        "A significant change in a startup's product, strategy or business model."
    },
    {
      term: "USP",
      fullForm: "Unique Selling Proposition",
      meaning:
        "The unique benefit or feature that makes a product different from its competitors."
    },
    {
      term: "KPI",
      fullForm: "Key Performance Indicator",
      meaning:
        "A measurable value used to track how effectively a business is achieving its goals."
    },
    {
      term: "SaaS",
      fullForm: "Software as a Service",
      meaning:
        "A software business model where users access software online, usually through a subscription."
    },
    {
      term: "API",
      fullForm: "Application Programming Interface",
      meaning:
        "A set of rules that allows different software applications to communicate with each other."
    },
    {
      term: "Seed Funding",
      fullForm: "Early-Stage Funding",
      meaning:
        "Investment provided to a startup during its early stages to help develop and grow the business."
    },
    {
      term: "Bootstrapping",
      fullForm: "Self-Funded Startup",
      meaning:
        "Building and growing a startup using the founder's own money and business revenue instead of external investment."
    },
    {
      term: "Angel Investor",
      fullForm: "Individual Startup Investor",
      meaning:
        "An individual who invests their own money in an early-stage startup."
    },
    {
      term: "Venture Capital",
      fullForm: "VC Investment",
      meaning:
        "Investment provided by firms to startups with high growth potential."
    },
    {
      term: "Valuation",
      fullForm: "Business Valuation",
      meaning:
        "The estimated monetary value of a company."
    },
    {
      term: "Equity",
      fullForm: "Ownership in a Company",
      meaning:
        "A percentage of ownership in a company."
    },
    {
      term: "Stake",
      fullForm: "Ownership Stake",
      meaning:
        "The portion or percentage of a company owned by an individual or organization."
    },
    {
      term: "Revenue",
      fullForm: "Business Revenue",
      meaning:
        "The total money a business earns from selling its products or services."
    },
    {
      term: "Profit",
      fullForm: "Net Profit",
      meaning:
        "The money remaining after a business subtracts its expenses from its revenue."
    },
    {
      term: "Churn Rate",
      fullForm: "Customer Churn Rate",
      meaning:
        "The percentage of customers who stop using or paying for a product or service during a period."
    },
    {
      term: "Conversion Rate",
      fullForm: "Conversion Rate",
      meaning:
        "The percentage of users or visitors who complete a desired action, such as making a purchase."
    },
    {
      term: "Market Share",
      fullForm: "Market Share",
      meaning:
        "The percentage of total sales in a market that belongs to a particular company."
    },
    {
      term: "Target Market",
      fullForm: "Target Customer Market",
      meaning:
        "The specific group of customers a business aims to serve with its product or service."
    },
    {
      term: "Scalability",
      fullForm: "Business Scalability",
      meaning:
        "The ability of a business to grow without a similar increase in costs."
    },
    {
      term: "Growth Hacking",
      fullForm: "Rapid Growth Strategy",
      meaning:
        "Creative and data-driven techniques used to grow a startup quickly."
    },
    {
      term: "Freemium",
      fullForm: "Free + Premium Model",
      meaning:
        "A business model where basic features are free while advanced features require payment."
    },
    {
      term: "Subscription",
      fullForm: "Recurring Payment Model",
      meaning:
        "A business model where customers pay regularly, such as monthly or yearly, to use a product or service."
    },
    {
      term: "Marketplace",
      fullForm: "Online Marketplace",
      meaning:
        "A platform that connects buyers and sellers to facilitate transactions."
    },
    {
      term: "Competitor",
      fullForm: "Business Competitor",
      meaning:
        "A company that offers similar products or services and competes for the same customers."
    },
    {
      term: "Niche",
      fullForm: "Niche Market",
      meaning:
        "A small, specific segment of a larger market with particular customer needs."
    },
    {
      term: "Product Roadmap",
      fullForm: "Product Development Roadmap",
      meaning:
        "A plan showing the future development goals, features and direction of a product."
    },
    {
      term: "Customer Persona",
      fullForm: "Ideal Customer Profile",
      meaning:
        "A fictional representation of the ideal customer based on research and real customer data."
    },
    {
      term: "Iteration",
      fullForm: "Product Iteration",
      meaning:
        "The process of repeatedly improving a product based on feedback and testing."
    },
    {
      term: "Prototype",
      fullForm: "Product Prototype",
      meaning:
        "An early version or model of a product created to test ideas and functionality."
    },
    {
      term: "Pitch",
      fullForm: "Startup Pitch",
      meaning:
        "A short presentation used by founders to explain their startup idea, product, market and business potential."
    },
    {
      term: "Pitch Deck",
      fullForm: "Investor Presentation",
      meaning:
        "A presentation containing key information about a startup, usually prepared for investors."
    },
    {
      term: "Term Sheet",
      fullForm: "Investment Term Sheet",
      meaning:
        "A document outlining the main terms and conditions of a proposed investment."
    },
    {
      term: "IPO",
      fullForm: "Initial Public Offering",
      meaning:
        "The process through which a private company offers its shares to the public for the first time."
    }
  ];

  const filteredTerms = terms.filter(
    (item) =>
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.fullForm.toLowerCase().includes(search.toLowerCase()) ||
      item.meaning.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dictionary-page">

      <h1>Startup Dictionary</h1>

      <p>
        Learn important startup and business terms in simple language.
      </p>

      <input
        type="text"
        placeholder="Search a term..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="dictionary-grid">

        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <div className="dictionary-card" key={index}>

              <h2>{item.term}</h2>

              <h3>{item.fullForm}</h3>

              <p>{item.meaning}</p>

            </div>
          ))
        ) : (
          <p>No term found.</p>
        )}

      </div>

    </div>
  );
}

export default Dictionary;