// script for menu 
const navToggle = document.querySelector('.nav-toggle');  //class nav-toggle
const navLinks = document.querySelectorAll('.nav-link');  //all class nav-link

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

// script for downlod cv
$(document).ready(function () {
    $("#link").click(function (e) {
        e.preventDefault();
        window.location.href = "cv/MOTIAA_othman_last.pdf";
    });
});

// for animate about section
const faderIn = document.querySelector('.about');
const faderInOptions = {
    threshold: 0,  //hta tban card kalma value 1
    rootMargin: "0px 0px -550px 0px",  //+ 100px bottum 3ad tban cards
};

const fadeInOnScroll = new IntersectionObserver(
    function(
        entries,
        fadeInOnScroll
        ){
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else { 
                entry.target.classList.add('appear');
                entry.target.classList.add('animate__zoomInDown');
                fadeInOnScroll.unobserve(entry.target);
            }
        })
},faderInOptions);

fadeInOnScroll.observe(faderIn);

