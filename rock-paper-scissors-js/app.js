
const ComputerDisplay = document.getElementById("computer-choice");
const userDisplay = document.getElementById("user-choice");
const userCharacter = document.getElementById("user-character");
const computerCharacter = document.getElementById("computer-character");
const resultDisplay = document.getElementById("result");
const resultFace = document.getElementById("result-face");
const possibleChoices = document.querySelectorAll(".choicebtn");
const possibleCharacters = document.querySelectorAll(".characterbtn");
const gameDisplay = document.querySelector(".gameDisplay");
const characterDisplay = document.querySelector(".characterDisplay");
const hometitle = document.querySelector(".hometitle");
const homebtn = document.querySelector(".homebtn");
const badguys = ["jafar", "malefique", "noireneige", "ursula"];
let userChoice;
let computerChoice;




for(const btn of possibleCharacters){
    btn.addEventListener('click', function(event){
        setUserCharacterChoice(event);
    });
}

for(const btn of possibleChoices){
    btn.addEventListener('click', function(event){
        setUserChoice(event);
        setComputerChoice();
        getResult();
    });
}
homebtn.addEventListener('click', handleHome);

function handleHome(){
    gameDisplay.classList.add("unseen");
    characterDisplay.classList.remove("unseen");
    hometitle.classList.remove("unseen");
    removeChoices();
}

function setUserCharacterChoice(event){

    userChoice = event.target.id;

    userCharacter.src = "./images/" + userChoice + ".PNG";
    computerCharacter.src = "./images/" + badguys[Math.floor(Math.random() * badguys.length)] + ".png";
    gameDisplay.classList.remove("unseen");
    characterDisplay.classList.add("unseen");
    hometitle.classList.add("unseen");
}

function setUserChoice(event){

    userChoice = event.target.id;

    userDisplay.src = "./images/" + userChoice + ".png";
    userDisplay.className = userChoice;
}

function setComputerChoice(){
    computerChoice = Math.floor( (Math.random() * 3) + 1);

    switch (computerChoice) {
        case 1:
            ComputerDisplay.src = "./images/rock.png";
            ComputerDisplay.className = "rock";

            break;
        case 2:
            ComputerDisplay.src = "./images/paper.png";
            ComputerDisplay.className = "paper";

            break;
        case 3:
            ComputerDisplay.src = "./images/scissors.png";
            ComputerDisplay.className = "scissors";
   
            break;    
    }
}

function removeChoices(){
 
            ComputerDisplay.src = "";
            ComputerDisplay.className = "";
            userDisplay.src = "";
            userDisplay.className = "";
            resultDisplay.textContent = "";
            resultFace.src = "";
}

function getResult(){
    resultDisplay.style.color = "black";

    if ( ComputerDisplay.className == userDisplay.className ) {
        resultDisplay.textContent = "Egalité !";
        resultFace.src = "./images/draw.png";
    }
    if ( ComputerDisplay.className == "rock" && userDisplay.className == "paper" ) {
        resultDisplay.style.color = "green";
        resultDisplay.textContent = "Bravo tu as gagné !";
        resultFace.src = "./images/win.png";
    }
    if ( ComputerDisplay.className == "rock" && userDisplay.className == "scissors"  ) {
        resultDisplay.style.color = "red";
        resultDisplay.textContent = "Dommage tu as perdu !";
        resultFace.src = "./images/lose.png";
    }
    if ( ComputerDisplay.className == "paper" && userDisplay.className == "rock" ) {
        resultDisplay.style.color = "red";
        resultDisplay.textContent = "Dommage tu as perdu !";
        resultFace.src = "./images/lose.png";
    }
    if ( ComputerDisplay.className == "paper" && userDisplay.className == "scissors" ) {
        resultDisplay.style.color = "green";
        resultDisplay.textContent = "Bravo tu as gagné !";
        resultFace.src = "./images/win.png";
    }
    if ( ComputerDisplay.className == "scissors" && userDisplay.className == "rock" ) {
        resultDisplay.style.color = "green";
        resultDisplay.textContent = "Bravo tu as gagné !";
        resultFace.src = "./images/win.png";
    }
    if ( ComputerDisplay.className == "scissors" && userDisplay.className == "paper" ) {
        resultDisplay.style.color = "red";
        resultDisplay.textContent = "Dommage tu as perdu !";
        resultFace.src = "./images/lose.png";
    }

}

