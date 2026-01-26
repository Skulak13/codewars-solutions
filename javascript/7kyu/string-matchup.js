// Codewars kata: "String matchup"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4
// Date completed: 2026-01-26

// Description:
// Given two arrays of strings `a` and `b`,
// return a new array where each element represents
// how many times the corresponding string from `b`
// appears in array `a`.

/* Examples:
    solve(["abc", "abc", "xyz"], ["abc", "xyz", "def"])
    ➞ [2, 1, 0]

    solve(["a", "a", "b", "b"], ["a", "b", "c"])
    ➞ [2, 2, 0]
*/

/* Notes:
   - Counts occurrences of each string in array `a`
   - Uses an object as a frequency map
   - Avoids repeated filtering for better performance
*/

function solve(a, b) {
  const counts = {};

  for (const word of a) {
    counts[word] = (counts[word] || 0) + 1;
  }

  return b.map(word => counts[word] || 0);
}

/* Explanation:
   - First, we create an object (`counts`) to store
     how many times each string appears in array `a`.
   - We iterate over `a` and increment the counter
     for each encountered string.
   - Then we map over array `b`:
       → For each string, we return its count from `counts`
       → If the string does not exist in `a`, we return 0
   - The result array matches the order of strings in `b`
*/

/* OR
   Alternative concise (but less efficient) solution:

   For each element in `b`, we filter array `a`
   and count matching elements.
   This approach is simpler but runs in O(n²).
*/

const solve = (a, b) =>
  b.map(word => a.filter(el => el === word).length);

/* Notes on complexity:
   - Frequency map version: O(n + m)
   - Filter-based version: O(n × m)
   - For larger inputs, the first solution is preferred
*/
