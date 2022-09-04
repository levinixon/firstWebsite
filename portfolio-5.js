// Toggle Menu

const navLinks = document.getElementById("navLinks")
function showMenu(){
navLinks.style.right = "0";
}

function hideMenu(){
navLinks.style.right = "-200px";
}

// Random Quote Generator

let textEl = document.getElementById("quote-text");
let authorEl = document.getElementById("quote-author");
let text = "";
let author = "";

textEl.textContent = "Quote: " + text;
authorEl.textContent = "Author: " + author;



// API 

/* function getRandomQuote(){
fetch('https://type.fit/api/quotes')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    text.textContent = data.text;
    author.textContent = data.author;
  });
}

*/



const getRandomQuote = async () => {
    
    const url = 'https://type.fit/api/quotes';
    const response = await fetch(url);
    const allQuotes = await response.json();
    const index = Math.floor(Math.random()*1643);
    const quote = allQuotes[index].text;
    const auth = allQuotes[index].author;
    textEl.textContent = "Quote: " + quote;
    authorEl.textContent = "Author: " + auth;
    
  
};







