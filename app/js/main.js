const stylesheet = document.styleSheets[0];
const lightDarkSwitch = document.getElementById("lightdarkswitch");
let darkMode = false;
let lightDarkTimer = -1;

lightDarkSwitch.addEventListener('click', function() {
    if (lightDarkTimer <= 0) {
        darkMode = !darkMode;
        lightDarkTimer = 60;
    }
    if (darkMode) {
        lightDarkSwitch.src = "./img/darkmode.png";
    } else {
        lightDarkSwitch.src = "./img/lightmode.png";
    }
    console.log(darkMode);
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

function lerp(a, b, t) {
	return a + (b - a) * t;
}

function ilerp(a, b, t) {
	return b + (a - b) * t;
}