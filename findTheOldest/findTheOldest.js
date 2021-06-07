const findTheOldest = function () {
  return arr
    .map((e) => {
      return {
        name: e.name,
        age: e.yearOfDeath
          ? e.yearOfDeath - e.yearOfBirth
          : new Date().getFullYear() - e.yearOfBirth,
      };
    })
    .sort((a, b) => a.age - b.age)
    .pop();
};

module.exports = findTheOldest;
