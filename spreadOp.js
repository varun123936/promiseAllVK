// const person = {
//   name: "Varun",
//   greet: function () {
//     setTimeout(function () {
//       console.log("Normal Function in setTimeout:", this.name);
//     }, 1000);
//   }
// };

// person.greet(); // Output: "Normal Function in setTimeout: undefined"


// const person = {
//   name: "Varun",
//   greet: function () {
//     setTimeout(() => {
//       console.log("Arrow Function in setTimeout:", this.name);
//     }, 1000);
//   }
// };

// person.greet(); // Output: "Arrow Function in setTimeout: Varun"



// let a=[1,2,3,4,5]
//  let b=[...a]
//  let c=a
// console.log(c)


// var a = 10;
// console.log(a);

// function fn() {
//     console.log(a);
//     var a = 20;
//     a++;
//     console.log(a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log(a);
//     }
//     console.log(a);
// }

// fn();
// console.log(a);


// var obj = {
//     a: "hello world",
//     b: 42
// };

// var b = "a";

// console.log(obj[b]);     // Outputs: "hello world"
// console.log(obj["b"]);   // Outputs: 42


// function isAnagram(first, second) {
//     var a = first.toLowerCase();
//     var b = second.toLowerCase();
//     a = a.split("").sort().join("");
//     b = b.split("").sort().join("");
//     return a === b;
// }

// console.log(isAnagram("Mary", "Army"));   // true


// const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

// const count = {};

// arr.forEach(ele => {
//     count[ele] = (count[ele] || 0) + 1;
// });

// console.log(count);


// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.eat = function () {
//     console.log(this.name + ' is eating');
// };

// function Dog(name) {
//     Animal.call(this, name); // Inherit properties
// }

// Dog.prototype = Object.create(Animal.prototype); // Inherit methods
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//     console.log(this.name + ' says woof');
// };

// const dog = new Dog("Bruno");
// dog.eat();  // Bruno is eating
// dog.bark(); // Bruno says woof


// const outer = {
//     count: 0,
//     inc: function () {
//         setTimeout(() => {
//             this.count++;
//             console.log(this.count);
//         }, 100);
//     }
// };

// outer.inc();


// const obj = {
//     name: "Varun",
//     greet: () => {
//         console.log(this.name); // undefined (inherits from global scope)
//     }
// };
// obj.greet();


// var foo = function () {
//     console.log("I am a function expression");
// };

// function foo() {
//     console.log("I am a function declaration");
// }

// foo();


// const original = { a: 1, b: { c: 2 } };
// const copy = original; // Both point to the same object
// copy.a=10
// console.log(original)


// const original = { a: 1, b: { c: 2 } };
// //const deepClone = structuredClone(original); // Modern and safe method
// const deepClone = JSON.parse(JSON.stringify(original))
// deepClone.b.c = 300;          // ✅ Doesn't affect original.b.c

// console.log(original)


// function processData(data) {
//   // Clone to avoid mutating original
//   const safeData = structuredClone(data);
//   safeData.value += 10;
//   return safeData;
// }

// const originalData = { value: 5 };
// const result = processData(originalData);

// console.log(originalData.value); // 5 ✅ original is safe
// console.log(result.value);       // 15


// const person = { name: "Tom", address: null };
// const personTwo = { name: "test"};

// console.log(personTwo.address?.phone)


// function printFor() {
//     for (var i = 0; i < 3; i++) {
//         function printNo(num) {
//             setTimeout(() => {
//                 console.log(num)
//             }, num*1000)
//         }
//         printNo(i)
//     }
// }
// printFor();


// function printFor() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => {
//             printNo(i)
//         }, 1000)
//     }
// }

// function printNo(num) {
//     console.log(num)
// }

// printFor();


// function fruit(){
//     console.log("Apple")
// }

// fruit.name="Mango"

// fruit()


// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; // arr2 = [1, 2, 3]
// arr2[0]=4
// console.log(arr2,arr1)


// const obj1 = { name: "Varun" };
// const obj2 = { ...obj1 }; // { name: "Varun" }
// obj2.name="Teja"
// console.log(obj1, obj2)


// const user = { id: 1, fullName: "Alice Smith" };
// const {fullName:name} = user;
// console.log(user)
// console.log(name)


// arr1=[1,2,3,4]
// arr2=[2,4,5,6]
// arr3=[]

// arr1.forEach(element => {
//     if(arr2.includes(element)){
//         arr3.push(element)
//     }
// });
// console.log(arr3)


// let arr=[1,2,3,5]
// let count=10
// let missed=[]

// for(let i=0;i<count;i++){
//     if(!arr.includes(i+1)){
//         missed.push(i+1)
//     }
// }
// console.log(missed)


// function formatText(input) {
//   return input               
//     .split('_')                        
//     .map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//     )                                  // Capitalize each word
//     .join(' ');                        // Join back into a string
// }

// // Example
// const result = formatText("hello_world_this_is_varun");
// console.log(result)

'important'
// const arr = [2,2,3,3,4,4,5,6,7,7]
// const arr2=[]
// const arr1=arr.reduce((acc,cur)=>{
//     if(!acc.includes(cur)){
//         acc.push(cur)
//     }else{
//         arr2.push(cur)
//     }
//     return acc
// },[])

// console.log(arr1)
// console.log(arr2)

// const unique=[]
// arr1.forEach(val=>{
//     if(!arr2.includes(val)){
//         unique.push(val)
//     }
// })
// console.log(unique)


// let arr3=new Array(5).fill(Math.floor(Math.random()*100))
// console.log(arr3)


// function foo(a,b){
//    console.log(arguments)
// }

// foo(3)


// let x={a:6}
// let y=x
// x=null
// console.log(y)


'important'
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a);

'important'
'Note: Default parameters Breaks link between arguments and named params'
// function show(a = 100, b = 200) {
//   console.log(a, b);
//   console.log(arguments[0], arguments[1]);
// }

// show(10);


'important'
'Note: Default parameters Breaks link between arguments and named params'
// function update(a, b = 20) {
//   a = 99;
//   arguments[0] = 500;
//   console.log(a, arguments[0]);
// }

// update(10);


// const user = { name: 'Varun', skills: ['Node', 'Angular'] };
// const updated = { 
//   ...user, 
//   skills: [...user.skills, 'Spring Boot'] 
// };

// console.log(updated);
// console.log(user);


// const state = {
//   name: 'Varun',
//   address: {
//     city: 'Hyderabad',
//     pincode: 500015
//   }
// };

// // Change city → "Delhi" immutably
// const updatedState = { ...state, address: { ...state.address, city: 'Delhi' } };

// console.log(updatedState);
// console.log(state.address.city);


// `important`
// `Concept Tested:
// Combining rest and spread
// Functional programming patterns
// Advanced use case: dynamic merging of API response arrays, form groups, etc.`
// function combineArrays(...arrays) {
//   return arrays.reduce((acc, arr) => [...acc, ...arr], []);
// }

// console.log(combineArrays([1, 2], [3, 4], [5, 6]));


//memory leak
// function createHandler() {
//     let largeObject = new Array(1000000).fill("data");

//     return function handler() {
//         console.log(largeObject[0]);
//         largeObject = null; // ✅ release reference
//     };
// }

// const fn = createHandler();
// fn(); // after use, memory is free
