// Codewars kata: "Jumping Number (Special Numbers Series #4)"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed
// Date completed: 2026-04-26

// Description:
// A number is called a "Jumping Number"
// if the absolute difference between every pair
// of adjacent digits is exactly 1.
//
// Return:
//   "Jumping!!" → if the number is a Jumping Number
//   "Not!!"     → otherwise

/* Examples:
    jumpingNumber(9) ➞ "Jumping!!"
    jumpingNumber(23) ➞ "Jumping!!"
    jumpingNumber(79) ➞ "Not!!"
    jumpingNumber(8987) ➞ "Jumping!!"
    jumpingNumber(4343456) ➞ "Jumping!!"
    jumpingNumber(98789876) ➞ "Not!!"
*/

/* Notes:
   - Single-digit numbers are always Jumping Numbers
   - Uses Math.abs() to compare adjacent digits
   - Converts the number into an array of digit characters
*/

// Clean & readable solution:
export function jumpingNumber(n: number): string {
  const digits = n.toString().split("");

  for (let i = 0; i < digits.length - 1; i++) {
    if (Math.abs(+digits[i] - +digits[i + 1]) !== 1) {
      return "Not!!";
    }
  }

  return "Jumping!!";
}

/* Explanation:
   - Convert the number into an array of digits:
       → "234" becomes ["2", "3", "4"]
   - Loop through adjacent digit pairs
   - For each pair:
       → Convert strings to numbers using unary plus (+)
       → Calculate absolute difference with Math.abs()
   - If any difference is not equal to 1:
       → Return "Not!!"
   - If all adjacent digits differ by exactly 1:
       → Return "Jumping!!"
*/

/* OR
   Functional approach using every():
*/

export function jumpingNumber(n: number): string {
  const arr: string[] = [...String(n)];

  return arr
    .slice(1)
    .every((x, i) => Math.abs(+x - +arr[i]) === 1)
      ? "Jumping!!"
      : "Not!!";
}

/* Explanation:
   - [...String(n)] converts the number into an array of digits
   - slice(1) skips the first digit
   - every() checks whether all adjacent pairs
     satisfy the condition
   - `x` is the current digit
   - `arr[i]` is the previous digit
   - If every comparison returns true:
       → The number is a Jumping Number
*/

/* Difference:
   - The first solution is more explicit and beginner-friendly
   - The second solution is shorter
     and uses a more functional programming style
*/

/* Complexity:
   - Time complexity: O(n)
     (Each digit is checked once)
   - Space complexity: O(n)
     (The number is converted into a digit array)
*/
