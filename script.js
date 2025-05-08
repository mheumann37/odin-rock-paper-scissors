function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice); //Debugging
    return processChoice(choice);
}

function getHumanChoice() {
    let choice = Number(prompt("Enter a number:\n1: rock, 2: paper, or 3: scissors"));
    console.log(choice); //Debugging
    return processChoice(choice);
}

function processChoice(number) {
    switch (number) {
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

let computerChoice = getComputerChoice();
console.log(computerChoice); //Debugging

let humanChoice = getHumanChoice();
console.log(humanChoice); //Debugging