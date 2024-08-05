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