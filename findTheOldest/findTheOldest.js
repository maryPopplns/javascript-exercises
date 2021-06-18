let findTheOldest = function (input) {
  let oldest = input
    .map((e, i) => {
      if (e.yearOfDeath === undefined) {
        e.yearOfDeath = new Date().getFullYear();
      }
      return {
        name: e.name,
        age: e.yearOfDeath - e.yearOfBirth,
      };
    })
    .sort((a, b) => {
      return a.age - b.age;
    })
    .pop().name;
  return input.filter((e) => e.name === oldest).pop();
};

module.exports = findTheOldest;
