 let restartButton = document.querySelector("#radio");
 restartButton.addEventListener("click", restartAnimation, false);

 function restartAnimation() {
   let circle = document.querySelector(".circle");

   circle.style.animationName = "none";

   requestAnimationFrame(() => {
     setTimeout(() => {
       circle.style.animationName = ""
     }, 0);
   });
 }
