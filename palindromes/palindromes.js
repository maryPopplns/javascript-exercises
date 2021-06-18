const palindromes = function (str) {
  const REGEX = /[\s\.,!]/g;
  const STRIPPED = str.replace(REGEX, "").toLowerCase();
  const REVERSED = STRIPPED.split("").reverse("").join("");
  return STRIPPED === REVERSED;
};

module.exports = palindromes;
