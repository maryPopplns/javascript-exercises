const caesar = function (str, shift) {
  let cypher = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 122 || str.charCodeAt(i) < 65) {
      cypher.push(str.charCodeAt(i));
    } else if (str[i].toLowerCase() == str[i]) {
      let converted = str.charCodeAt(i) + shift;
      if (converted < 97) {
        converted = 122 - (96 - converted);
      }
      if (converted > 122) {
        converted = converted - 122 + 96;
      }
      if (converted > 122) {
        converted = converted - 122 + 96;
      }
      if (converted > 122) {
        converted = converted - 122 + 96;
      }
      cypher.push(converted);
    } else {
      let converted = str.charCodeAt(i) + shift;
      if (converted < 65) {
        converted = 90 - (64 - converted);
      }
      if (converted > 90) {
        converted = converted - 90 + 64;
      }
      if (converted > 90) {
        converted = converted - 90 + 64;
      }
      if (converted > 90) {
        converted = converted - 90 + 64;
      }
      cypher.push(converted);
    }
  }
  return cypher.map((e) => String.fromCharCode(e)).join("");
};

module.exports = caesar;
