const fibonacci = function (input) {
  let fibbSeq = [1, 1];
  for (let i = 0; fibbSeq.length < input; i++) {
    fibbSeq.push(fibbSeq[i] + fibbSeq[i + 1]);
  }
  return input > 0 ? fibbSeq.pop() : "OOPS";
};

module.exports = fibonacci;
