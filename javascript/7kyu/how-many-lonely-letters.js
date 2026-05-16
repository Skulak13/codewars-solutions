// Codewars kata: "Count Lonely Letters"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/69cda5b85599f307742ce70a
// Date completed: 2026-04-25

// Description:
// A letter is considered "lonely" if:
//   - It appears exactly once in the text
//   - Neither its previous nor next alphabet letter exists in the text
//
// Ignore:
//   - Letter casing
//   - Non-alphabetic characters
//
// Return the number of lonely letters.

/* Examples:
    countLonelyLetters("abc") ➞ 0
    countLonelyLetters("a") ➞ 1
    countLonelyLetters("abd") ➞ 1
    countLonelyLetters("A-d") ➞ 2
*/

/* Notes:
   - Converts text to lowercase for case-insensitive comparison
   - Removes non-letter characters using regex
   - Uses a frequency map to count occurrences
   - Uses char codes to check neighboring letters
*/

// Clean & readable solution:
function countLonelyLetters(text) {
  const letters = text.toLowerCase().replace(/[^a-z]/g, "");

  const counts = {};

  for (const ch of letters) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  let lonelyCount = 0;

  for (const ch in counts) {
    if (counts[ch] !== 1) continue;

    const code = ch.charCodeAt(0);
    const neighbors = [];

    if (ch !== "a") {
      neighbors.push(String.fromCharCode(code - 1));
    }

    if (ch !== "z") {
      neighbors.push(String.fromCharCode(code + 1));
    }

    if (!counts[neighbors[0]] && !counts[neighbors[1]]) {
      lonelyCount++;
    }
  }

  return lonelyCount;
}

/* Explanation:
   - First:
       → Convert the text to lowercase
       → Remove all non-letter characters
   - Create a frequency object (`counts`)
     to store how many times each letter appears
   - Iterate through all unique letters:
       → Skip letters appearing more than once
       → Determine neighboring letters
         using ASCII/Unicode character codes
   - A letter is lonely when:
       → It appears exactly once
       → Neither alphabet neighbor exists in the text
   - Count all lonely letters and return the result
*/

/* OR
   Optimized Set-based solution:
*/

function countLonelyLetters(text) {
  const seen = new Set();
  const dups = new Set();

  for (const letter of text.match(/[a-z]/gi) || []) {
    const pos = letter.charCodeAt(0) & 0b11111;

    (seen.has(pos) ? dups : seen).add(pos);
  }

  let lonely = 0;

  for (const pos of seen) {
    if (
      !dups.has(pos) &&
      !seen.has(pos - 1) &&
      !seen.has(pos + 1)
    ) {
      lonely++;
    }
  }

  return lonely;
}

/* Explanation:
   - Uses Sets instead of a frequency object
   - `seen` stores encountered letters
   - `dups` stores duplicated letters
   - Bitwise operation:
       charCodeAt(0) & 0b11111
     converts letters into positions 1–26
   - A letter is lonely when:
       → It is not duplicated
       → Neighbor positions do not exist
*/

/* OR
   Functional array-based solution:
*/

const countLonelyLetters = text =>
  [...text.toLowerCase().replace(/[^a-z]/g, "")]
    .filter(
      (el, i, arr) =>
        i === arr.lastIndexOf(el) &&
        i === arr.indexOf(el) &&
        !arr.includes(
          String.fromCharCode(el.charCodeAt(0) - 1)
        ) &&
        !arr.includes(
          String.fromCharCode(el.charCodeAt(0) + 1)
        )
    ).length;

/* Explanation:
   - Converts the cleaned string into an array
   - filter() keeps only letters that:
       → Appear exactly once
       → Do not have neighboring letters
   - indexOf() and lastIndexOf()
     verify uniqueness
   - includes() checks whether
     adjacent alphabet letters exist
*/

/* Difference:
   - Frequency-map solution:
       → Most readable
       → Good balance of clarity and performance
   - Set-based solution:
       → More optimized and low-level
       → Uses bitwise operations
   - Functional solution:
       → Very concise
       → Less efficient due to repeated includes() checks
*/

/* Complexity:
   - Frequency-map solution: O(n)
   - Set-based solution: O(n)
   - Functional filter/includes solution: O(n²)
*/
