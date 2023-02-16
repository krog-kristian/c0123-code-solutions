console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [];

function newGame(names) {
  players = [];
  var player = {};
  for (var i = 0; i < names.length; i++) {
    player.name = names[i];
    player.hand = [];
    players.push(player);
    player = {};
  }
  console.log(players);
  deckBuilder();
}

var value10 = ['jack', 'queen', 'king'];

function deckBuilder() {
  deck = [];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var faceCards = ['ace', 'jack', 'queen', 'king'];
  var card = {};
  for (var i = 0; i < suits.length; i++) {
    for (var k = 2; k <= 10; k++) {
      card.rank = k;
      card.suit = suits[i];
      card.value = k;
      deck.push(card);
      card = {};
    }
    for (var j = 0; j < faceCards.length; j++) {
      card.rank = faceCards[j];
      card.suit = suits[i];
      if (value10.includes(faceCards[j])) {
        card.value = 10;
      } else {
        card.value = 11;
      }
      deck.push(card);
      card = {};
    }
  }
  deck = _.shuffle(deck);
  console.log('Deck Ready');
  dealer(players);
}

var deck = [];

function dealer(currentPlayers) {
  for (var k = 0; k < 2; k++) {
    console.log('dealing cards');
    for (var i = 0; i < currentPlayers.length; i++) {
      currentPlayers[i].hand.push(deck.pop());
    }
  }
  console.log('Cards Dealt.');
  checkWinner();
}

var scores = [];
var oneScore = 0;
var topScore = 0;
var winner = [];

function checkWinner() {
  scores = [];
  oneScore = 0;
  topScore = 0;
  winner = [];
  for (var i = 0; i < players.length; i++) {
    oneScore = players[i].hand[0].value + players[i].hand[1].value;
    scores.push(oneScore);
    if (oneScore > topScore) {
      winner = [];
      winner.push(players[i]);
      topScore = oneScore;
    } else if (oneScore === topScore) {
      winner.push(players[i]);
    }
    oneScore = 0;
  }
  if (winner.length > 1) {
    console.log('tie dealing again!');
    var tieBreaker = [];
    for (var k = 0; k < winner.length; k++) {
      tieBreaker.push(winner[k].name);
    }
    console.log('Tie breaker players:', tieBreaker);
    return newGame(tieBreaker);
  } else {
    console.log('The winner is:', winner[0].name, winner[0].hand);
  }
  scores = [];
  oneScore = 0;
  topScore = 0;
  winner = [];
}
