import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./dictionary.css";

function Dictionary() {
  const [search, setSearch] = useState("");

  const terms = [
    {
      term: "MVP",
      fullForm: "Minimum Viable Product",
      meaning:
        "A basic version of a product that is launched to test an idea with real users."
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
        "A business model where a company sells products or services directly to customers."
    },
    {
      term: "D2C",
      fullForm: "Direct to Consumer",
      meaning:
        "A company sells directly to customers without relying on traditional middlemen."
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
        "The recurring revenue a company expects to generate over one year."
    },
    {
      term: "MRR",
      fullForm: "Monthly Recurring Revenue",
      meaning:
        "The predictable recurring revenue a company generates every month."
    },
    {
      term: "ROI",
      fullForm: "Return on Investment",
      meaning:
        "A measure used to understand the return generated from an investment."
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
        "The amount of time a startup can continue operating before its cash runs out."
    },
    {
      term: "Unicorn",
      fullForm: "Startup Valued at $1 Billion+",
      meaning:
        "A privately held startup valued at one billion US dollars or more."
    },
    {
      term: "Decacorn",
      fullForm: "Startup Valued at $10 Billion+",
      meaning:
        "A privately held startup valued at ten billion US dollars or more."
    },
    {
      term: "Pivot",
      fullForm: "Business Model Change",
      meaning:
        "A significant change in a startup's product, market or business strategy."
    },
    {
      term: "USP",
      fullForm: "Unique Selling Proposition",
      meaning:
        "The unique benefit or feature that makes a product different from competitors."
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
        "A software business model where users access software through the internet, often by subscription."
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
        "Investment provided to a startup during its early stages of development."
    },
    {
      term: "Bootstrapping",
      fullForm: "Self-Funded Startup",
      meaning:
        "Building and growing a startup using the founders' own money or business revenue."
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
        "The estimated monetary value of a company or startup."
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
        "The portion or percentage of ownership someone has in a company."
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
        "The money remaining after subtracting expenses from revenue."
    },
    {
      term: "Churn Rate",
      fullForm: "Customer Churn Rate",
      meaning:
        "The percentage of customers who stop using a product or service during a given period."
    },
    {
      term: "Conversion Rate",
      fullForm: "Conversion Rate",
      meaning:
        "The percentage of users who complete a desired action."
    },
    {
      term: "Market Share",
      fullForm: "Market Share",
      meaning:
        "The percentage of total sales in a market captured by a particular company."
    },
    {
      term: "Target Market",
      fullForm: "Target Customer Market",
      meaning:
        "The specific group of customers a business wants to serve."
    },
    {
      term: "Scalability",
      fullForm: "Business Scalability",
      meaning:
        "The ability of a business to grow without a proportional increase in costs."
    },
    {
      term: "Growth Hacking",
      fullForm: "Rapid Growth Strategy",
      meaning:
        "Creative and data-driven techniques used to achieve rapid business growth."
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
        "A business model where customers make recurring payments to continue using a product or service."
    },
    {
      term: "Marketplace",
      fullForm: "Online Marketplace",
      meaning:
        "A platform that connects buyers and sellers in one place."
    },
    {
      term: "Competitor",
      fullForm: "Business Competitor",
      meaning:
        "A company that offers similar products or services to the same target customers."
    },
    {
      term: "Niche",
      fullForm: "Niche Market",
      meaning:
        "A small and specific segment of a larger market."
    },
    {
      term: "Product Roadmap",
      fullForm: "Product Development Roadmap",
      meaning:
        "A plan that shows the future direction and development of a product."
    },
    {
      term: "Customer Persona",
      fullForm: "Ideal Customer Profile",
      meaning:
        "A fictional representation of the ideal customer based on research and data."
    },
    {
      term: "Iteration",
      fullForm: "Product Iteration",
      meaning:
        "The process of improving a product through repeated changes and feedback."
    },
    {
      term: "Prototype",
      fullForm: "Product Prototype",
      meaning:
        "An early version of a product created to test an idea or concept."
    },
    {
      term: "Pitch",
      fullForm: "Startup Pitch",
      meaning:
        "A short presentation used to explain a startup idea, product or business opportunity."
    },
    {
      term: "Pitch Deck",
      fullForm: "Investor Presentation",
      meaning:
        "A presentation containing important information about a startup for investors."
    },
    {
      term: "Term Sheet",
      fullForm: "Investment Term Sheet",
      meaning:
        "A document that outlines the main terms and conditions of a potential investment."
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
    <>
      <Navbar />

      <main>
        <div className="dictionary-page">

          {/* HERO */}
          <section className="hero">
            <div className="container">

              <p className="eyebrow">STARTUP DICTIONARY</p>

              <h1>
                Startup <em>Dictionary</em>
              </h1>

              <p className="lead">
                Learn important startup and business terms in simple language.
              </p>

            </div>
          </section>

          {/* DICTIONARY CONTENT */}
          <section>
            <div className="container">

              {/* SEARCH */}
              <input
                id="searchInput"
                type="text"
                placeholder="Search a term..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* CARDS */}
              <div className="dictionary-grid">

                {filteredTerms.length > 0 ? (
                  filteredTerms.map((item, index) => (
                    <div
                      className="dictionary-card"
                      key={`${item.term}-${index}`}
                    >
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
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dictionary;