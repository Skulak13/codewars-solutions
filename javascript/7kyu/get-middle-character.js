// Codewars kata: "Get the Middle Character"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/56747fd5cb988479af000028
// Date completed: 2026-03-04

// Description:
// Given a string, return its middle character.
// If the string length is odd → return the middle character.
// If the string length is even → return the two middle characters.

/* Examples:
    getMiddle("test") ➞ "es"
    getMiddle("testing") ➞ "t"
    getMiddle("middle") ➞ "dd"
    getMiddle("A") ➞ "A"
*/

/* Notes:
   - Uses Math.floor() to determine the middle index
   - Checks if string length is even or odd
   - Uses slice() to extract the correct character(s)
*/

function getMiddle(s) {
  const mid = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s.slice(mid - 1, mid + 1)
    : s.slice(mid, mid + 1);
}

/* Explanation:
   - First, we calculate the middle index:
       mid = floor(length / 2)
   - If length is even:
       → There are two middle characters
       → We slice from (mid - 1) to (mid + 1)
   - If length is odd:
       → There is one middle character
       → We slice from mid to mid + 1
   - slice(start, end) extracts characters
     from start index up to (but not including) end
*/

/* OR
   Using direct index access instead of slice():
*/

function getMiddle(s) {
  const mid = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s[mid - 1] + s[mid]
    : s[mid];
}

/* Difference:
   - This version concatenates characters manually
   - Slightly more explicit
   - Both solutions have the same complexity
*/

/* OR
   Using substr() (legacy-style method):
*/

function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  const isEven = s.length % 2 === 0;

  return s.substr(isEven ? mid - 1 : mid, isEven ? 2 : 1);
}

/* OR
   Mathematical slicing approach:
*/

function getMiddle(s) {
  const l = s.length;
  const toCut = Math.floor((l - (l % 2 ? 1 : 2)) / 2);
  return s.slice(toCut, l - toCut);
}

/* OR
   Compact version using Math.ceil():
*/

function getMiddle(s) {
  return s.substr(
    Math.ceil(s.length / 2 - 1),
    s.length % 2 === 0 ? 2 : 1
  );
}

/* Complexity Big-O:
   - Time complexity: O(1)
     (String length is accessed once and we slice at most 2 characters)
   - Space complexity: O(1)
     (Only a small substring is created)
*/
