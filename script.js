const choices = document.querySelectorAll(".choice");
let userScore = Number(document.getElementById("user-score").innerText);
let computerScore = Number(document.getElementById("computer-score").innerText);
let winner=document.getElementById("winner");

let options = ["rock", "paper", "scissors"];

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    console.log(`User chose ${userChoice}`);

    let computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(`computer chose ${computerChoice}`);

    checkWin(userChoice, computerChoice);
  });
});

let checkWin = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log("Its a draw!");
    winner.innerText="It's a draw!"
    winner.classList.remove("win")
    winner.classList.add("loss")
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You Won");
    userScore++;
    document.getElementById("user-score").innerText = userScore;
    winner.innerText="Congratulations! You won."
    winner.classList.remove("loss")
    winner.classList.add("win")
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("You lose");
    computerScore++;
    document.getElementById("computer-score").innerText = computerScore;
    winner.innerText="You lose!"
    winner.classList.remove("Win")
    winner.classList.add("loss")
  }
};

let updateWinner=()=>{
    winner.innerText
}
