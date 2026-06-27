function sum(...num1){    //converts values into a array
   return num1;
}

const result = sum(100 , 200 , 300)
console.log(result)                           //[100 , 200 , 300]

function sum2(num1 , num2 , ...num3) {
   return num3
}

const all = sum2(1,2,3,4,5)
console.log(all)                     // [3,4,5]

// function sum3(...first , second) {
//   return second
// }

// const output = sum3(1,2,3,4,5)
// console.log(output)                //gives error as rest parameter must be at last

