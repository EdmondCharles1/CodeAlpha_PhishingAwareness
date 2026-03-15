// ============================================================
// Navigation
// ============================================================
function showSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach((b) => {
    if (b.getAttribute("onclick").includes(id)) b.classList.add("active");
  });
  window.scrollTo(0, 0);
}

// ============================================================
// Quiz Data
// ============================================================
const quizQuestions = [
  {
    question: "You receive this email. Is it legitimate?",
    context:
      "From: security@amaz0n-alerts.com\nSubject: Your account has been compromised!\n\nDear Customer,\nWe detected unauthorized access to your account.\nClick here immediately to secure your account:\nhttp://amaz0n-alerts.com/secure",
    options: [
      "Yes, Amazon is warning me about a security issue",
      "No, this is a phishing email",
    ],
    correct: 1,
    explanation:
      "The domain is 'amaz0n-alerts.com' (with a zero), not 'amazon.com'. It uses a generic greeting, urgency tactics, and a suspicious link. Amazon would never send emails from this domain.",
  },
  {
    question: "Which URL is the real PayPal login page?",
    context:
      "A) https://www.paypal.com/signin\nB) https://paypal-login.secure-verify.com/signin\nC) https://signin.paypal.com.account-verify.net",
    options: [
      "A — paypal.com/signin",
      "B — paypal-login.secure-verify.com",
      "C — signin.paypal.com.account-verify.net",
    ],
    correct: 0,
    explanation:
      "Only option A uses the real paypal.com domain. In B, the real domain is 'secure-verify.com'. In C, the real domain is 'account-verify.net'. Always read the domain from right to left before the first '/'.",
  },
  {
    question: "Your 'boss' sends you this text message. What should you do?",
    context:
      "Hey, I'm in a meeting and can't talk.\nI need you to buy 5 Google Play gift cards ($100 each)\nand send me the codes ASAP.\nI'll reimburse you later today.\n— Sent from iPhone",
    options: [
      "Buy the gift cards — my boss needs help",
      "Ask for more details via text",
      "Call your boss directly on their known phone number",
      "Ignore it — bosses don't ask for gift cards",
    ],
    correct: 2,
    explanation:
      "This is a classic CEO fraud / gift card scam. Always verify unusual requests through a different communication channel. Call your boss directly using a number you already know — never reply to the suspicious message.",
  },
  {
    question:
      "You get a call: 'This is Microsoft Support. We detected a virus on your computer.' What is this?",
    context: "",
    options: [
      "A legitimate warning from Microsoft",
      "Vishing — a voice phishing attack",
      "A normal tech support call",
    ],
    correct: 1,
    explanation:
      "Microsoft never calls users about viruses. This is vishing (voice phishing). The attacker wants you to install remote access software or give them your password. Always hang up.",
  },
  {
    question: "What's wrong with this email address: support@g00gle.com?",
    context: "",
    options: [
      "Nothing, it's a valid Google address",
      "The zeros replace the letter 'o' — it's a fake domain",
      "Google doesn't have a support email",
    ],
    correct: 1,
    explanation:
      "'g00gle.com' uses zeros instead of the letter 'o'. This is a lookalike domain attack. The real Google domain is 'google.com'. Always check domains character by character.",
  },
  {
    question:
      "A website shows a padlock icon (🔒) in the browser. Does this mean it's safe?",
    context: "",
    options: [
      "Yes, the padlock means the website is trustworthy",
      "No, the padlock only means the connection is encrypted, not that the site is legitimate",
    ],
    correct: 1,
    explanation:
      "HTTPS (the padlock) means your connection is encrypted, but anyone can get a free SSL certificate — including attackers. A phishing site can have HTTPS too. Always check the domain name.",
  },
  {
    question:
      "You find a USB drive in your office parking lot labeled 'Salary Report 2024'. What do you do?",
    context: "",
    options: [
      "Plug it into my computer to find the owner",
      "Give it to IT security without plugging it in",
      "Plug it in — the label says it's just a salary report",
    ],
    correct: 1,
    explanation:
      "This is a USB drop attack. The drive could contain malware that installs automatically when plugged in. Always give unknown USB drives to your IT department — never plug them in yourself.",
  },
  {
    question: "Which of these is the strongest defense against phishing?",
    context: "",
    options: [
      "Having a strong password",
      "Using antivirus software",
      "Verifying requests through a separate channel before acting",
      "Using a VPN",
    ],
    correct: 2,
    explanation:
      "While all options help with security, verifying requests independently is the most effective defense against phishing. If you receive a suspicious email from your bank, call them using the number on your card — not the number in the email.",
  },
];

// ============================================================
// Quiz Logic
// ============================================================
let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  const q = quizQuestions[currentQuestion];

  // Update progress
  const progress = (currentQuestion / quizQuestions.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";
  document.getElementById("progressText").textContent =
    "Question " + (currentQuestion + 1) + " / " + quizQuestions.length;

  // Set question
  document.getElementById("questionText").textContent = q.question;
  document.getElementById("questionContext").textContent = q.context;

  // Create options
  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";
  const letters = ["A", "B", "C", "D"];
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML =
      '<span class="option-letter">' + letters[i] + "</span>" + opt;
    btn.onclick = () => selectAnswer(i);
    container.appendChild(btn);
  });

  // Reset feedback
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "feedback";
  document.getElementById("nextBtn").style.display = "none";
  answered = false;
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q = quizQuestions[currentQuestion];
  const buttons = document.querySelectorAll(".option-btn");

  // Disable all buttons
  buttons.forEach((b) => b.classList.add("disabled"));

  // Mark correct and wrong
  buttons[q.correct].classList.add("correct");
  if (index !== q.correct) {
    buttons[index].classList.add("wrong");
  } else {
    score++;
  }

  // Show feedback
  const feedback = document.getElementById("feedback");
  if (index === q.correct) {
    feedback.className = "feedback correct-feedback";
    feedback.textContent = "✅ Correct! " + q.explanation;
  } else {
    feedback.className = "feedback wrong-feedback";
    feedback.textContent = "❌ Wrong. " + q.explanation;
  }

  // Show next button
  const nextBtn = document.getElementById("nextBtn");
  if (currentQuestion < quizQuestions.length - 1) {
    nextBtn.textContent = "Next Question →";
  } else {
    nextBtn.textContent = "See Results →";
  }
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("quizResults").style.display = "block";

  const percentage = Math.round((score / quizQuestions.length) * 100);
  document.getElementById("scoreText").textContent =
    score + " / " + quizQuestions.length + " (" + percentage + "%)";

  // Icon and title based on score
  const icon = document.getElementById("resultsIcon");
  const title = document.getElementById("resultsTitle");

  if (percentage >= 80) {
    icon.textContent = "🏆";
    title.textContent = "Excellent! You're Phishing-Proof!";
    title.style.color = "#34d399";
  } else if (percentage >= 50) {
    icon.textContent = "👍";
    title.textContent = "Good Job! But Stay Vigilant.";
    title.style.color = "#fbbf24";
  } else {
    icon.textContent = "📚";
    title.textContent = "Keep Learning! Review the Training.";
    title.style.color = "#f87171";
  }

  // Breakdown
  const breakdown = document.getElementById("resultsBreakdown");
  breakdown.innerHTML =
    '<div class="breakdown-item"><div class="breakdown-number" style="color:#34d399">' +
    score +
    '</div><div class="breakdown-label">Correct</div></div>' +
    '<div class="breakdown-item"><div class="breakdown-number" style="color:#f87171">' +
    (quizQuestions.length - score) +
    '</div><div class="breakdown-label">Wrong</div></div>' +
    '<div class="breakdown-item"><div class="breakdown-number" style="color:#38bdf8">' +
    percentage +
    '%</div><div class="breakdown-label">Score</div></div>';
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quizContainer").style.display = "block";
  document.getElementById("quizResults").style.display = "none";
  loadQuestion();
}

// Load first question when quiz section is shown
const originalShowSection = showSection;
showSection = function (id) {
  originalShowSection(id);
  if (id === "quiz" && !answered && currentQuestion === 0) {
    loadQuestion();
  }
};

// Init first question
loadQuestion();
