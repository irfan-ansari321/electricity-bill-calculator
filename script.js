// Navigation Tab Functionality
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const tabName = this.textContent;
        console.log('Switched to tab:', tabName);
    });
});

// Bill Check Functionality
function checkBill() {
    const accountNumber = document.getElementById('accountNumber').value;
    const billDetails = document.getElementById('billDetails');
    const displayAccountNo = document.getElementById('displayAccountNo');
    
    if (accountNumber.length >= 10) {
        billDetails.style.display = 'block';
        displayAccountNo.textContent = accountNumber;
        billDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        billDetails.style.animation = 'fadeIn 0.5s ease-in';
    } else {
        alert('Please enter a valid Account Number (minimum 10 digits)');
    }
}

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
        alert('Redirecting to ' + serviceName + ' page...');
    });
});

// Quick Links Click Handlers
const linkItems = document.querySelectorAll('.link-item');

linkItems.forEach(link => {
    link.addEventListener('click', function() {
        const linkName = this.querySelector('span').textContent;
        console.log('Quick link clicked:', linkName);
        alert('Opening ' + linkName + '...');
    });
});

// Update Items Click Handlers
const updateItems = document.querySelectorAll('.update-item');

updateItems.forEach(item => {
    item.addEventListener('click', function() {
        const updateTitle = this.querySelector('.update-title').textContent;
        console.log('Update clicked:', updateTitle);
        alert('Opening: ' + updateTitle);
    });
});

// Input Formatting - Only allow numbers in account number field
document.getElementById('accountNumber').addEventListener('input', function(e) {
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
    
    if (e.target.classList.contains('btn-download') || e.target.closest('.btn-download')) {
        alert('Downloading bill PDF...');
        console.log('Bill downloaded for account:', 
                   document.getElementById('displayAccountNo').textContent);
    }
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

// Console welcome message
console.log('%c Welcome to UPPCL Portal ', 
            'background: #1e3a8a; color: white; font-size: 20px; padding: 10px;');
console.log('Developed with HTML, CSS, and JavaScript');

// Track page load time
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log('Page loaded in ' + Math.round(loadTime) + 'ms');
});
