function init(containerNode) {
  var score1Node = createScore('score1');
  var score2Node = createScore('score2');

  containerNode.appendChild(score1Node);
  containerNode.appendChild(score2Node);

  containerNode.appendChild(createButton('player1', 'Add to player 1 score', score1Node));
  containerNode.appendChild(createButton('player2', 'Add to player 2 score', score2Node));

  containerNode.appendChild(createInputField('player1Name'));
  containerNode.appendChild(createSubmitButton());
}

function createButton(id, text, scoreNode){
  var button = document.createElement("BUTTON");
  button.id = id;
  button.innerText = text;
  button.addEventListener('click', function() {
    scoreNode.innerText = parseInt(scoreNode.innerText) + 1;
  })
  return(button);
}

function createScore(id) {
  var score = document.createElement("P");
  score.innerText = 0;
  score.id = id;

  return(score);
}

function createInputField(id) {
  var inputNode1 = document.createElement("INPUT");
  inputNode1.id = id;
  inputNode1.setAttribute('type', 'text');
  inputNode1.setAttribute('placeholder', 'Enter Player Name:')
  inputNode1.setAttribute('value','');

  return(inputNode1);

}

function createSubmitButton() {
  var playerId = document.querySelector('#player1Name');
  var beforeName = document.querySelector('#player1')
  var enteredName;
  var submitButton = document.createElement("BUTTON");
  submitButton.id = 'submitName';
  submitButton.setAttribute('type', 'submit')
  submitButton.innerText = 'Press Enter';
  submitButton.addEventListener('click', function(){
  enteredName = playerId.value;
  beforeName.innerText = enteredName;
  })
  return(submitButton);

}
