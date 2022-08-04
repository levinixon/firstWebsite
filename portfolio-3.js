
   //Javascript for Questions Page

   const questions = document.querySelectorAll(".question");

   questions.forEach(function (question) {
       const btn = question.querySelector(".question-btn");
       btn.addEventListener("click", function () {
           questions.forEach(function (item) {
               if (item !=+ question) {
                   item.classList.remove("show-text");
               }
           });
   
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
