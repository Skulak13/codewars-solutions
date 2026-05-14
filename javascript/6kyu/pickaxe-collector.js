function shop(materials, store, inventory, budget) {
  // 1. Najlepszy posiadany kilof (Math.max(...[]) = -Infinity gdy inventory puste)
  const best = Math.max(...[...inventory].map(name => materials[name]));

  // 2. Lepsze kilofy w sklepie, posortowane od najsilniejszego
  const better = Object.keys(store)
    .filter(name => materials[name] > best)
    .sort((a, b) => materials[b] - materials[a]);

  if (better.length === 0) return null;

  // 3. Sprzedawalne przedmioty: znane sklepowi, sell_price > 0,
  //    posortowane po damage rosnąco (od najsłabszego)
  const sellable = [...inventory]
    .filter(name => store[name]?.[1] > 0)
    .map(name => ({ name, dmg: materials[name], sell: store[name][1] }))
    .sort((a, b) => a.dmg - b.dmg);

  // 4. Prefiksy sum cen sprzedaży
  const prefix = [];
  let sum = 0;
  for (const item of sellable) {
    sum += item.sell;
    prefix.push(sum);
  }

  // 5. Próba zakupu — od najsilniejszego kilofa
  for (const pick of better) {
    const price = store[pick][0];
    const need = price - budget;

    if (need <= 0) {
      return [pick, new Set(), budget - price];
    }

    const k = prefix.findIndex(p => p >= need);
    if (k !== -1) {
      const sold = new Set(sellable.slice(0, k + 1).map(item => item.name));
      return [pick, sold, budget + prefix[k] - price];
    }
  }

  return null;
}
