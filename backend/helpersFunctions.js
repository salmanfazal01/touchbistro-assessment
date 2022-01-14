export const findPrimes = (num = 1) => {
  const numArr = new Array(num + 1);
  numArr.fill(true);
  numArr[0] = numArr[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; i * j <= num; j++) {
      numArr[i * j] = false;
    }
  }
  return numArr.reduce((acc, val, ind) => {
    if (val) {
      return acc.concat(ind);
    } else {
      return acc;
    }
  }, []);
};

export const getMedian = (arr = []) => {
  const length = arr.length;
  const middleIdx = Math.floor(arr.length / 2);

  if (length % 2 == 1) {
    return [arr[middleIdx]];
  } else {
    return [arr[middleIdx - 1], arr[middleIdx]];
  }
};
