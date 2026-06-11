export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(x => !b.includes(x));
}

//OR

/*
export function arrayDiff(a: number[], b: number[]): number[] {
  const setB = new Set(b);
  return a.filter(x => !setB.has(x));
}
*/
