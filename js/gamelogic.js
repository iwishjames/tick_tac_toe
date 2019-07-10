//need to only check this when three moves have been made so that the final "else" wont show after just two moves!? I guess you can call on this after player1's turn the third time.

//Make it also that the winning three is highlighted!

// const gameOutcomes = function () {
//   winner = false;
//  if ( (playerArray.includes("a1") && playerArray.includes("a2") && playerArray.includes("a3")) ||
//       (playerArray.includes("b1") && playerArray.includes("b2") && playerArray.includes("b3")) ||
//       (playerArray.includes("c1") && playerArray.includes("c2") && playerArray.includes("c3")) ||
//       (playerArray.includes("a1") && playerArray.includes("b1") && playerArray.includes("c1")) ||
//       (playerArray.includes("a2") && playerArray.includes("b2") && playerArray.includes("c2")) ||
//       (playerArray.includes("a3") && playerArray.includes("b3") && playerArray.includes("c3")) ||
//       (playerArray.includes("a1") && playerArray.includes("b2") && playerArray.includes("c3")) ||
//       (playerArray.includes("a3") && playerArray.includes("b2") && playerArray.includes("c1"))) {
//
//       return winner = true; //return True // have ti return something else here
//
//       }
// };

let player1Array = [];
let player2Array = [];


// const gameWinner = function () {
//   if (playRegister.length >= 5 && playRegister.length <= 9) {
//     push player1 array into gameOutcomes //this goes first because Player 1 always has the first chance to win.
//     if (outcome = true) {
//       $(".cell").off("click");
//       display button to play again, which resets the game.
//
//     } else {
//         pop player1 array from gameOutcomes
//         push player2 array into gameOutcomes{
//         if (outcome = true) {
//           $(".cell").off("click");
//           display button to play again, which resets the game.
//         } else {pop player2 array from gameOutcomes}
// }
// });

// let playRegister = []; //used to log all the plays made and the length of the plays.

// create a click event on the common class for all boxes
// inside the event have if else {
// check playerClicked is even - if yes then // I made it that it checks for even in the if function itself.
// push this.id into the player1Arr
//player1Array.push($(this).attr("id"));
// display X
// else
// push this.id into the player2Arr
// display O

// playerClicked++ //

// player1 array.length === 5 and player 2 array .length ===4 {
// gameOutcomes(player1Array)
//}

$(".playerTurn").text("Player 1's turn."); //As player1 always goes first.

$(".cell").click(function() {
    playRegister.push($(this).attr("id"));
    if ((player1Array.length - player2Array.length) === 0 ) { //figures out of the turn is even or odd.
        player1Array.push($(this).attr("id"));
        $(this).text("🐶");
        $(this).off("click");
        // if (gameOutcomes(player1Array) == true) {
        //     $(".winnerMessage").text("Player 1 is the Winner!")
        // } else {
            $(".playerTurn").text("Player 2's turn.");
        };
    } else {
        player2Array.push($(this).attr("id"));
        $(this).text("🐱");
        $(this).off("click");
        gameOutcomes(player2Array);
        // if (gameOutcomes(player2Array) == true) {
        //    $(".winnerMessage").text("Player 2 is the Winner!")
        } else {
          $(".playerTurn").text("Player 1's turn.");
        };
    };


// OPTIMISATION for below WOULD BE TO JUST CALL the gameOutcomes on WHO EVER's TURN IT IS.
/////////////////////////

// //
// if (playRegister.length >= 5 && playRegister.length <= 9) {
//     push player1 array into gameOutcomes //this goes first because Player 1 always has the first chance to win.
//     if (outcome = true) {
//       $(".winnerMessage").text("Player 1 is the Winner!");
//       $(".cell").off("click");
//       display button to play again, which resets the game.
//
//     } else {
//         pop player1 array from gameOutcomes
//         push player2 array into gameOutcomes{
//         if (outcome = true) {
//           $(".winnerMessage").text("Player 2 is the Winner!");
//           $(".cell").off("click");
//           display button to play again, which resets the game.
//         } else {pop player2 array from gameOutcomes}
// }
// });

///////////////////////////
