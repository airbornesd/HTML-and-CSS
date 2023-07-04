// array map method
let arr = [10, 20, 30, 40, 50];

let arrNew = arr.map((value, index, array) => {
    //console.log(value, index, array);
    return value;
});
// arrNew.push(60);
// console.log(arr);
// console.log(arrNew);

// array filter method
let arrNewNew = arr.filter((value, index, array) => {
    console.log(value, index, array);
    return value > 30;
});
console.log(arrNewNew);


// array reduce method
 let arrNewNewNew = arr.reduce((i, j) => {
    console.log(i ,  j);
    return i + j;
 })
 console.log(arrNewNewNew);