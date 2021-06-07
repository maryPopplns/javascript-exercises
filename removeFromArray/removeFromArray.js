const removeFromArray = function (input, ...args) {
  argumentList = [];
  for (let i = 0; i < [...args].length; i++) {
    argumentList.push([...args][i]);
  }
  return input.filter((e) => !argumentList.includes(e));
};

module.exports = removeFromArray;
