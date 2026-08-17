// Codewars kata: "Human Readable Time"
// Level: 5 kyu
// Link: https://www.codewars.com/kata/52685f7382004e774f0001f7
// Date completed: 2026-08-14

// Description:
// Convert a number of seconds into a human-readable time
// in the format "HH:MM:SS".
//
// The returned string must always contain:
//   - 2 digits for hours
//   - 2 digits for minutes
//   - 2 digits for seconds

/* Examples:
    humanReadable(0) ➞ "00:00:00"
    humanReadable(5) ➞ "00:00:05"
    humanReadable(60) ➞ "00:01:00"
    humanReadable(86399) ➞ "23:59:59"
    humanReadable(359999) ➞ "99:59:59"
*/

/* Notes:
   - 1 minute = 60 seconds
   - 1 hour = 3600 seconds
   - Math.floor() is used to get complete hours/minutes
   - The remainder (%) is used to find the remaining time
   - padStart() ensures that each value has two digits
*/

// Clean & readable solution:
export function humanReadable(seconds: number): string {
  const hours = Math.floor(seconds / 3600);

  const remaining = seconds % 3600;

  const minutes = Math.floor(remaining / 60);
  const secs = Math.floor(remaining % 60);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

/* Explanation:
   - First, calculate the number of complete hours:
       seconds / 3600

   - Math.floor() removes the decimal part.

   - Then calculate how many seconds remain
     after removing the complete hours:
       seconds % 3600

   - From the remaining seconds,
     calculate complete minutes:
       remaining / 60

   - Finally, the remaining seconds
     are obtained using:
       remaining % 60

   - String(value).padStart(2, "0")
     converts the number to a string
     and adds a leading zero when necessary.

   Example:

       3661 seconds

       3661 / 3600 = 1.016...
       Math.floor(...) = 1 hour

       3661 % 3600 = 61 seconds remaining

       61 / 60 = 1.016...
       Math.floor(...) = 1 minute

       61 % 60 = 1 second

       Result:
       "01:01:01"
*/

/* OR
   Using an array and map():
*/

const format = (n: number) =>
  String(Math.floor(n)).padStart(2, "0");

export function humanReadable(seconds: number): string {
  const hours = seconds / 3600;
  const minutes = (seconds % 3600) / 60;
  const secs = (seconds % 3600) % 60;

  return [hours, minutes, secs]
    .map(format)
    .join(":");
}

/* Explanation:
   - Calculate hours, minutes and seconds separately.
   - `format()` converts each value into
     a two-digit string.
   - map() applies the same formatting
     to all three values.
   - join(":") combines the results.

   Example:

       [1, 1, 1]
         ↓ map(format)
       ["01", "01", "01"]
         ↓ join(":")
       "01:01:01"
*/

/* OR
   Using toLocaleString() for formatting:
*/

const formatting = (n: number): string => {
  return n.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    maximumSignificantDigits: 2,
    useGrouping: false
  });
};

export function humanReadable(seconds: number): string {
  if (seconds <= 0 || seconds > 359999) {
    return "00:00:00";
  }

  const hours = formatting(Math.floor(seconds / 3600));
  const minutes = formatting(Math.floor(seconds % 3600 / 60));
  const secs = formatting(Math.floor(seconds % 3600 % 60));

  return `${hours}:${minutes}:${secs}`;
}

/* Explanation:
   - toLocaleString() can be used
     to control number formatting.
   - minimumIntegerDigits: 2
     ensures at least two digits.
   - useGrouping: false
     prevents separators such as commas.
*/

/* Difference:
   - First solution:
       → Most explicit and easiest to understand
       → Clearly separates each calculation
       → Best for readability

   - map() solution:
       → More concise
       → Avoids repeating the same formatting code
       → Demonstrates array methods

   - toLocaleString() solution:
       → Uses built-in number formatting
       → More complicated than necessary for this kata
*/

/* Complexity:
   - Time complexity: O(1)
     (A fixed number of calculations is performed)
   - Space complexity: O(1)
     (Only a fixed number of variables are created)
*/
