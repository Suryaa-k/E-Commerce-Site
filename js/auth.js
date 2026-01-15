// ==========================================
// AUTHENTICATION FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Password Toggle Functionality
  const passwordToggles = document.querySelectorAll('.password-toggle');
  
  passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      this.textContent = type === 'password' ? '👁️' : '🙈';
    });
  });

  // Sign In Form
  const signinForm = document.getElementById('signin-form');
  if (signinForm) {
    signinForm.addEventListener('submit', handleSignIn);
  }

  // Sign Up Form
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', handleSignUp);
    
    // Password strength checker
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      passwordInput.addEventListener('input', checkPasswordStrength);
    }
  }

  // Forgot Password Form
  const forgotPasswordForm = document.getElementById('forgot-password-form');
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', handleForgotPassword);
  }
});

// ==========================================
// SIGN IN HANDLER
// ==========================================

function handleSignIn(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('remember-me').checked;
  
  // Clear previous errors
  clearErrors();
  
  // Validate inputs
  if (!validateEmail(email)) {
    showError('email', 'Please enter a valid email address');
    return;
  }
  
  if (password.length < 6) {
    showError('password', 'Password must be at least 6 characters');
    return;
  }
  
  // Simulate API call
  const submitBtn = e.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Signing In...';
  
  setTimeout(() => {
    // Check if user exists in localStorage (for demo purposes)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Store user session
      const session = {
        email: user.email,
        name: user.name,
        loggedIn: true,
        timestamp: new Date().getTime()
      };
      
      if (rememberMe) {
        localStorage.setItem('userSession', JSON.stringify(session));
      } else {
        sessionStorage.setItem('userSession', JSON.stringify(session));
      }
      
      // Redirect to homepage
      alert('Sign in successful! Welcome back, ' + user.name);
      window.location.href = 'index.html';
    } else {
      showError('password', 'Invalid email or password');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Sign In';
    }
  }, 1500);
}

// ==========================================
// SIGN UP HANDLER
// ==========================================

function handleSignUp(e) {
  e.preventDefault();
  
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const terms = document.getElementById('terms').checked;
  
  // Clear previous errors
  clearErrors();
  
  // Validate inputs
  if (fullname.trim().length < 2) {
    showError('fullname', 'Please enter your full name');
    return;
  }
  
  if (!validateEmail(email)) {
    showError('email', 'Please enter a valid email address');
    return;
  }
  
  if (password.length < 6) {
    showError('password', 'Password must be at least 6 characters');
    return;
  }
  
  if (password !== confirmPassword) {
    showError('confirm-password', 'Passwords do not match');
    return;
  }
  
  if (!terms) {
    alert('Please agree to the Terms & Conditions');
    return;
  }
  
  // Simulate API call
  const submitBtn = e.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Creating Account...';
  
  setTimeout(() => {
    // Store user in localStorage (for demo purposes)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
      showError('email', 'Email already registered');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Sign Up';
      return;
    }
    
    // Add new user
    users.push({
      name: fullname,
      email: email,
      password: password, // In real app, this should be hashed
      createdAt: new Date().toISOString()
    });
    
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto sign in
    const session = {
      email: email,
      name: fullname,
      loggedIn: true,
      timestamp: new Date().getTime()
    };
    
    localStorage.setItem('userSession', JSON.stringify(session));
    
    // Redirect to homepage
    alert('Account created successfully! Welcome, ' + fullname);
    window.location.href = 'index.html';
  }, 1500);
}

// ==========================================
// FORGOT PASSWORD HANDLER
// ==========================================

function handleForgotPassword(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  
  // Clear previous messages
  clearErrors();
  document.getElementById('email-success').classList.remove('show');
  
  // Validate email
  if (!validateEmail(email)) {
    showError('email', 'Please enter a valid email address');
    return;
  }
  
  // Simulate API call
  const submitBtn = e.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  setTimeout(() => {
    // Show success message
    const successMsg = document.getElementById('email-success');
    successMsg.textContent = 'Reset link sent! Check your email.';
    successMsg.classList.add('show');
    
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Reset Link';
    
    // Clear form
    document.getElementById('email').value = '';
  }, 1500);
}

// ==========================================
// PASSWORD STRENGTH CHECKER
// ==========================================

function checkPasswordStrength(e) {
  const password = e.target.value;
  const strengthFill = document.getElementById('strength-fill');
  const strengthText = document.getElementById('strength-text');
  
  if (!strengthFill || !strengthText) return;
  
  let strength = 0;
  
  // Check password criteria
  if (password.length >= 6) strength++;
  if (password.length >= 10) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z\d]/.test(password)) strength++;
  
  // Update UI
  strengthFill.className = 'strength-fill';
  
  if (strength <= 2) {
    strengthFill.classList.add('weak');
    strengthText.textContent = 'Weak password';
    strengthText.style.color = '#FF5252';
  } else if (strength <= 4) {
    strengthFill.classList.add('medium');
    strengthText.textContent = 'Medium password';
    strengthText.style.color = '#FFA726';
  } else {
    strengthFill.classList.add('strong');
    strengthText.textContent = 'Strong password';
    strengthText.style.color = '#66BB6A';
  }
}

// ==========================================
// VALIDATION HELPERS
// ==========================================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(fieldId, message) {
  const errorElement = document.getElementById(fieldId + '-error');
  const inputElement = document.getElementById(fieldId);
  
  if (errorElement && inputElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
    inputElement.classList.add('error');
  }
}

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  const errorInputs = document.querySelectorAll('.form-input.error');
  
  errorMessages.forEach(msg => {
    msg.classList.remove('show');
    msg.textContent = '';
  });
  
  errorInputs.forEach(input => {
    input.classList.remove('error');
  });
}

// ==========================================
// CHECK USER SESSION
// ==========================================

function checkUserSession() {
  const session = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
  
  if (session) {
    const userData = JSON.parse(session);
    return userData;
  }
  
  return null;
}

function logout() {
  localStorage.removeItem('userSession');
  sessionStorage.removeItem('userSession');
  window.location.href = 'signin.html';
}