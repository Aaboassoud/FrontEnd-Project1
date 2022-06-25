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


function darkMode() {
    var element = document.body;
    var sections = document.querySelectorAll(".section")
    for (const section of sections) {
        section.classList.toggle('section-dark');
      }
    element.classList.toggle("dark-mode");
}

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    let username = localStorage.getItem('username');
    if (username != null) {
        let loginBtn    = document.getElementById("login-btn")
        let registerBtn = document.getElementById("register-btn")
        let welId       = document.getElementById("welcome")
        loginBtn.className    = "d-none"
        registerBtn.className = "btn btn-outline-warning btn-round ml-3"
        registerBtn.setAttribute("onclick","logout()")
        registerBtn.textContent = "Logout"
        let welcome = document.createElement("h3")
        welcome.className = "text-warning"
        welcome.id = "welcome-id"
        welcome.innerText = `Welcome, ${username}`
        welId.insertBefore(welcome,loginBtn)
    }
};


// ------------------ pages ------------------
function showHome() {
    window.location.reload()
    document.getElementById("Home").className = "d-block";
    document.getElementById("Login").className = "d-none";
    document.getElementById("Landing").className ="d-none";
    document.getElementById("Register").className = "d-none";
    return false;
}

function showLogin() {
    document.getElementById("Login").className = "d-block";
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