function showHome() {
    document.getElementById("Home").className = "d-block";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Register").className = "d-none";
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