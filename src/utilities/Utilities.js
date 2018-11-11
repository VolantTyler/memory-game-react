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

export const storeAndGet = (
  type,
  win,
  seconds,
  minutes,
  stars,
  totalClickCount
) => {
  const userStorage = window.localStorage;
  const userData = [win, seconds, minutes, stars, totalClickCount];
  if (type === "store") {
    userStorage.setItem("userData", JSON.stringify(userData));
  } else if (type === "get") {
    const userData = JSON.parse(userStorage.getItem("userData"));
    console.log(userData);
    return userData;
  }
};
