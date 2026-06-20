// Codewars kata: "Regex validate PIN code"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
// Date completed: 2026-06-20

/*
  This function checks whether the input string is a valid PIN.
  A valid PIN must meet ONE of the following conditions:
  - exactly 4 digits (e.g. "1234")
  - exactly 6 digits (e.g. "123456")
*/  

function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

/*
  Explanation of the regex:
  /^(\d{4}|\d{6})$/

  ^        → start of the string
  ( ... )  → group of alternatives
  \d{4}    → exactly 4 digits (0-9)
  |        → OR
  \d{6}    → exactly 6 digits (0-9)
  $        → end of the string

  The .test(pin) method returns:
  - true if the string matches the pattern
  - false otherwise
*/
