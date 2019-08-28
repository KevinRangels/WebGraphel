//SCROLL REVEAL
window.sr = ScrollReveal();
sr.reveal('.section_main_title',{
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.section_main_text',{
    duration:2000,
    origin:'bottom',
    delay:400
});


// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});