import { useEffect, useState } from "react";

function Home() {

  // =========================================================
  // 1. Mobile Navigation
  // =========================================================

  const [navOpen, setNavOpen] = useState(false);


  // =========================================================
  // 2. Founder Tips
  // =========================================================

  const founderTips = [
    "Deepinder Goyal (Zomato): Pehele 1,000 customers laane ke liye sharam chhodo. Hum khud restaurant menu leke scan karte the. Do things that don't scale.",

    "Albinder Dhindsa (Blinkit): 10-minute delivery marketing gimmick nahi tha — yeh customer psychology par target tha.",

    "Kunal Shah (CRED): Agar tumhara product customer ko status ya time nahi bacha raha, toh tum sirf discounts se bech rahe ho.",

    "Peter Thiel (Zero to One): Distribution is everything. Great product with poor sales will fail.",

    "Deepinder Goyal: Zomato Gold ke time humne restaurants ko alienate kiya. Lesson: Agar supply side naraz hai, toh demand side ka koi faayda nahi.",

    "Paul Graham (Y Combinator): 100 log jo tumhare product se pyaar karte hain, 1,000,000 logon se behtar hain jo bas product ko theek-thaak samajhte hain.",

    "Albinder Dhindsa: Grofers mein hum 90-minute slot delivery karte the aur burn ho rahe the. Blinkit pivot ne sikhaya ki speed aur frequency important hain."
  ];

  const [currentTip, setCurrentTip] = useState(0);


  // Automatically change founder tip
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentTip((prev) =>
        (prev + 1) % founderTips.length
      );

    }, 8000);

    return () => clearInterval(interval);

  }, []);


  // Manual next tip
  const nextFounderTip = () => {

    setCurrentTip((prev) =>
      (prev + 1) % founderTips.length
    );

  };


  // =========================================================
  // 3. CAC & LTV Calculator
  // =========================================================

  const [adSpend, setAdSpend] = useState(10000);
  const [newCustomers, setNewCustomers] = useState(100);
  const [aov, setAov] = useState(500);
  const [ordersPerYear, setOrdersPerYear] = useState(12);
  const [margin, setMargin] = useState(30);


  const spend = Math.max(1, Number(adSpend) || 0);
  const customers = Math.max(1, Number(newCustomers) || 0);
  const averageOrderValue = Math.max(1, Number(aov) || 0);

  const yearlyOrders =
    Math.max(1, Number(ordersPerYear) || 0);

  const profitMargin =
    Math.min(100, Math.max(1, Number(margin) || 0)) / 100;


  // CAC

  const cac = Math.round(
    spend / customers
  );


  // Profit per order

  const profitPerOrder =
    averageOrderValue * profitMargin;


  // Annual profit

  const annualProfit =
    profitPerOrder * yearlyOrders;


  // 2-year LTV

  const ltv =
    Math.round(annualProfit * 2);


  // LTV : CAC

  const ratio =
    cac > 0 ? (ltv / cac).toFixed(2) : "0.00";


  // Payback

  const monthlyProfit =
    annualProfit / 12;

  const paybackMonths =
    monthlyProfit > 0
      ? (cac / monthlyProfit).toFixed(1)
      : "0";


  // Badge and advice

  let badge = "";
  let advice = "";
  let badgeClass = "";


  if (ratio < 1.0) {

    badge = "Danger: Burning Cash (Loss Per Customer)";

    badgeClass = "danger";

    advice =
      "Khatra! Tum har customer ko laane mein uski lifetime value se zyada paisa phoonk rahe ho. Paid ads kam karo aur retention/margin improve karo.";

  }

  else if (ratio < 3.0) {

    badge = "Suboptimal: Break-even Zone";

    badgeClass = "warning";

    advice =
      "Average performance. Repeat orders aur AOV badhane ke tareeqe dhoondho.";

  }

  else if (ratio <= 5.0) {

    badge = "Healthy: Startup Golden Ratio (3x - 5x)";

    badgeClass = "healthy";

    advice =
      "Shaandar! Yeh commonly used benchmark range hai. Growth aur unit economics ko monitor karte hue scale kar sakte ho.";

  }

  else {

    badge = "Hyper-Profitable: Accelerate Growth!";

    badgeClass = "healthy";

    advice =
      "LTV:CAC 5x se zyada hai. Marketing channels ko carefully scale karne ka scope ho sakta hai.";

  }


  // =========================================================
  // 4. Timeline Tabs
  // =========================================================

  const [timeline, setTimeline] = useState("zomato");


  // =========================================================
  // 5. Notification Simulator
  // =========================================================

  const notificationScenarios = {

    ipl: {
      app: "zomato",
      appName: "Zomato",
      time: "8:45 PM • 19th Over",
      title: "Match fas chuka hai! 🏏",
      body: "Nails chabane se pet nahi bharega. Chole Bhature order kar lo!"
    },

    rain: {
      app: "blinkit",
      appName: "Blinkit",
      time: "4:15 PM • Heavy Rain Outside 🌧️",
      title: "Garma-garam Chai & Pakode? ☕",
      body: "Bahar mat bheego! Adrak, Elaichi aur Besan mangwao."
    },

    midnight: {
      app: "zomato",
      appName: "Zomato",
      time: "1:24 AM • Late Night",
      title: "Ex ki yaad aa rahi hai ya Cheese Pizza ki? 🍕",
      body: "Ex toh wapas nahi aayegi, par Cheese Burst Pizza aa sakta hai."
    },

    salary: {
      app: "zomato",
      appName: "Zomato",
      time: "12:30 PM • 1st of Month 💰",
      title: "Salary Credited! Party toh banti hai 🥂",
      body: "Aaj Biryani mangwao aur life celebrate karo."
    },

    diwali: {
      app: "blinkit",
      appName: "Blinkit",
      time: "Dhanteras Special • 10:00 AM ✨",
      title: "Dhanteras Special 🪙",
      body: "Puja samagri aur festive essentials ghar par mangwao."
    }

  };


  const [selectedScenario, setSelectedScenario] =
    useState("ipl");


  const notification =
    notificationScenarios[selectedScenario];


  // =========================================================
  // 6. Strategy Matrix Filters
  // =========================================================

  const [category, setCategory] =
    useState("all");


  // =========================================================
  // 7. Marketing Quiz
  // =========================================================

  const [quizAnswers, setQuizAnswers] =
    useState({});


  const handleQuizAnswer = (
    questionIndex,
    isCorrect
  ) => {

    setQuizAnswers((prev) => ({
      ...prev,
      [questionIndex]: isCorrect
    }));

  };


  // =========================================================
  // JSX
  // =========================================================

  return (

    <div className="startupverse-home">


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <button
        id="navToggle"
        onClick={() => setNavOpen(!navOpen)}
        aria-expanded={navOpen}
      >
        {navOpen ? "✕" : "☰"}
      </button>


      <nav
        id="mainNav"
        className={navOpen ? "open" : ""}
      >

        <a href="/">Home</a>

        <a href="/roadmap">Roadmap</a>

        <a href="/skills">Skills</a>

        <a href="/fundamentals">Fundamentals</a>

        <a href="/dictionary">Dictionary</a>

        <a href="/success-stories">
          Success Stories
        </a>

        <a href="/podcasts">
          Podcasts
        </a>

      </nav>


      {/* =====================================================
          FOUNDER TIP
      ===================================================== */}

      <section
        className="founder-tip-card"
        onClick={nextFounderTip}
      >

        <h2>Founder Tip</h2>

        <p>
          {founderTips[currentTip]}
        </p>

      </section>


      {/* =====================================================
          CAC / LTV CALCULATOR
      ===================================================== */}

      <section className="calculator">

        <h2>
          Unit Economics Calculator
        </h2>


        <input
          type="number"
          value={adSpend}
          onChange={(e) =>
            setAdSpend(e.target.value)
          }
          placeholder="Ad Spend"
        />


        <input
          type="number"
          value={newCustomers}
          onChange={(e) =>
            setNewCustomers(e.target.value)
          }
          placeholder="New Customers"
        />


        <input
          type="number"
          value={aov}
          onChange={(e) =>
            setAov(e.target.value)
          }
          placeholder="Average Order Value"
        />


        <input
          type="number"
          value={ordersPerYear}
          onChange={(e) =>
            setOrdersPerYear(e.target.value)
          }
          placeholder="Orders Per Year"
        />


        <input
          type="number"
          value={margin}
          onChange={(e) =>
            setMargin(e.target.value)
          }
          placeholder="Margin %"
        />


        <div className="calculator-results">

          <p>
            CAC: ₹{cac.toLocaleString("en-IN")}
          </p>

          <p>
            LTV: ₹{ltv.toLocaleString("en-IN")}
          </p>

          <p>
            LTV : CAC = {ratio}x
          </p>

          <p>
            Payback: {paybackMonths} Months
          </p>

        </div>


        <div className={`result-badge ${badgeClass}`}>
          {badge}
        </div>

        <p>
          {advice}
        </p>

      </section>


      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section className="timeline-section">

        <button
          className={
            timeline === "zomato"
              ? "tab-btn active"
              : "tab-btn"
          }
          onClick={() =>
            setTimeline("zomato")
          }
        >
          Zomato
        </button>


        <button
          className={
            timeline === "blinkit"
              ? "tab-btn active"
              : "tab-btn"
          }
          onClick={() =>
            setTimeline("blinkit")
          }
        >
          Blinkit
        </button>


        {timeline === "zomato" ? (

          <div id="zomatoTimeline">
            <h3>Zomato Timeline</h3>

            <p>
              Zomato growth and business journey.
            </p>
          </div>

        ) : (

          <div id="blinkitTimeline">
            <h3>Blinkit Timeline</h3>

            <p>
              Blinkit growth and business journey.
            </p>
          </div>

        )}

      </section>


      {/* =====================================================
          NOTIFICATION SIMULATOR
      ===================================================== */}

      <section className="notification-section">

        <h2>
          Notification Simulator
        </h2>


        <div className="scenario-buttons">

          {Object.keys(notificationScenarios).map(
            (key) => (

              <button
                key={key}
                className={
                  selectedScenario === key
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedScenario(key)
                }
              >
                {key}
              </button>

            )
          )}

        </div>


        <div
          id="activePushCard"
          className="push-card"
        >

          <div
            className={`app-icon ${notification.app}`}
          >
            {notification.app === "zomato"
              ? "Z"
              : "B"}
          </div>


          <h3>
            {notification.appName}
          </h3>


          <small>
            {notification.time}
          </small>


          <h4>
            {notification.title}
          </h4>


          <p>
            {notification.body}
          </p>

        </div>

      </section>


      {/* =====================================================
          CHANNEL FILTERS
      ===================================================== */}

      <section className="strategy-section">

        <button
          className={
            category === "all"
              ? "filter-chip active"
              : "filter-chip"
          }
          onClick={() => setCategory("all")}
        >
          All
        </button>


        <button
          className={
            category === "paid"
              ? "filter-chip active"
              : "filter-chip"
          }
          onClick={() => setCategory("paid")}
        >
          Paid
        </button>


        <button
          className={
            category === "organic"
              ? "filter-chip active"
              : "filter-chip"
          }
          onClick={() => setCategory("organic")}
        >
          Organic
        </button>


        <div className="channel-grid">

          <div
            className="channel-card"
            data-category="paid"
            style={{
              display:
                category === "all" ||
                category === "paid"
                  ? "flex"
                  : "none"
            }}
          >
            Paid Marketing
          </div>


          <div
            className="channel-card"
            data-category="organic"
            style={{
              display:
                category === "all" ||
                category === "organic"
                  ? "flex"
                  : "none"
            }}
          >
            Organic Marketing
          </div>

        </div>

      </section>


      {/* =====================================================
          MARKETING QUIZ
      ===================================================== */}

      <section className="quiz-section">

        <div className="quiz-card">

          <h3>
            Marketing IQ
          </h3>

          <p>
            Which strategy is better for customer retention?
          </p>


          <button
            className={
              quizAnswers[0] === true
                ? "correct"
                : quizAnswers[0] === false
                ? "incorrect"
                : ""
            }
            disabled={quizAnswers[0] !== undefined}
            onClick={() =>
              handleQuizAnswer(0, true)
            }
          >
            Improve Product Experience
          </button>


          <button
            className={
              quizAnswers[0] === false
                ? "incorrect"
                : quizAnswers[0] === true
                ? "correct"
                : ""
            }
            disabled={quizAnswers[0] !== undefined}
            onClick={() =>
              handleQuizAnswer(0, false)
            }
          >
            Keep Increasing Discounts
          </button>


          {quizAnswers[0] !== undefined && (

            <div
              className={
                quizAnswers[0]
                  ? "quiz-explanation show correct-box"
                  : "quiz-explanation show incorrect-box"
              }
            >

              {quizAnswers[0]
                ? "✅ Sahi Jawaab! Product experience improve karna long-term customer retention mein help karta hai."
                : "❌ Galat Choice! Sirf discounts par depend karne se sustainable retention nahi milti."}

            </div>

          )}

        </div>

      </section>

    </div>

  );
}

export default Home;