$(document).ready(function () {
//
// const possibleOutcomes = [
//   ["a1","a2","a3"],
//   ["b1","b2","b3"],
//   ["c1","c2","c3"],
//   ["a1","b1","c1"],
//   ["a2","b2","c2"],
//   ["c1","c2","c3"],
//   ["a1","b2","c3"],
//   ["a3","b2","c1"],
// ];

//////// Need to shorten to create a loop!!!
// let gameOutcomes = function (playerArray) {
// for (let i = 0; i < possibleOutcomes.length; i++) {
// if ([i].includes(playerArray) {
//   $('.cell').off('click');
//
//   return true;
// }
// };

// const gameOutcomes = function (playerArray) {
//  if ( (playerArray.includes("a1") && playerArray.includes("a2") && playerArray.includes("a3")) ||
//       (playerArray.includes("b1") && playerArray.includes("b2") && playerArray.includes("b3")) ||
//       (playerArray.includes("c1") && playerArray.includes("c2") && playerArray.includes("c3")) ||
//       (playerArray.includes("a1") && playerArray.includes("b1") && playerArray.includes("c1")) ||
//       (playerArray.includes("a2") && playerArray.includes("b2") && playerArray.includes("c2")) ||
//       (playerArray.includes("a3") && playerArray.includes("b3") && playerArray.includes("c3")) ||
//       (playerArray.includes("a1") && playerArray.includes("b2") && playerArray.includes("c3")) ||
//       (playerArray.includes("a3") && playerArray.includes("b2") && playerArray.includes("c1"))) {
//       $('.cell').off('click');
//       return true; //return True // have ti return something else here
//       }
//////////////


// Checking to see if it matches possible win strategies.
const gameOutcomes = function (playerArray) {
 if (playerArray.includes("a1") && playerArray.includes("a2") && playerArray.includes("a3")) {
    $(".a1, .a2, .a3").addClass("cellWinners");
    $('.cell').off('click');
    return true;}
  if (playerArray.includes("b1") && playerArray.includes("b2") && playerArray.includes("b3")) {
    $(".b1, .b2, .b3").addClass("cellWinners");
    $('.cell').off('click');
    return true;}
  if (playerArray.includes("c1") && playerArray.includes("c2") && playerArray.includes("c3")) {
    $(".c1, .c2, .c3").addClass("cellWinners");
    $('.cell').off('click');
    return true;}
  if (playerArray.includes("a1") && playerArray.includes("b1") && playerArray.includes("c1")) {
    $(".a1, .b1, .c1").addClass("cellWinners");
    $('.cell').off('click');
    return true;}
  if (playerArray.includes("a2") && playerArray.includes("b2") && playerArray.includes("c2")) {
    $(".a2, .b2, .c2").addClass("cellWinners");
    $('.cell').off('click');
    return true;}
  if (playerArray.includes("a3") && playerArray.includes("b3") && playerArray.includes("c3")) {
    $(".a3, .b3, .c3").addClass("cellWinners");
    $('.cell').off('click');
    return true;}
  if (playerArray.includes("a1") && playerArray.includes("b2") && playerArray.includes("c3")) {
    $(".a1, .b2, .c3").addClass("cellWinners");
    $('.cell').off('click');
    return true;}
  if (playerArray.includes("a3") && playerArray.includes("b2") && playerArray.includes("c1")) {
    $(".a3, .b2, .c1").addClass("cellWinners");
    $('.cell').off('click');
    return true;}

      //The Solution to get the colors highlighted would be to do a for lop of array with the winning combinations. that way you can return the winning combination from it.
};


// Arrays that hold each player's specific moves and a general logger of every move since game inception.
let player1Array = [];
let player2Array = [];
let playLogger = [];


// Available Characters incl. Easter Egg. and their respective requirments.
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
//Much easier to make changes to the game by first have the characters and their interactions broken down.


// Intro to game with Alert.
alert ("What You Need To Know: \r\- Player 1 always goes first. \r\ \r\- If a player wins a point, the opposing player gets the ability to 'undo' a move in the next round. \r\ \r\- First player to score 3 points unlocks an Easter Egg! \r\ \r\Good Luck and Have Fun!! :)");

$(".playerTurn").text(player1.turn); //As player 1 always goes first.
$(".playAgainMessage").css("visibility", "hidden"); // want to make sure that the play again button is hidden at first.
$(".player1CardName").text(player1.name);
$(".player2CardName").text(player2.name);
let player1Points = 0; //Everyone starts with Zero points first!
let player2Points = 0;

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


// Function to check moves against the winning strategy based on whether it is player1 (even) or player2 (odd)
const playGame = function () {
      playLogger.push($(this).attr("id"));
      if ((player1Array.length - player2Array.length) === 0 ) { //figures out of the turn is even or odd. Saved a couple of lines of code here. Creating the objects of the characters really helps here!
        player1Array.push($(this).attr("id")); //This pushes the specific id of the div into the array for
        $(this).text(player1.symbol);
        $(this).off('click');
            if (gameOutcomes(player1Array) == true) {
               $('.cell').removeClass('hover');
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

      } else { //if it is not even. it is odd. so push to player 2's array.
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


// RESETTING the gameboard to play again
$(".playAgainMessage").click(function () {
  $(".playerTurn").text(player1.turn);
  $(".cell").text("");
  $('.cell').on('click', playGame);
  $(".cell").removeClass("cellWinners"); //remove the highlight of the winning cells
  $('.cell').addClass('hover'); //adding back hover effect
  player1Array = []; //clearing up arrays to start afresh!
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


// Player 1 UNDO button functionality!!!
$(".playerOneButton").click(function () { //reverse last two plays.
let isEven = (player1Array.length - player2Array.length) === 0;
if (isEven === true && playLogger.length >= 2) { //if value is even. ensures it is player one's turn.
  player2Array.pop();
  player1Array.pop(); //from these two,removing all the background data.
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

//Player 2 Undo button feature.
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
