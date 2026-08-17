// Codewars kata: "Count IP Addresses"
// Level: 5 kyu
// Link: https://www.codewars.com/kata/526989a41034285187000de4
// Date completed: 2026-08-17
// Description:
// Given two IPv4 addresses, return the number of IP addresses
// between them (including the starting address, excluding the ending address).
//
// All inputs will be valid IPv4 addresses.
// The ending address will always be greater than the starting one.
/* Examples:
    ipsBetween("10.0.0.0", "10.0.0.50") ➞ 50
    ipsBetween("10.0.0.0", "10.0.1.0") ➞ 256
    ipsBetween("20.0.0.10", "20.0.1.0") ➞ 246
*/
/* Notes:
   - An IPv4 address consists of four octets
   - Each octet can have a value from 0 to 255
   - Each octet represents a different power of 256
   - Convert both IP addresses into numbers
     and subtract the smaller value from the larger one
*/
// Clean & readable solution:
export function ipsBetween(start: string, end: string): number {
  const startNum = start.split(".").map(Number);
  const endNum = end.split(".").map(Number);
  const startCounted: number[] = [];
  const endCounted: number[] = [];
  for (let i = 0; i < startNum.length; i++) {
    const power = 3 - i;
    startCounted.push(startNum[i] * Math.pow(256, power));
    endCounted.push(endNum[i] * Math.pow(256, power));
  }
  const startTotal = startCounted.reduce((a, b) => a + b, 0);
  const endTotal = endCounted.reduce((a, b) => a + b, 0);
  return endTotal - startTotal;
}
/* Explanation:
   - First, split each IP address into its four octets:
       "10.0.1.0"
       → [10, 0, 1, 0]
   - Each octet has a positional value based on powers of 256:
       first octet → × 256³
       second → × 256²
       third → × 256¹
       fourth → × 256⁰
   - For example:
       10.0.1.0
       = 10 × 256³
       + 0 × 256²
       + 1 × 256¹
       + 0 × 256⁰
       = 167772160 + 256
       = 167772416
   - Convert both IP addresses into numbers.
   - Subtract the starting number from
     the ending number.
   - The difference is the number
     of IP addresses between them
     (including start, excluding end).
*/
/* OR
   Converting the IP address using reduce():
   Each step moves the previous value
   one byte to the left by multiplying by 256,
   then adds the next octet.
*/
export function ipsBetween(start: string, end: string): number {
  const ipToNumber = (ip: string): number =>
    ip
      .split(".")
      .reduce((acc, octet) => acc * 256 + Number(octet), 0);
  return ipToNumber(end) - ipToNumber(start);
}
/* Explanation:
   - Start with 0.
   - For every octet:
       → Multiply the current value by 256
       → Add the next octet
   Example:
       "10.0.1.0"
       0 × 256 + 10 = 10
       10 × 256 + 0 = 2560
       2560 × 256 + 1 = 655361
       655361 × 256 + 0 = 167772416
   - This produces the same numerical representation
     as the first solution.
*/
/* OR
   Using bitwise operators:
   << 8 shifts the number by 8 bits,
   which is equivalent to multiplying by 256.
*/
export function ipsBetween(start: string, end: string): number {
  function ip2num(ip: string): number {
    return (
      ip
        .split(".")
        .reduce((a, x) => (a << 8) | +x, 0) >>> 0
    );
  }
  return ip2num(end) - ip2num(start);
}
/* Explanation:
   - Each IPv4 octet contains 8 bits.
   - An IPv4 address contains 4 octets:
       8 + 8 + 8 + 8 = 32 bits.
   - `a << 8` moves the existing bits
     8 positions to the left.
   - `| +x` adds the next octet.
   - `>>> 0` converts the result
     into an unsigned 32-bit integer.
*/
/* OR
   Using an array and positional multiplier:
*/
export function ipsBetween(start: string, end: string): number {
  const first = start.split(".");
  const last = end.split(".");
  let total = 0;
  let multiplier = 1;
  for (let i = first.length - 1; i >= 0; i--) {
    total += (Number(last[i]) - Number(first[i])) * multiplier;
    multiplier *= 256;
  }
  return total;
}
/* Explanation:
   - Start from the last octet because
     it has the smallest multiplier.
   - The multipliers are:
       last octet → 1
       third → 256
       second → 256²
       first → 256³
   - Instead of converting both IPs separately,
     calculate the difference of each octet
     and multiply it by its positional value.
*/
/* Difference:
   - First solution:
       → Most explicit
       → Clearly demonstrates
         how IPv4 addresses are converted
         into numbers
   - reduce() solution:
       → Cleaner and more concise
       → Uses the positional nature
         of base-256 numbers
   - Bitwise solution:
       → Compact and demonstrates
         low-level binary operations
       → More difficult to understand
   - Positional multiplier solution:
       → Avoids creating two numerical representations
       → Directly calculates the difference
*/
/* Complexity:
   - Time complexity: O(1)
     (IPv4 always contains exactly 4 octets)
   - Space complexity: O(1)
     (Only a fixed number of values are processed)
*/
