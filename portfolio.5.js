// Toggle Menu

const navLinks = document.getElementById("navLinks")
function showMenu(){
navLinks.style.right = "0";
}

function hideMenu(){
navLinks.style.right = "-200px";
}

// random button 

let randomEl = document.getElementById("textbox-button");

// random number 

let randomNumber = Math.floor(Math.random() * messages.length);

function getRandomNumber(){
    return randomNumber
};