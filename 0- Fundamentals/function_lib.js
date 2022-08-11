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