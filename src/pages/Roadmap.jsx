import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Roadmap() {
  return (
    <>
      <Navbar />

      <main>

        {/* ================= HERO ================= */}

        <section className="hero">
          <div className="container">

            <span className="eyebrow">
              STARTUP ROADMAP
            </span>

            <h1>
              Idea se <em>Startup</em> tak.
            </h1>

            <p className="lead">
              Startup shuru karna ek single step nahi hai.
              Idea ko validate karne se lekar product banane,
              customers laane aur business grow karne tak
              ek complete journey hoti hai.
            </p>

          </div>
        </section>


        {/* ================= ROADMAP ================= */}

        <div className="container">

          <div className="section-head">

            <h2>
              Startup ka complete roadmap
            </h2>

            <p>
              Har stage ko step-by-step follow karo.
              Pehle basics strong karo, phir next stage par jao.
            </p>

          </div>


          {/* ================= STEP 1 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 01
            </span>

            <h2>
              💡 Idea Find Karo
            </h2>

            <p>
              Sabse pehle ek real problem identify karo.
              Startup sirf ek cool idea se nahi,
              kisi meaningful problem ko solve karne se banta hai.
            </p>

            <h3>
              Kya karna hai?
            </h3>

            <ul>
              <li>Real-life problems observe karo.</li>
              <li>Logon se baat karo.</li>
              <li>Existing solutions dekho.</li>
              <li>
                Socho ki tum problem ko better kaise solve kar sakte ho.
              </li>
            </ul>

            <div className="callout">
              <strong>Founder Tip:</strong>

              <p>
                Problem pe focus karo, sirf idea pe nahi.
              </p>
            </div>

          </div>


          {/* ================= STEP 2 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 02
            </span>

            <h2>
              🔎 Problem Validate Karo
            </h2>

            <p>
              Ab check karo ki jo problem tumne identify ki hai,
              kya log actually us problem ko face karte hain?
            </p>

            <h3>
              Kya karna hai?
            </h3>

            <ul>
              <li>Potential customers se interview karo.</li>
              <li>Surveys conduct karo.</li>
              <li>Existing competitors research karo.</li>
              <li>
                Check karo ki log existing solution ke liye
                paise de rahe hain ya nahi.
              </li>
            </ul>

            <div className="callout">
              <strong>Important:</strong>

              <p>
                Agar problem real nahi hai, toh product banane
                se pehle hi idea reconsider karo.
              </p>
            </div>

          </div>


          {/* ================= STEP 3 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 03
            </span>

            <h2>
              📊 Market Research
            </h2>

            <p>
              Ab samjho ki tumhara market kitna bada hai,
              customers kaun hain aur competitors kaun hain.
            </p>

            <h3>
              Research mein kya dekhein?
            </h3>

            <ul>
              <li>Target customers</li>
              <li>Market size</li>
              <li>Competitors</li>
              <li>Customer behaviour</li>
              <li>Pricing</li>
            </ul>

            <p>
              Yahin par tum{" "}
              <strong>TAM, SAM aur SOM</strong>{" "}
              jaise concepts samajh sakte ho.
            </p>

          </div>


          {/* ================= STEP 4 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 04
            </span>

            <h2>
              🛠️ MVP Banao
            </h2>

            <p>
              MVP ka matlab hai{" "}
              <strong>Minimum Viable Product</strong>.
              Yaani product ka basic version jo actual
              customers ke saamne test kiya ja sake.
            </p>

            <h3>
              Example
            </h3>

            <p>
              Agar tum food delivery startup banana chahte ho,
              toh starting mein complete Zomato jaisa platform
              banane ki zaroorat nahi.
              Basic ordering system se start kar sakte ho.
            </p>

            <div className="callout">
              <strong>Founder Tip:</strong>

              <p>
                Perfect product banane ke chakkar mein months
                waste mat karo. Pehle build → test → improve.
              </p>
            </div>

          </div>


          {/* ================= STEP 5 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 05
            </span>

            <h2>
              💰 Business Model Decide Karo
            </h2>

            <p>
              Product ban gaya, ab decide karo ki
              business paisa kaise kamayega.
            </p>

            <h3>
              Common Business Models
            </h3>

            <ul>
              <li>Subscription</li>
              <li>Commission</li>
              <li>Advertising</li>
              <li>Freemium</li>
              <li>Direct Sales</li>
            </ul>

            <p>
              Saath hi decide karo ki tumhara model{" "}
              <strong>B2B, B2C ya D2C</strong>{" "}
              hai.
            </p>

          </div>


          {/* ================= STEP 6 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 06
            </span>

            <h2>
              🚀 Launch Karo
            </h2>

            <p>
              Ab apne MVP ko actual users ke liye launch karo.
            </p>

            <h3>
              Launch ke methods
            </h3>

            <ul>
              <li>Website</li>
              <li>Social media</li>
              <li>College communities</li>
              <li>Referral programs</li>
              <li>Direct outreach</li>
            </ul>

            <div className="callout">
              <strong>Remember:</strong>

              <p>
                First launch ka goal huge profit nahi,
                real customer feedback lena hai.
              </p>
            </div>

          </div>


          {/* ================= STEP 7 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 07
            </span>

            <h2>
              📈 Product-Market Fit
            </h2>

            <p>
              Ab check karo ki customers ko tumhara
              product actually useful lag raha hai ya nahi.
            </p>

            <h3>
              Important signals
            </h3>

            <ul>
              <li>
                Customers repeatedly product use kar rahe hain.
              </li>

              <li>
                Customers product recommend kar rahe hain.
              </li>

              <li>
                Retention improve ho raha hai.
              </li>

              <li>
                Revenue grow kar raha hai.
              </li>
            </ul>

          </div>


          {/* ================= STEP 8 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 08
            </span>

            <h2>
              💸 Funding & Investment
            </h2>

            <p>
              Agar startup ko rapidly scale karne ke liye
              additional capital chahiye, toh funding explore
              ki ja sakti hai.
            </p>

            <h3>
              Funding Sources
            </h3>

            <ul>
              <li>Bootstrapping</li>
              <li>Friends & Family</li>
              <li>Angel Investors</li>
              <li>Venture Capital</li>
              <li>Startup Grants</li>
            </ul>

            <div className="callout">
              <strong>Important:</strong>

              <p>
                Funding success ka final goal nahi hai.
                Sustainable business banana zyada important hai.
              </p>
            </div>

          </div>


          {/* ================= STEP 9 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 09
            </span>

            <h2>
              🌍 Scale Karo
            </h2>

            <p>
              Product-market fit milne ke baad
              startup ko larger market tak expand karo.
            </p>

            <h3>
              Scaling mein kya hota hai?
            </h3>

            <ul>
              <li>Team expand karna</li>
              <li>New cities mein jaana</li>
              <li>Technology improve karna</li>
              <li>Marketing scale karna</li>
              <li>Operations improve karna</li>
            </ul>

          </div>


          {/* ================= STEP 10 ================= */}

          <div className="card roadmap-card">

            <span className="tag">
              STEP 10
            </span>

            <h2>
              🦄 Long-Term Growth
            </h2>

            <p>
              Ab focus sustainable growth,
              strong brand aur long-term business
              build karne par hota hai.
            </p>

            <h3>
              Possible milestones
            </h3>

            <ul>
              <li>Strong revenue growth</li>
              <li>Large customer base</li>
              <li>Expansion</li>
              <li>Profitability</li>
              <li>Large-scale startup / Unicorn status</li>
            </ul>

          </div>


          {/* ================= FINAL MESSAGE ================= */}

          <div className="section-head">

            <h2>
              🚀 Start Small. Think Big.
            </h2>

            <p>
              Har successful startup ek idea se start hua tha.
              Difference ye tha ki founders ne idea ko
              action mein convert kiya.
            </p>

          </div>


          <div
            className="callout"
            style={{ marginBottom: "50px" }}
          >

            <strong>
              StartupVerse Rule:
            </strong>

            <p>
              Idea → Validate → Build → Launch →
              Learn → Improve → Scale
            </p>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Roadmap;