export const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  /* While there are elements to shuffle, etc. */
  while (currentIndex !== 0) {
    /*
    This picks a random element. The math is: get a number between zero and 1 that isn't also 1,
    then multiply it by the currenIndex value. Then use Math.floor to make that value a whole
    number by rounding down from the Math.random() * currentIndex value.
    */
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    /* This swaps the previously chosen, random element with the next one. */
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  /* Returns the newly organized, random array. */
  return array;
};

export const storeAndGet = (win, seconds, minutes, stars) => {
  const userStorage = window.localStorage;

  userStorage.setItem("win", win);
  userStorage.setItem("seconds", seconds);
  userStorage.setItem("minutes", minutes);
  userStorage.setItem("stars", stars);
};
