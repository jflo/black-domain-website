# Black Domain Protocol - Marketing Website Implementation Guide

## Project Overview
A single-page marketing website for the Black Domain Protocol - a campaign to encrypt Ethereum's mempool and protect users from MEV extraction. Uses the "Dark Forest" and "Black Domain" metaphors from Liu Cixin's Three Body Problem.

## Project Structure
```
black-domain-protocol/
├── docs/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── animations.js
│   │   └── mev-calculator.js
│   ├── assets/
│   │   ├── dark-forest-bg.svg
│   │   ├── black-domain-transition.svg
│   │   ├── ethereum-lock.svg
│   │   └── og-image.png
│   └── CNAME (optional for custom domain)
├── README.md
└── .gitignore
```

## File Contents

### 1. docs/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Black Domain Protocol - Escape Ethereum's Dark Forest</title>
    <meta name="description" content="MEV bots extracted $1.2B from users. Join the Black Domain Protocol to encrypt Ethereum's mempool and end predatory trading.">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Enter the Black Domain">
    <meta property="og:description" content="Step out of the Dark Forest. End MEV extraction.">
    <meta property="og:image" content="/assets/og-image.png">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Black Domain Protocol">
    <meta name="twitter:description" content="Encrypting Ethereum's mempool to end the Dark Forest">
    <meta name="twitter:image" content="/assets/og-image.png">
    
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Space+Mono&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navigation">
        <div class="nav-container">
            <div class="nav-logo">Black Domain</div>
            <div class="nav-links">
                <a href="#problem">The Problem</a>
                <a href="#solution">The Solution</a>
                <a href="#how">How It Works</a>
                <a href="#join">Join</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero">
        <canvas id="dark-forest-canvas"></canvas>
        <div class="hero-content">
            <h1 class="glitch-text" data-text="Step out of the Dark Forest">
                Step out of the Dark Forest
            </h1>
            <h2 class="fade-in">Enter the Black Domain</h2>
            <div class="stat-ticker">
                <span class="ticker-label">Total Extracted:</span>
                <span id="mev-extracted" class="ticker-value">$1,247,892,034</span>
            </div>
            <button class="cta-primary" onclick="scrollToSection('problem')">
                See If You're Being Hunted
            </button>
            <div class="scroll-indicator">
                <span>Scroll to learn more</span>
                <div class="arrow-down"></div>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section id="problem" class="problem-section">
        <div class="container">
            <h2 class="section-title">The Dark Forest is Real</h2>
            <p class="section-subtitle">
                Every transaction you broadcast is a signal to predators. 
                MEV bots are watching. Waiting. Extracting.
            </p>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number" data-value="98">0</span>
                    <span class="stat-unit">%</span>
                    <p class="stat-description">Largest single sandwich attack loss</p>
                </div>
                <div class="stat-card">
                    <span class="stat-number" data-value="2000">0</span>
                    <span class="stat-unit">M</span>
                    <p class="stat-description">Total MEV extracted (USD)</p>
                </div>
                <div class="stat-card">
                    <span class="stat-number" data-value="72">0</span>
                    <span class="stat-unit">%</span>
                    <p class="stat-description">MEV profits to validators</p>
                </div>
                <div class="stat-card">
                    <span class="stat-number" data-value="43">0</span>
                    <span class="stat-unit">K</span>
                    <p class="stat-description">Daily sandwich attacks</p>
                </div>
            </div>
            
            <div class="victim-calculator">
                <h3>Calculate Your MEV Exposure</h3>
                <p>Enter your wallet address to see how much you've lost to the Dark Forest</p>
                <div class="calculator-input">
                    <input type="text" placeholder="0x..." id="wallet-address">
                    <button onclick="scanWallet()">Scan the Dark Forest</button>
                </div>
                <div id="scan-results" class="scan-results hidden"></div>
            </div>
        </div>
    </section>

    <!-- Solution Section -->
    <section id="solution" class="solution-section">
        <div class="container">
            <h2 class="section-title">The Black Domain Protocol</h2>
            <p class="section-subtitle">
                A Black Domain isn't retreat—it's transcendence. 
                By encrypting the mempool, we make predation impossible.
            </p>
            
            <div class="transformation-visual">
                <div class="before-after-container">
                    <div class="before">
                        <h3>Dark Forest (Now)</h3>
                        <div class="transaction-flow vulnerable">
                            <div class="tx-step">You Submit</div>
                            <div class="arrow">→</div>
                            <div class="tx-step danger">Visible in Mempool</div>
                            <div class="arrow">→</div>
                            <div class="tx-step danger">Bots Attack</div>
                            <div class="arrow">→</div>
                            <div class="tx-step">You Lose</div>
                        </div>
                    </div>
                    <div class="after">
                        <h3>Black Domain (Future)</h3>
                        <div class="transaction-flow protected">
                            <div class="tx-step">You Submit</div>
                            <div class="arrow">→</div>
                            <div class="tx-step safe">Encrypted</div>
                            <div class="arrow">→</div>
                            <div class="tx-step safe">Ordered Blindly</div>
                            <div class="arrow">→</div>
                            <div class="tx-step">Fair Execution</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">🔐</div>
                    <h3>Encrypted Mempool</h3>
                    <p>Transactions invisible until confirmed. Even light cannot penetrate a Black Domain.</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">⚡</div>
                    <h3>Threshold Decryption</h3>
                    <p>Revealed only after ordering. No front-running possible.</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">⚖️</div>
                    <h3>Fair Execution</h3>
                    <p>True price discovery. No sandwiches. No extraction.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section id="how" class="how-section">
        <div class="container">
            <h2 class="section-title">From Prey to Protected</h2>
            <div class="timeline">
                <div class="timeline-line"></div>
                <div class="timeline-step" data-step="1">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h3>Submit Encrypted</h3>
                        <p>Your transaction enters the Black Domain, invisible to all</p>
                    </div>
                </div>
                <div class="timeline-step" data-step="2">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h3>Order Blindly</h3>
                        <p>Validators sequence without seeing contents</p>
                    </div>
                </div>
                <div class="timeline-step" data-step="3">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h3>Reveal Fairly</h3>
                        <p>Transactions decrypt only after ordering is final</p>
                    </div>
                </div>
                <div class="timeline-step" data-step="4">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h3>Execute Safely</h3>
                        <p>No MEV extraction possible. Your value remains yours.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section id="join" class="join-section">
        <div class="container">
            <h2 class="section-title">Build the Black Domain</h2>
            <p class="section-subtitle">
                The Dark Forest was never our destination—it was a problem to solve.
            </p>
            
            <div class="audience-cards">
                <div class="card developers">
                    <div class="card-icon">👩‍💻</div>
                    <h3>Developers</h3>
                    <p>Implement encrypted submission in your dApps and wallets</p>
                    <a href="https://github.com/black-domain-protocol" class="btn btn-dev">
                        View Documentation
                    </a>
                </div>
                <div class="card validators">
                    <div class="card-icon">⚡</div>
                    <h3>Validators</h3>
                    <p>Run Black Domain software for sustainable, honest rewards</p>
                    <a href="#" class="btn btn-val">
                        Join the Network
                    </a>
                </div>
                <div class="card users">
                    <div class="card-icon">🛡️</div>
                    <h3>Users</h3>
                    <p>Demand protection from every protocol you use</p>
                    <a href="#" class="btn btn-user">
                        Sign the Petition
                    </a>
                </div>
            </div>
            
            <div class="petition-counter">
                <p><span id="petition-count">12,847</span> builders have entered the Black Domain</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <blockquote class="footer-quote">
                "In the Dark Forest, every transaction is prey. 
                In the Black Domain, every transaction is sovereign."
            </blockquote>
            <div class="footer-links">
                <a href="https://twitter.com/blackdomain">Twitter</a>
                <a href="https://github.com/black-domain-protocol">GitHub</a>
                <a href="#">Research Paper</a>
                <a href="#">Discord</a>
                <a href="#">Blog</a>
            </div>
            <p class="copyright">
                The Black Domain Protocol - Encrypting Ethereum's Future
            </p>
        </div>
    </footer>

    <script src="js/animations.js"></script>
    <script src="js/mev-calculator.js"></script>
</body>
</html>
```

### 2. docs/css/style.css
```css
/* CSS Variables */
:root {
    --dark-forest: #0a0e1a;
    --black-domain: #000000;
    --ethereum-blue: #627eea;
    --danger-red: #ff3366;
    --safe-green: #00d395;
    --text-primary: #ffffff;
    --text-secondary: #8892b0;
    --card-bg: rgba(255, 255, 255, 0.03);
    --border-color: rgba(255, 255, 255, 0.1);
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: linear-gradient(180deg, var(--dark-forest) 0%, var(--black-domain) 100%);
    color: var(--text-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navigation {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 14, 26, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(90deg, var(--ethereum-blue), var(--safe-green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--text-primary);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

#dark-forest-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
}

.hero-content {
    text-align: center;
    z-index: 1;
    padding: 2rem;
}

h1 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.1;
}

/* Glitch Effect */
.glitch-text {
    position: relative;
    color: var(--text-primary);
    animation: glitch-skew 1s infinite linear alternate-reverse;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch-text::before {
    animation: glitch-1 0.5s infinite;
    color: var(--danger-red);
    z-index: -1;
}

.glitch-text::after {
    animation: glitch-2 0.5s infinite;
    color: var(--safe-green);
    z-index: -2;
}

@keyframes glitch-1 {
    0%, 100% { clip-path: inset(0 0 0 0); }
    20% { clip-path: inset(20% 0 60% 0); }
    40% { clip-path: inset(50% 0 30% 0); }
    60% { clip-path: inset(70% 0 10% 0); }
    80% { clip-path: inset(10% 0 80% 0); }
}

@keyframes glitch-2 {
    0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
    20% { clip-path: inset(80% 0 10% 0); transform: translate(-2px, 2px); }
    40% { clip-path: inset(10% 0 80% 0); transform: translate(2px, -2px); }
    60% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, -2px); }
    80% { clip-path: inset(20% 0 60% 0); transform: translate(2px, 2px); }
}

@keyframes glitch-skew {
    0%, 100% { transform: skew(0deg); }
    20% { transform: skew(-2deg); }
    40% { transform: skew(1deg); }
    60% { transform: skew(-1deg); }
    80% { transform: skew(2deg); }
}

h2 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.fade-in {
    animation: fadeIn 2s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Stat Ticker */
.stat-ticker {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
    padding: 1rem 2rem;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-family: 'Space Mono', monospace;
}

.ticker-label {
    color: var(--text-secondary);
}

.ticker-value {
    font-size: 1.5rem;
    color: var(--danger-red);
    font-weight: bold;
}

/* CTA Button */
.cta-primary {
    background: linear-gradient(90deg, var(--ethereum-blue), var(--safe-green));
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cta-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(98, 126, 234, 0.5);
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: bounce 2s infinite;
}

.arrow-down {
    width: 24px;
    height: 24px;
    border-right: 2px solid var(--text-secondary);
    border-bottom: 2px solid var(--text-secondary);
    transform: rotate(45deg);
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(10px); }
    60% { transform: translateY(5px); }
}

/* Section Styles */
section {
    padding: 100px 0;
    position: relative;
}

.section-title {
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 800;
}

.section-subtitle {
    text-align: center;
    color: var(--text-secondary);
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 3rem;
}

/* Problem Section */
.problem-section {
    background: linear-gradient(180deg, var(--black-domain) 0%, var(--dark-forest) 100%);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.stat-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s;
}

.stat-card:hover {
    transform: translateY(-5px);
    border-color: var(--ethereum-blue);
    box-shadow: 0 10px 30px rgba(98, 126, 234, 0.2);
}

.stat-number {
    font-size: 3rem;
    font-weight: 800;
    color: var(--danger-red);
}

.stat-unit {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-left: 0.25rem;
}

.stat-description {
    margin-top: 0.5rem;
    color: var(--text-secondary);
}

/* Victim Calculator */
.victim-calculator {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 3rem;
    border-radius: 8px;
    text-align: center;
}

.victim-calculator h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.calculator-input {
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 2rem auto 0;
}

.calculator-input input {
    flex: 1;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    color: white;
    border-radius: 4px;
    font-size: 1rem;
}

.calculator-input button {
    padding: 1rem 2rem;
    background: var(--danger-red);
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
}

.calculator-input button:hover {
    background: var(--ethereum-blue);
}

.scan-results {
    margin-top: 2rem;
    padding: 1.5rem;
    background: rgba(255, 51, 102, 0.1);
    border: 1px solid var(--danger-red);
    border-radius: 4px;
}

.hidden {
    display: none;
}

/* Solution Section */
.transformation-visual {
    margin: 3rem 0;
}

.before-after-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
}

.before, .after {
    padding: 2rem;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
}

.before h3 {
    color: var(--danger-red);
    margin-bottom: 1.5rem;
}

.after h3 {
    color: var(--safe-green);
    margin-bottom: 1.5rem;
}

.transaction-flow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}

.tx-step {
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    font-size: 0.9rem;
    white-space: nowrap;
}

.tx-step.danger {
    background: rgba(255, 51, 102, 0.2);
    border: 1px solid var(--danger-red);
}

.tx-step.safe {
    background: rgba(0, 211, 149, 0.2);
    border: 1px solid var(--safe-green);
}

.arrow {
    color: var(--text-secondary);
}

/* Features */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature {
    text-align: center;
    padding: 2rem;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: all 0.3s;
}

.feature:hover {
    transform: translateY(-5px);
    border-color: var(--safe-green);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--safe-green);
}

/* Timeline */
.timeline {
    position: relative;
    padding: 2rem 0;
}

.timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, var(--ethereum-blue), var(--safe-green));
    transform: translateX(-50%);
}

.timeline-step {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    opacity: 0;
    animation: slideIn 0.6s forwards;
}

.timeline-step:nth-child(even) {
    flex-direction: row-reverse;
}

.timeline-step:nth-child(2) { animation-delay: 0.2s; }
.timeline-step:nth-child(3) { animation-delay: 0.4s; }
.timeline-step:nth-child(4) { animation-delay: 0.6s; }
.timeline-step:nth-child(5) { animation-delay: 0.8s; }

@keyframes slideIn {
    from { 
        opacity: 0; 
        transform: translateX(-50px);
    }
    to { 
        opacity: 1; 
        transform: translateX(0);
    }
}

.step-number {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--ethereum-blue), var(--safe-green));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    flex-shrink: 0;
    z-index: 1;
}

.step-content {
    flex: 1;
    padding: 0 2rem;
    max-width: 500px;
}

.step-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

/* Call to Action Section */
.audience-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.card {
    padding: 2.5rem;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.developers:hover {
    border-color: var(--ethereum-blue);
}

.validators:hover {
    border-color: var(--safe-green);
}

.users:hover {
    border-color: var(--danger-red);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.card h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.card p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
}

.btn-dev {
    background: var(--ethereum-blue);
    color: white;
}

.btn-val {
    background: var(--safe-green);
    color: black;
}

.btn-user {
    background: var(--danger-red);
    color: white;
}

.btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.petition-counter {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 3rem;
}

.petition-counter span {
    color: var(--safe-green);
    font-weight: bold;
    font-size: 1.5rem;
}

/* Footer */
.footer {
    background: var(--black-domain);
    padding: 4rem 0 2rem;
    border-top: 1px solid var(--border-color);
}

.footer-quote {
    font-size: 1.3rem;
    font-style: italic;
    text-align: center;
    color: var(--text-secondary);
    max-width: 800px;
    margin: 0 auto 3rem;
    padding: 0 2rem;
    line-height: 1.8;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: var(--safe-green);
}

.copyright {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .before-after-container {
        grid-template-columns: 1fr;
    }
    
    .transaction-flow {
        flex-direction: column;
        gap: 1rem;
    }
    
    .arrow {
        transform: rotate(90deg);
    }
    
    .timeline-line {
        left: 20px;
    }
    
    .timeline-step,
    .timeline-step:nth-child(even) {
        flex-direction: row;
        padding-left: 50px;
    }
    
    .step-number {
        position: absolute;
        left: 0;
    }
    
    .audience-cards {
        grid-template-columns: 1fr;
    }
    
    h1 {
        font-size: 2.5rem;
    }
    
    .calculator-input {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    .stat-number {
        font-size: 2rem;
    }
}
```

### 3. docs/js/animations.js
```javascript
// Dark Forest Canvas Animation
function initDarkForest() {
    const canvas = document.getElementById('dark-forest-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const predators = [];
    
    // Transaction particles
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.5;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(98, 126, 234, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // MEV Bot predators
    class Predator {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.target = null;
            this.speed = 1;
        }
        
        update() {
            if (!this.target || Math.random() < 0.01) {
                this.target = particles[Math.floor(Math.random() * particles.length)];
            }
            
            if (this.target) {
                const dx = this.target.x - this.x;
                const dy = this.target.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance > 5) {
                    this.x += (dx / distance) * this.speed;
                    this.y += (dy / distance) * this.speed;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 51, 102, 0.8)';
            ctx.fill();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    
    for (let i = 0; i < 5; i++) {
        predators.push(new Predator());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        predators.forEach(predator => {
            predator.update();
            predator.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// MEV Counter Animation
function animateMEVCounter() {
    const counter = document.getElementById('mev-extracted');
    if (!counter) return;
    
    let current = 1247892034;
    
    setInterval(() => {
        // Simulate realistic MEV extraction rate
        const increment = Math.floor(Math.random() * 1000) + 100;
        current += increment;
        counter.textContent = '$' + current.toLocaleString();
    }, 100);
}

// Stats Counter Animation
function animateStats() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateStatNumber(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.stat-number').forEach(el => {
        observer.observe(el);
    });
}

function animateStatNumber(element) {
    const target = parseInt(element.getAttribute('data-value'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Petition Counter
function animatePetitionCounter() {
    const counter = document.getElementById('petition-count');
    if (!counter) return;
    
    let current = 12847;
    
    setInterval(() => {
        // Simulate people signing
        if (Math.random() < 0.3) {
            current += Math.floor(Math.random() * 3) + 1;
            counter.textContent = current.toLocaleString();
        }
    }, 5000);
}

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initDarkForest();
    animateMEVCounter();
    animateStats();
    animatePetitionCounter();
    
    // Add scroll-based navigation highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});
```

### 4. docs/js/mev-calculator.js
```javascript
// MEV Calculator functionality
async function scanWallet() {
    const addressInput = document.getElementById('wallet-address');
    const resultsDiv = document.getElementById('scan-results');
    const address = addressInput.value.trim();
    
    if (!address || !address.startsWith('0x') || address.length !== 42) {
        alert('Please enter a valid Ethereum address');
        return;
    }
    
    // Show loading state
    resultsDiv.innerHTML = '<p>Scanning the Dark Forest for your transactions...</p>';
    resultsDiv.classList.remove('hidden');
    
    // Simulate API call (replace with actual MEV detection API)
    setTimeout(() => {
        // Generate mock results
        const mockMEV = Math.floor(Math.random() * 50000) + 1000;
        const mockAttacks = Math.floor(Math.random() * 100) + 10;
        const mockSandwiches = Math.floor(Math.random() * 50) + 5;
        
        resultsDiv.innerHTML = `
            <h4>🚨 Dark Forest Exposure Report</h4>
            <div class="result-stats">
                <div class="result-item">
                    <span class="result-label">Estimated MEV Lost:</span>
                    <span class="result-value danger">$${mockMEV.toLocaleString()}</span>
                </div>
                <div class="result-item">
                    <span class="result-label">Attacks Detected:</span>
                    <span class="result-value">${mockAttacks}</span>
                </div>
                <div class="result-item">
                    <span class="result-label">Sandwich Attacks:</span>
                    <span class="result-value">${mockSandwiches}</span>
                </div>
            </div>
            <p class="result-message">
                You've been hunted ${mockAttacks} times in the Dark Forest. 
                Join the Black Domain to protect your future transactions.
            </p>
            <button class="cta-primary" onclick="scrollToSection('join')">
                Protect My Transactions
            </button>
        `;
        
        // Add styles for results
        addResultStyles();
    }, 2000);
}

function addResultStyles() {
    if (document.getElementById('result-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'result-styles';
    style.innerHTML = `
        .result-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .result-item {
            padding: 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
            text-align: center;
        }
        
        .result-label {
            display: block;
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }
        
        .result-value {
            display: block;
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--safe-green);
        }
        
        .result-value.danger {
            color: var(--danger-red);
        }
        
        .result-message {
            margin: 1.5rem 0;
            padding: 1rem;
            background: rgba(255, 51, 102, 0.1);
            border-left: 3px solid var(--danger-red);
            border-radius: 4px;
        }
        
        .scan-results h4 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: var(--danger-red);
        }
    `;
    document.head.appendChild(style);
}

// Export functions for use in HTML
window.scanWallet = scanWallet;
window.scrollToSection = scrollToSection;
```

### 5. README.md
```markdown
# Black Domain Protocol - Marketing Website

## Overview
Marketing website for the Black Domain Protocol - a campaign to encrypt Ethereum's mempool and protect users from MEV extraction.

## Quick Start

1. Fork this repository
2. Enable GitHub Pages in Settings → Pages
3. Select source: Deploy from branch (main, /docs folder)
4. Your site will be live at: `https://[your-username].github.io/black-domain-protocol`

## Local Development

```bash
# Clone the repository
git clone https://github.com/[your-username]/black-domain-protocol.git

# Navigate to project
cd black-domain-protocol

# Open in browser (or use a local server)
open docs/index.html

# For local server (if you have Python)
cd docs
python -m http.server 8000
# Visit http://localhost:8000
```

## Customization

### Colors
Edit CSS variables in `docs/css/style.css`:
```css
:root {
    --dark-forest: #0a0e1a;
    --black-domain: #000000;
    --ethereum-blue: #627eea;
    --danger-red: #ff3366;
    --safe-green: #00d395;
}
```

### Content
- Hero text: Edit `<h1>` and `<h2>` in the hero section
- Statistics: Update `data-value` attributes in stat cards
- Links: Update social links in footer

### MEV Counter
Adjust the counter speed in `animations.js`:
```javascript
setInterval(() => {
    current += Math.floor(Math.random() * 1000) + 100;
    counter.textContent = '$' + current.toLocaleString();
}, 100); // Change interval here
```

## Custom Domain

1. Add a CNAME file to `/docs` with your domain:
```
blackdomain.xyz
```

2. Configure DNS with your domain provider:
- A record: 185.199.108.153
- CNAME: [your-username].github.io

## Analytics

Add your analytics script before `</head>`:
```html
<!-- Plausible -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>

<!-- OR Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Optimization
- Lazy load images
- Minify CSS/JS for production
- Use WebP format for images
- Enable Gzip compression

## Contributing
Pull requests welcome! Please follow the existing code style.

## License
MIT

## Contact
- Twitter: [@blackdomain](https://twitter.com/blackdomain)
- GitHub: [black-domain-protocol](https://github.com/black-domain-protocol)
```

### 6. .gitignore
```
.DS_Store
.idea/
.vscode/
node_modules/
*.log
```

## Deployment Instructions

1. **Create GitHub Repository**
   - Go to GitHub.com
   - Click "New repository"
   - Name it `black-domain-protocol`
   - Make it public
   - Don't initialize with README

2. **Push Code**
```bash
git init
git add .
git commit -m "Launch Black Domain Protocol site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/black-domain-protocol.git
git push -u origin main
```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
   - Click Save

4. **Verify Deployment**
   - Wait 2-3 minutes
   - Visit: `https://YOUR_USERNAME.github.io/black-domain-protocol`

## Optional Enhancements

### Add MEV Data API Integration
```javascript
// Replace mock data with actual API calls
async function fetchMEVData(address) {
    const response = await fetch(`https://api.eigenphi.io/v1/address/${address}/mev`);
    const data = await response.json();
    return data;
}
```

### Add Wallet Connection
```javascript
// Using Web3Modal or similar
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        return accounts[0];
    }
}
```

### Progressive Web App
Add a `manifest.json` file in `/docs`:
```json
{
    "name": "Black Domain Protocol",
    "short_name": "Black Domain",
    "description": "Escape Ethereum's Dark Forest",
    "start_url": "/",
    "display": "standalone",
    "theme_color": "#0a0e1a",
    "background_color": "#000000",
    "icons": [
        {
            "src": "/assets/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        }
    ]
}
```

## Notes for Claude Code Implementation
- All files should be placed in the `/docs` folder for GitHub Pages
- CSS animations are intentionally lightweight for performance
- JavaScript is vanilla (no frameworks) for simplicity
- Mobile responsive design is included
- Dark theme throughout to match the "Black Domain" concept
- Glitch effects and animations reinforce the sci-fi theme
- Counter animations create urgency
- All social/GitHub links need to be updated with actual URLs
