
   //Javascript for Questions Page

   const btns = document.querySelectorAll(".question-btn");

   btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
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
