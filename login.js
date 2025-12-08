// WARNING: Credentials are still exposed in the browser's source code!
// This simply allows more pairs of credentials to work.

const VALID_CREDENTIALS = [
    { username: "admin", password: "q02NIKbh8c8Ma" },
    { username: "guest", password: "Password1231@" }
];

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
    
    // Check if the entered credentials match any pair in our list
    const userFound = VALID_CREDENTIALS.some(creds => {
        return creds.username === usernameInput && creds.password === passwordInput;
    });

    if (userFound) {
        // Set the 'authenticated' flag in the user's local storage
        localStorage.setItem('authenticated', 'true');
        alert('Login successful!');
        updateUI(); // Refresh the visible areas
    } else {
        alert('Invalid username or password.');
    }
}

// Function called when the user clicks the "Log Out" button
function handleLogout() {
    // Remove the 'authenticated' flag from local storage
    localStorage.removeItem('authenticated');
    alert('Logged out.');
    updateUI(); // Refresh the visible areas
}

// Run this function when the page first loads to check session status
updateUI();
