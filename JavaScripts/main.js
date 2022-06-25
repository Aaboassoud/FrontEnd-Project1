// ------------------ actions ------------------
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    showHome();
}

function logout() {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    window.location.reload()
}

// ------------------ pages ------------------
function showHome() {
    document.getElementById("Home").className = "d-block";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Landing").className ="d-none";
    document.getElementById("Register").className = "d-none";
    let username = localStorage.getItem('username');
    if (username != null) {
        let loginBtn    = document.getElementById("login-btn")
        let registerBtn = document.getElementById("register-btn")
        let welId       = document.getElementById("welcome")
        loginBtn.className    = "d-none"
        registerBtn.className = "btn btn-outline-warning"
        registerBtn.setAttribute("onclick","logout()")
        registerBtn.textContent = "Logout"
        let welcome = document.createElement("h3")
        welcome.className = "text-warning"
        welcome.id = "welcome-id"
        welcome.innerText = `Welcome, ${username}`
        welId.insertBefore(welcome,loginBtn)
    }
    return false;
}

function showLogin() {
    document.getElementById("Login").className = "d-bloc k";
    document.getElementById("Home").className = "d-none";
    document.getElementById("Landing").className ="d-none";
    document.getElementById("Register").className = "d-none";
    return false;
}

function showRegister() {
    document.getElementById("Register").className = "d-block";
    document.getElementById("Landing").className ="d-none";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Home").className = "d-none";
    return false;
}

function france() {
    document.getElementById("car1").setAttribute("src","./images/france1.jpg")
    document.getElementById("car2").setAttribute("src","./images/france2.jpg")
    document.getElementById("car3").setAttribute("src","./images/france3.jpg")
    document.getElementById("Landing").className ="d-block";
    document.getElementById("Register").className = "d-none";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Home").className = "d-none";
}

function spain() {
    document.getElementById("car1").setAttribute("src","./images/spain1.jpg")
    document.getElementById("car2").setAttribute("src","./images/spain2.jpg")
    document.getElementById("car3").setAttribute("src","./images/spain3.jpg")
    document.getElementById("Landing").className ="d-block";
    document.getElementById("Register").className = "d-none";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Home").className = "d-none";
}

function unitedStates() {
    document.getElementById("car1").setAttribute("src","./images/unitedStates1.jpg")
    document.getElementById("car2").setAttribute("src","./images/unitedStates2.jpg")
    document.getElementById("car3").setAttribute("src","./images/unitedStates3.jpg")
    document.getElementById("Landing").className ="d-block";
    document.getElementById("Register").className = "d-none";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Home").className = "d-none";
}

function china() {
    document.getElementById("car1").setAttribute("src","./images/china1.jpg")
    document.getElementById("car2").setAttribute("src","./images/china2.jpg")
    document.getElementById("car3").setAttribute("src","./images/china3.jpg")
    document.getElementById("Landing").className ="d-block";
    document.getElementById("Register").className = "d-none";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Home").className = "d-none";
}

function italy() {
    document.getElementById("car1").setAttribute("src","./images/italy1.jpg")
    document.getElementById("car2").setAttribute("src","./images/italy2.jpg")
    document.getElementById("car3").setAttribute("src","./images/italy3.jpg")
    document.getElementById("Landing").className ="d-block";
    document.getElementById("Register").className = "d-none";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Home").className = "d-none";
}