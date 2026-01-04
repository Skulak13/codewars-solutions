// Codewars kata: "Be Concise IV – Index of an element in an array"
// Level: 8 kyu
// Link: https://www.codewars.com/kata/5703c093022cd1aae90012c9
// Date completed: 2026-01-01

// Description:
// Given an array with unique elements and a target value,
// return the index of the element if it exists,
// or the string "Not found" if it does not.

/* Example:
    find([1, 2, 3], 2) ➞ 1
    find(["a", "b", "c"], "d") ➞ "Not found"
*/

/* Notes:
   - All array elements are guaranteed to be unique.
   - The goal of the kata is to shorten the code as much as possible.
   - The original solution uses a for-loop; we replace it with indexOf().
*/

// Clean & readable solution:
function find(array, element) {
  const i = array.indexOf(element);
  return i === -1 ? "Not found" : i;
}

/* Ultra‑concise (Code Golf) version:

   Uses bitwise NOT (~) to check for -1:
   - indexOf() returns -1 when not found
   - ~(-1) becomes 0 → falsy
   - any other index becomes a non-zero number → truthy
*/
find = (a, e) => ~(i = a.indexOf(e)) ? i : "Not found";

/* Explanation:
   - indexOf(e) returns either an index or -1.
   - Bitwise NOT (~) transforms:
       -1 → 0 (falsy)
        0 → -1 (truthy)
        1 → -2 (truthy)
        5 → -6 (truthy)
   - Therefore:
       If element not found → return "Not found"
       Otherwise → return the index
*/

/* Alternative readable version:

const find = (array, element) =>
  array.includes(element)
    ? array.indexOf(element)
    : "Not found";
*/
