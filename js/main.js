var hamburger = document.getElementById("hamburger");
var nav = document.getElementById("nav");
nav.style.right = "100%";
var navPosition = nav.style.right;


console.log(navPosition);
nav.style.right = navPosition;

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    
    if (navPosition == "100%") {
        navPosition = "0";
    } else {
        navPosition = "100%";
    };
    nav.style.right = navPosition;
});