
   //Javascript for Questions Page

   const btns = document.querySelectorAll(".question-btn");

   btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget);
    });
   });



   // JavaScript for toggle menu

const navLinks = document.getElementById("navLinks")
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
