
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Fundamentals() {
  // =========================
  // CAC / LTV CALCULATOR
  // =========================

  const [adSpend, setAdSpend] = useState(50000);
  const [newCustomers, setNewCustomers] = useState(100);
  const [aov, setAov] = useState(450);
  const [ordersPerYear, setOrdersPerYear] = useState(8);
  const [margin, setMargin] = useState(25);

  const cac =
    newCustomers > 0
      ? adSpend / newCustomers
      : 0;

  const ltv =
    aov *
    ordersPerYear *
    2 *
    (margin / 100);

  const ratio =
    cac > 0
      ? ltv / cac
      : 0;

  let badgeText = "Healthy Ratio (3x - 5x)";
  let badgeClass = "healthy";
  let advice =
    "Shaandar! Har ₹1 marketing spend par ₹3-₹5 ka return mil raha hai. Growth capital invest karne ka bilkul sahi samay hai.";

  if (ratio < 1) {
    badgeText = "Dangerous Ratio";
    badgeClass = "danger";

    advice =
      "Warning! CAC tumhare LTV se zyada hai. Customer acquire karne mein jitna kharcha ho raha hai, usse zyada value generate nahi ho rahi.";
  } else if (ratio < 3) {
    badgeText = "Needs Improvement";
    badgeClass = "warning";

    advice =
      "Ratio positive hai, lekin 3x benchmark se neeche hai. CAC reduce karo ya customer LTV improve karne par focus karo.";
  } else if (ratio > 5) {
    badgeText = "Excellent Ratio";
    badgeClass = "excellent";

    advice =
      "Excellent! LTV:CAC ratio kaafi strong hai. Growth ko carefully scale karne ke liye economics favourable hain.";
  }


  // =========================
  // MOMENT MARKETING
  // =========================

  const [scenario, setScenario] = useState("ipl");

  const notifications = {
    ipl: {
      icon: "Z",
      app: "Zomato",
      iconClass: "zomato",
      time: "8:45 PM • 19th Over",
      title: "Match fas chuka hai! 🏏",
      body:
        "Nails chabane se pet nahi bharega. Chole Bhature order kar lo, tension automatic kam ho jayegi! Flat ₹120 OFF."
    },

    rain: {
      icon: "Z",
      app: "Zomato",
      iconClass: "zomato",
      time: "6:20 PM • Baarish",
      title: "Baarish ho rahi hai! 🌧️",
      body:
        "Bahar jaane ka risk mat lo. Garma-garam pakode aur chai order karo. Baarish ka perfect combo ready hai!"
    },

    midnight: {
      icon: "B",
      app: "Blinkit",
      iconClass: "blinkit",
      time: "1:30 AM • Late Night",
      title: "Neend nahi aa rahi? 🍕",
      body:
        "Midnight cravings ko ignore mat karo. Snacks, drinks aur essentials kuch hi minutes mein doorstep par."
    },

    diwali: {
      icon: "Z",
      app: "Zomato",
      iconClass: "zomato",
      time: "7:15 PM • Festive",
      title: "Festival mein mithaas kam hai? ✨",
      body:
        "Diwali celebration incomplete hai bina sweets ke. Apni favourite mithai abhi order karo!"
    }
  };

  const activeNotification = notifications[scenario];


  return (
    <>
      <Navbar />

      <main
        className="container"
        style={{ paddingTop: "56px" }}
      >

        {/* =========================
            PAGE INTRO
        ========================= */}

        <span className="eyebrow">
          Marketing & Growth
        </span>

        <h1
          style={{
            fontSize: "clamp(2rem,4vw,2.8rem)",
            marginTop: "10px"
          }}
        >
          Market & Marketing Fundamentals
        </h1>

        <p
          className="lead"
          style={{
            maxWidth: "68ch",
            fontSize: "1.05rem"
          }}
        >
          Marketing sirf ads chalana nahi hai — customer psychology,
          positive unit economics (CAC vs LTV), aur Zomato & Blinkit ke
          real failures se seekhna hai.
        </p>


        {/* =========================
            4 CORE MARKETING RULES
        ========================= */}

        <div
          className="grid grid-2"
          style={{ marginTop: "40px" }}
        >

          <div className="card skill-card">
            <span className="tag green">
              Foundation
            </span>

            <h3>
              1. Product-Market Fit (PMF) First
            </h3>

            <p>
              Agar product bekaar hai, toh marketing sirf ek
              <em> leaky bucket </em>
              mein paani bharna hai. Pehle 100 loyal users banao jo bole
              ki "yeh product band hua toh meri life ruk jayegi", uske
              baad hi marketing scale karo.
            </p>

            <div className="skill-meter">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>


          <div className="card skill-card">
            <span className="tag">
              Economics
            </span>

            <h3>
              2. CAC vs LTV Rule (3x Benchmark)
            </h3>

            <p>
              <strong>CAC</strong> = Naya user laane ka kharcha.
              <strong> LTV</strong> = Woh user lifetime kitna profit
              dega. Sustainable startup ke liye LTV hamesha
              <strong> 3x se 5x CAC</strong> hona chahiye.
              1x se kam hua toh economics unsustainable ho sakti hai.
            </p>

            <div className="skill-meter">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>


          <div className="card skill-card">
            <span className="tag red">
              Psychology
            </span>

            <h3>
              3. Moment Marketing & Relatable Tone
            </h3>

            <p>
              Generic ads koi nahi dekhta. Zomato ne sikhaya: customer
              ke current moment par target karo (IPL match thriller,
              barsaat ke pakode, late night 1 AM breakup craving).
              Corporate jargon hata ke dost ki tarah baat karo.
            </p>

            <div className="skill-meter">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>


          <div className="card skill-card">
            <span className="tag blue">
              Distribution
            </span>

            <h3>
              4. Speed As Marketing USP
            </h3>

            <p>
              Blinkit ne prove kiya ki distribution aur speed hi
              powerful marketing differentiators ho sakte hain.
              10-minute delivery ne word-of-mouth generate kiya aur
              convenience ko brand identity ka part banaya.
            </p>

            <div className="skill-meter">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>

        </div>


        {/* =========================
            CAC / LTV CALCULATOR
        ========================= */}

        <div
          className="calc-card"
          style={{ margin: "48px 0" }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "20px"
            }}
          >

            <div>
              <span className="tag green">
                Interactive Tool
              </span>

              <h3
                style={{
                  fontSize: "1.35rem",
                  marginTop: "6px"
                }}
              >
                Quick CAC & LTV Health Check
              </h3>
            </div>

            <div
              id="outBadge"
              className={`result-badge ${badgeClass}`}
            >
              {badgeText}
            </div>

          </div>


          <div className="calc-grid">

            <div className="calc-inputs">

              <div className="form-group">
                <label htmlFor="calcAdSpend">
                  Monthly Marketing Budget:
                  <span
                    style={{
                      color: "var(--accent-yellow)"
                    }}
                  >
                    {" "}₹
                  </span>
                </label>

                <input
                  type="number"
                  id="calcAdSpend"
                  className="calc-input"
                  value={adSpend}
                  step="5000"
                  onChange={(e) =>
                    setAdSpend(Number(e.target.value))
                  }
                />
              </div>


              <div className="form-group">
                <label htmlFor="calcNewCustomers">
                  Naye Customers per Month:
                </label>

                <input
                  type="number"
                  id="calcNewCustomers"
                  className="calc-input"
                  value={newCustomers}
                  step="10"
                  onChange={(e) =>
                    setNewCustomers(Number(e.target.value))
                  }
                />
              </div>


              <div className="form-group">
                <label htmlFor="calcAOV">
                  Average Order Value (AOV):
                </label>

                <input
                  type="number"
                  id="calcAOV"
                  className="calc-input"
                  value={aov}
                  step="50"
                  onChange={(e) =>
                    setAov(Number(e.target.value))
                  }
                />
              </div>

            </div>


            <div className="calc-inputs">

              <div className="form-group">
                <label htmlFor="calcOrdersPerYear">
                  Orders Per User (Annual):
                </label>

                <input
                  type="number"
                  id="calcOrdersPerYear"
                  className="calc-input"
                  value={ordersPerYear}
                  step="1"
                  onChange={(e) =>
                    setOrdersPerYear(Number(e.target.value))
                  }
                />
              </div>


              <div className="form-group">
                <label htmlFor="calcMargin">
                  Profit Margin (%):
                </label>

                <input
                  type="number"
                  id="calcMargin"
                  className="calc-input"
                  value={margin}
                  step="5"
                  max="100"
                  onChange={(e) =>
                    setMargin(Number(e.target.value))
                  }
                />
              </div>


              <div
                className="calc-results-panel"
                style={{
                  padding: "16px",
                  marginTop: "2px"
                }}
              >

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)"
                    }}
                  >
                    CAC:
                  </span>

                  <strong
                    id="outCAC"
                    style={{
                      color: "var(--accent-yellow)"
                    }}
                  >
                    ₹{Math.round(cac).toLocaleString("en-IN")}
                  </strong>
                </div>


                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)"
                    }}
                  >
                    2-Yr LTV:
                  </span>

                  <strong
                    id="outLTV"
                    style={{
                      color: "var(--accent-green)"
                    }}
                  >
                    ₹{Math.round(ltv).toLocaleString("en-IN")}
                  </strong>
                </div>


                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop:
                      "1px solid var(--border)",
                    paddingTop: "8px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600
                    }}
                  >
                    LTV:CAC Ratio:
                  </span>

                  <strong
                    id="outRatio"
                    style={{
                      fontSize: "1.15rem",
                      color: "var(--text-primary)"
                    }}
                  >
                    {ratio.toFixed(2)}x
                  </strong>
                </div>

              </div>

            </div>

          </div>


          <p
            id="outAdvice"
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              marginTop: "14px",
              textAlign: "center"
            }}
          >
            {advice}
          </p>

        </div>


        {/* =========================
            STARTUP PLAYBOOKS
        ========================= */}

        <div className="orbit-divider">
          Real Startup Playbooks: Origins, Falls & Comebacks
        </div>


        <div className="section-head">

          <h2>
            Zomato, Blinkit, Swiggy, Amazon & Others
          </h2>

          <p>
            Har bade startup ki kahani mein challenges aate hain.
            Samjho in top startups ne kaise start kiya, kahan challenges
            face kiye, aur marketing & pivots se kaise adapt kiya.
          </p>

        </div>


        <div
          className="grid grid-3"
          style={{ marginBottom: "48px" }}
        >

          {/* ZOMATO */}

          <div
            className="card"
            style={{
              padding: "22px",
              borderTop:
                "3px solid var(--accent-red)"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}
            >
              <span className="tag red">
                Food Tech
              </span>

              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-mono)"
                }}
              >
                Deepinder Goyal
              </span>
            </div>

            <h3
              style={{
                margin: "4px 0 12px",
                fontSize: "1.2rem"
              }}
            >
              Zomato
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.86rem",
                lineHeight: 1.5
              }}
            >

              <div>
                <strong
                  style={{
                    color: "var(--accent-yellow)"
                  }}
                >
                  🚀 Shuruat (2008 Foodiebay):
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Bain office cafeteria ke lunch menus scan karke
                  PDF banaye. Zero ad spend — pure Google SEO se
                  food directory business build hua.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--accent-green)"
                  }}
                >
                  💡 Marketing Hack:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Witty red billboards + relatable moment push
                  notifications ne brand ko memorable banaya.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "#FF7B84"
                  }}
                >
                  ⚠️ The Fall / Crisis:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Zomato Gold ke boycott aur international expansion
                  challenges ne business economics par pressure dala.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--text-primary)"
                  }}
                >
                  🏆 Comeback:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Platform-fee discipline, Hyperpure B2B network aur
                  Blinkit acquisition ke through business ne evolve kiya.
                </p>
              </div>

            </div>

          </div>


          {/* BLINKIT */}

          <div
            className="card"
            style={{
              padding: "22px",
              borderTop:
                "3px solid var(--accent-blinkit)"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}
            >
              <span className="tag yellow">
                Quick Commerce
              </span>

              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-mono)"
                }}
              >
                Albinder Dhindsa
              </span>
            </div>

            <h3
              style={{
                margin: "4px 0 12px",
                fontSize: "1.2rem"
              }}
            >
              Blinkit (Grofers)
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.86rem",
                lineHeight: 1.5
              }}
            >

              <div>
                <strong
                  style={{
                    color: "var(--accent-yellow)"
                  }}
                >
                  🚀 Shuruat (2013 Grofers):
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Local kirana shops se scheduled grocery delivery
                  model ke saath shuru hua.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--accent-green)"
                  }}
                >
                  💡 Marketing Hack:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Speed as marketing aur memorable billboard campaigns
                  ne brand ko strong identity di.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "#FF7B84"
                  }}
                >
                  ⚠️ The Fall / Crisis:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Early model mein cash pressure aur delivery economics
                  major challenges rahe.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--text-primary)"
                  }}
                >
                  🏆 Comeback:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Micro dark-store model aur rapid delivery proposition
                  ke through business model transform hua.
                </p>
              </div>

            </div>

          </div>


          {/* SWIGGY */}

          <div
            className="card"
            style={{
              padding: "22px",
              borderTop: "3px solid #FC8019"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}
            >
              <span className="tag orange">
                Convenience
              </span>

              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-mono)"
                }}
              >
                Sriharsha Majety
              </span>
            </div>

            <h3
              style={{
                margin: "4px 0 12px",
                fontSize: "1.2rem"
              }}
            >
              Swiggy
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.86rem",
                lineHeight: 1.5
              }}
            >

              <div>
                <strong
                  style={{
                    color: "var(--accent-yellow)"
                  }}
                >
                  🚀 Shuruat (2014):
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Bundl ke experience ke baad Bengaluru ke Koramangala
                  mein food delivery model start kiya.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--accent-green)"
                  }}
                >
                  💡 Marketing Hack:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Brand campaigns aur live GPS tracking ne convenience
                  proposition ko strong banaya.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "#FF7B84"
                  }}
                >
                  ⚠️ The Fall / Crisis:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Competition, high burn aur COVID ke dauran operational
                  challenges aaye.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--text-primary)"
                  }}
                >
                  🏆 Comeback:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Instamart, Dineout aur improved unit economics ke
                  through business expand hua.
                </p>
              </div>

            </div>

          </div>


          {/* AMAZON */}

          <div
            className="card"
            style={{
              padding: "22px",
              borderTop: "3px solid #FF9900"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}
            >
              <span className="tag">
                Global E-Com
              </span>

              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-mono)"
                }}
              >
                Jeff Bezos
              </span>
            </div>

            <h3
              style={{
                margin: "4px 0 12px",
                fontSize: "1.2rem"
              }}
            >
              Amazon
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.86rem",
                lineHeight: 1.5
              }}
            >

              <div>
                <strong
                  style={{
                    color: "var(--accent-yellow)"
                  }}
                >
                  🚀 Shuruat (1994):
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Online bookstore ke form mein start hua aur
                  gradually multiple product categories mein expand hua.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--accent-green)"
                  }}
                >
                  💡 Marketing Hack:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Amazon Prime ne delivery convenience ko customer
                  loyalty proposition ke saath connect kiya.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "#FF7B84"
                  }}
                >
                  ⚠️ The Fall / Crisis:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Dot-com crash aur Fire Phone jaise setbacks ne
                  business ko important lessons diye.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--text-primary)"
                  }}
                >
                  🏆 Comeback:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  AWS, Marketplace aur diversified business model ne
                  company ko new growth engines diye.
                </p>
              </div>

            </div>

          </div>


          {/* FLIPKART */}

          <div
            className="card"
            style={{
              padding: "22px",
              borderTop:
                "3px solid var(--accent-blue)"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}
            >
              <span className="tag blue">
                Indian E-Com
              </span>

              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-mono)"
                }}
              >
                Sachin & Binny Bansal
              </span>
            </div>

            <h3
              style={{
                margin: "4px 0 12px",
                fontSize: "1.2rem"
              }}
            >
              Flipkart
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.86rem",
                lineHeight: 1.5
              }}
            >

              <div>
                <strong
                  style={{
                    color: "var(--accent-yellow)"
                  }}
                >
                  🚀 Shuruat (2007):
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Two ex-Amazon engineers ne online bookstore ke form
                  mein business start kiya.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--accent-green)"
                  }}
                >
                  💡 Marketing Hack:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Cash on Delivery ne Indian customers ke online
                  shopping trust barrier ko reduce kiya.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "#FF7B84"
                  }}
                >
                  ⚠️ The Fall / Crisis:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Mobile-first strategy aur intense competition ke
                  dauran business ko strategic changes karne pade.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--text-primary)"
                  }}
                >
                  🏆 Comeback:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Big Billion Days aur broader marketplace strategy
                  ne customer acquisition aur engagement support ki.
                </p>
              </div>

            </div>

          </div>


          {/* ZEPTO */}

          <div
            className="card"
            style={{
              padding: "22px",
              borderTop:
                "3px solid var(--accent-purple)"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}
            >
              <span className="tag purple">
                Speed Commerce
              </span>

              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-mono)"
                }}
              >
                Aadit & Kaivalya
              </span>
            </div>

            <h3
              style={{
                margin: "4px 0 12px",
                fontSize: "1.2rem"
              }}
            >
              Zepto
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.86rem",
                lineHeight: 1.5
              }}
            >

              <div>
                <strong
                  style={{
                    color: "var(--accent-yellow)"
                  }}
                >
                  🚀 Shuruat (2021):
                </strong>

                <p style={{ marginTop: "2px" }}>
                  COVID period mein founders ne quick-commerce model
                  ke saath 10-minute grocery delivery proposition build kiya.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--accent-green)"
                  }}
                >
                  💡 Marketing Hack:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Hyper-dense dark stores aur speed-focused communication
                  ne customer proposition ko differentiate kiya.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "#FF7B84"
                  }}
                >
                  ⚠️ The Fall / Crisis:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Funding environment aur high operating costs ke
                  chalte profitability ek major challenge raha.
                </p>
              </div>


              <div>
                <strong
                  style={{
                    color: "var(--text-primary)"
                  }}
                >
                  🏆 Comeback:
                </strong>

                <p style={{ marginTop: "2px" }}>
                  Zepto Cafe aur advertising jaise additional revenue
                  streams ke through business model diversify kiya.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* =========================
            MOMENT MARKETING
        ========================= */}

        <div
          className="grid grid-2"
          style={{
            alignItems: "center",
            marginBottom: "48px"
          }}
        >

          <div
            className="card"
            style={{ padding: "24px" }}
          >

            <span className="tag red">
              Moment Marketing
            </span>

            <h3
              style={{
                margin: "10px 0 6px"
              }}
            >
              Zomato & Blinkit Notification Hack
            </h3>

            <p
              style={{
                fontSize: "0.88rem",
                marginBottom: "14px"
              }}
            >
              Buttons click karke dekho context ke hisab se
              notification kaise badalti hai:
            </p>


            <div
              className="channel-filters"
              style={{ marginBottom: "14px" }}
            >

              <button
                className={`filter-chip ${
                  scenario === "ipl" ? "active" : ""
                }`}
                onClick={() => setScenario("ipl")}
              >
                🏏 IPL
              </button>

              <button
                className={`filter-chip ${
                  scenario === "rain" ? "active" : ""
                }`}
                onClick={() => setScenario("rain")}
              >
                🌧️ Baarish
              </button>

              <button
                className={`filter-chip ${
                  scenario === "midnight" ? "active" : ""
                }`}
                onClick={() => setScenario("midnight")}
              >
                🍕 1:30 AM
              </button>

              <button
                className={`filter-chip ${
                  scenario === "diwali" ? "active" : ""
                }`}
                onClick={() => setScenario("diwali")}
              >
                ✨ Festive
              </button>

            </div>


            <div
              className="phone-mockup"
              style={{
                maxWidth: "100%",
                padding: "14px"
              }}
            >

              <div
                id="activePushCard"
                className="push-card"
                style={{ margin: 0 }}
              >

                <div className="push-header">

                  <div className="push-app">

                    <span
                      id="notifAppIcon"
                      className={`app-icon ${activeNotification.iconClass}`}
                    >
                      {activeNotification.icon}
                    </span>

                    <span id="notifAppName">
                      {activeNotification.app}
                    </span>

                  </div>

                  <span
                    id="notifTime"
                    className="push-time"
                  >
                    {activeNotification.time}
                  </span>

                </div>


                <div
                  id="notifTitle"
                  className="push-title"
                >
                  {activeNotification.title}
                </div>

                <div
                  id="notifBody"
                  className="push-body"
                >
                  {activeNotification.body}
                </div>

              </div>

            </div>

          </div>


          {/* BILLBOARD */}

          <div
            className="card"
            style={{
              padding: "24px",
              textAlign: "center"
            }}
          >

            <span className="tag">
              The Famous Billboard War
            </span>

            <h3
              style={{
                margin: "10px 0 6px"
              }}
            >
              "Doodh vs Kheer" OOH Campaign
            </h3>

            <p
              style={{
                fontSize: "0.88rem",
                marginBottom: "14px"
              }}
            >
              Sunny Deol ke classic dialogue ko twist karke
              brands ne social-media attention generate ki.
            </p>


            <div
              className="billboard-container"
              style={{ margin: "10px 0" }}
            >

              <div
                className="billboard-box blinkit-bb"
                style={{
                  padding: "18px 12px",
                  minHeight: "110px"
                }}
              >

                <div
                  className="billboard-text"
                  style={{
                    fontSize: "1.15rem"
                  }}
                >
                  Doodh mangoge,
                  <br />
                  doodh denge!
                </div>

                <div
                  className="billboard-tagline"
                  style={{
                    fontSize: "0.75rem"
                  }}
                >
                  Blinkit • 10 Mins
                </div>

              </div>


              <div
                className="billboard-box zomato-bb"
                style={{
                  padding: "18px 12px",
                  minHeight: "110px"
                }}
              >

                <div
                  className="billboard-text"
                  style={{
                    fontSize: "1.15rem"
                  }}
                >
                  Kheer mangoge,
                  <br />
                  kheer denge!
                </div>

                <div
                  className="billboard-tagline"
                  style={{
                    fontSize: "0.75rem"
                  }}
                >
                  Zomato • Delivery
                </div>

              </div>

            </div>

            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--text-dim)",
                marginTop: "8px"
              }}
            >
              Viral brand interactions show how context-based
              marketing can create attention.
            </p>

          </div>

        </div>


        {/* =========================
            GOLDEN RULES
        ========================= */}

        <div className="orbit-divider">
          Founder Ke Liye 3 Golden Rules
        </div>


        <div
          className="grid grid-3"
          style={{ marginBottom: "60px" }}
        >

          <div className="card">

            <span className="tag green">
              Rule 1
            </span>

            <h3>
              PMF se pehle burn mat karo
            </h3>

            <p>
              Paid ads se customer khareedna aasaan hai, par agar
              product mein dum nahi toh customers chhod kar chale jayenge.
            </p>

          </div>


          <div className="card">

            <span className="tag red">
              Rule 2
            </span>

            <h3>
              Partners ko mat sataao
            </h3>

            <p>
              Platform business mein supply-side partners ka experience
              bhi important hota hai. Sustainable growth ke liye
              ecosystem ko balance karna zaroori hai.
            </p>

          </div>


          <div className="card">

            <span className="tag">
              Rule 3
            </span>

            <h3>
              Speed hi marketing hai
            </h3>

            <p>
              Convenience aur customer ka time bachana strong
              word-of-mouth create kar sakta hai.
            </p>

          </div>

        </div>


        {/* =========================
            NAVIGATION CTA
        ========================= */}

        <div
          className="cta-row"
          style={{
            marginBottom: "80px",
            justifyContent: "center"
          }}
        >

          <a
            href="/roadmap"
            className="btn btn-primary"
          >
            Ab Startup Roadmap Samjho →
          </a>

          <a
            href="/skills"
            className="btn btn-ghost"
          >
            Skills Self-Check Karo
          </a>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Fundamentals;
