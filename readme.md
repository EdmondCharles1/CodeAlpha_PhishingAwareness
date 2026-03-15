# CodeAlpha_PhishingAwareness

**CodeAlpha Internship — Task 2: Phishing Awareness Training**

An interactive web-based training module that educates users about phishing attacks, social engineering tactics, and how to protect themselves online.

## Demo

Open `index.html` in your browser — no server required.

## Features

### Educational Content

- **What is Phishing?** — Overview with real-world statistics and the 6 types of phishing (Email, Spear, Whaling, Smishing, Vishing, Clone)
- **Spotting Phishing Emails** — Annotated fake email example with 7 red flags to watch for
- **Fake Websites** — Side-by-side URL comparison (legitimate vs phishing), common attacker tricks (lookalike domains, subdomain tricks, fake HTTPS), and 4-step verification guide
- **Social Engineering** — The 6 principles of manipulation (urgency, authority, fear, greed, trust, helpfulness), real-world attack scenarios with actual case studies

### Interactive Quiz

- 8 scenario-based questions testing real phishing recognition skills
- Instant feedback with detailed explanations for each answer
- Progress bar tracking
- Score breakdown with performance-based results (Excellent / Good / Keep Learning)
- Retake option

## Project Structure

```
CodeAlpha_PhishingAwareness/
├── index.html          # Main page with all sections
├── css/
│   └── style.css       # Styles with CSS variables
├── js/
│   └── app.js          # Navigation + quiz logic
├── images/             # (screenshots, diagrams)
├── .gitignore
└── README.md
```

## How to Run

No installation needed. Just open the file in your browser:

```bash
# Option 1: Double-click index.html

# Option 2: Local server
cd CodeAlpha_PhishingAwareness
python3 -m http.server 8080
# Then visit http://localhost:8080
```

## Training Flow

```
Introduction          What is phishing? Types and statistics
     │
     ▼
Phishing Emails       Annotated example + 7 red flags
     │
     ▼
Fake Websites         URL comparison + attacker tricks + verification steps
     │
     ▼
Social Engineering    6 manipulation principles + real-world scenarios
     │
     ▼
Interactive Quiz      8 questions → score → key takeaways
```

## Tech Stack

- **HTML** — page structure and content
- **CSS** — styling with CSS variables for consistency
- **JavaScript** — section navigation and quiz interactivity

## What I Learned

- How phishing attacks work and the psychology behind social engineering
- How to build a single-page application with vanilla HTML/CSS/JS
- How to use CSS variables (`:root`) for maintainable styling
- How to dynamically generate HTML content with JavaScript
- How to manage application state (quiz progress, score) with JS variables
- How `classList.add()` / `classList.remove()` controls UI behavior

## Sources

- Phishing statistics: Verizon 2023 Data Breach Investigations Report
- Ubiquiti Networks case study: SEC filing, 2015
- USB drop attack study: University of Illinois, 2016
- Social engineering principles: Robert Cialdini, "Influence: The Psychology of Persuasion"

## Author

Built by **Claud Edmond Charles** as part of the [CodeAlpha](https://www.codealpha.tech) Cybersecurity Internship.

## License

MIT
