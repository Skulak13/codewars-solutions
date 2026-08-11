export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;

  const counts: Record<string, number> = { n: 0, s: 0, e: 0, w: 0 };

  walk.forEach(step => {
    counts[step] += 1;
  });

  return counts.n === counts.s && counts.e === counts.w;
}

/*
OR efficiency:

export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;

  let n = 0, s = 0, e = 0, w = 0;

  for (const step of walk) {
    if (step === 'n') n++;
    else if (step === 's') s++;
    else if (step === 'e') e++;
    else if (step === 'w') w++;
  }

  return n === s && e === w;
}


OR reduce:

export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;

  const pos = walk.reduce(
    (acc, dir) => {
      if (dir === "n") acc.y += 1;
      if (dir === "s") acc.y -= 1;
      if (dir === "e") acc.x += 1;
      if (dir === "w") acc.x -= 1;
      return acc;
    },
    { x: 0, y: 0 }
  );

  return pos.x === 0 && pos.y === 0;
}
*/
