function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice); //Debugging
    return processChoice(choice);
}

function getHumanChoice() {
    let choice = Number(prompt("Enter a number:\n1: ROCK, 2: PAPER, or 3: SCISSORS"));
    console.log(choice); //Debugging
    return processChoice(choice);
}

function processChoice(number) {
    switch (number) {
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    if (humanChoice === computerChoice) {
        console.log("You tied! Both players selected " + humanChoice + ".");
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"
        || humanChoice === "PAPER" && computerChoice === "ROCK"
        || humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            ++humanScore;
    } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            ++computerScore;
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection); //Debugging

const humanSelection = getHumanChoice();
console.log(humanSelection); //Debugging

let computerScore = 0;
let humanScore = 0;

playRound(humanSelection, computerSelection);
console.log(humanScore); // Debugging
console.log(computerScore); // Debugging