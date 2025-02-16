const sumParIntervalTime = function (init, end) {
  let valueEnd = 0;
  for (let i = init; i <= end; i++) {
    if (i % 2 === 0) {
      valueEnd += i;
    }
  }
  return valueEnd;
};

console.log(sumParIntervalTime(1, 4));
