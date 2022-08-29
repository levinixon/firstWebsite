// Javascript for Blackjack

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
let randomNumber = Math.floor(Math.random() * 13) + 1
if (randomNumber === 1) {
    return 11
} else if (randomNumber > 10) {
    return 10
} else {
    return randomNumber
}
};

function playGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
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
    if (isAlive === true && hasBlackjack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    playGame(); }
};

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    playGame();
}














  // JavaScript for toggle menu

  const navLinks = document.getElementById("navLinks")
  function showMenu(){
      navLinks.style.right = "0";
  }
  function hideMenu(){
      navLinks.style.right = "-200px";
  }
  


 