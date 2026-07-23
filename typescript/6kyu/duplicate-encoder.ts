export function duplicateEncode(word: string){
  let table = word.toLowerCase().split("");
  const tableCode = table.map(x =>
    table.indexOf(x) === table.lastIndexOf(x) ? "(" : ")"
  );

  return tableCode.join("");
}


/*
Filter version:

  const lower = word.toLowerCase().split("");

  return lower
    .map(ch => lower.filter(x => x === ch).length === 1 ? "(" : ")")
    .join("");
    
Object version:

export function duplicateEncode(word: string){
  const lower = word.toLowerCase();
  const counts: Record<string, number> = {};

  for (const ch of lower) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  return lower
    .split("")
    .map(ch => counts[ch] === 1 ? "(" : ")")
    .join("");
}

*/
