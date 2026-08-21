// Let's make a Cat constructor!
var Cat = (function () {

  let totalWeight = 0;
  let count = 0;

  function Cat(name, weight) {
    if (!name || !weight) {
      throw new Error("Both name and weight are required");
    }

    this.name = name;

    count++;
    totalWeight += weight;

    Object.defineProperty(this, "weight", {
      get() {
        return weight;
      },
      set(newWeight) {
        totalWeight -= weight;
        totalWeight += newWeight;
        weight = newWeight;
      }
    });
  }

  Cat.averageWeight = function () {
    return totalWeight / count;
  };

  return Cat;
}());



/* Modern
class Cat {
  static totalWeight = 0;
  static count = 0;

  #weight;

  constructor(name, weight) {
    if (!name || !weight) {
      throw new Error("Both name and weight are required");
    }

    this.name = name;
    this.#weight = weight;

    Cat.count++;
    Cat.totalWeight += weight;
  }

  get weight() {
    return this.#weight;
  }

  set weight(newWeight) {
    Cat.totalWeight -= this.#weight;
    Cat.totalWeight += newWeight;
    this.#weight = newWeight;
  }

  static averageWeight() {
    return Cat.totalWeight / Cat.count;
  }
}
*/
