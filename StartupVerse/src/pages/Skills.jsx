const skills = [
  {
    title: "Problem Solving",
    text: "Identify important problems and think clearly about possible solutions."
  },
  {
    title: "Sales",
    text: "Learn how to communicate value, handle objections and close customers."
  },
  {
    title: "Marketing",
    text: "Understand positioning, branding, content, acquisition and distribution."
  },
  {
    title: "Product",
    text: "Learn how to build products people actually want to use."
  },
  {
    title: "Finance",
    text: "Understand revenue, costs, margins, cash flow, burn and runway."
  },
  {
    title: "Technology",
    text: "You don't have to become a developer, but understanding technology is valuable."
  },
  {
    title: "Leadership",
    text: "Build teams, communicate effectively and make decisions under uncertainty."
  },
  {
    title: "Data & Analytics",
    text: "Use numbers and customer data to make better business decisions."
  }
];

function Skills() {
  return (
    <section className="page-section">

      <div className="page-header">
        <p className="eyebrow">FOUNDERS</p>
        <h1>Skills You Need</h1>
        <p>
          You don't need to know everything on day one. Start learning the
          skills that matter most.
        </p>
      </div>

      <div className="cards-grid">

        {skills.map((skill, index) => (
          <div className="info-card" key={index}>
            <span>0{index + 1}</span>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;