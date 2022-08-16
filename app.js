// JavaScript for counter

let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else {
            count=0;
        }
        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
});

// JavaScript for toggle menu

const navLinks = document.getElementById("navLinks")
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

// JavaScript for reviews page

// local reviews data
const reviews = [
    {
      id: 1,
      name: "Sally Smith",
      job: "Restaurant Owner",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "Levi was that great at producing our website, we've offered to give him free food in our restaurant for the rest of his life!",
    },
    {
      id: 2,
      name: "Linda Johnson",
      job: "Web Designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Levi is known to some as the messiah of software engineering, his code is rumoured to be 'miracle like'.",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "Friend",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "If he isn't writing excellent code, he's likely out helping the community. The guy is a local hero.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "Senior Software Engineer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Levi will be coming for my job soon! ",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
  });
  
  // show person based on item
  function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  };
  
  // show next person 
  
  nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  //show prev person
  
  prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
      currentItem = reviews.length -1;
    }
    showPerson(currentItem);
  });
  
  //show random person
  
  randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
