//need to only check this when three moves have been made so that the final "else" wont show after just two moves!? I guess you can call on this after player1's turn the third time.

//Make it also that the winning three is highlighted!

// const player1 = ["a1", "a4", 'a6'];

// const gameOutcomes = function (userSelected) {
//   const winner = {
//     winnerPath1: ["a1","a4","a6"], [],[],[],[]];
//     winnerPath2
//   // userSelected is array ["a3", "a4", "a2"];
// for (var i = 0; i < userSelected.length; i++) {
//     let select =userSelected[i];
//     if (winnerP.includes(select)){
//       //found
//     }
// }

let player1Array = [];
let player2Array = [];
//playerClicked = 0;

// create a click event on the common class for all boxes
let clickEvent = $(".cell").click(function() {
  if ((player1Array.length - player2Array.length) === 0 ) {
    player1Array.push($(this).attr("id"));
    //AJ: have to make sure that the push isn't done twice into the array. so that one array contains A1 and A1 twice for eg. 
    alert("🐶");
  } else {
    player2Array.push($(this).attr("id"));
    alert("🐱");
  }
});

// inside the event have if else {
// check playerClicked is even - if yes then
// push this.id into the player1Arr
//player1Array.push($(this).attr("id"));
// display X
// else
// push this.id into the player2Arr
// display O

// playerClicked++

// player1 array.length === 5 and player 2 array .length ===4 {
// gameOutcomes(player1Array)
//}



const gameOutcomes = function (playerArray) {
 if ( (playerArray.includes("a1") && playerArray.includes("a2") && playerArray.includes("a3")) ||
      (playerArray.includes("b1") && playerArray.includes("b2") && playerArray.includes("b3")) ||
      (playerArray.includes("c1") && playerArray.includes("c2") && playerArray.includes("c3")) ||
      (playerArray.includes("a1") && playerArray.includes("b1") && playerArray.includes("c1")) ||
      (playerArray.includes("a2") && playerArray.includes("b2") && playerArray.includes("c2")) ||
      (playerArray.includes("a3") && playerArray.includes("b3") && playerArray.includes("c3")) ||
      (playerArray.includes("a1") && playerArray.includes("b2") && playerArray.includes("c3")) ||
      (playerArray.includes("a3") && playerArray.includes("b2") && playerArray.includes("c1"))) {

      console.log("winner");

      }
};
