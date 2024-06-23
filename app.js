let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");
const updateUserScore = document.querySelector("#user-score");
const updateCompScore = document.querySelector("#comp-score");
const reset = document.querySelector("#reset");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

const drawGame = (userChoice) =>{
    // console.log("Game Drawn !!");
    msg.innerText= "Game Drawn !! Both of You Selected " + userChoice + "!! Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        // console.log("User Won");
        updateUserScore.innerText = userScore;
        msg.innerText= "You Won! Your " + userChoice + " beats " + compChoice;
        msg.style.backgroundColor = "#42ed2f";
    }
    else{
        compScore++;
        // console.log("User Lost");
        updateCompScore.innerText = compScore;
        msg.innerText= "You Lost! " + compChoice + " beats your " + userChoice;
        msg.style.backgroundColor = "#f20c0c";
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    // console.log("User Choice = ", userChoice);
    // console.log("Computer's Choice = ", compChoice);
    if (userChoice === compChoice){
        drawGame(userChoice);
    }
    else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

reset.addEventListener("click", () =>{
    userScore = 0;
    compScore = 0;
    msg.innerText= "Play Your Move";
    msg.style.backgroundColor = "#081b31";
    updateUserScore.innerText = userScore;
    updateCompScore.innerText = compScore;
})