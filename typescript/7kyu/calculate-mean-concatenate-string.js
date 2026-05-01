export function mean(lst: string[]): [number, string] {
  let sum = 0;
  let str = "";
  lst.forEach(x => isNaN(Number(x)) ? str += x : sum += Number(x));
  const mean = sum / 10;
  return [mean, str];
}

//OR

/*
export function mean(lst: string[]): [number, string] {
  const result = lst.reduce(
    (acc, x) => {
      if (isNaN(Number(x))) {
        acc.str += x;
      } else {
        acc.sum += Number(x);
      }
      return acc;
    },
    { sum: 0, str: "" }
  );

  return [result.sum / 10, result.str];
}
*/
