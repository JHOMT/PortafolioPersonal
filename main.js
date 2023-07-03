const sunIcon = document.querySelector('.bxs-sun');
const moonIcon = document.querySelector('.bxs-moon');
const body = document.querySelector('body');
const comment = document.getElementById("comment");
let isDarkMode = false;

sunIcon.addEventListener('click', () => {
    body.classList.remove('fondo-oscuro');
    body.classList.add('fondo-claro');
    sunIcon.classList.add('active');
    moonIcon.classList.remove('active');

});

moonIcon.addEventListener('click', () => {
    body.classList.remove('fondo-claro');
    body.classList.add('fondo-oscuro');
    moonIcon.classList.add('active');
    sunIcon.classList.remove('active');
});

sunIcon.addEventListener("click", toggleDarkMode);
moonIcon.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    if (!isDarkMode) {
        comment.classList.add("dark-mode");
        sunIcon.classList.remove("active");
        moonIcon.classList.add("active");
        isDarkMode = true;
    } else {
        comment.classList.remove("dark-mode");
        sunIcon.classList.add("active");
        moonIcon.classList.remove("active");
        isDarkMode = false;
    }
}