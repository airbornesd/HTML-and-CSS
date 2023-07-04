// declaring an array
let arr = [1, 2, 3, 4, 5];

// check array length
console.log(arr.length);

// remove last element from array
arr.pop();
console.log(arr);

// adding element in array at last
arr.push(5);
console.log(arr);
// arr.sort(); -> sort the array

// there are many types of looping concerned with array
// 1. iterating
// 2. forEach()
// 3. map() -> create a new array without modifying the older one
// 4. for (let i of arr) {} -> this provide with array elements
// 5. for (let i in arr) {}  -> this provide array key

// 1. iterative method
console.log("this is iterative method: ");
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

// 2. forEach()
console.log("this is forEach() method: ");
arr.forEach((index) => {
  console.log(index);
});

// 3. map()
console.log("this is map() method: ");
let arrNew = arr.map((index) => {
  return index + 1;
});
console.log(arrNew);

// 4. for ... of
console.log("this is for-of method: ");
for(let index of arr) {
    console.log(index);
}

// 5. for ... in
console.log("this is for-in method: ");
for(let index in arr) {
    console.log(index);
}
