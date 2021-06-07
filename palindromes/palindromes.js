let palindromes = function (str1) {
  let stripped = str1
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll("!", "")
    .replaceAll(" ", "")
    .toLowerCase();
  return stripped.split("").reverse().join("") === stripped;
};

module.exports = palindromes;
