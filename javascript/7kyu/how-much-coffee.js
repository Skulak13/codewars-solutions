function howMuchCoffee(events) {
  let coffeesToDrink = 0;
  
  // Listy do sprawdzenia (możesz je trzymać w zmiennych dla czytelności)
  const low = ['cw', 'dog', 'cat', 'movie'];
  const high = ['CW', 'DOG', 'CAT', 'MOVIE'];

  events.forEach(event => {
    if (low.includes(event)) {
      coffeesToDrink += 1;
    } else if (high.includes(event)) {
      coffeesToDrink += 2;
    }
  });

  return coffeesToDrink > 3 ? 'You need extra sleep' : coffeesToDrink;
}

// Or reduce metod

/*

function howMuchCoffee(events) {
  const low = ['cw', 'dog', 'cat', 'movie'];
  const high = ['CW', 'DOG', 'CAT', 'MOVIE'];

  const coffeesToDrink = events.reduce((acc, event) => {
    if (low.includes(event)) return acc + 1;
    if (high.includes(event)) return acc + 2;
    return acc;
  }, 0);

  return coffeesToDrink > 3 ? 'You need extra sleep' : coffeesToDrink;
}

*/
