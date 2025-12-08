// WARNING: Credentials are exposed in the browser's source code!
const VALID_USERNAME = "XSeries553";
const VALID_PASSWORD = "password4321";

// Function to check if the user is currently logged in via localStorage
function isAuthenticated() {
    return localStorage.getItem('authenticated') === 'true';
}

// Function to update the UI based on authentication status
function updateUI() {
    const loginArea = document.getElementById('login-area');
    const contentArea = document.getElementById('content-area');

    if (isAuthenticated()) {
        loginArea.style.display = 'none';
        contentArea.style.display = 'block';
    } else {
        loginArea.style.display = 'block';
        contentArea.style.display = 'none';
    }
}

// Function called when the user clicks the "Log In" button
function handleLogin() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === VALID_USERNAME && passwordInput === VALID_PASSWORD) {
        // Set the 'authenticated' flag in the user's local storage
        localStorage.setItem('authenticated', 'true');
        alert('Login successful! Welcome.');
        updateUI();
    } else {
        alert('Invalid username or password.');
    }
}

// Function called when the user clicks the "Log Out" button
function handleLogout() {
    // Remove the 'authenticated' flag from local storage
    localStorage.removeItem('authenticated');
    alert('Logged out.');
    updateUI();
}

// Run this function when the page first loads to check session status
updateUI();
