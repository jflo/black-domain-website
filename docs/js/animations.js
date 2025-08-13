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

// Global ETH price cache
let cachedEthPrice = null;
let ethPriceFetchPromise = null;

// Fetch ETH price once and cache it
async function getEthPrice() {
    if (cachedEthPrice) return cachedEthPrice;
    
    if (ethPriceFetchPromise) return ethPriceFetchPromise;
    
    ethPriceFetchPromise = fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            cachedEthPrice = data.ethereum.usd;
            return cachedEthPrice;
        })
        .catch(error => {
            console.error('Failed to fetch ETH price:', error);
            cachedEthPrice = 3800; // Fallback price
            return cachedEthPrice;
        });
    
    return ethPriceFetchPromise;
}

// MEV Counter Animation
let mevCounterInterval = null;
let mevCurrentValue = 0;

async function initializeMEVCounter() {
    const counter = document.getElementById('mev-extracted');
    if (!counter) return;
    
    // Get ETH price (will fetch or use cached)
    const ethPrice = await getEthPrice();
    
    // Calculate starting value based on 690,318 ETH
    mevCurrentValue = Math.floor(690318 * ethPrice);
    
    // Set initial value
    counter.textContent = '$' + mevCurrentValue.toLocaleString();
    
    // Start incrementing
    startMEVCounter();
}

function startMEVCounter() {
    const counter = document.getElementById('mev-extracted');
    if (!counter) return;
    
    if (mevCounterInterval) clearInterval(mevCounterInterval);
    
    let incrementCount = 0;
    const maxIncrements = 50; // Run for about 5 seconds (50 * 100ms)
    
    mevCounterInterval = setInterval(() => {
        // Simulate realistic MEV extraction rate
        const increment = Math.floor(Math.random() * 1000) + 100;
        mevCurrentValue += increment;
        counter.textContent = '$' + mevCurrentValue.toLocaleString();
        
        incrementCount++;
        
        // After 5 seconds, strike through and show $0
        if (incrementCount >= maxIncrements) {
            clearInterval(mevCounterInterval);
            strikethroughAndReplaceWithZero(counter);
        }
    }, 100);
}

function strikethroughAndReplaceWithZero(counter) {
    // Add strikethrough class to current value
    counter.classList.add('strikethrough');
    
    // Create and insert the $0 element
    const zeroElement = document.createElement('span');
    zeroElement.className = 'ticker-value-zero';
    zeroElement.textContent = '$0';
    
    // Insert after the counter
    counter.parentNode.insertBefore(zeroElement, counter.nextSibling);
    
    // Optional: Restart the cycle after a delay
    setTimeout(() => {
        // Remove the zero and strikethrough
        counter.classList.remove('strikethrough');
        if (zeroElement.parentNode) {
            zeroElement.remove();
        }
        // Restart the counter
        startMEVCounter();
    }, 5000); // Show $0 for 5 seconds before restarting
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
    const targetStr = element.getAttribute('data-value');
    const target = parseInt(targetStr.replace(/,/g, ''));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
            // Once animation is complete, fetch ETH price and show USD value
            if (element.parentElement.querySelector('.stat-unit')?.textContent === 'E') {
                fetchAndDisplayUSDValue(target);
            }
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Display USD conversion using cached ETH price
async function fetchAndDisplayUSDValue(ethAmount) {
    const usdElement = document.getElementById('mev-usd-value');
    if (!usdElement) return;
    
    // Get ETH price (will fetch or use cached)
    const ethPrice = await getEthPrice();
    
    // Calculate USD value
    const usdValue = ethAmount * ethPrice;
    
    // Format and display
    const isEstimate = cachedEthPrice === 3800;
    usdElement.textContent = `$${usdValue.toLocaleString(undefined, { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
    })}${isEstimate ? ' (est.)' : ''}`;
    
    // Fade in the USD value
    usdElement.style.display = 'block';
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
    initializeMEVCounter(); // Changed to async initialization
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

// Export functions for global use
window.scrollToSection = scrollToSection;