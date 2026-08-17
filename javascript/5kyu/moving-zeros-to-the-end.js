// Codewars kata: "Moving Zeros To The End"
// Level: 5 kyu
// Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Date completed: 2026-08-12

// Description:
// Move all zeros in an array to the end of the array
// while preserving the order of the other elements.
//
// The function should return a new array.

/* Examples:
    moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])
    ➞ [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

    moveZeros([0, 0, 1, 2])
    ➞ [1, 2, 0, 0]

    moveZeros([1, 2, 3])
    ➞ [1, 2, 3]

    moveZeros([0])
    ➞ [0]
*/

/* Notes:
   - Only the number 0 should be moved.
   - The order of non-zero elements must be preserved.
   - The number of zeros must remain unchanged.
   - The original array should not be modified.
*/

// Clean & readable solution:
function moveZeros(arr: number[]): number[] {
  const nonZeros = arr.filter(x => x !== 0);
  const zeroCount = arr.length - nonZeros.length;

  return [
    ...nonZeros,
    ...Array(zeroCount).fill(0)
  ];
}

/* Explanation:
   - First, filter out all zeros.

       [1, 0, 2, 0, 3]
                ↓
       [1, 2, 3]

   - Count how many zeros were removed.

       Original length: 5
       Non-zero length: 3

       5 - 3 = 2 zeros

   - Create an array containing
     the required number of zeros:

       Array(2).fill(0)
       → [0, 0]

   - Combine both arrays:

       [1, 2, 3] + [0, 0]
       → [1, 2, 3, 0, 0]

   - The spread operator `...`
     places the elements of the arrays
     into the new array.
*/

/* OR
   Using filter() twice:
*/

function moveZeros(arr: number[]): number[] {
  const nonZeros = arr.filter(x => x !== 0);
  const zeros = arr.filter(x => x === 0);

  return nonZeros.concat(zeros);
}

/* Explanation:
   - The first filter() creates an array
     containing all non-zero values.
   - The second filter() creates an array
     containing all zeros.
   - concat() combines them.

       nonZeros + zeros
       → [1, 2, 3, 0, 0]

   - filter() preserves the original
     order of elements, so the order
     of non-zero values remains unchanged.
*/

/* OR
   Creating the zero array manually:
*/

function moveZeros(arr: number[]): number[] {
  const nonZeros = arr.filter(x => x !== 0);
  const zeroCount = arr.length - nonZeros.length;

  const zeros: number[] = [];

  for (let i = 0; i < zeroCount; i++) {
    zeros.push(0);
  }

  return nonZeros.concat(zeros);
}

/* Explanation:
   - Find all non-zero values.
   - Calculate how many zeros
     need to be added.
   - Use a loop to create
     the required number of zeros.
   - Combine the two arrays.
*/

/* OR
   Using a single loop:
*/

function moveZeros(arr: number[]): number[] {
  const nonZeros: number[] = [];
  const zeros: number[] = [];

  for (const x of arr) {
    if (x === 0) {
      zeros.push(0);
    } else {
      nonZeros.push(x);
    }
  }

  return [...nonZeros, ...zeros];
}

/* Explanation:
   - Go through the array only once.
   - If the current value is exactly 0,
     put it into the zeros array.
   - Otherwise, put it into nonZeros.
   - At the end, combine both arrays.
*/

/* Critical notes:
   
   1. Use `x !== 0`, not `!x`.

      This kata is about moving the NUMBER 0.

      `!x` would also treat other falsy values
      as zeros, for example:

        false
        ""
        null
        undefined
        NaN

      Example:

        [1, false, 0, 2]

      With:

        x !== 0

      `false` stays where it is.

      With:

        !x

      `false` would incorrectly be treated
      as a zero-like value.

   2. Prefer `!==` over `!=`.

      `!==` performs strict comparison
      and does not perform type coercion.

      This is clearer and safer:

        x !== 0

      rather than:

        x != 0

   3. Do not use `sort()`.

      A tempting solution might be:

        arr.sort(...)

      but this is a poor approach here.

      - It can modify the original array.
      - It makes preserving the order
        of non-zero values unnecessarily difficult.
      - It solves the problem indirectly.

   4. Do not use `splice()` repeatedly.

      Repeatedly finding and removing zeros
      would cause unnecessary array operations
      and make the solution more complicated.
*/

/* Difference:
   - filter() + Array.fill():
       → Concise
       → Easy to read
       → Creates a new array
       → Good solution

   - filter() twice:
       → Probably the most immediately
         understandable version
       → Slightly less efficient because
         the array is traversed twice

   - Manual zero creation:
       → More verbose
       → Useful for practicing loops

   - Single loop:
       → Traverses the array only once
       → Very explicit
       → Good algorithmic solution
*/

/* Complexity:
   - filter() + Array.fill():
       Time: O(n)
       Space: O(n)

   - filter() twice:
       Time: O(n)
       Space: O(n)

   - Single loop:
       Time: O(n)
       Space: O(n)

   where n = number of elements in the array.
*/
