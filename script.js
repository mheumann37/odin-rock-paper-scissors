function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors.");
    choice = choice.toLowerCase();
    switch (choice) {
        case "rock":
            return 1;
            break;
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
    }
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        // % Modulus: a % b is the remainder of the integer division of a by b
        // 5 % 2 is 1, the remainder of 5 divided by 2
        // 8 % 4 is 0, the remainder of 8 divided by 4
        let roundResult = (humanChoice - computerChoice) % 3;
        if (roundResult == 0) {
            console.log("Draw - both players selected " + processChoice(humanChoice) + ".");
        } else if (roundResult == -2 || roundResult == 1) {
            console.log("You win - " + processChoice(humanChoice) + " beats " + processChoice(computerChoice) + ".");
            ++humanScore;
        } else if (roundResult == 2 || roundResult == -1) {
            console.log("You lose - " + processChoice(computerChoice) + " beats " + processChoice(humanChoice) + ".");
            ++computerScore;
        }
    }
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score - Human: " + humanScore + " | Computer: " + computerScore);

    if (humanScore == computerScore) {
        console.log("Tie game. Try again!");
    } else if (humanScore > computerScore) {
        console.log("You won the game. Congratulations!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game. Better luck next time!");
    }
}

playGame();