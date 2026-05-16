// Codewars kata: "Calculate mean and concatenate string"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/typescript
// Date completed: 2026-05-01

// Description:
// Given an array containing 10 numeric strings
// and 10 alphabetic strings,
// return:
//   1. The mean (average) of the numeric values
//   2. A concatenated string of all alphabetic values

/* Examples:
    mean([
      "u", "6", "d", "1", "i", "w", "6", "s", "t", "4",
      "a", "6", "g", "1", "x", "2", "v", "1", "h", "0"
    ])
    ➞ [2.7, "udiwstagxvh"]

    mean([
      "1", "a", "2", "b", "3", "c", "4", "d", "5", "e",
      "6", "f", "7", "g", "8", "h", "9", "i", "0", "j"
    ])
    ➞ [4.5, "abcdefghij"]
*/

/* Notes:
   - Numeric strings are converted using Number()
   - Alphabetic characters are concatenated into one string
   - The array always contains 10 numbers and 10 letters
   - The final mean is calculated by dividing the sum by 10
*/

// Clean & readable solution:
export function mean(lst: string[]): [number, string] {
  let sum = 0;
  let str = "";
  lst.forEach(x => isNaN(Number(x)) ? str += x : sum += Number(x));
  const mean = sum / 10;
  return [mean, str];
}

/* Explanation:
   - We initialize:
       → `sum` to store numeric values
       → `str` to collect alphabetic characters
   - For each element:
       → Convert it with Number(x)
       → If conversion results in NaN,
         it is treated as a letter
       → Otherwise, add the number to `sum`
   - After processing all elements:
       → Divide sum by 10 to calculate the mean
       → Return both values as a tuple:
         [mean, concatenatedString]
*/

/* OR
   Using reduce() for accumulation:
*/

export function mean(lst: string[]): [number, string] {
  const result = lst.reduce(
    (acc, x) => {
      if (isNaN(Number(x))) {
        acc.str += x;
      } else {
        acc.sum += Number(x);
      }

      return acc;
    },
    { sum: 0, str: "" }
  );

  return [result.sum / 10, result.str];
}

/* Difference:
   - Uses reduce() instead of external variables
   - Keeps all accumulation logic in one place
   - More functional programming style
*/

/* OR
   Regex-based concise solution:
*/

export function mean(lst: string[]): [number, string] {
  const a: number =
    lst.reduce(
      (sum, x) => sum + (/\d+/.test(x) ? +x : 0),
      0
    ) / 10;

  const b: string =
    lst.join("").replace(/\d/g, "");

  return [a, b];
}

/* Explanation:
   - /\d+/ checks whether a string contains digits
   - Unary plus (+x) converts string to number
   - join("") merges all elements into one string
   - replace(/\d/g, "") removes all digits,
     leaving only letters
*/

/* Complexity:
   - Time complexity: O(n)
     (Each element is processed once)
   - Space complexity: O(n)
     (A new string is created for the result)
*/
