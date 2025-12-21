// Navigation Tab Functionality
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get the tab name
        const tabName = this.getAttribute('data-tab');
        console.log('Switched to tab:', tabName);
        
        // Here you can add logic to show/hide different sections based on tab
    });
});

// Bill Check Functionality
function checkBill() {
    const accountNumber = document.getElementById('accountNumber').value;
    const billDetails = document.getElementById('billDetails');
    const displayAccountNo = document.getElementById('displayAccountNo');
    
    // Validate account number (minimum 10 digits)
    if (accountNumber.length >= 10) {
        // Show bill details
        billDetails.style.display = 'block';
        displayAccountNo.textContent = accountNumber;
        
        // Smooth scroll to bill details
        billDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Add animation
        billDetails.style.animation = 'fadeIn 0.5s ease-in';
    } else {
        alert('Please enter a valid Account Number (minimum 10 digits)');
    }
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Allow Enter key to trigger bill check
document.getElementById('accountNumber').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkBill();
    }
});

// Service Card Click Handlers
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        const serviceName = this.querySelector('h3').textContent;
        console.log('Service clicked:', serviceName);
        alert(`Redirecting to ${serviceName} page...`);
    });
});

// Quick Links Click Handlers
const linkItems = document.querySelectorAll('.link-item');

linkItems.forEach(link => {
    link.addEventListener('click', function() {
        const linkName = this.querySelector('span').textContent;
        console.log('Quick link clicked:', linkName);
        alert(`Opening ${linkName}...`);
    });
});

// Update Items Click Handlers
const updateItems = document.querySelectorAll('.update-item');

updateItems.forEach(item => {
    item.addEventListener('click', function() {
        const updateTitle = this.querySelector('.update-title').textContent;
        console.log('Update clicked:', updateTitle);
        alert(`Opening: ${updateTitle}`);
    });
});

// Input Formatting - Only allow numbers in account number field
document.getElementById('accountNumber').addEventListener('input', function(e) {
    // Remove any non-numeric characters
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Auto-hide bill details when input is cleared
document.getElementById('accountNumber').addEventListener('input', function() {
    if (this.value.length === 0) {
        document.getElementById('billDetails').style.display = 'none';
    }
});

// Pay Now Button Handler
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-pay')) {
        alert('Redirecting to payment gateway...\n\nAmount: ₹2,845\nAccount: ' + 
              document.getElementById('displayAccountNo').textContent);
    }
    
    // Download Button Handler
    if (e.target.classList.contains('btn-download') || 
        e.target.closest('.btn-download')) {
        alert('Downloading bill PDF...');
        console.log('Bill downloaded for account:', 
                   document.getElementById('displayAccountNo').textContent);
    }
});

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Login Button Handler
document.querySelector('.btn-login').addEventListener('click', function() {
    alert('Redirecting to login page...');
    console.log('Login button clicked');
});

// Language Toggle Handler
document.querySelector('.btn-lang').addEventListener('click', function() {
    const currentLang = this.textContent;
    if (currentLang === 'हिंदी') {
        this.textContent = 'English';
        alert('Language changed to Hindi (Demo)');
    } else {
        this.textContent = 'हिंदी';
        alert('Language changed to English');
    }
});

// Add loading state to buttons
function addLoadingState(button, duration = 1000) {
    const originalText = button.textContent;
    button.disabled = true;
    button.style.opacity = '0.6';
    button.textContent = 'Loading...';
    
    setTimeout(() => {
        button.disabled = false;
        button.style.opacity = '1';
        button.textContent = originalText;
    }, duration);
}

// Console welcome message
console.log('%c Welcome to UPPCL Portal ', 
            'background: #1e3a8a; color: white; font-size: 20px; padding: 10px;');
console.log('Developed with HTML, CSS, and JavaScript');

// Track page load time
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
});
