document.querySelector(".burger").onclick = function() {
    document.querySelector(".overlay").classList.add("overlay-open");
   }
   
   document.querySelector(".menu-close-btn").onclick = function() {
    document.querySelector(".overlay").classList.remove("overlay-open");
   }