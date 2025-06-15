function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors.");
    choice = choice.toLowerCase();
    return processChoice(choice);
}

function processChoice(choice) {
    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        case "rock":
            return 1;
        case "paper":
            return 2;
            break;
        case "scissors":
            return 3;
            break;
    }
}

function getComputerChoice() {
    //Math.random() is a static method that generates a random floating-point number between 0 (inclusive) and 1 (exclusive). Multiplying the random number by 3 ensures it's between 0 (inclusive) and 3 (exclusive). Math.floor() returns the greatest integer less than or equal to the given number. Adding 1 to the random number shifts the range from 0,1,2 to 1,2,3.
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let result = (humanChoice - computerChoice) % 3;
    console.log(result); //Debugging
    if (result == 0) {
        console.log("You tied - both players selected " + processChoice(humanChoice) + ".");
    } else if (result == -2 || result == 1) {
        console.log("You win - " + processChoice(humanChoice) + " beats " + processChoice(computerChoice) + ".");
        ++humanScore;
    } else if (result == 2 || result == -1) {
        console.log("You lose - " + processChoice(computerChoice) + " beats " + processChoice(humanChoice) + ".");
        ++computerScore;
    }
}

const humanSelection = getHumanChoice();
console.log(humanSelection); //Debugging

const computerSelection = getComputerChoice();
console.log(computerSelection); //Debugging

let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);
console.log("Human score: " + humanScore); // Debugging
console.log("Computer score: " + computerScore); //Debugging