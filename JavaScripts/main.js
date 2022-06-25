// ------------------ actions ------------------
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    showHome();
}

// ------------------ pages ------------------
function showHome() {
    document.getElementById("Home").className = "d-block";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Register").className = "d-none";
    let username = localStorage.getItem('username');
    if (username != null) {
        let loginBtn    = document.getElementById("login-btn")
        let registerBtn = document.getElementById("register-btn")
        let welId       = document.getElementById("welcome")
        loginBtn.className    = "d-none"
        registerBtn.className = "d-none"
        let welcome = document.createElement("h3")
        welcome.className = "text-warning"
        welcome.id = "welcome-id"
        welcome.innerText = `Welcome, ${username}`
        welId.insertBefore(welcome,loginBtn)
    }
    return false;
}

function showLogin() {
    document.getElementById("Login").className = "d-block";
    document.getElementById("Home").className = "d-none";
    document.getElementById("Register").className = "d-none";
    return false;
}

function showRegister() {
    document.getElementById("Register").className = "d-block";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Home").className = "d-none";
    return false;
}

