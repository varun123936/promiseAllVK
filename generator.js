'Write a generator function that yields all even numbers up to a given limit.'
// function* evenNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) yield i;
//   }
// }

// const gen = evenNumbers(3000);
// console.log([...gen]); // [0, 2, 4, 6, 8, 10]


'Write a generator function that yields all prime numbers up to a given limit.'
// function* generatePrimes(limit) {
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   for (let n = 2; n <= limit; n++) {
//     if (isPrime(n)) yield n;
//   }
// }

// // Example usage
// const primes = generatePrimes(3000000);

// for (const prime of primes) {
//   console.log(prime);
// }


// function* greet() {
//   yield "Hello";
//   yield "Varun";
//   yield "Welcome!";
// }

// const gen = greet();
// console.log([...gen]);
// console.log(gen.next().value); 
// console.log(gen.next().value); 
// console.log(gen.next().value); 
// console.log(gen.next().done);  


'merge 2 arrays'
// function* alternate(arr1, arr2) {
//   const len = Math.max(arr1.length, arr2.length);
//   for (let i = 0; i < len; i++) {
//     if (arr1[i] !== undefined) yield arr1[i];
//     if (arr2[i] !== undefined) yield arr2[i];
//   }
// }

// const result = [...alternate([1, 2, 3], ['A', 'B'])];
// console.log(result); // [1, 'A', 2, 'B', 3]


'Processing Transaction data'
function* readTransactions() {
  yield { id: 1, amount: 200 };
  yield { id: 2, amount: 5000 };
  yield { id: 3, amount: 50 };
  yield { id: 4, amount: 10000 };
}

function* filterLargeTransactions(transactions) {
  for (const t of transactions) {
    if (t.amount > 1000) yield t;
  }
}

function* applyTax(transactions) {
  for (const t of transactions) {
    yield { ...t, taxedAmount: t.amount * 1.05 };
  }
}

// Pipeline
const pipeline = applyTax(filterLargeTransactions(readTransactions()));

for (const txn of pipeline) {
  console.log(txn);
}
