// Codewars kata: "Last"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/541629460b198da04e000bb9/javascript
// Date completed: 2025-11-01

// Description: Return the last element of the given argument(s).
// If a single argument is passed and it is an array or string, return its last element.
// If multiple arguments are passed, return the last one.

/* Examples:
    last(5)               ➞ 5
    last([1, 2, 3, 4])    ➞ 4
    last("xyz")           ➞ "z"
    last(1, 2, 3, 4)      ➞ 4
    last([1, 2], [3, 4])  ➞ [3, 4]
    last([[1, 2], [3, 4]]) ➞ [3, 4]
*/

/* Notes:
   - Uses rest parameters to handle any number of arguments
   - Checks whether the single argument is a string or an array
   - Returns the last element or argument accordingly
*/

function last(...args) {
  if (args.length === 1) {
    const item = args[0];
    if (typeof item === "string" || Array.isArray(item)) {
      return item[item.length - 1];
    } else {
      return item;
    }
  } else {
    return args[args.length - 1];
  }
}

/* Explanation:
   - If only one argument is given, we check its type:
       → If it’s a string or array, return its last element.
       → Otherwise, return the value itself.
   - If multiple arguments are passed, simply return the last one.
*/

/* OR
   Alternative concise version (by another Codewars user):

function last(first, ...rest) {
  if (rest.length) return rest.pop();          // If multiple arguments → return the last
  if (first.length) return [...first].pop();   // If array/string → spread and pop last
  return first;                                // Otherwise → return itself
}
*/

/* OR
   Minimalist approach using arguments object:

function last(list) {
  return arguments.length > 1
    ? arguments[arguments.length - 1]          // Multiple args → return last
    : list[list.length - 1] || arguments[0];   // Single arg → last element or itself
}
*/
