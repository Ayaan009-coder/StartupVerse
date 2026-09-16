document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFounderTip();
  initUnitEconomicsCalculator();
  initTimelineTabs();
  initNotificationSimulator();
  initChannelFilters();
  initMarketingQuiz();
});

/* ==========================================================================
   1. Mobile Navigation
   ========================================================================== */
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (!navToggle || !mainNav) return;

  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    const isOpen = mainNav.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.textContent = isOpen ? '✕' : '☰';
  });

  // Close nav on click outside
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target) && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.textContent = '☰';
    }
  });
}

/* ==========================================================================
   2. Rotating Founder Tips & Growth Hacks
   ========================================================================== */
const founderTips = [
  "Deepinder Goyal (Zomato): 'Pehele 1,000 customers laane ke liye sharam chhodo. Hum khud restaurant menu leke scan karte the. Do things that don't scale.'",
  "Albinder Dhindsa (Blinkit): '10-minute delivery marketing gimmick nahi tha — yeh customer psychology par target tha: impulse purchase delay tolerate nahi karta.'",
  "Kunal Shah (CRED): 'Agar tumhara product customer ko status ya time nahi bacha raha, toh tum sirf discounts se bech rahe ho — aur discount ka koi loyalty nahi hota.'",
  "Peter Thiel (Zero to One): 'Distribution is everything. Great product with poor sales will fail. Poor product with great sales might survive long enough to become great.'",
  "Deepinder Goyal: 'Zomato Gold ke time humne restaurants ko alienate kiya (#Logout). Lesson: Agar supply side naraz hai, toh demand side ka koi faayda nahi.'",
  "Paul Graham (Y Combinator): '100 log jo tumhare product se pyaar karte hain, 1,000,000 logon se behtar hain jo bas product ko theek-thaak samajhte hain.'",
  "Albinder Dhindsa: 'Grofers mein hum 90-minute slot delivery karte the aur burn ho rahe the. Blinkit pivot ne sikhaya: speed se basket size chhota hota hai par frequency 5x ho jaati hai.'"
];

function initFounderTip() {
  const tipEl = document.getElementById('founderTip');
  if (!tipEl) return;

  let currentIdx = 0;

  function showTip(idx) {
    tipEl.style.opacity = '0';
    setTimeout(() => {
      tipEl.textContent = founderTips[idx];
      tipEl.style.opacity = '1';
    }, 250);
  }

  showTip(0);

  // Auto rotate every 8 seconds
  setInterval(() => {
    currentIdx = (currentIdx + 1) % founderTips.length;
    showTip(currentIdx);
  }, 8000);

  // Clickable to get instant next tip
  tipEl.parentElement.style.cursor = 'pointer';
  tipEl.parentElement.title = 'Click for next founder tip';
  tipEl.parentElement.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % founderTips.length;
    showTip(currentIdx);
  });
}

/* ==========================================================================
   3. Interactive CAC & LTV Calculator (Unit Economics Engine)
   ========================================================================== */
function initUnitEconomicsCalculator() {
  const adSpendInput = document.getElementById('calcAdSpend');
  const newCustInput = document.getElementById('calcNewCustomers');
  const aovInput = document.getElementById('calcAOV');
  const ordersInput = document.getElementById('calcOrdersPerYear');
  const marginInput = document.getElementById('calcMargin');

  const outCac = document.getElementById('outCAC');
  const outLtv = document.getElementById('outLTV');
  const outRatio = document.getElementById('outRatio');
  const outPayback = document.getElementById('outPayback');
  const outBadge = document.getElementById('outBadge');
  const outAdvice = document.getElementById('outAdvice');

  if (!adSpendInput || !newCustInput || !aovInput) return;

  function calculate() {
    const spend = Math.max(1, parseFloat(adSpendInput.value) || 0);
    const customers = Math.max(1, parseFloat(newCustInput.value) || 0);
    const aov = Math.max(1, parseFloat(aovInput.value) || 0);
    const ordersPerYear = Math.max(1, parseFloat(ordersInput.value) || 0);
    const margin = Math.min(100, Math.max(1, parseFloat(marginInput.value) || 0)) / 100;

    // CAC = Total Marketing Spend / New Customers Acquired
    const cac = Math.round(spend / customers);

    // Gross profit per order
    const profitPerOrder = aov * margin;

    // Assumed 2-year customer lifespan for realistic LTV calculation
    const annualProfit = profitPerOrder * ordersPerYear;
    const ltv = Math.round(annualProfit * 2);

    // LTV : CAC Ratio
    const ratio = (ltv / cac).toFixed(2);

    // Payback period in months = CAC / (Monthly Gross Profit per user)
    const monthlyProfit = annualProfit / 12;
    const paybackMonths = (cac / monthlyProfit).toFixed(1);

    if (outCac) outCac.textContent = `₹${cac.toLocaleString('en-IN')}`;
    if (outLtv) outLtv.textContent = `₹${ltv.toLocaleString('en-IN')}`;
    if (outRatio) outRatio.textContent = `${ratio}x`;
    if (outPayback) outPayback.textContent = `${paybackMonths} Months`;

    if (outBadge && outAdvice) {
      if (ratio < 1.0) {
        outBadge.className = 'result-badge danger';
        outBadge.textContent = 'Danger: Burning Cash (Loss Per Customer)';
        outAdvice.textContent = 'Khatra! Tum har customer ko laane mein uski lifetime value se zyada paisa phoonk rahe ho. Zomato aur Grofers ne 2016-2018 mein yahi kiya tha. Paid ads turant kam karo aur retention/margin sudharo.';
      } else if (ratio < 3.0) {
        outBadge.className = 'result-badge warning';
        outBadge.textContent = 'Suboptimal: Break-even Zone';
        outAdvice.textContent = 'Average performance. Tum customer le toh aa rahe ho par marketing payback lamba hai. Repeat orders aur AOV badhane ke tareeqe dhoondho (jaise Zomato Gold ya Blinkit Pass membership loops).';
      } else if (ratio <= 5.0) {
        outBadge.className = 'result-badge healthy';
        outBadge.textContent = 'Healthy: Startup Golden Ratio (3x - 5x)';
        outAdvice.textContent = 'Shaandar! Yeh benchmark ratio hai. Har ₹1 marketing spend par ₹3-₹5 ka return mil raha hai. Growth capital invest karne ka yeh bilkul sahi samay hai.';
      } else {
        outBadge.className = 'result-badge healthy';
        outBadge.textContent = 'Hyper-Profitable: Accelerate Growth!';
        outAdvice.textContent = 'LTV:CAC 5x se zyada hai! Tum shyd marketing mein kam spend kar rahe ho. Aggressive hoke paid channels scale karo aur competitors se aage niklo.';
      }
    }
  }

  [adSpendInput, newCustInput, aovInput, ordersInput, marginInput].forEach(input => {
    input.addEventListener('input', calculate);
  });

  calculate();
}

/* ==========================================================================
   4. Case Study Timeline Switcher (Zomato vs Blinkit)
   ========================================================================== */
function initTimelineTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const zomatoStream = document.getElementById('zomatoTimeline');
  const blinkitStream = document.getElementById('blinkitTimeline');

  if (!tabs.length || !zomatoStream || !blinkitStream) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.target;
      if (target === 'zomato') {
        zomatoStream.style.display = 'block';
        blinkitStream.style.display = 'none';
      } else {
        zomatoStream.style.display = 'none';
        blinkitStream.style.display = 'block';
      }
    });
  });
}

/* ==========================================================================
   5. Interactive Notification Simulator
   ========================================================================== */
const notificationScenarios = {
  ipl: {
    app: 'zomato',
    appName: 'Zomato',
    time: '8:45 PM • 19th Over',
    title: 'Match fas chuka hai! 🏏',
    body: 'Nails chabane se pet nahi bharega. Chole Bhature order kar lo, tension automatic kam ho jayegi! Flat ₹120 OFF.'
  },
  rain: {
    app: 'blinkit',
    appName: 'Blinkit',
    time: '4:15 PM • Heavy Rain Outside 🌧️',
    title: 'Garma-garam Chai & Pakode? ☕',
    body: 'Bahar mat bheego! Adrak, Elaichi aur Besan 8 minute mein tumhare darwaaze par. Boiler chadhayein?'
  },
  midnight: {
    app: 'zomato',
    appName: 'Zomato',
    time: '1:24 AM • Late Night',
    title: 'Ex ki yaad aa rahi hai ya Cheese Pizza ki? 🍕',
    body: 'Ex toh wapas nahi aayegi, par Cheese Burst Pizza 25 minute mein zaroor aa sakta hai. Treat yourself!'
  },
  salary: {
    app: 'zomato',
    appName: 'Zomato',
    time: '12:30 PM • 1st of Month 💰',
    title: 'Salary Credited! Party toh banti hai 🥂',
    body: 'Tinday aur Lauki ko kaho bye-bye. Aaj Biryani mangwao aur life celebrate karo. Check top fine-dine offers.'
  },
  diwali: {
    app: 'blinkit',
    appName: 'Blinkit',
    time: 'Dhanteras Special • 10:00 AM ✨',
    title: 'Shuddh Chandi ka sikka in 10 mins! 🪙',
    body: 'Jeweller ki lambi line skip karo! 10g Pure Silver Coin & Puja Samagri delivered to your home in 9 mins.'
  }
};

function initNotificationSimulator() {
  const triggerBtns = document.querySelectorAll('[data-scenario]');
  const appIcon = document.getElementById('notifAppIcon');
  const appName = document.getElementById('notifAppName');
  const notifTime = document.getElementById('notifTime');
  const notifTitle = document.getElementById('notifTitle');
  const notifBody = document.getElementById('notifBody');

  if (!triggerBtns.length || !notifTitle) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      triggerBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const scenarioKey = btn.dataset.scenario;
      const data = notificationScenarios[scenarioKey];
      if (!data) return;

      // Animate card change
      const card = document.getElementById('activePushCard');
      if (card) {
        card.style.transform = 'scale(0.95)';
        card.style.opacity = '0.5';

        setTimeout(() => {
          appIcon.className = `app-icon ${data.app}`;
          appIcon.textContent = data.app === 'zomato' ? 'Z' : 'B';
          appName.textContent = data.appName;
          notifTime.textContent = data.time;
          notifTitle.textContent = data.title;
          notifBody.textContent = data.body;

          card.style.transform = 'scale(1)';
          card.style.opacity = '1';
        }, 150);
      }
    });
  });
}

/* ==========================================================================
   6. Strategy Matrix Channel Filters
   ========================================================================== */
function initChannelFilters() {
  const filterChips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.channel-card');

  if (!filterChips.length || !cards.length) return;

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const category = chip.dataset.category;

      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. Interactive Marketing IQ Quiz
   ========================================================================== */
function initMarketingQuiz() {
  const quizCards = document.querySelectorAll('.quiz-card');
  if (!quizCards.length) return;

  quizCards.forEach(card => {
    const optionBtns = card.querySelectorAll('.quiz-opt-btn');
    const explanationBox = card.querySelector('.quiz-explanation');

    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Disable buttons in this card after answering
        optionBtns.forEach(b => {
          b.disabled = true;
          b.style.pointerEvents = 'none';
        });

        const isCorrect = btn.dataset.correct === 'true';

        if (isCorrect) {
          btn.classList.add('correct');
          if (explanationBox) {
            explanationBox.className = 'quiz-explanation show correct-box';
            explanationBox.innerHTML = `<strong>✅ Sahi Jawaab!</strong> ${btn.dataset.explanation || 'Bilkul sahi strategy! Founder ka kaam customer loyalty aur unit economics dono ko protect karna hai.'}`;
          }
        } else {
          btn.classList.add('incorrect');
          // Highlight the right one
          const correctBtn = card.querySelector('[data-correct="true"]');
          if (correctBtn) correctBtn.classList.add('correct');

          if (explanationBox) {
            explanationBox.className = 'quiz-explanation show incorrect-box';
            explanationBox.innerHTML = `<strong>❌ Galat Choice!</strong> ${btn.dataset.explanation || 'Is approach se startup ka burn rate badhta hai aur unit economics fail ho jaati hai.'}`;
          }
        }
      });
    });
  });
}