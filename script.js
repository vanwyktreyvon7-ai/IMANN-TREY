// ==============================
// FOR IMANN
// Main JavaScript
// ==============================


// SCENE CONTROL

const scenes = document.querySelectorAll(".scene");

let currentScene = 0;


function showScene(number){

    scenes.forEach(scene => {

        scene.classList.remove("active");

    });


    scenes[number].classList.add("active");

    currentScene = number;

}



// START BUTTON

const startButton = document.getElementById("startButton");


startButton.addEventListener("click",()=>{

    showScene(1);

});



// NEXT BUTTONS

const nextButtons = document.querySelectorAll(".next");


nextButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        if(currentScene < scenes.length - 1){

            showScene(currentScene + 1);

        }


    });


});




// BACK BUTTONS

const previousButtons = document.querySelectorAll(".previous");


previousButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        if(currentScene > 0){

            showScene(currentScene - 1);

        }


    });


});




// ==============================
// STARS
// ==============================


const stars = document.getElementById("stars");


for(let i = 0; i < 150; i++){


    let star = document.createElement("span");


    star.className="star";


    star.style.left=Math.random()*100+"vw";


    star.style.top=Math.random()*100+"vh";


    star.style.animationDelay=Math.random()*5+"s";


    stars.appendChild(star);


}




// ==============================
// RUNAWAY NO BUTTON
// ==============================


const noButton=document.getElementById("no");

const yesButton=document.getElementById("yes");


let yesSize=1;



noButton.addEventListener("mouseover",()=>{


    let x=Math.random()*(window.innerWidth-150);

    let y=Math.random()*(window.innerHeight-100);



    noButton.style.position="fixed";


    noButton.style.left=x+"px";


    noButton.style.top=y+"px";



    yesSize+=0.12;


    yesButton.style.transform=
    `scale(${yesSize})`;



});




// ==============================
// YES BUTTON
// ==============================


const answer=document.getElementById("answer");



yesButton.addEventListener("click",()=>{


    answer.innerHTML=`

    <h2>❤️</h2>

    <h2>Thank you Imann.</h2>

    <p>
    I can't wait to see where our story goes.
    </p>

    `;



    createHearts();


});




// ==============================
// HEART EFFECT
// ==============================


function createHearts(){


    for(let i=0;i<80;i++){


        let heart=document.createElement("div");


        heart.className="heart";


        heart.innerHTML="❤️";



        heart.style.left=Math.random()*100+"vw";


        heart.style.fontSize=
        Math.random()*25+15+"px";



        heart.style.animationDuration=
        Math.random()*3+3+"s";



        document.body.appendChild(heart);



        setTimeout(()=>{


            heart.remove();


        },6000);



    }


}



// ==============================
// SIMPLE TYPEWRITER
// ==============================


function typeText(element,text,speed=40){


    element.innerHTML="";


    let i=0;


    let timer=setInterval(()=>{


        element.innerHTML+=text[i];


        i++;


        if(i>=text.length){


            clearInterval(timer);


        }


    },speed);


}
