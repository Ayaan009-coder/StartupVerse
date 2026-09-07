
function setupMobileNav() {
  var toggleBtn = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");

  if (!toggleBtn || !nav) return; 
  toggleBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}

function highlightActiveNavLink() {
  var currentFile = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll("nav.main-nav a");

  links.forEach(function (link) {
    var linkFile = link.getAttribute("href");
    if (linkFile === currentFile) {
      link.classList.add("active");
    }
  });
}


function setupTipRotator() {
  var tipBox = document.getElementById("founderTip");
  if (!tipBox) return;

  var tips = [
    "\u201CIdea se zyada important hai execution speed.\u201D — quick commerce ke founders is baat par baar-baar zor dete hain.",
    "\u201CPehle customer, phir funding.\u201D Zomato, Swiggy jaise founders ne shuru mein khud delivery karke demand test ki thi.",
    "\u201CBootstrapping bhi ek valid strategy hai\u201D — har startup ko din 1 se VC funding ki zaroorat nahi hoti.",
    "Product-market fit milne se pehle scale mat karo — jaldi scale karna sabse common startup mistake hai.",
    "Apna unit economics (CAC vs LTV) din 1 se track karo, growth ke peeche bhaag kar isse ignore mat karo."
  ];

  var index = 0;

  function showTip(i) {
    tipBox.style.opacity = 0;
    setTimeout(function () {
      tipBox.textContent = tips[i];
      tipBox.style.opacity = 1;
    }, 250);
  }

  showTip(index);

  setInterval(function () {
    index = (index + 1) % tips.length;
    showTip(index);
  }, 6000); 
}


document.addEventListener("DOMContentLoaded", function () {
  setupMobileNav();
  highlightActiveNavLink();
  setupTipRotator();
});
