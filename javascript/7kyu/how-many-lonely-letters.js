function countLonelyLetters(text) {
  const letters = text.toLowerCase().replace(/[^a-z]/g, "");

  const counts = {};
  for (const ch of letters) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  let lonelyCount = 0;

  for (const ch in counts) {
    if (counts[ch] !== 1) continue;

    const code = ch.charCodeAt(0);
    const neighbors = [];

    if (ch !== "a") neighbors.push(String.fromCharCode(code - 1));
    if (ch !== "z") neighbors.push(String.fromCharCode(code + 1));

    if (!counts[neighbors[0]] && !counts[neighbors[1]]) {
      lonelyCount++;
    }
  }

  return lonelyCount;
}
