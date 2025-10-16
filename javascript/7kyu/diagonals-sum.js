// Codewars kata: "Diagonals sum"
// Level: 7 kyu
// Link: https://www.codewars.com/kata/5592fc599a7f40adac0000a8
// Date completed: 2025-10-16

// Description: Given a square matrix, calculate the sum of both diagonals.
/* Example:
    sum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]) ➞ 1 + 5 + 9 + 3 + 5 + 7 = 30
*/

/* Notes:
   - Works for any square matrix (n x n)
   - The center element of odd-sized matrices is counted twice,
     as it belongs to both diagonals (consistent with kata description)
*/

function sum(matrix) {
  let total = 0;
  const l = matrix.length;

  for (let i = 0; i < l; i++) {
    total += matrix[i][i];             // Main diagonal
    total += matrix[i][l - 1 - i];     // Secondary diagonal
  }

  return total;
}

/* Alternative (concise) version using reduce:

const sum = matrix =>
  matrix.reduce((total, row, i) =>
    total + row[i] + row[matrix.length - 1 - i], 0);
*/
