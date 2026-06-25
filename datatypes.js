"use strict" //treats all js code as newer version

//datatypes

let name = "areyaar"
let age = 22
let isLoggedIn = true

/*
PRIMITIVE DATATYPES =>
number
bigint
string
boolean
null : standalone value / empty value
undefined : value is not assigned
symbol :uniqueness
---------------------------------------
NON PRIMITIVE
object
*/

console.log(typeof null);  //typoe of null is object
console.log(typeof undefined); //type is undefined

//                TYPE CONVERESIONS
let score = "33"
//console.log(typeof score)

let numScore = Number(score)
//console.log(typeof numScore)


//what if string given is not a number ??
let health = "77a"
let numHealth = Number(health)


console.log(numHealth) // prints NaN
console.log(typeof numHealth) // prints type as Number

//what happens in case of null ?
let fuel = null;
let numFuel = Number(fuel)

console.log(numFuel)         // prints 0
console.log(typeof numFuel)  // prints type as Number

//what happens in case of undefined?

let amount = undefined
let numAmount = Number(amount)

console.log(numAmount)         //prints NaN
console.log(typeof numAmount)  //prints type as number


console.log(typeof NaN)  //Number


/*
true => 1
false => 0
"something" => true
"" => => false
*/


//  OPERATIONS

let str1 = "are"
let str2 = " yaar"
let str3 = str1 + str2

console.log(str3)           //prints are yaar


console.log("1" + 2)         // prints 12
console.log(1 + "2")         //prints 12
console.log("1" + 2 + 2)     //prints 122
console.log(1 + 2 + "2")     //prints 32

console.log(+true)    //prints 1 
console.log(+"")      // prints 0


console.log("2" >  1)         //true

console.log(null > 0)   //false
console.log(null == 0)  //false 
console.log(null >= 0)  //true

/*
reason is that equality operator does not convert null into a number
so it gives answer as false but relational operator converts null into number 0

here if we use undefined instead of null then for all cases
 it will give answer as false

*/


console.log("2" == 2)    //true
console.log("2" === 2)   //false

// === is strict checking as it compares datatypes as well 


/*
Difference between primitive and non primitive data types

    Primitive                      |      Non primitive (reference)
 ----------------------------------------------------------------
 Number , String , Boolean , null, |  Arrays , objects , functions
undefined , symbol , BigInt        |

stack is used                      |    heap is usedz`

*/

console.log(typeof BigInt)  //function






