// map an array
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

// filter an array

arr.filter(
    function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;})
);

// let new array = array.map(function(element){return sth})
// let new array = array.filter(function(x){return sth})

// reduce - used to get sum of array
let sum = arr.reduce((total,amount) => total + amount);
// total is the current total
// amount is the current value and it changes
// the function cycles through the array, total is the
//first  number of the array and amount is the second number
//though it changes to the next number each cycle