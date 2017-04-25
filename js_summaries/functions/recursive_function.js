const array1 = [1, 2, [], [[1],[1,[37]],[1]],[[42]]]

const flattenArray = (numbers) =>
  numbers.reduce((previous, current) =>
    Array.isArray(current) ?
    previous + flattenArray(current) :
    previous + current,
    0)   
