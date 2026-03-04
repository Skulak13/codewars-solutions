// Codewars kata: "Simple Fun #18: Candles"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/5884731139a9b4b7a8000002
// Date completed: 2026-02-27

// Description:
// You start with a given number of candles.
// Every time you burn a candle, you get one leftover.
// You can create a new candle from a fixed number of leftovers.
// Return the total number of candles you can burn.

/* Examples:
    candles(5, 2) ➞ 9
    candles(1, 2) ➞ 1
    candles(3, 3) ➞ 4
*/

/* Notes:
   - Each burned candle produces exactly one leftover
   - A new candle can be created from `makeNew` leftovers
   - Continue the process as long as you can create new candles
   - Simulates the real process step by step
*/

function candles(candlesNumber, makeNew) {
  let totalBurned = candlesNumber;
  let leftovers = candlesNumber;

  while (leftovers >= makeNew) {
    const newCandles = Math.floor(leftovers / makeNew);
    totalBurned += newCandles;

    const productionLeftovers = leftovers % makeNew;
    leftovers = newCandles + productionLeftovers;
  }

  return totalBurned;
}

/* Explanation:
   - We start with `candlesNumber` candles.
   - Each burned candle creates one leftover,
     so initially leftovers = candlesNumber.
   - While we have enough leftovers to produce a new candle:
       → Calculate how many new candles we can make
         (leftovers / makeNew).
       → Add them to totalBurned.
       → Update leftovers:
            - New candles will also produce leftovers after burning
            - Plus any unused leftovers from the division remainder
   - The loop stops when we can no longer produce new candles.
*/

/* OR
   Mathematical shortcut solution:

   Instead of simulating the process,
   we can calculate the result directly.
*/

function candles(candlesNumber, makeNew) {
  return candlesNumber +
    Math.floor((candlesNumber - 1) / (makeNew - 1));
}

/* Explanation of the formula:
   - Every new candle effectively costs (makeNew - 1) net leftovers.
   - Why?
       Because burning a new candle also produces 1 leftover.
   - So we divide (candlesNumber - 1)
     by (makeNew - 1) to determine
     how many additional candles can be created.
   - This solution runs in O(1) time
     and avoids the loop simulation.
*/

/* Complexity Big-O:
   - Loop simulation: O(n) in worst case
   - Mathematical formula: O(1)
*/
