// Codewars kata: "Sum of Digits / Digital Root"
// Level: 6 kyu
// Link: https://www.codewars.com/kata/541c8630095125aba6000c00
// Date completed: 2026-01-XX

// Description:
// Given a non-negative integer, return its digital root.
//
// The digital root is obtained by repeatedly summing
// the digits of a number until only one digit remains.

/* Examples:
    digitalRoot(16) ➞ 7
    // 1 + 6 = 7

    digitalRoot(942) ➞ 6
    // 9 + 4 + 2 = 15
    // 1 + 5 = 6

    digitalRoot(132189) ➞ 6
    // 1 + 3 + 2 + 1 + 8 + 9 = 24
    // 2 + 4 = 6

    digitalRoot(493193) ➞ 2
    // 4 + 9 + 3 + 1 + 9 + 3 = 29
    // 2 + 9 = 11
    // 1 + 1 = 2
*/

/* Notes:
   - Uses recursion to repeatedly sum digits
   - Converts the number into an array of digits
   - Stops when the result contains only one digit
*/

// Clean & readable solution:
export const digitalRoot = (n: number): number => {
  const digits = Array.from(String(n), Number);

  const sum = digits.reduce(
    (acc, curr) => acc + curr,
    0
  );

  if (String(sum).length === 1) {
    return sum;
  }

  return digitalRoot(sum);
};

/* Explanation:
   - Convert the number into an array of digits.
       Example:
       942 → [9, 4, 2]
   - Use reduce() to calculate
     the sum of all digits.
   - If the result has only one digit,
     return it.
   - Otherwise,
     call digitalRoot() again
     with the new sum.
   - This is an example of recursion:
     the function keeps calling itself
     until the stopping condition is met.
*/

/* OR
   Iterative solution (without recursion):
*/

export const digitalRoot = (n: number): number => {
  let value = n;

  while (String(value).length > 1) {
    const digits = Array.from(String(value), Number);

    value = digits.reduce(
      (acc, curr) => acc + curr,
      0
    );
  }

  return value;
};

/* Difference:
   - Produces exactly the same result.
   - Uses a while loop
     instead of recursive function calls.
   - Some developers prefer this approach
     because it avoids recursive calls.
*/

/* OR
   Mathematical solution:
*/

export function digitalRoot(n: number): number {
  return (n - 1) % 9 + 1;
}

/* Explanation:
   - This solution is based on
     a mathematical property
     called the digital root formula.
   - Every positive integer has
     the same digital root as
     its remainder modulo 9.
   - The formula computes
     the final answer directly,
     without processing individual digits.
*/

/* Why does it work?
   - Every positive integer has the same digital root
     as its remainder when divided by 9.
   - The expression `(n - 1) % 9 + 1`
     correctly maps multiples of 9 to 9
     instead of 0.
*/

/* OR
   Recursive solution using arithmetic only:
*/

export const digitalRoot = (n: number): number => {
  if (n < 10) {
    return n;
  }

  let digitSum = 0;

  while (n > 0) {
    digitSum += n % 10;
    n = Math.trunc(n / 10);
  }

  return digitalRoot(digitSum);
};

/* Explanation:
   - n % 10 extracts the last digit.
   - Math.trunc(n / 10)
     removes the last digit.
   - Repeat until all digits
     have been processed.
   - Apply recursion
     until a single-digit result
     is obtained.
*/

/* OR
   Fully recursive arithmetic solution:
*/

export const digitalRoot = (n: number): number => {
  if (n <= 9) {
    return n;
  }

  return digitalRoot(
    (n % 10) + digitalRoot(Math.floor(n / 10))
  );
};

/* Explanation:
   - Recursively split the number
     into its last digit
     and the remaining digits.
   - Compute the digital root
     of the remaining part,
     then add the last digit.
   - Continue recursively
     until only one digit remains.
*/

/* Difference:
   - Array version:
       → Very readable
       → Uses modern JavaScript methods
   - Iterative version:
       → Avoids recursion
       → Easy to follow
   - Mathematical version:
       → Fastest solution
       → Relies on number theory
   - Arithmetic recursive version:
       → Avoids converting numbers to strings
   - Fully recursive arithmetic version:
       → Elegant but less intuitive
*/

/* Complexity:
   - Recursive array solution: O(d)
   - Iterative solution: O(d)
   - Arithmetic recursive solution: O(d)
   - Mathematical formula: O(1)

   where d is the number of digits.
*/
