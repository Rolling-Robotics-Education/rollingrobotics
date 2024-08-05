const TOP_BAR_HEIGHT = 60;
const SCROLLPADDING = 20;

// light dark mode switches

const lightDarkSwitch = document.getElementById("lightdarkswitch");
let darkMode = sessionStorage.getItem('darkMode');
let lightDarkTimer = -1;
if (darkMode == null || darkMode == 'false') {
    darkMode = false;
}
if (darkMode == 'true') {
    darkMode = true;
    lightDarkSwitch.src = "./img/darkmode.png";
    lightDarkTimer = 0;
    changeLightDarkTimer();
}

lightDarkSwitch.addEventListener('click', function() {
    if (lightDarkTimer <= 0) {
        darkMode = !darkMode;
        lightDarkTimer = 60;
    }
    if (darkMode) {
        sessionStorage.setItem('darkMode', 'true');
        lightDarkSwitch.src = "./img/darkmode.png";
    } else {
        sessionStorage.setItem('darkMode', 'false');
        lightDarkSwitch.src = "./img/lightmode.png";
    }
})

window.setInterval(changeLightDarkTimer, 16);
function changeLightDarkTimer() {
    if (lightDarkTimer >= 0) {
        if (darkMode) {
            let p = document.getElementsByClassName("dmaffected");
            for (let i=0; i<p.length; i++) {
                p[i].style.setProperty('color', 'rgb(' + lerp(255, 0, lightDarkTimer/60) + ', ' + lerp(255, 0, lightDarkTimer/60) + ', ' + lerp(255, 0, lightDarkTimer/60) + ')', 'important');
            }
            document.querySelector('body').style.setProperty('background-color', 'rgb(' + lerp(10, 160, lightDarkTimer/60) + ', ' + lerp(10, 212, lightDarkTimer/60) + ', ' + lerp(30, 255, lightDarkTimer/60) + ')', 'important');
        } else {
            let p = document.getElementsByClassName("dmaffected");
            for (let i=0; i<p.length; i++) {
                p[i].style.setProperty('color', 'rgb(' + ilerp(255, 0, lightDarkTimer/60) + ', ' + ilerp(255, 0, lightDarkTimer/60) + ', ' + ilerp(255, 0, lightDarkTimer/60) + ')', 'important');
            }
            document.querySelector('body').style.setProperty('background-color', 'rgb(' + ilerp(10, 160, lightDarkTimer/60) + ', ' + ilerp(10, 212, lightDarkTimer/60) + ', ' + ilerp(30, 255, lightDarkTimer/60) + ')', 'important');
        }

        lightDarkTimer--;
    }
}

// lerp

function lerp(a, b, t) {
	return a + (b - a) * t;
}

function ilerp(a, b, t) {
	return b + (a - b) * t;
}