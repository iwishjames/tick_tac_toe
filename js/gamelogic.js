//Make it also that the winning three is highlighted!
// Make undo button go back a turn. - When you gain a point, the other player gets a handicap/advantage for the next game so that they can undo a play from the other person.
//Get Joel's voice for the game - for win - it is like sarcastic yeah will done! for draw it is excited well done it is a drawn - or maybe pathetic!
//Easter EGG!! change character after three wins!
// include an instructions thing
// do the readme!
//clear the borders in the middle to create a clean ticktactoe line.
//could make the initial commands for the game as a function and use it for the reset button!?
//animate the table reset that that the try again button covers the board and closes up the at the top.
//easter EGG character's  name is chick lé or eggo and they get a special glow or color/gradient/rainbow for their name as well!
//give character to each character. Cat is more Idk attitude.
// give ability to insert your own name or character!

$(document).ready(function () {


const gameOutcomes = function (playerArray) {
 if ( (playerArray.includes("a1") && playerArray.includes("a2") && playerArray.includes("a3")) ||
      (playerArray.includes("b1") && playerArray.includes("b2") && playerArray.includes("b3")) ||
      (playerArray.includes("c1") && playerArray.includes("c2") && playerArray.includes("c3")) ||
      (playerArray.includes("a1") && playerArray.includes("b1") && playerArray.includes("c1")) ||
      (playerArray.includes("a2") && playerArray.includes("b2") && playerArray.includes("c2")) ||
      (playerArray.includes("a3") && playerArray.includes("b3") && playerArray.includes("c3")) ||
      (playerArray.includes("a1") && playerArray.includes("b2") && playerArray.includes("c3")) ||
      (playerArray.includes("a3") && playerArray.includes("b2") && playerArray.includes("c1"))) {
      // $("div").off("click");
      $('.cell').off('click');
      return true; //return True // have ti return something else here
      }

      //The Solution to get the colors highlighted would be to do a for lop of array with the winning combinations. that way you can return the winning combination from it.
};

let player1Array = [];
let player2Array = [];
let playLogger = [];

// create a click event on the common class for all boxes
// inside the event have if else {
// check playerClicked is even - if yes then // I made it that it checks for even in the if function itself.
// push this.id into the player1Arr
//player1Array.push($(this).attr("id"));
// display X
// else
// push this.id into the player2Arr
// display O

$(".playerTurn").text("Doggo's turn."); //As player1 always goes first.
$(".winnerMessage").css("visibility", "hidden"); // want to make sure that the play again button is hidden at first.
//could make the above a function and use it for the reset button!?


let player1Points = 0;
let player2Points = 0;

const playGame = function () {
      playLogger.push($(this).attr("id"));
      if ((player1Array.length - player2Array.length) === 0 ) { //figures out of the turn is even or odd.
        player1Array.push($(this).attr("id"));
        $(this).text("🐶");
        $(this).off('click');
            if (gameOutcomes(player1Array) == true) {
               $(".playerOneAvatar").attr("src", "media/dog_win.gif");
               $(".playerTwoAvatar").attr("src", "media/cat_lose.gif");
               $(".playerTurn").text("Doggo is the Winner!");
               $(".playerTwoButton").addClass("buttonActive");
               $(".winnerMessage").css("visibility", "visible");
               player1Points = player1Points + 1;
               $(".playerOnePoints").text(player1Points);
            } else {
            $(".playerTurn").text("Meowmer's turn.");
            }

      } else { //
        player2Array.push($(this).attr("id"));
        $(this).text("🐱");
        $(this).off('click');
            if (gameOutcomes(player2Array) == true) {
               $(".playerOneAvatar").attr("src", "media/dog_lose.gif");
               $(".playerTwoAvatar").attr("src", "media/cat_win.gif");
               $(".playerTurn").text("Meowmer is the Winner!");
               $(".playerOneButton").addClass("buttonActive");
               $(".winnerMessage").css("visibility", "visible");
               player2Points = player2Points + 1;
               $(".playerTwoPoints").text(player2Points);
            } else {
              $(".playerTurn").text("Doggo's turn.");
            }
          }
    if (playLogger.length === 9 && gameOutcomes(player1Array) !== true) {
      $(".playerTurn").text("It's a Draw!");
      $(".winnerMessage").css("visibility", "visible");
      $(".playerTwoAvatar").attr("src", "media/dog_win.gif");
      $(".playerTwoAvatar").attr("src", "media/cat_win.gif");
    }
};

$(".cell").on('click', playGame);

    // $(.cell).on('click', playGame);
    //
    // const playGame = function () {
    //
    // };
    //
    // $(.cell).off('click');

    // inside reset: $(.cell).on('click');


///// RESETTING the gameboard to play again /////////
$(".winnerMessage").click(function () {
  $(".playerTurn").text("Doggo's turn.");
  $(".cell").text("");
  $('.cell').on('click', playGame);
  player1Array = [];
  player2Array = [];
  playLogger = [];
  $(".playerOneAvatar").attr("src", "media/dog_placeholder2.gif");
  $(".playerTwoAvatar").attr("src", "media/cat_placeholder2.gif");
  $(".winnerMessage").css("visibility", "hidden");
  $(".playerOneButton").attr("disabled", false);
  $(".playerTwoButton").attr("disabled", false);
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
  // playLogger.pop();
  // playLogger.pop();
  $(`#${retract1}`).text("");
  $(`#${retract2}`).text("");
  $(".playerTurn").text("Doggo's used Undo!");
  $(".playerOneButton").attr("disabled", true);
  $(".playerOneButton").removeClass("buttonActive");
  $(`.${retract1}`).on('click', playGame);
  $(`.${retract2}`).on('click', playGame);
} else if (isEven === true && playLogger.length < 2) {
  alert('Not enough plays! Please wait until your next turn.');
} else {
  alert('Please wait for your turn before using your life-line!');
  }
});

//BUTTON 2??
$(".playerTwoButton").click(function () { //reverse last two plays.
let isOdd = (player1Array.length - player2Array.length) === 1;
if (isOdd === true && playLogger.length >= 2) { //if value is even. ensures it is player one's turn.
  player1Array.pop();
  player2Array.pop(); //from these two, I am removing all the background data.
  let retract1 = playLogger[(playLogger.length - 1)]; // player 1 last move.
  let retract2 = playLogger[(playLogger.length - 2)]; //player 2's last move. using these two to get the values of the things I need to remove.
  playLogger.splice(-2, 2); // removing the background data.
  // playLogger.pop();
  // playLogger.pop();
  $(`#${retract1}`).text("");
  $(`#${retract2}`).text("");
  $(".playerTurn").text("Meowmer's used Undo!");
  $(".playerTwoButton").attr("disabled", true);
  $(".playerTwoButton").removeClass("buttonActive");
  $(`.${retract1}`).on('click', playGame);
  $(`.${retract2}`).on('click', playGame);
} else if (isOdd === true && playLogger.length < 2) {
  alert('Not enough plays! Please wait until your next turn.');
} else {
  alert('Please wait for your turn before using your life-line!');
  }
});

// $(".playerTwoButton").click(function () { // reverse last two playerOnePoints
// // $(".undoButtton@>@K@K@").click(function () {
// //
// });


// if points = 3
// change name (make it a span with a class) to egg.
// Change image to egg.
// change all values of dog in the function to egg?

}); //this closes off the document.ready at the top! don't remove!!!
