// Codewars kata: "Duplicate Encoder"
// Level: 6 kyu
// Link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// Date completed: 2026-07-23

// Description:
// Convert a string into a new string where:
//   - "(" represents a character that appears only once
//   - ")" represents a character that appears more than once
//
// Ignore character casing when determining duplicates.

/* Examples:
    duplicateEncode("din")      ➞ "((("
    duplicateEncode("recede")   ➞ "()()()"
    duplicateEncode("Success")  ➞ ")())())"
    duplicateEncode("(( @")     ➞ "))(("
*/

/* Notes:
   - Comparison is case-insensitive
   - All characters are considered,
     including letters, digits, spaces and symbols
   - Uses indexOf() and lastIndexOf()
     to determine whether a character is unique
*/

// Clean & readable solution:
export function duplicateEncode(word: string) {
  const letters = word.toLowerCase().split("");

  return letters
    .map(ch =>
      letters.indexOf(ch) === letters.lastIndexOf(ch)
        ? "("
        : ")"
    )
    .join("");
}

/* Explanation:
   - Convert the word to lowercase
     so uppercase and lowercase letters
     are treated as the same character.
   - Split the string into an array of characters.
   - For each character:
       → indexOf() returns its first occurrence
       → lastIndexOf() returns its last occurrence
   - If both indexes are equal:
       → The character appears only once
       → Output "("
   - Otherwise:
       → The character is duplicated
       → Output ")"
   - Join all symbols into the final string.
*/

/* OR
   Using filter() to count occurrences:
*/

export function duplicateEncode(word: string) {
  const lower = word.toLowerCase().split("");

  return lower
    .map(ch =>
      lower.filter(x => x === ch).length === 1
        ? "("
        : ")"
    )
    .join("");
}

/* Explanation:
   - filter() creates an array
     containing every occurrence
     of the current character.
   - If the resulting array has length 1,
     the character is unique.
   - This approach is easy to understand,
     but repeatedly scans the array.
*/

/* OR
   Using a frequency object:
*/

export function duplicateEncode(word: string) {
  const lower = word.toLowerCase();
  const counts: Record<string, number> = {};

  for (const ch of lower) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  return lower
    .split("")
    .map(ch => counts[ch] === 1 ? "(" : ")")
    .join("");
}

/* Explanation:
   - First, count how many times
     each character appears.
   - Store the counts in an object.
   - Then map each character:
       → Count equals 1 → "("
       → Otherwise → ")"
   - This avoids repeatedly searching
     through the string.
*/

/* OR
   Dictionary-based solution:
*/

export function duplicateEncode(word: string) {
  const dict: Record<string, string> = {};

  for (const ch of word) {
    const key = ch.toLowerCase();

    if (dict[key]) {
      dict[key] = ")";
    } else {
      dict[key] = "(";
    }
  }

  return word
    .split("")
    .map(ch => dict[ch.toLowerCase()])
    .join("");
}

/* Explanation:
   - The dictionary stores only:
       "(" → first occurrence
       ")" → duplicate found
   - When a character appears again,
     its value is updated to ")".
   - During the second pass,
     each character is replaced
     with its stored symbol.
*/

/* Difference:
   - indexOf()/lastIndexOf():
       → Very readable
       → Good for small inputs
   - filter():
       → Simple to understand
       → Recounts every character
   - Frequency object:
       → Most efficient and scalable
       → Common interview approach
   - Dictionary version:
       → Clever alternative
       → Stores only the final symbol
*/

/* Complexity:
   - indexOf()/lastIndexOf() solution: O(n²)
   - filter() solution: O(n²)
   - Frequency object solution: O(n)
   - Dictionary solution: O(n)
*/
