<!-- In atom you can check how it looks by using the preview. Control + Shift +  M or Packages > Markdown Preview.  -->

# Project 0: Tic-Tac-Toe

**Link to the game:**
https://iwishjames.github.io/tick_tac_toe/

This is your standard game of tic-tac-toe with a simple twist - If a player gets a point, the opposing players unlocks the ability to undo the other player's move in the next round!

Visually the game is targeted at a younger audience (ages:4-7) or those that identify with these ages.

The movements of the characters were created using Apple's Animoji face-tracking feature - Yes, though I hate to admit it, I had to physical act out those character actions.

----

## Features:
- Characters that are animate and react to a win/loss result.

- The ability to undo another player's action and get back your turn.
- An easter egg for being the first player to reach 3 points - It unlocks a new character.

### Game engagement/retention:   
- Massive Play Again button that pops up at the end of each game.
- Curiosity about the reactions of each character given a win or loss result.
- Curiosity about Easter egg.
- Ability to use the "undo" feature - keeps the game engaging for further games.

- Score card - keeping account of wins. Need to score more points.

----

## *Special Thanks!!*
- [@rashidabengali](https://github.com/rashidabengali) aka Rashida (TA) - Wouldn't have even been able to start of this without her help. She was crucial in helping me figure out the logic of the game and the requirements for it.
You can check out her Tic-Tac-Toe here: https://rashidabengali.github.io/tic-tac-toe/
- [@ratsamee](https://github.com/Ratsamee) aka MEE!! - JS Queen!! Appreciate her help with the technicalities and picking up on my code grammar. Especially helped me to debug my code using developer tools!
Check out her Project0 here: https://ratsamee.github.io/tictactoe/
- [@gopipatell](https://github.com/gopipatell) aka Gopi - Made me realise the importance of collaborations and bouncing of ideas. The Undo functionality would not be possible without her input! - You can check out her game here: https://gopipatell.github.io/tictactoe-game/

- [@lpinzari](https://github.com/lpinzari) aka Ludo - Great discussions in regards to the technicalities and future proofing of code. Check out Ludo's game here: https://lpinzari.github.io/tic-tac-toe/

- [@meowsosoaka](https://github.com/meowsoso?tab=repositories) aka Meo! - Importance of testing with users. Thanks for you feedback on the user experience!
You can check out his tic-tac-toe here: https://meowsoso.github.io/turbo-sniffle/
But even better, check out his puzzle/mystery game: https://meowsoso.github.io/Robot_run/

----

## Challenges:
- **Keeping it DRY!** - Try again button. instead of repeating the try again text within the JS code, just changed the original html to display try again and made it "visibility: visible" by changing it at the CSS level (class="tryAgainVisible").
- **Ability to easily change characters** - prior I was manually changing each characteristic. Best solution for this was to just create an object with all the character features.
- **Undo feature** - Worked similar to the reset button. This is where the arrays came in handy. I was able to identify the id's of the last two plays and use that to remove them visually in the cell. and then to "pop." them from their respective cells. Hmm...but now that I think about it, why not just get the ids from the individual player arrays? - Just saved you two lines!
- **When to enable Undo feature** - Realised that the undo feature is rendered pointless in sum circumstances. If I was to enable it at all times, they could technically reverse at a win? I think this would be a better feature if the game in online and multiplayer - for now it is just K.I.S.S.

- **Easter Egg** - ensuring it is only available after three points and once it has been unlocked, not available to the other character (Otherwise it would display the same character/confusion). Was able to take advantage of the odd or even functions and also a simple if function which looks at whether the player1 or player2 equals the easter egg. i.e. *line 223:* if (player1Points >= 3 && player2 !== egg) {



## Lessons learnt:
- Something as simple as tic tac toe, which is easy asf IRL can require some thinking when replicating it virtually!
- The importance of collaborations and sharing your ideas - How it gives you the ability to bounce of ideas with others and be inspired by each other to do better.
- You should be able to explain your code.
- Someone else should be able to read and understand the code - so name variables and classes accordingly.
- Lessons from [Ludo](https://github.com/lpinzari)
  - More users are moving towards mobile, so it is critical to have your site responsive for mobile sizes!
  - Keep it clean visually, but also it should work practically!

  - Refactoring! The importance of keeping it DRY and keeping you code clean. Ensuring to leave comments to help identify what it is doing or what it relates to -  so that future you or someone else who is reading you code knows what you are on about.

- Debugging using alert on each line or the debugger; command is amazeballs!
- "Google is your best friend!" - Rashida Bangali 2019.
- There might be a slight difference in display when viewing the site from your machine and from where you host it, so be sure to test that out!
- Files with larger sizes (especially high quality gifs!!!!) will take time to load on a webpage.
- If you need to repeat yourself - use loops!
- Best to have the basics done and have a skeleton before going after the big features. Even if this means having lines and lines of code, have the core of it working!

___

## Feature Freeze:
The things I couldn't implement.
- Animating and Transition of the changes for more fluidity - especially animations of the boxes to clear the screen. Ideas was to have the Try Again button scale up and over and disappear at the top to leave empty tiles to start a new game!.

- Using sound/Getting Joel's voice for the game - e.g. for win - * sarcastically * "Yeah, will done!" or for a draw - * excited * "Well done it is a draw!"" - or maybe "Pathetic!"
- Including the instructions within the game itself, instead of an alert at the start - So that the player can access at any time!
- Ability to insert your own name for the character and/or select the emoji that is used for X or O.
- Giving each animated character a personality. e.g. Cat has a more I don't care attitude.
