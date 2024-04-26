let choices = ["rock", "paper", "scissors"];
let humanScore, computerScore = 0;


function getComputerChoice(){
    return choices[Math.floor(Math.random() * 2)]
}

function getHumanChoice(){
    userChoice = prompt("Choose between paper, rock or scissors:")
    return userChoice
}

console.log(getComputerChoice())
console.log(getHumanChoice())