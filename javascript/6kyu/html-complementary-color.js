// Codewars kata: "HTML Complementary Color"
// Level: 6 kyu
// Link: https://www.codewars.com/kata/56be4affc5dc03b84b001d2d/javascript
// Date completed: 2026-03-05

// Description:
// Given a hexadecimal color value,
// return its reversed (complementary) color.
//
// The function should:
//   - Accept a hex string without '#'
//   - Validate the input
//   - Return the reversed color in uppercase
//     prefixed with '#'

/* Examples:
    getReversedColor("000000") ➞ "#FFFFFF"
    getReversedColor("FFFFFF") ➞ "#000000"
    getReversedColor("F0F0F0") ➞ "#0F0F0F"
    getReversedColor("ABC") ➞ "#FFF543"
*/

/* Notes:
   - Uses hexadecimal number conversion
   - 0xFFFFFF represents white in hex
   - Reversed color is calculated as:
       0xFFFFFF - originalColor
   - Input may contain fewer than 6 characters,
     so padStart() is used
*/

// Clean & readable solution:
function getReversedColor(hexColor) {
  if (
    typeof hexColor !== "string" ||
    !/^[0-9A-Fa-f]{0,6}$/.test(hexColor)
  ) {
    throw new Error("Incorrect color format");
  }

  hexColor = hexColor.padStart(6, "0");

  const resultNumber =
    parseInt("FFFFFF", 16) - parseInt(hexColor, 16);

  return (
    "#" +
    resultNumber
      .toString(16)
      .toUpperCase()
      .padStart(6, "0")
  );
}

/* Explanation:
   - Validate the input:
       → Must be a string
       → Must contain only hex characters
       → Maximum length: 6
   - padStart(6, "0")
     ensures the color always has 6 digits
   - parseInt(hex, 16)
     converts hexadecimal into decimal
   - Subtract the value from 0xFFFFFF
     to get the complementary color
   - Convert the result back to hexadecimal
   - Format the output:
       → uppercase
       → exactly 6 digits
       → prefixed with '#'
*/

/* OR
   Compact version using hexadecimal literals:
*/

function getReversedColor(hc) {
  if (
    typeof hc !== "string" ||
    hc.length > 6 ||
    /[^\da-f]/i.test(hc)
  ) {
    throw "Invalid input";
  }

  return (
    "#" +
    (
      "00000" +
      (0xFFFFFF - parseInt(hc || 0, 16))
        .toString(16)
        .toUpperCase()
    ).slice(-6)
  );
}

/* Difference:
   - Uses hexadecimal literal: 0xFFFFFF
   - Uses slice(-6) instead of padStart()
   - More concise but less readable
*/

/* OR
   TypeError-based implementation:
*/

const getReversedColor = hexColor => {
  if (!/^[0-9a-f]{0,6}$/i.test(hexColor)) {
    throw new TypeError();
  }

  const fullHex = hexColor.padStart(6, "0");
  const decValue = parseInt(fullHex, 16);

  const complement = 0xffffff - decValue;

  const result = complement
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();

  return `#${result}`;
};

/* OR
   Minimal validation approach:
*/

function getReversedColor(hexColor) {
  if (typeof hexColor !== "string") {
    throw new TypeError();
  }

  if (!/^[a-f\d]{0,6}$/i.test(hexColor)) {
    throw new Error();
  }

  const complement =
    0xffffff - parseInt(hexColor || "0", 16);

  return (
    "#" +
    complement
      .toString(16)
      .toUpperCase()
      .padStart(6, "0")
  );
}

/* Difference:
   - First solution:
       → Most readable and beginner-friendly
       → Explicit validation and formatting
   - Compact solution:
       → Shorter and more code-golf style
   - TypeError versions:
       → Closer to real-world API validation
*/

/* Complexity:
   - Time complexity: O(1)
     (Hex color length is always limited to 6)
   - Space complexity: O(1)
*/
