//This Function gets the computer's selection
const computerplay = function () {
  let arr = ["rock", "paper", "scissors"];
  let select = Math.floor(Math.random() * arr.length); // Operacion que da un numero ramdon
  return arr[select];
};

//This function plays a single round of Rock Paper Scissors.
const playRound = function (pcSelection, plyrSelection) {
  let pcSelect = pcSelection;
  let playerSelect = plyrSelection.toString().toLowerCase();

  if (playerSelect === "rock" && pcSelect === "scissors") {
    return 1;
  } else if (playerSelect === "paper" && pcSelect === "rock") {
    return 1;
  } else if (playerSelect === "scissor" && pcSelect === "paper") {
    return 1;
  } else if (playerSelect === pcSelect) {
    return 2;
  } else {
    return 0;
  }
};

const game = function () {
//counter for score
    let pcCount = 0;
  let plCount = 0;
// this loop repeat 5 times, get the user and call the playRound Function.
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please enter 'Rock' 'Paper' or 'Scissors'");
    let pcSelection = computerplay().toString();

    let reg = playRound(playerSelection, pcSelection);
    console.log(reg);

    if (reg === 1) {
      plCount++;
      console.log(`You win! \n ${playerSelection}  - PC chose ${pcSelection} `);
    } else if (reg === 0) {
      pcCount++;
      console.log(` You Lost! \n  ${playerSelection} - PC chose ${pcSelection}`);
    }else if (reg === 2){
        console.log('TIE!');
        i--;
    }
  }
  let finalScore = `Player ${plCount} vs PC ${pcCount}`;
   console.log(finalScore);

}



game(); 
