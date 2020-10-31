console.log("[app.js]: Attached and working correctly!");

const card1front = document.getElementById("card1front");
const card1back = document.getElementById("card1back")
const intro = document.getElementById("intro");

let attachClickHandlers = () => {
    console.log("Handlers attached");

    card1front.addEventListener('click', function(){
        console.log("Click registered!");
        card1.classList.toggle("flip");
    });
    card1back.addEventListener('click', function(){
        console.log("Click registered!");
        card1.classList.toggle("flip");
    });

    intro.addEventListener("click", function(){
        console.log("Intro Clicked!");
    });
};

if(card1 && intro){
    attachClickHandlers();
}


    
    

