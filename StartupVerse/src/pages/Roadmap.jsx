const steps = [
  {
    number: "01",
    title: "Find a Problem",
    text: "Start with a real problem instead of simply starting with an idea."
  },
  {
    number: "02",
    title: "Understand the Market",
    text: "Research customers, competitors, market size and existing solutions."
  },
  {
    number: "03",
    title: "Validate the Idea",
    text: "Talk to potential customers and find out whether the problem actually exists."
  },
  {
    number: "04",
    title: "Build an MVP",
    text: "Create the simplest version of your product that can solve the core problem."
  },
  {
    number: "05",
    title: "Get Your First Customers",
    text: "Launch, collect feedback and learn directly from your early users."
  },
  {
    number: "06",
    title: "Find Product-Market Fit",
    text: "Improve the product until customers genuinely want and repeatedly use it."
  },
  {
    number: "07",
    title: "Build the Business",
    text: "Work on pricing, sales, marketing, hiring and sustainable operations."
  },
  {
    number: "08",
    title: "Scale",
    text: "Once the fundamentals work, expand the team, product and market."
  }
];

function Roadmap() {
  return (
    <section className="page-section">

      <div className="page-header">
        <p className="eyebrow">START HERE</p>
        <h1>Startup Roadmap</h1>
        <p>
          A simple roadmap to understand what happens between having an idea
          and building a real startup.
        </p>
      </div>

      <div className="roadmap">

        {steps.map((step) => (
          <div className="roadmap-item" key={step.number}>

            <div className="roadmap-number">
              {step.number}
            </div>

            <div>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Roadmap;