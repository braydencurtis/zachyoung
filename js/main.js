var hamburger = document.getElementById("hamburger");
var nav = document.getElementById("nav");
var navPosition = nav.style.right;
console.log(nav.style.right);

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("closed-nav");
    
    
});