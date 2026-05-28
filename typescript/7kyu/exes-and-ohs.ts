export function xo(str: string) : boolean {
  const x = str.toLowerCase().split("x").length - 1;
  const o = str.toLowerCase().split("o").length - 1;
  return x === o;
  
  //OR
  
  /*
  const arr = Array.from(str.toLowerCase());
  const x = arr.filter(char => char === "x");
  const o = arr.filter(char => char === "o");
  return x.length === o.length;
  */
  
  //OR
  
  //return (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;
}
