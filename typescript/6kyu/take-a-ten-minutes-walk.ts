// Codewars kata: "Take a Ten Minutes Walk"
// Level: 6 kyu
// Link: https://www.codewars.com/kata/54da539698b8a2ad76000228
// Date completed: 2026-08-11

// Description:
// Determine whether a walk takes exactly 10 minutes
// and returns to the starting point.
//
// Each element represents one step:
//   "n" → north
//   "s" → south
//   "e" → east
//   "w" → west
//
// The walk is valid only when:
//   - it contains exactly 10 steps
//   - the final position is the same as the starting position

/* Examples:
    isValidWalk(["n","s","n","s","n","s","n","s","n","s"])
    ➞ true

    isValidWalk(["w","e","w","e","w","e","w","e","w","e"])
    ➞ true

    isValidWalk(["w","w","w","w","w","w","w","w","w","w"])
    ➞ false

    isValidWalk(["n","e","s","w","n","e","s","w","n","s"])
    ➞ true

    isValidWalk(["n","s"])
    ➞ false
*/

/* Notes:
   - 10 steps are required because each step
     represents one minute.
   - To return to the starting point:
       → number of north steps must equal
         number of south steps
       → number of east steps must equal
         number of west steps
*/

// Clean & readable solution:
export function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) {
    return false;
  }

  const counts: Record<string, number> = {
    n: 0,
    s: 0,
    e: 0,
    w: 0
  };

  walk.forEach(step => {
    counts[step] += 1;
  });

  return counts.n === counts.s &&
         counts.e === counts.w;
}

/* Explanation:
   - First check whether the walk contains
     exactly 10 steps.

   - Then create an object that stores
     how many times each direction occurs:

       {
         n: 0,
         s: 0,
         e: 0,
         w: 0
       }

   - forEach() goes through every step
     and increases the corresponding counter.

   - Example:

       ["n", "s", "n", "s", "e", "w", "e", "w", "n", "s"]

       n → 3
       s → 3
       e → 2
       w → 2

   - Since opposite directions occur
     the same number of times,
     the walk ends where it started.
*/

/* Why does counting opposite directions work?

   Imagine the starting point is:

       (0, 0)

   Moving north:
       (0, +1)

   Moving south:
       (0, -1)

   Moving east:
       (+1, 0)

   Moving west:
       (-1, 0)

   Therefore:

       n === s
       → vertical movement cancels out

       e === w
       → horizontal movement cancels out

   If both conditions are true,
   the final position is (0, 0).
*/

/* OR
   Single-pass solution using counters:
*/

export function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) {
    return false;
  }

  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;

  for (const step of walk) {
    if (step === "n") n++;
    else if (step === "s") s++;
    else if (step === "e") e++;
    else if (step === "w") w++;
  }

  return n === s && e === w;
}

/* Explanation:
   - Instead of creating an object,
     maintain four counters.
   - Iterate through the array once.
   - Increase the appropriate counter
     depending on the direction.
   - Compare opposite directions
     at the end.

   This avoids creating an object
   and is slightly more efficient,
   although the difference is negligible
   for an array of only 10 elements.
*/

/* OR
   Tracking the actual position:
*/

export function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) {
    return false;
  }

  const position = walk.reduce(
    (acc, direction) => {
      if (direction === "n") acc.y += 1;
      if (direction === "s") acc.y -= 1;
      if (direction === "e") acc.x += 1;
      if (direction === "w") acc.x -= 1;

      return acc;
    },
    { x: 0, y: 0 }
  );

  return position.x === 0 && position.y === 0;
}

/* Explanation:
   - Start at coordinates (0, 0).

       { x: 0, y: 0 }

   - Each direction changes the position:

       n → y + 1
       s → y - 1
       e → x + 1
       w → x - 1

   - reduce() processes every step
     and updates the current position.

   - After the entire walk:
       x === 0
       y === 0

     means that we returned
     to the starting point.
*/

/* Example:

   walk:
   ["n", "e", "s", "w", "n", "s", "e", "w", "n", "s"]

   Start:
   (0, 0)

   n → (0, 1)
   e → (1, 1)
   s → (1, 0)
   w → (0, 0)
   n → (0, 1)
   s → (0, 0)
   e → (1, 0)
   w → (0, 0)
   n → (0, 1)
   s → (0, 0)

   Final position:
   (0, 0)

   Therefore:
   true
*/

/* OR
   Using lookup tables and reduce():

   This approach maps each direction
   to an axis and a movement value.
*/

interface Coordinates {
  [key: string]: number;
}

const coordinate: { [key: string]: number } = {
  n: 1,
  s: -1,
  w: -1,
  e: 1
};

const directionToAxis: { [key: string]: string } = {
  n: "y",
  s: "y",
  w: "x",
  e: "x"
};

export function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) {
    return false;
  }

  const endPosition = walk.reduce(
    (currentPosition: Coordinates, direction: string) => {
      currentPosition[directionToAxis[direction]] +=
        coordinate[direction];

      return currentPosition;
    },
    { x: 0, y: 0 }
  );

  return endPosition.x === 0 &&
         endPosition.y === 0;
}

/* Explanation:
   - directionToAxis determines whether
     a direction affects x or y.

       n → y
       s → y
       e → x
       w → x

   - coordinate determines the direction
     of the movement.

       n → +1
       s → -1
       e → +1
       w → -1

   - The two objects allow us to avoid
     writing separate if statements
     for every direction.

   - This is more abstract than the previous
     reduce() solution, but demonstrates
     how lookup tables can replace
     conditional logic.
*/

/* OR
   Using regular expressions:

   This version counts occurrences
   of each direction in the string.
*/

export function isValidWalk(walk: string[]): boolean {
  const path = walk.join("");

  return (
    walk.length === 10 &&
    (path.match(/n/g) || []).length ===
      (path.match(/s/g) || []).length &&
    (path.match(/e/g) || []).length ===
      (path.match(/w/g) || []).length
  );
}

/* Explanation:
   - join("") converts the array into one string.

       ["n", "s", "e"]
       → "nse"

   - match(/n/g) finds all occurrences of "n".
   - `.length` gives the number of occurrences.
   - `|| []` handles the case where
     match() returns null.

   The same process is used
   for s, e and w.
*/

/* Critical notes:

   1. Prefer `!==` over `!=`.

      This:

        walk.length !== 10

      is preferable to:

        walk.length != 10

      because `!==` performs strict comparison
      without type coercion.

   2. The regex solution is unnecessarily complicated.

      This:

        walk.join('').match(/n/g)

      requires converting the array to a string
      and then repeatedly searching through it.

      For this problem, simple counters
      or coordinate tracking are clearer.

   3. Avoid calling `join()` repeatedly.

      A version such as:

        walk.join('').match(/n/g)
        walk.join('').match(/s/g)
        walk.join('').match(/e/g)
        walk.join('').match(/w/g)

      creates the same string four times.

      Store it once instead:

        const path = walk.join("");

   4. The lookup-table solution is arguably
      over-engineered for this kata.

      It is technically valid and demonstrates
      an interesting technique, but:

        directionToAxis[direction]
        coordinate[direction]

      are harder to understand than:

        if (direction === "n") ...

      For production code, the simpler solution
      would usually be preferable here.

   5. `forEach()` vs `for...of`

      Your original:

        walk.forEach(step => {
          counts[step] += 1;
        });

      is perfectly valid.

      A `for...of` loop is another good choice
      when the purpose is simply to iterate
      through values:

        for (const step of walk) {
          counts[step]++;
        }

      There is no meaningful performance concern
      for a 10-element array.
*/

/* Difference:
   - Counter object:
       → Very readable
       → Clearly expresses the idea
         of counting opposite directions
       → Good main solution

   - Four variables:
       → Slightly more direct
       → No lookup object needed
       → Also very readable

   - Coordinate + reduce():
       → Models the real-world problem
         mathematically
       → Good demonstration of reduce()

   - Lookup tables:
       → More abstract
       → Flexible
       → Overkill for such a small problem

   - Regular expressions:
       → Valid
       → Concise in some forms
       → Less appropriate here because
         the data is already an array
*/

/* Complexity:
   - Counter solution: O(n) time, O(1) space
   - Four-counter solution: O(n) time, O(1) space
   - Coordinate solution: O(n) time, O(1) space
   - Lookup-table solution: O(n) time, O(1) space
   - Regex solution: O(n) time, O(n) additional space

   where n = number of steps.
*/
