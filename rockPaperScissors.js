let resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', function(e) {
  let yourScore = document.querySelector('#your-score')
  let compScore = document.querySelector('#comp-score')
  yourScore.textContent = 0;
  compScore.textContent = 0;
});

let go = document.querySelector('#go');

let chooseRockButton = document.querySelector('#choice-rock');
chooseRockButton.addEventListener('click', function(e) {
  let yourSelection = document.querySelector('#your-selection')
  yourSelection.textContent = 'Rock';
  yourSelection.style.color = '#2F06FB';
  go.removeAttribute('disabled');
});

let choosePaperButton = document.querySelector('#choice-paper');
choosePaperButton.addEventListener('click', function(e) {
  let yourSelection = document.querySelector('#your-selection')
  yourSelection.textContent = 'Paper';
  yourSelection.style.color = '#FE0037';
  go.removeAttribute('disabled');
});

let chooseScissorsButton = document.querySelector('#choice-scissors');
chooseScissorsButton.addEventListener('click', function(e) {
  let yourSelection = document.querySelector('#your-selection')
  yourSelection.textContent = 'Scissors';
  yourSelection.style.color = '#58FD00';
  go.removeAttribute('disabled');
});

let playGameButton = document.querySelector('#go-button');
playGameButton.addEventListener('click', function(e) {
  let computerSelection = computerPlay();
  let playerSelection = document.querySelector('#your-selection').textContent;
  let computerSelectionPanel = document.querySelector('#comp-selection');
  computerSelectionPanel.textContent = computerSelection;
  let nextRoundButton = document.querySelector('#next-button');
  let goButton = document.querySelector('#go-button');
  let resultText = document.querySelector('#result-text');
  let outcome = determineWinner(playerSelection, computerSelection)
  if (outcome === 'win') {
    let yourScore = document.querySelector('#your-score')
    yourScore.textContent = parseInt(yourScore.textContent, 10) + 1
    resultText.textContent = 'Yay! You won that round!'
  } else if (outcome === 'lose') {
    let compScore = document.querySelector('#comp-score')
    compScore.textContent = parseInt(compScore.textContent, 10) + 1
    resultText.textContent = 'Aww bad luck, you lost that round!'
  } else {
    resultText.textContent = 'Great minds think alike, that was a draw!'
  }
  nextRoundButton.style.display = 'grid';
  goButton.style.display = 'none';
  go.setAttribute('disabled', true);
  let choiceOptions = document.querySelectorAll('.choice-options')
  choiceOptions.forEach(function(choice) {
    choice.setAttribute('disabled', true);
  })
});

let nextRound = document.querySelector('#next-round');
nextRound.addEventListener('click', () => {
  let nextRoundButton = document.querySelector('#next-button');
  let goButton = document.querySelector('#go-button');
  nextRoundButton.style.display = 'none';
  goButton.style.display = 'grid';
  let yourSelection = document.querySelector('#your-selection')
  let compSelection = document.querySelector('#comp-selection')
  yourSelection.textContent = '?';
  yourSelection.style.color = '#ffcd07';
  compSelection.textContent = '?';
  compSelection.style.color = '#ffcd07';
  let choiceOptions = document.querySelectorAll('.choice-options')
  choiceOptions.forEach(function(choice) {
    choice.removeAttribute('disabled');
  })
})

function computerPlay() {
  let computerPick = Math.floor(Math.random() * 3) + 1;
  switch (computerPick) {
    case 1:
      return 'Rock';
      break;
    case 2:
      return 'Paper';
      break;
    default:
      return 'Scissors';
  }
};

function determineWinner(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'Rock':
      if (computerSelection === 'Rock') {
        return 'draw';
      } else if (computerSelection === 'Paper') {
        return 'lose';
      } else {
        return 'win';
      }
      break;
    case 'Paper':
      if (computerSelection === 'Rock') {
        return 'win';
      } else if (computerSelection === 'Paper') {
        return 'draw';
      } else {
        return 'lose';
      }
      break;
    default:
      if (computerSelection === 'Rock') {
        return 'lose';
      } else if (computerSelection === 'Paper') {
        return 'win';
      } else {
        return 'draw';
      }
  }
};
