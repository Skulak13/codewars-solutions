// Codewars kata: "Convert number to reversed array of digits"
// Level: 8 kyu
// Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// Date completed: 2025-10-21

// Description: Transform a non-negative number into an array of its digits, arranged starting from the least significant digit (the last one) back to the first.

/* Examples (Input → Output):
    98765 → [5, 6, 7, 8, 9]
    4     → [4]
*/

export const digitize = (n: number): number[] => String(n).split('').map(Number).reverse();

/* Notes:
   - `export` makes the function available outside this file (e.g. for imports in tests).
   - `const` binds the identifier `digitize` to this arrow function and prevents reassignment.
       * Example: `digitize = 123;` would throw an error.
       * This protects against accidental overwriting of the function reference.
   - `(n: number): number[]` is a TypeScript type annotation:
       * `n: number` → the input must be a number
       * `: number[]` → the function returns an array of numbers
   - Arrow function syntax:
       * Without `{}` → the return is implicit (as in this solution).
       * With `{}` → you must explicitly use `return`.
*/

/* Alternative (classic function declaration):

export function digitize(n: number): number[] {
  return String(n).split('').map(Number).reverse();
}

- Here we don’t need `const`, because it’s a named function declaration.
- Still requires `return` inside the body.
*/
