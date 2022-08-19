// Javascript for Blackjack

let firstCard = 5;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
let hand = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];


if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Woohoo! You've got Blackjack!"
    hasBlackjack = true
} else (sum > 21) {
    message = "Oh no! You've lost..."
    isAlive = false 
};

  // JavaScript for toggle menu

  const navLinks = document.getElementById("navLinks")
  function showMenu(){
      navLinks.style.right = "0";
  }
  function hideMenu(){
      navLinks.style.right = "-200px";
  }
  


 