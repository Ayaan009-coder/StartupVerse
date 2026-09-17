import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Skills() {
  return (
    <>
      <Navbar />

      <main
        className="container"
        style={{ paddingTop: "56px" }}
      >

        <span className="eyebrow">Skills</span>

        <h1
          style={{
            fontSize: "clamp(2rem,4vw,2.8rem)",
            marginTop: "10px"
          }}
        >
          Founder banne ke liye kaunsi skills chahiye?
        </h1>

        <p
          className="lead"
          style={{
            maxWidth: "65ch",
            fontSize: "1.05rem"
          }}
        >
          Koi bhi founder in sab mein expert nahi hota — par har ek ka basic
          level samajhna zaroori hai. Neeche har skill ke saath ek rough
          "kitni zaroori hai" indicator diya hai.
        </p>


        {/* SKILLS CARDS */}

        <div
          className="grid grid-2"
          style={{ marginTop: "48px" }}
        >

          {/* 1 */}
          <div className="card skill-card">
            <span className="tag">Core</span>

            <h3>Sales & Communication</h3>

            <p>
              Investors ko convince karna ho, customers ko product bechna ho,
              ya team ko motivate karna ho — sab mein sales hi hai. Yeh
              sabse underrated founder skill hai.
            </p>

            <div className="skill-meter">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>


          {/* 2 */}
          <div className="card skill-card">
            <span className="tag">Core</span>

            <h3>Problem Solving & Resilience</h3>

            <p>
              Startup mein har din naye problems aayenge — cash flow, team
              conflict, product bugs, competition. Calm rehke solutions
              dhoondhna aur baar-baar uthna, yeh sabse zaroori mindset hai.
            </p>

            <div className="skill-meter">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>


          {/* 3 */}
          <div className="card skill-card">
            <span className="tag">Financial</span>

            <h3>Basic Financial Literacy</h3>

            <p>
              Revenue, expenses, burn rate, runway samajhna zaroori hai —
              CA na bhi ho tab bhi apne numbers khud padhne aane chahiye.
              Isse galat decisions se bacha ja sakta hai.
            </p>

            <div className="skill-meter">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>


          {/* 4 */}
          <div className="card skill-card">
            <span className="tag">Product</span>

            <h3>Product Thinking</h3>

            <p>
              Customer ke perspective se sochna — "yeh feature use karne
              mein kitna easy hai" — chahe tum designer na ho, product
              sense zaroor honi chahiye.
            </p>

            <div className="skill-meter">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>


          {/* 5 */}
          <div className="card skill-card">
            <span className="tag">Growth</span>

            <h3>Basic Marketing</h3>

            <p>
              Apne pehle 100 customers khud lana padta hai. Social media,
              community building, ya simple performance marketing ka basic
              samajh kaam aata hai.
            </p>

            <div className="skill-meter">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>


          {/* 6 */}
          <div className="card skill-card">
            <span className="tag">Tech</span>

            <h3>Technology Ka Basic Samajh</h3>

            <p>
              Coding aana zaroori nahi (bahut founders non-technical hote
              hain), par yeh samajhna zaroori hai ki tumhara product
              tech-wise kaise kaam karta hai, taaki tum sahi decisions
              le sako.
            </p>

            <div className="skill-meter">
              <span style={{ width: "65%" }}></span>
            </div>
          </div>


          {/* 7 */}
          <div className="card skill-card">
            <span className="tag">People</span>

            <h3>Leadership & Hiring</h3>

            <p>
              Sahi log dhoondhna, unhe motivate rakhna aur team culture
              banana — startup grow karte hi yeh sabse important skill
              ban jaati hai.
            </p>

            <div className="skill-meter">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>


          {/* 8 */}
          <div className="card skill-card">
            <span className="tag">Mindset</span>

            <h3>Negotiation</h3>

            <p>
              Vendors, investors, early employees, partners — sabke saath
              negotiate karna padta hai. Yeh skill practice se aati hai.
            </p>

            <div className="skill-meter">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>

        </div>


        {/* DIVIDER */}

        <div className="orbit-divider">
          Skills kaise seekhein
        </div>


        {/* HOW TO LEARN */}

        <div
          className="grid grid-3"
          style={{ marginBottom: "60px" }}
        >

          <div className="card">
            <h3>Karke seekho</h3>

            <p>
              Chhoti side-project ya freelance kaam se hi asli sales,
              marketing aur product sense aati hai — sirf padhne se nahi.
            </p>
          </div>


          <div className="card">
            <h3>Founders ko suno</h3>

            <p>
              Podcasts mein founders apne mistakes aur lessons khule mein
              share karte hain — free education hai.
            </p>
          </div>


          <div className="card">
            <h3>Ek skill par focus karo</h3>

            <p>
              Sab kuch ek saath master karne ki koshish mat karo. Apni
              sabse weak skill choose karo aur agle 3 mahine usi par
              kaam karo.
            </p>
          </div>

        </div>


        {/* CTA */}

        <div
          className="cta-row"
          style={{ marginBottom: "80px" }}
        >
          <a
            href="/fundamentals"
            className="btn btn-primary"
          >
            Ab market fundamentals samjho →
          </a>
        </div>

      </main>

      <Footer />
    </>
  );
}

export default Skills;
