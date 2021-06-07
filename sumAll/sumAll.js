const sumAll = function (a, b) {
  if (!Number.isInteger(a) || a < 0 || !Number.isInteger(b) || b < 0) {
    return "ERROR";
  }

  let big, small;
  if (a > b) {
    big = a;
    small = b;
  } else {
    big = b;
    small = a;
  }
  let arr = [];
  for (let i = small; i <= big; i++) {
    arr.push(i);
  }
  return arr.reduce((a, e) => a + e, 0);
};

module.exports = sumAll;
