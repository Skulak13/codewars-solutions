function candles(candlesNumber, makeNew) {
  let totalBurned = candlesNumber;
  let leftovers = candlesNumber;

  while (leftovers >= makeNew) {
    const newCandles = Math.floor(leftovers / makeNew);
    totalBurned += newCandles;

    const productionLeftovers = leftovers % makeNew;
    leftovers = newCandles + productionLeftovers;
  }

  return totalBurned;
}

//OR

//return candlesNumber + Math.floor((candlesNumber - 1) / (makeNew - 1));
