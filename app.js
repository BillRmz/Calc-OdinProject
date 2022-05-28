let playerScore = 0;
let pcScore = 0;

let player = document.querySelector("#playerScore");
let pc = document.querySelector("#pcScore");

player.textContent = playerScore.toString();
pc.textContent = pcScore.toString();

const buttons = document.querySelectorAll(".button");

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

//This Function gets the computer's selection
const computerplay = function () {
  let arr = ["rock", "paper", "scissors"];
  let select = Math.floor(Math.random() * arr.length); // gets a ramdon number
  return arr[select];
};


const emojiSelector = () => {
  let arr = ["🥳", "👏", "🏆", "🙌🏻","🤘🏻","🎉","🎊"];
  let select = Math.floor(Math.random() * arr.length); // gets a ramdon number
  return arr[select];
}

const pcEmojiSelector = () => {
  let arr = ["😆", "🤣", "😂", "💀","😬","🤪","🤭"];
  let select = Math.floor(Math.random() * arr.length); // gets a ramdon number
  return arr[select];
}



const playRound = function (pcSelection, plyrSelection) {
  let pcSelect = pcSelection;
  let playerSelect = plyrSelection.toString().toLowerCase();

  if (
    (playerSelect === "rock" && pcSelect === "scissors") ||
    (playerSelect === "paper" && pcSelect === "rock") ||
    (playerSelect === "scissor" && pcSelect === "paper")
  ) {
    return 1;
  } else if (playerSelect === pcSelect) {
    return 2;
  } else {
    return 0;
  }
};

const btnRefresh = function () {
  const refresh = document.querySelector("#refresh");
  const btnRefresh = document.createElement("a");
  btnRefresh.textContent = "Play again?";
  btnRefresh.style.border = "solid; color: black; 2px;";
  btnRefresh.style.backgroundColor = "rgb(0, 38, 153)";
  btnRefresh.style.border = "2px solid Black";
  btnRefresh.style.padding = "1rem";
  btnRefresh.style.borderRadius = "20px";
  btnRefresh.style.textDecoration = "none";
  btnRefresh.style.color = "white";
  btnRefresh.style.cursor = "pointer";
  btnRefresh.style.fontWeight = "bold";

  btnRefresh.setAttribute("href", "javascript:location.reload()");
  refresh.appendChild(btnRefresh);
};

const game = function (selection) {
  let text = document.querySelector("#text");
  let playerSelection = selection;
  let pcSelection = computerplay().toString();

  let pcOutput = document.querySelector("#pcOutput");
  pcOutput.textContent = pcSelection.toString();

  let reg = playRound(pcSelection, playerSelection);

  if (reg === 1) {
    text.textContent = "You won!";
    text.style.color = "green";
    playerScore += 1;

    if (playerScore == 5) {
      text.textContent = `** You beat PC!! ${emojiSelector()} **` ;
      disableButtons();
      btnRefresh();
    }
  } else if (reg === 0) {
    text.textContent = "You Loose!";
    text.style.color = "red";
    pcScore += 1;

    if (pcScore == 5) {
      text.textContent =  `** PC beats you!! ${pcEmojiSelector()} **`;
      disableButtons();
      btnRefresh();
    }
  } else if (reg === 2) {
    text.textContent = "Tie";
    text.style.color = "orange";
  }
  player.textContent = playerScore.toString();
  pc.textContent = pcScore.toString();
};

const playerOutput = document.querySelector("#playerOutput");
const pcOutput = document.querySelector("#pcOutput");

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", function (e) {
  playerOutput.textContent = "Rock";
  game("rock");
});

btnPaper.addEventListener("click", function (e) {
  playerOutput.textContent = "Paper";
  game("paper");
});

btnScissors.addEventListener("click", function (e) {
  playerOutput.textContent = "Scissors";
  game("scissors");
});
