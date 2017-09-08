## Tic Tac Toe

Aim to build the business logic for a game of tic tac toe.

The rules of tic-tac-toe are as follows:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

### User stories
```
As a Game
That can be started
It needs two players and an empty grid

As a Player
That I can win a game
I need to select all fields in the row, column or diagonal

As a Game
That both players can make a move
It needs to switch the players

```

**Grid representation**
```
var arr = [["","",""],
          ["","",""],
          ["","",""]];
```
