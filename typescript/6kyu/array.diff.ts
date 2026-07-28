// Codewars kata: "Array.diff"
// Level: 6 kyu
// Link: https://www.codewars.com/kata/523f5d21c841566fde000009
// Date completed: 2026-06-11

// Description:
// Implement a function that removes all values from array `a`
// that are present in array `b`.
//
// Return a new array containing only the elements
// that do not appear in `b`.

/* Examples:
    arrayDiff([1, 2], [1]) ➞ [2]
    arrayDiff([1, 2, 2], [1]) ➞ [2, 2]
    arrayDiff([1, 2, 2], [2]) ➞ [1]
    arrayDiff([1, 2, 2], []) ➞ [1, 2, 2]
    arrayDiff([], [1, 2]) ➞ []
*/

/* Notes:
   - The order of the remaining elements is preserved
   - Every occurrence of a value found in `b`
     is removed from `a`
   - Uses filter() together with includes()
     for a concise solution
*/

// Clean & readable solution:
export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(x => !b.includes(x));
}

/* Explanation:
   - filter() iterates through every element of array `a`.
   - For each element:
       → includes() checks whether
         the value exists in array `b`.
   - If the value is NOT found,
     filter() keeps it.
   - Otherwise, the element is removed.
   - The returned array contains
     only values that are unique to `a`.
*/

/* OR
   Using a Set for faster lookups:
*/

export function arrayDiff(a: number[], b: number[]): number[] {
  const setB = new Set(b);

  return a.filter(x => !setB.has(x));
}

/* Explanation:
   - Convert array `b` into a Set.
   - Set.has() performs lookups
     much faster than includes()
     for large collections.
   - The filtering logic
     remains exactly the same.
*/

/* OR
   Using an object as a lookup table:
*/

export function arrayDiff(a: number[], b: number[]): number[] {
  type Lookup = {
    [key: string]: number;
  };

  const lookup: Lookup = {};
  const result: number[] = [];

  for (const value of b) {
    lookup[value] = 1;
  }

  for (const value of a) {
    if (lookup[value] === undefined) {
      result.push(value);
    }
  }

  return result;
}

/* Explanation:
   - Store every value from `b`
     inside an object.
   - The object works as
     a lookup table.
   - Iterate through array `a`:
       → If the value does not exist
         in the lookup table,
         add it to the result.
*/

/* OR
   Removing values using splice():
*/

export function arrayDiff(a: number[], b: number[]): number[] {
  const result = [...a];

  for (const value of b) {
    while (result.indexOf(value) !== -1) {
      result.splice(result.indexOf(value), 1);
    }
  }

  return result;
}

/* Explanation:
   - Create a copy of array `a`
     so the original array
     remains unchanged.
   - For each value in `b`:
       → Find its position
         using indexOf().
       → Remove it using splice().
       → Repeat until
         no more occurrences exist.
*/

/* Difference:
   - filter() + includes():
       → Short and very readable
       → Great for most situations
   - Set:
       → Best performance
         for larger arrays
       → Common interview solution
   - Lookup object:
       → Similar performance to Set
       → Useful when Sets are unavailable
   - splice():
       → Demonstrates manual removal
       → Less efficient due to repeated searches
*/

/* Complexity:
   - filter() + includes(): O(n × m)
   - Set solution: O(n + m)
   - Lookup object solution: O(n + m)
   - splice() solution: O(n × m)

   where:
   - n = length of array `a`
   - m = length of array `b`
*/
