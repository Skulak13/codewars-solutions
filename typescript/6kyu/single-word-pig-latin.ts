// Codewars kata: "Single Word Pig Latin"
// Level: 6 kyu
// Link: https://www.codewars.com/kata/558878ab7591c911a4000007
// Date completed: 2026-07-01

// Description:
// Convert a word into Pig Latin.
//
// Rules:
//   - If the word begins with a vowel, add "way"
//   - If the word begins with one or more consonants,
//     move all leading consonants to the end and add "ay"
//   - If the word contains no vowels, simply add "ay"
//   - Return null if the input contains
//     characters other than English letters

/* Examples:
    pigLatin("apple")    ➞ "appleway"
    pigLatin("banana")   ➞ "ananabay"
    pigLatin("smile")    ➞ "ilesmay"
    pigLatin("rhythms")  ➞ "rhythmsay"
    pigLatin("Hello")    ➞ "ellohay"
    pigLatin("abc123")   ➞ null
*/

/* Notes:
   - Comparison is case-insensitive
   - The returned string is always lowercase
   - Uses regular expressions for validation
     and vowel detection
*/

// Clean & readable solution:
export function pigLatin(str: string): string | null {
  str = str.toLowerCase();

  if (!/^[a-z]+$/.test(str)) {
    return null;
  }

  if (/^[aeiou]/.test(str)) {
    return str + "way";
  }

  const firstVowel = str.search(/[aeiou]/);

  return firstVowel === -1
    ? str + "ay"
    : str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
}

/* Explanation:
   - Convert the input to lowercase.
   - Validate that the string
     contains only English letters.
   - If the first character is a vowel:
       → Append "way".
   - Otherwise:
       → Find the first vowel.
       → Move all leading consonants
         to the end.
       → Append "ay".
   - If no vowel exists,
     simply append "ay".
*/

/* OR
   Without using regular expressions:
*/

export function pigLatin(string: string): string | null {
  const lower = string.toLowerCase();
  const chars = lower.split("");
  const vowels = ["a", "e", "i", "o", "u"];

  if (!chars.every(ch => ch >= "a" && ch <= "z")) {
    return null;
  }

  if (vowels.includes(chars[0])) {
    return lower + "way";
  }

  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i])) {
      return lower.slice(i) + lower.slice(0, i) + "ay";
    }
  }

  return lower + "ay";
}

/* Difference:
   - Uses only array methods
     instead of regular expressions.
   - Easier to understand
     for beginners learning JavaScript.
*/

/* OR
   Helper-function approach:
*/

const stringIsValid = (s: string) => {
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < 97 || s.charCodeAt(i) > 122) {
      return false;
    }
  }
  return true;
};

const vowels = new Set([..."aeiou"]);

const isVowel = (c: string) => vowels.has(c);

const stringFindIndex = (
  s: string,
  predicate: (c: string) => boolean
) => {
  for (let i = 0; i < s.length; i++) {
    if (predicate(s[i])) {
      return i;
    }
  }
  return -1;
};

export const pigLatin = (string: string): string | null => {
  const lower = string.toLowerCase();

  if (!stringIsValid(lower)) {
    return null;
  }

  const firstVowel = stringFindIndex(lower, isVowel);

  if (firstVowel === -1) {
    return `${lower}ay`;
  }

  if (firstVowel === 0) {
    return `${lower}way`;
  }

  return `${lower.slice(firstVowel)}${lower.slice(0, firstVowel)}ay`;
};

/* Difference:
   - Breaks the logic into reusable helper functions.
   - Demonstrates separation of concerns.
   - Easier to extend or unit test.
*/

/* OR
   Using findIndex():
*/

export function pigLatin(str: string): string | null {
  str = str.toLowerCase();

  const vowels = "aeiou";

  if (/[^a-z]/.test(str)) {
    return null;
  }

  const firstVowel = str
    .split("")
    .findIndex(ch => vowels.includes(ch));

  return firstVowel === -1
    ? str + "ay"
    : firstVowel === 0
      ? str + "way"
      : str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
}

/* OR
   Rotating characters until a vowel is found:
*/

export function pigLatin(string: string): string | null {
  const vowelRegex = /[aeiou]/i;
  const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
  const specialCharRegex = /[^a-z]/i;

  if (specialCharRegex.test(string)) {
    return null;
  }

  if (!vowelRegex.test(string)) {
    return (string + "ay").toLowerCase();
  }

  const chars = string.toLowerCase().split("");

  if (vowelRegex.test(chars[0])) {
    return chars.join("") + "way";
  }

  while (consonantRegex.test(chars[0])) {
    chars.push(chars.shift()!);
  }

  return chars.join("") + "ay";
}

/* Explanation:
   - Continuously move the first consonant
     to the end of the array.
   - Stop when the first character
     becomes a vowel.
   - Append "ay" to produce
     the Pig Latin word.
*/

/* Difference:
   - Regex solution:
       → Concise and easy to read
   - No-regex solution:
       → Good for learning string operations
   - Helper-function solution:
       → More modular and reusable
   - Rotation solution:
       → Closely follows the Pig Latin rules
         step by step
*/

/* Complexity:
   - Regex / search solution: O(n)
   - No-regex solution: O(n)
   - Helper-function solution: O(n)
   - Rotation solution: O(n)
*/
