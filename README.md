<!-- In atom you can check how it looks by using the preview. Control + Shift +  M or Packages > Markdown Preview.  -->

# Project 0: Tic-Tac-Toe

**Link to the game:**
https://iwishjames.github.io/tick_tac_toe/

This is your standard game of tic-tac-toe with a simple twist - If a player gets a point, the opposing players unlocks the ability to undo the other player's move in the next round! *I feel this makes the game more balanced given the first player's first turn advantage.*

Visually the game is aimed at a younger audience.

The movements of the characters were created using Apple's Animoji face-tracking feature - Yes, though I hate to admit it, I had to physically act out those character expressions. Each character has an expression for resting, winning and losing (Check them out!).

This game was built using HTML, CSS, JS/jQuery.

----

## Features:
- Characters that are animate and react to a win/loss result.

- The ability to undo another player's action and get back your turn.
- An easter egg for being the first player to reach 3 points - It unlocks a new character.

### Game engagement/retention attributes:   
- Massive "Play Again" button that pops up at the end of each round.
- Curiosity to know about the multiple expressions of each character given their win or loss result.
- Curiosity about unlocking Easter egg at 3 points.
- Ability to use the "undo" feature - keeps the game engaging for further rounds.

- Scorecard - Keeping account of wins. Creates a need to score the most points.

----

## *Special Thanks!!*
- [@Rashida (TA)](https://github.com/rashidabengali) - I wouldn't have even known where to start without her help. She was crucial in helping me figure out the basic logic of the game and the requirements for it.
You can check out her own Tic-Tac-Toe (from when she did the course) here: https://rashidabengali.github.io/tic-tac-toe/
- [@Mee!](https://github.com/Ratsamee) - JS Queen!! Appreciate her help with the technicalities and picking up on my code grammar. She especially helped me to debug my JS, utilising Chrome developer tools!
Check out her Project0 here: https://ratsamee.github.io/tictactoe/
- [@Gopi](https://github.com/gopipatell) - Made me realise the importance of collaboration and bouncing off ideas. The Undo functionality would not be possible without her input! - You can check out her game here: https://gopipatell.github.io/tictactoe-game/

- [@Ludo](https://github.com/lpinzari) - Great discussions in regards to the technicalities and future proofing my code. Check out Ludo's game here (his code and documentation is almost immaculate): https://lpinzari.github.io/tic-tac-toe/

- [@Meo](https://github.com/meowsoso?tab=repositories) - Made me realise the importance of testing the product with users. Thanks for you feedback on the game layout and experience!
You can check out his tic-tac-toe here: https://meowsoso.github.io/turbo-sniffle/
But even better, check out his puzzle/mystery game: https://meowsoso.github.io/Robot_run/

- [@Nilana](https://github.com/nilanarocha) - I able to reference her game's code to figure out how I could improve my Odd or Even checker. You can check out her awesomely designed game here: https://nilanarocha.github.io/tic-tac-toe/.

----

## Challenges:
- **Keeping it DRY!** - Try again button. instead of repeating the try again text within the JS code, just changed the original html to display try again and made it ```visibility: visible``` (in CSS). From the other demos, I was learnt that I could have used ```.show``` and ```.hide``` instead.
- **Ability to easily change characters** - Prior to finding a solution, I was manually changing each characteristic when having to switch the character for the easter egg. Best solution for this was to just create an object with all the character features.
- **Undo feature** - Works similar to the reset button. This is where the playLogger and player arrays came in handy. I was able to identify the id's of the last two plays and use that to remove X and O inputs visually from the table. Then, I ```.pop()``` 'd them out from their respective arrays. Hmm...but now that I look at it, why not just get the ids from the individual player arrays than the playLogger array? - Just saved myself two lines!
- **When to enable Undo feature** - ~~Realised that the undo feature is rendered pointless at some points of the game. But if I was to enable it be active at all times, they could technically reverse at a win. I think this feature could be better utilised in online multiplayer environment - for now it is just K.I.S.S.~~
I was able to resolve this by having it that only the opponent's play was removed and you still had your turn!
Now it makes the game more interesting!! Still think it would be a cool feature in an online multiplayer environment!

- **Easter Egg** - ensuring the character change only occurred once three points had been reached, and once it had been switched, that it not available to the other character (*Otherwise it would display the same input for both players/confusion*). Was able to take advantage of the odd or even functions and also a simple if function which looks at whether  player 1 or player 2 already had already unlocked the easter egg. see line 223: ```if (player1Points >= 3 && player2 !== egg) {```



## Lessons learnt:
- Something as simple as tic tac toe, which is easy IRL can require some critical thinking when replicating virtually through a machine!
- The importance of collaboration and sharing ideas - gives you the ability to bounce off ideas and solutions with each other and to be inspired to improve your own work.
- You should be able to explain your code.
- Someone else should be able to read and understand your code - so, name variables and classes accordingly.
- Lessons from [@Ludo](https://github.com/lpinzari)
  - More users are moving towards mobile, so it is critical to have your site responsive for mobile sizes!
  - Keep the experience practical and the interface clean.

  - Refactoring! The importance of keeping it DRY and keeping you code neat. Ensuring to leave comments to help identify what it is (supposed to be) doing or what it relates to -  so that future you or someone else who is reading you code knows what you are on about.

- Debugging using alert on each line or the ```debugger;``` command is amazeballs!
- "Google is your best friend!" - Rashida Bengali, 2019.
- There might be a slight difference in display when viewing the site from your *local* verses from your *host*, so be sure to test that out!
- Files with larger sizes (especially high quality gifs!!!!) will take time to render on a webpage.
- If you need to repeat yourself - use loops!
- Best to have the basics done and have a skeleton before going after the big features. Even if this means having lines and lines of code, have the core of it working!

___

## Feature Freeze:
The things I couldn't implement.
- Animations and Transitions for more fluidity - especially animations of the boxes to clear the screen. An idea was to have the "Try Again" button scale up and over the table and disappear at the top to leave empty tiles to start a new game!

- Using sound/getting Joel's voice for the game - e.g.
   - for a win:
   > *sarcastically* "Yeah, will done!"

   - for a draw:
   > *excited* "Well done it is a draw!"  

   >or maybe even a "Pathetic!"
- Including the instructions within the page than just as an alert at the start - would allow the player to access it at any time!
- Ability to insert your own name for the character and/or select the emoji that is used for X or O.
- Giving each animated character a personality. e.g. Cat has a more "I don't care" attitude.
