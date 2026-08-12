function moveZeros(arr) {
  const filtered = arr.filter(x => x !== 0);
  const zeroNum = arr.length - filtered.length
  return [...filtered, ...Array(zeroNum).fill(0)];
}


/*
OR

function moveZeros(arr) {
  const filtered = arr.filter(x => x !== 0);
  const zeroNum = arr.filter(x => x === 0);
  return filtered.concat(zeroNum);
}


function moveZeros(arr) {
  const filtered = arr.filter(x => x !== 0);
  const zeroNum = arr.length - filtered.length
  const zeros = [];
  for (let i = 0; i < zeroNum; i++) {
    zeros.push(0);
  }

  return filtered.concat(zeros);
}

function moveZeros(arr) {
  const nonZeros = [];
  const zeros = [];

  for (const x of arr) {
    if (x === 0) zeros.push(0);
    else nonZeros.push(x);
  }

  return [...nonZeros, ...zeros];
}
*/
