//Make it also that the winning three is highlighted!
//make play again button reset the board, but keep the scores.
// Make undo button go back a turn.
//with reset/tryagain button will be that if they win one and then they draw the next..it shouldn't reset the score!! all over again!
//Easter EGG!! change character after three wins!
//For a bit of a challenge and less code, try changing the visibility for the try again thing.
//adjust the size of the emoji
// include an instructions thing
//change names to pupper and kitter(?).

const gameOutcomes = function (playerArray) {
 if ( (playerArray.includes("a1") && playerArray.includes("a2") && playerArray.includes("a3")) ||
      (playerArray.includes("b1") && playerArray.includes("b2") && playerArray.includes("b3")) ||
      (playerArray.includes("c1") && playerArray.includes("c2") && playerArray.includes("c3")) ||
      (playerArray.includes("a1") && playerArray.includes("b1") && playerArray.includes("c1")) ||
      (playerArray.includes("a2") && playerArray.includes("b2") && playerArray.includes("c2")) ||
      (playerArray.includes("a3") && playerArray.includes("b3") && playerArray.includes("c3")) ||
      (playerArray.includes("a1") && playerArray.includes("b2") && playerArray.includes("c3")) ||
      (playerArray.includes("a3") && playerArray.includes("b2") && playerArray.includes("c1"))) {
      $(".cell").off("click");
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

$(".playerTurn").text("Dog's turn."); //As player1 always goes first.
player1Points = 0;
player2Points = 0;

$(".cell").click(function() {
    playLogger.push($(this).attr("id"));
    if ((player1Array.length - player2Array.length) === 0 ) { //figures out of the turn is even or odd.
        player1Array.push($(this).attr("id"));
        $(this).text("🐶");
        $(this).off("click");
        if (gameOutcomes(player1Array) == true) {
           $(".playerOneAvatar").attr("src", "media/dog_win.gif");
           $(".playerTwoAvatar").attr("src", "media/cat_lose.gif");
           $(".playerTurn").text("Dog is the Winner!")
           $(".playerTwoButton").addClass("buttonActive");
           $(".winnerMessage").text("Play Again");
           player1Points = player1Points + 1;
           $(".playerOnePoints").text(player1Points);
        } else {
        $(".playerTurn").text("Cat's turn.");
        }
    } else {
        player2Array.push($(this).attr("id"));
        $(this).text("🐱");
        $(this).off("click");
        if (gameOutcomes(player2Array) == true) {
           $(".playerOneAvatar").attr("src", "media/dog_lose.gif");
           $(".playerTwoAvatar").attr("src", "media/cat_win.gif");
           $(".playerTurn").text("Cat is the Winner!");
           $(".playerOneButton").addClass("buttonActive");
           $(".winnerMessage").text("Play Again");
           player2Points = player2Points + 1;
           $(".playerTwoPoints").text(player2Points);

        } else {
        $(".playerTurn").text("Dog's turn.");
        }
      }
      if (playLogger.length === 9 && gameOutcomes(player1Array) !== true) {
        $(".playerTurn").text("It's a Draw!")
        $(".winnerMessage").text("Play Again")
      }
    });
