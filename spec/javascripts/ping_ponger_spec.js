describe('ping ponger', function() {
  beforeEach(function() {
    var container = document.querySelector("#jasmine_content");
    init(container);
  });

  afterEach(function() {
    var container = document.querySelector("#jasmine_content");
    container.innerHTML = "";
  });

  it('increments the score when the button is clicked', function() {

    var scoreNode = document.querySelector('#score1');
    var buttonNode = document.querySelector('#player1');

    expect(scoreNode.innerText).toEqual('0');

    buttonNode.click();

    expect(scoreNode.innerText).toEqual('1');
  });

  it('increments player 2 score when player 2 button is clicked', function() {
    var scoreNode2 = document.querySelector('#score2');
    var buttonNode2 = document.querySelector('#player2');

    expect(scoreNode2.innerText).toEqual('0');

    buttonNode2.click();

    expect(scoreNode2.innerText).toEqual('1');
  })

  it('creates an input fields for player names', function() {
    var inputNode1 = document.querySelector('#player1Name');

    expect(inputNode1.placeholder).toEqual('Enter Player Name:');

  })

  it('adds a player name to button text', function() {
    var inputNode1 = document.querySelector('#player1Name');
    var name1 = document.querySelector('#player1');
    var submitButton = document.querySelector('#submitName');

    inputNode1.value = 'Rosa';
    submitButton.click();

    expect(name1.innerText).toEqual('Rosa');


  })
});
