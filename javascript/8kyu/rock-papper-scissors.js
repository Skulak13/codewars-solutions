// Codewars kata: "Rock Paper Scissors!"
// Level: 8 kyu
// Link: https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// Date completed: 2025-10-15

// Description: Return the result of a rock-paper-scissors game between two players.
// My refactored solution for learning and best practices.

// Note: The outcomes map version scales better and avoids nested conditionals.

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  }
  return "Player 2 won!";
};


/* OR using Object:

const p1Wins = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock"
};

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (p1Wins[p1] === p2) return "Player 1 won!";
  return "Player 2 won!";
};

*/

/* OR using lookup function:

const outcomes = {
  "rock-scissors": "Player 1 won!",
  "scissors-paper": "Player 1 won!",
  "paper-rock": "Player 1 won!",
  "scissors-rock": "Player 2 won!",
  "paper-scissors": "Player 2 won!",
  "rock-paper": "Player 2 won!"
};

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  return outcomes[`${p1}-${p2}`];
};

*/
