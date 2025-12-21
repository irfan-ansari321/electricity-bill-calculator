// Language Toggle Functionality
let currentLang = 'en';
const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    updateLanguage();
});

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-hi]');
    
    elements.forEach(element => {
        const text = element.getAttribute(data-${currentLang});
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else if (element.tagName === 'OPTION') {
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });

    // Update language toggle button text
    langText.textContent = currentLang === 'en' ? 'हिंदी' : 'English';
}

// Login Form Handling
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const accountNumber = document.getElementById('accountNumber').value;
    const password = document.getElementById('password').value;

    if (accountNumber && password) {
        const message = currentLang === 'en' 
            ? Login Successful!\nAccount: ${accountNumber} 
            : लॉगिन सफल!\nखाता: ${accountNumber};
        alert(message);
        loginForm.reset();
    } else {
        const message = currentLang === 'en' 
            ? 'Please fill all fields!' 
            : 'कृपया सभी फ़ील्ड भरें!';
        alert(message);
    }
});

// Billing Form Handling
const billingForm = document.getElementById('billingForm');
const billInfo = document.querySelector('.bill-info');

billingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    billInfo.style.display = 'block';
    const message = currentLang === 'en' 
        ? 'Bill details loaded successfully!' 
        : 'बिल विवरण सफलतापूर्वक लोड हुआ!';
    alert(message);
});

// Pay Now Button
const payBtn = document.querySelector('.pay-btn');
payBtn.addEventListener('click', () => {
    const message = currentLang === 'en' 
        ? 'Redirecting to payment gateway...' 
        : 'भुगतान गेटवे पर रीडायरेक्ट किया जा रहा है...';
    alert(message);
});

// New Connection Form Handling
const connectionForm = document.getElementById('connectionForm');

connectionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = currentLang === 'en' 
        ? 'Application submitted successfully!\nYou will receive a confirmation email shortly.' 
        : 'आवेदन सफलतापूर्वक जमा किया गया!\nआपको जल्द ही एक पुष्टिकरण ईमेल प्राप्त होगा।';
    alert(message);
    connectionForm.reset();
});

// Complaint Form Handling
const complaintForm = document.getElementById('complaintForm');

complaintForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const complaintNumber = 'UPPCL' + Math.floor(Math.random() * 1000000);
    const message = currentLang === 'en' 
        ? Complaint registered successfully!\nComplaint Number: ${complaintNumber}\nYou will be contacted within 48 hours. 
        : शिकायत सफलतापूर्वक दर्ज की गई!\nशिकायत संख्या: ${complaintNumber}\n48 घंटे के भीतर आपसे संपर्क किया जाएगा।;
    alert(message);
    complaintForm.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Form Validation Helper
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    return isValid;
}

// Mobile Number Validation
const mobileInputs = document.querySelectorAll('input[type="tel"]');
mobileInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    });
});

// Account Number Validation (only numbers)
const accountInputs = document.querySelectorAll('input[type="text"][placeholder*="Account"]');
accountInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (e.target.id === 'accountNumber' || e.target.parentElement.querySelector('label').textContent.includes('Account')) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('UPPCL Website Loaded Successfully!');
    
    // Set initial language
    updateLanguage();
    
    // Add active class to current nav item
    const currentSection = window.location.hash || '#home';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentSection) {
            link.style.color = '#ffd700';
        }
    });
});

// Update active nav item on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .login-section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'white';
        if (link.getAttribute('href') === #${current}) {
            link.style.color = '#ffd700';
        }
    });
});
