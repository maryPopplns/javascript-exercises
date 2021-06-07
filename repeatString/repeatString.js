const repeatString = function (str, num) {
  return num < 0 ? "ERROR" : str.repeat(num);
};

module.exports = repeatString;
