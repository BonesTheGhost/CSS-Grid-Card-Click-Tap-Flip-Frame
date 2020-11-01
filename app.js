console.log("[app.js]: Attached and working correctly!");

const card1front = document.getElementById("card1front");
const card1back = document.getElementById("card1back");
const card2front = document.getElementById("card2front");
const card2back = document.getElementById("card2back");
const card3front = document.getElementById("card3front");
const card3back = document.getElementById("card3back");

const intro = document.getElementById("intro");

let attachClickHandlers = () => {
    console.log("Handlers attached");

    card1front.addEventListener('click', function(){
        console.log("Card Front 1 - Click registered!");
        card1.classList.toggle("flip");
    });
    card1back.addEventListener('click', function(){
        console.log("Card Back 1 - Click registered!");
        card1.classList.toggle("flip");
    });

    card2front.addEventListener('click', function(){
        console.log("Card Front 2 - Click registered!");
        card2.classList.toggle("flip");
    });
    card2back.addEventListener('click', function(){
        console.log("Card Back 2 - Click registered!");
        card2.classList.toggle("flip");
    });

    card3front.addEventListener('click', function(){
        console.log("Card Front 3 - Click registered!");
        card3.classList.toggle("flip");
    });
    card3back.addEventListener('click', function(){
        console.log("Card Back 3 - Click registered!");
        card3.classList.toggle("flip");
    });

    intro.addEventListener("click", function(){
        console.log("Intro Clicked!");
    });
};

if(card1 && card2 && card3 && intro){
    attachClickHandlers();
}


    
    

