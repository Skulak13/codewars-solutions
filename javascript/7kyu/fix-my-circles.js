// Codewars kata: "Fix My Circles"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/68332539defbf760434582d1/javascript
// Date completed: 2026-05-08

// Description:
// You are given a multiline string representing damaged circles.
// Each line may contain gaps (spaces) between '#' characters.
//
// Replace all spaces located between the first and last '#'
// in each line with '#' characters.
//
// Return the repaired multiline string.

/* Examples:
    Input:
    "# #"
    
    Output:
    "###"

    Input:
    "#   #"
    
    Output:
    "#####"

    Input:
    "##  ##"
    
    Output:
    "######"
*/

/* Notes:
   - Each line is processed independently
   - Only spaces between the first and last '#'
     should be replaced
   - Lines without '#' remain unchanged
*/

// Clean & readable solution:
function circleMender(content) {
  const lines = content.split("\n");

  function mendLine(line) {
    const first = line.indexOf("#");
    const last = line.lastIndexOf("#");

    if (first === -1) return line;

    const chars = line.split("");

    for (let i = first; i <= last; i++) {
      if (chars[i] === " ") {
        chars[i] = "#";
      }
    }

    return chars.join("");
  }

  const fixedLines = lines.map(mendLine);

  return fixedLines.join("\n");
}

/* Explanation:
   - Split the multiline string into individual lines
   - For each line:
       → Find the first '#' position
       → Find the last '#' position
   - If no '#' exists:
       → Return the line unchanged
   - Convert the line into a character array
   - Replace all spaces between
     the first and last '#'
   - Join the characters back into a string
   - Finally, join all repaired lines with '\n'
*/

/* OR
   Regex-based concise solution:
*/

const circleMender = s =>
  s.replace(/#.*#/g, m => "#".repeat(m.length));

/* Explanation:
   - /#.*#/g matches everything
     between the first and last '#'
   - The matched section is replaced with:
       "#".repeat(m.length)
   - This creates a solid block of '#'
     with the same length as the match
*/

/* OR
   Using slice() and repeat():
*/

function circleMender(content) {
  const fixedContent = content
    .split("\n")
    .map(line => {
      const first = line.indexOf("#");
      const last = line.lastIndexOf("#");

      if (first === -1) {
        return line;
      }

      return (
        line.slice(0, first) +
        "#".repeat(last - first + 1) +
        line.slice(last + 1)
      );
    });

  return fixedContent.join("\n");
}

/* Explanation:
   - slice(0, first)
     keeps the beginning of the line
   - repeat(last - first + 1)
     creates a continuous sequence of '#'
   - slice(last + 1)
     keeps the remaining part of the line
   - Combines all pieces into the repaired line
*/

/* Difference:
   - First solution:
       → Most explicit and beginner-friendly
       → Shows the repair process step by step
   - Regex solution:
       → Extremely concise
       → Relies on pattern matching
   - slice/repeat solution:
       → Clean and efficient
       → Avoids modifying arrays directly
*/

/* Complexity:
   - Time complexity: O(n)
     (Each character is processed at most once)
   - Space complexity: O(n)
     (New strings/arrays are created)
*/

