//Make it also that the winning three is highlighted!
// Make undo button go back a turn. - When you gain a point, the other player gets a handicap/advantage for the next game so that they can undo a play from the other person.
//Get Joel's voice for the game - for win - it is like sarcastic yeah will done! for draw it is excited well done it is a drawn - or maybe pathetic!
//Easter EGG!! change character after three wins!
// include an instructions thing
// do the readme!
//clear the borders in the middle to create a clean ticktactoe line.
//animate the table reset that that the try again button covers the board and closes up the at the top.
//easter EGG character's  name is chick lé or eggo and they get a special glow or color/gradient/rainbow for their name as well!
//give character to each character. Cat is more Idc attitude.
// give ability to insert your own name or character!

$(document).ready(function () {

// const possibleOutcomes [["a1","a2","a3"]
// }


const gameOutcomes = function (playerArray) {
 if ( (playerArray.includes("a1") && playerArray.includes("a2") && playerArray.includes("a3")) ||
      (playerArray.includes("b1") && playerArray.includes("b2") && playerArray.includes("b3")) ||
      (playerArray.includes("c1") && playerArray.includes("c2") && playerArray.includes("c3")) ||
      (playerArray.includes("a1") && playerArray.includes("b1") && playerArray.includes("c1")) ||
      (playerArray.includes("a2") && playerArray.includes("b2") && playerArray.includes("c2")) ||
      (playerArray.includes("a3") && playerArray.includes("b3") && playerArray.includes("c3")) ||
      (playerArray.includes("a1") && playerArray.includes("b2") && playerArray.includes("c3")) ||
      (playerArray.includes("a3") && playerArray.includes("b2") && playerArray.includes("c1"))) {
      $('.cell').off('click');
      return true; //return True // have ti return something else here
      }

      //The Solution to get the colors highlighted would be to do a for lop of array with the winning combinations. that way you can return the winning combination from it.
};

let player1Array = [];
let player2Array = [];
let playLogger = [];

//Rashida Notes//
// create a click event on the common class for all boxes
// inside the event have if else {
// check playerClicked is even - if yes then // I made it that it checks for even in the if function itself.
// push this.id into the player1Arr
//player1Array.push($(this).attr("id"));
// display X
// else
// push this.id into the player2Arr
// display O

let player1 = {
  name: 'Doggo',
  symbol: '🐶',
  mediaPh: 'media/dog_placeholder2.gif',
  mediaWin: 'media/dog_win.gif',
  mediaLose: 'media/dog_lose.gif',
  turn: "Doggo's turn.",
  winStatement: "Doggo is the Winner!",
  undoStatement: "You have used Undo! Doggo's turn.",
};

let player2 = {
  name: 'Meowmer',
  symbol: '🐱',
  mediaPh: 'media/cat_placeholder2.gif',
  mediaWin: 'media/cat_win.gif',
  mediaLose: 'media/cat_lose.gif',
  turn: "Meowmer's turn.",
  winStatement: "Meowmer is the Winner!",
  undoStatement: "You have used Undo! Meowmer's turn.",
};

let egg = {
  name: 'Chick Lé',
  symbol: '🐣',
  mediaPh: 'media/egg_placeholder2.gif',
  mediaWin: 'media/egg_win.gif',
  mediaLose: 'media/egg_lose.gif',
  turn: "Chick Lé's turn.",
  winStatement: "Chick Lé is the Winner!",
  undoStatement: "You have used Undo! Chick Lé's turn.",
};

alert ("What You Need To Know: \r\- Player 1 always goes first. \r\ \r\- If a Player wins a point, the opposing player gets the ability to 'undo' a move in the next round. \r\ \r\- Score 3 points first to unlock an Easter Egg! \r\ \r\Good Luck and Have Fun! :)");
$(".playerTurn").text(player1.turn); //As player 1 always goes first.
$(".playAgainMessage").css("visibility", "hidden"); // want to make sure that the play again button is hidden at first.
$(".player1CardName").text(player1.name);
$(".player2CardName").text(player2.name);
let player1Points = 0;
let player2Points = 0;

const playGame = function () {
      playLogger.push($(this).attr("id"));
      if ((player1Array.length - player2Array.length) === 0 ) { //figures out of the turn is even or odd.
        player1Array.push($(this).attr("id"));
        $(this).text(player1.symbol);
        $(this).off('click');
            if (gameOutcomes(player1Array) == true) {
               $(".playerOneAvatar").attr("src", player1.mediaWin);
               $(".playerTwoAvatar").attr("src", player2.mediaLose);
               $(".playerTurn").text(player1.winStatement);
               $(".playerTwoButton").attr("disabled", true);
               $(".playerOneButton").attr("disabled", true);
               $(".playerTwoButton").addClass("buttonActive");
               $(".playAgainMessage").css("visibility", "visible");
               player1Points = player1Points + 1;
               $(".playerOnePoints").text(player1Points);
            } else {
            $(".playerTurn").text(player2.turn);
            }

      } else {
        player2Array.push($(this).attr("id"));
        $(this).text(player2.symbol);
        $(this).off('click');
            if (gameOutcomes(player2Array) == true) {
               $(".playerOneAvatar").attr("src", player1.mediaLose);
               $(".playerTwoAvatar").attr("src", player2.mediaWin);
               $(".playerTurn").text(player2.winStatement);
               $(".playerOneButton").attr("disabled", true);
               $(".playerTwoButton").attr("disabled", true);
               $(".playerOneButton").addClass("buttonActive");
               $(".playAgainMessage").css("visibility", "visible");
               player2Points = player2Points + 1;
               $(".playerTwoPoints").text(player2Points);
            } else {
              $(".playerTurn").text(player1.turn);
            }
          }
    if (playLogger.length === 9 && gameOutcomes(player1Array) !== true) {
      $(".playerTurn").text("It's a Draw!");
      $(".playAgainMessage").css("visibility", "visible");
      $(".playerTwoAvatar").attr("src", player2.mediaWin);
      $(".playerOneAvatar").attr("src", player1.mediaWin);
    }
};

$(".cell").on('click', playGame);

//Rashida Guide:
    // $(.cell).on('click', playGame);
    //
    // const playGame = function () {
    //
    // };
    //
    // $(.cell).off('click');

    // inside reset: $(.cell).on('click');

//Easter Egg Function
// This will go inside the try again button event.
//issue is that this is only available to the first person who reaches 3 wins? so no issue with changes.
//if Doggo First.
// if (player1Points >=3) {
//   $(".playerOneAvatar").attr("src", "media/egg_placeholder2.gif");
// }

// if points = 3
// change name (make it a span with a class) to egg.
// Change image to egg.
// change all values of dog in the function to egg?


///// RESETTING the gameboard to play again /////////
$(".playAgainMessage").click(function () {
  $(".playerTurn").text(player1.turn);
  $(".cell").text("");
  $('.cell').on('click', playGame);
  player1Array = [];
  player2Array = [];
  playLogger = [];
  $(".playerOneAvatar").attr("src", player1.mediaPh);
  $(".playerTwoAvatar").attr("src", player2.mediaPh);
  $(".playAgainMessage").css("visibility", "hidden");
  $(".playerOneButton").attr("disabled", false);
  $(".playerTwoButton").attr("disabled", false);
  if (player1Points >= 3 && player2 !== egg) { //if player1 reaches three points first, then he turns into Egg.
    player1 = egg;
    $(".player1CardName").text(player1.name);
    $(".playerOneAvatar").attr("src", player1.mediaPh);
    $(".playerTurn").text(player1.turn);
    $(".player1CardName").addClass("playerColorActive");

    }
  if (player2Points >= 3 && player1 !== egg) {//if player2 reaches three points first, then he turns into Egg.
    player2 = egg;
    $(".player2CardName").text(player2.name);
    $(".playerTwoAvatar").attr("src", player2.mediaPh);
    $(".playerTurn").text(player1.turn);
    $(".player2CardName").addClass("playerColorActive");
  }
});


///// UNDO BUTTON FUNCTIONALITY!!! //////////
$(".playerOneButton").click(function () { //reverse last two plays.
let isEven = (player1Array.length - player2Array.length) === 0;
if (isEven === true && playLogger.length >= 2) { //if value is even. ensures it is player one's turn.
  player2Array.pop();
  player1Array.pop(); //from these two, I am removing all the background data.
  let retract1 = playLogger[(playLogger.length - 1)]; // player 2 last move.
  let retract2 = playLogger[(playLogger.length - 2)]; //player 1's last move. using these two to get the values of the things I need to remove.
  playLogger.splice(-2, 2); // removing the background data.
  $(`#${retract1}`).text("");
  $(`#${retract2}`).text("");
  $(".playerTurn").text(player1.undoStatement);
  $(".playerOneButton").attr("disabled", true);
  $(".playerOneButton").removeClass("buttonActive");
  $(`.${retract1}`).on('click', playGame);
  $(`.${retract2}`).on('click', playGame);
} else if (playLogger.length <= 2) {
  alert('Not enough plays! Try again once your opponent has had another move.');
} else {
  alert('Please wait for your turn before using your life-line!');
  }
});

//BUTTON 2 ///
$(".playerTwoButton").click(function () { //reverse last two plays.
let isOdd = (player1Array.length - player2Array.length) === 1;
if (isOdd === true && playLogger.length >= 2) { //if value is even. ensures it is player one's turn.
  player1Array.pop();
  player2Array.pop(); //from these two, I am removing all the background data.
  let retract1 = playLogger[(playLogger.length - 1)]; // player 1 last move.
  let retract2 = playLogger[(playLogger.length - 2)]; //player 2's last move. using these two to get the values of the things I need to remove.
  playLogger.splice(-2, 2); // removing the background data.
  $(`#${retract1}`).text("");
  $(`#${retract2}`).text("");
  $(".playerTurn").text(player2.undoStatement);
  $(".playerTwoButton").attr("disabled", true);
  $(".playerTwoButton").removeClass("buttonActive");
  $(`.${retract1}`).on('click', playGame);
  $(`.${retract2}`).on('click', playGame);
} else if (playLogger.length === 1) {
  alert('Not enough plays! Try again once your opponent has had another move.');
} else {
  alert('Please wait for your turn before using your life-line!');
  }
});

}); //this closes off the document.ready at the top! don't remove!!!
