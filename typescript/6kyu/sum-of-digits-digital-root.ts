export const digitalRoot = (n:number):number => {
  let array = Array.from(String(n), Number);
  let arrayReduced = array.reduce((acc, curr) => acc + curr, 0);
  if (String(arrayReduced).length === 1) {
    return arrayReduced;
  }
  else {
    return digitalRoot(arrayReduced);
  }
};

/*
// The iterative version of digitalRoot — the equivalent of recursion
export const digitalRoot = (n:number):number => {
  let value = n;

  while (String(value).length > 1) {
    const digits = Array.from(String(value), Number);

    value = digits.reduce((acc, curr) => acc + curr, 0);
  }

  return value;
};
*/
