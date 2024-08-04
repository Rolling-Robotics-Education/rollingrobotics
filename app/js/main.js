const TOP_BAR_HEIGHT = 60;
const SCROLLPADDING = 20;

// light dark mode switches

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

// page scrolling

document.getElementById("sendtotop").addEventListener('click', function() {
    let y = document.getElementById("mainpageimage").getBoundingClientRect().top + window.scrollY - TOP_BAR_HEIGHT;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
});

document.getElementById("sendtoaboutus").addEventListener('click', function() {
    let y = document.getElementById("aboutus").getBoundingClientRect().top + window.scrollY - TOP_BAR_HEIGHT - SCROLLPADDING;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
});

document.getElementById("sendtoimpact").addEventListener('click', function() {
    let y = document.getElementById("impact").getBoundingClientRect().top + window.scrollY - TOP_BAR_HEIGHT - SCROLLPADDING;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
});

document.getElementById("sendtoschedule").addEventListener('click', function() {
    let y = document.getElementById("schedule").getBoundingClientRect().top + window.scrollY - TOP_BAR_HEIGHT - SCROLLPADDING;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
});

document.getElementById("sendtosponsors").addEventListener('click', function() {
    let y = document.getElementById("sponsors").getBoundingClientRect().top + window.scrollY - TOP_BAR_HEIGHT - SCROLLPADDING;
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
});

// lerp

function lerp(a, b, t) {
	return a + (b - a) * t;
}

function ilerp(a, b, t) {
	return b + (a - b) * t;
}