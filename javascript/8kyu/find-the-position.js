// Codewars kata: "Find the position!"
// Level: 8 kyu
// Link: https://www.codewars.com/kata/5808e2006b65bff35500008f
// Date completed: 2025-10-13

// Description: Given a lowercase letter, return its position in the alphabet.
/* Example:
    position('a') ➞ "Position of alphabet: 1"
    position('z') ➞ "Position of alphabet: 26"
*/

function position(letter){
  const pos = letter.toLowerCase().charCodeAt(0) - 96;
  return `Position of alphabet: ${pos}`;

  /* a-z from 97 to 122
  
  validation:
  
  function positionSafe(letter) {
    if (typeof letter !== 'string' || !/^[a-z]$/.test(letter)) return 'Invalid input';
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
  }

  
  OR (less efficient) 
  
  function position(letter) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const pos = alphabet.indexOf(letter.toLowerCase()) + 1;
    return `Position of alphabet: ${pos}`;
  }

  */
}
