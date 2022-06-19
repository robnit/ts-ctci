// Take an array, rearrange by alternating between the nth and the length - nth elements (starting with 0). Return true of the arranged array is in strictly ascending order, false if it isn't

export const ascending = (numbersArray: number[]): boolean => {
  let offset = 0;
  let currentNumber = numbersArray[0];

  while(numbersArray.length - 1 !== offset) {
    const next = offset % 2 === 0
      ? numbersArray[numbersArray.length - (offset/2 + 1)]
      : numbersArray[Math.ceil(offset/2)];

    if (currentNumber >= next) return false;
    currentNumber = next;
    ++offset;
  }

  return true;
};
