const array = [1, 2, 3];

array.every(number => Number.isInteger(number)); // Returns true
array.some(number => number > 2); // Returns true
array.filter(number => number % 2 === 0) // Returns [2]
array.forEach(number => number); // Returns 1, 2, 3
array.map(number => number * 2 ) // Returns [2, 4, 6]
array.reduce((previous, next) => previous + next, 0); // Returns 6
array.find(number => number === 1); // Returns 1
array.findIndex(number => number === 1); // Returns 0

1 in array // Returns true
array.includes(3); // true
array.indexOf(2) // 1
