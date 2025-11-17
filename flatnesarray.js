// const flattenArray = (arr) => arr.flat(Infinity);

// console.log(flattenArray([1, [2, [3, 4]], 5]));
// // Output: [1, 2, 3, 4, 5]

function flattenArray(arr) {
  let result = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      // If item is an array, recursively flatten it
      result = result.concat(flattenArray(item));
    } else {
      // If item is not an array, push it directly
      result.push(item);
    }
  });

  return result;
}

const nested = [1, [2, [3, 4]], 5];
const flat = flattenArray(nested);
console.log(flat); // [1, 2, 3, 4, 5]
