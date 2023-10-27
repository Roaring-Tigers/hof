
// hof => higher order function

// map,forEach, filter, reduce

let arr =[10,20,30,40,50]


// let x = arr.map(square)


// function square(value, index){
//     return value*value
// }

// console.log(x)

let x = arr.map((value, index)=>  value*value)
console.log(x)
// console.log(arr)

// let x = arr.map(value=>  value*value)