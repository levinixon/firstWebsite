// Javascript for Blackjack

let firstCard = 5;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " + " + secondCard;
    if (sum < 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!";
        hasBlackjack = true
    } else if (sum > 21) {
        message = "Oh no! You've lost...";
        isAlive = false; 
    }
    messageEl.textContent = message;

};  

function newCard(){
    console.log("Drawing a new card from the deck.")
    let card = 8;
    sum += card;
    startGame();
};
















  // JavaScript for toggle menu

  const navLinks = document.getElementById("navLinks")
  function showMenu(){
      navLinks.style.right = "0";
  }
  function hideMenu(){
      navLinks.style.right = "-200px";
  }
  


 