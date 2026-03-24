let userScore = 0; // stores user's score
let compScore = 0; // stores computer's score

// selecting all choices (rock, paper, scissor)
const choices = document.querySelectorAll(".choice");

// selecting message and score elements
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]; // possible choices
    const randVal = Math.floor(Math.random() * 3); // random index (0-2)
    return options[randVal]; // return random choice
};

// function for draw condition
const drawGame = () => {
    msg.innerHTML = "match draw. play again"; // show draw message
    msg.style.backgroundColor = "#081b31"; // change background color
};

// function to show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // increase user score
        userScorePara.innerHTML = userScore; // update UI

        // show winning message
        msg.innerHTML = `your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++; // increase computer score
        compScorePara.innerHTML = compScore; // update UI

        // show losing message
        msg.innerHTML = `you lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// main game function
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);

    const compChoice = genCompChoice(); // get computer choice
    console.log("computer choice =", compChoice);

    // check draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        // game logic
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        // show result
        showWinner(userWin, userChoice, compChoice);
    }
};

// add click event to all choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // get clicked choice
        playGame(userChoice); // start game
    });
});

    //    DAY 10 PROJECT COMPLETE 