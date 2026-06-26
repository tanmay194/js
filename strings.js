const name = "hello "
const repos = 10

//console.log(name + repos + " world")

//another syntax using backticks called as string interpolation

// console.log(`${name} repocount is ${repos}`)

// console.log(name[1])

// console.log(typeof String)    //function

// console.log(name.length)   

console.log(name.toUpperCase())  //() used because it is a prototype

const game = "Valorant"
const splitEx = "are-yaar"

const sub = game.substring(0 , 4)  //end index of range is not included
console.log(sub)
//substring ignores negative indexes and starts from 0

//split is used to convert string characters into array elements
const SplitGame = splitEx.split("-")   // ['valo' , 'ant']
console.log(SplitGame)

const sliceGame = game.slice(0 , 4)  //end index of range is not included
console.log(sliceGame)

//slice works with negative ranges as well ,  starts with right end of string

const sliceGame2 = game.slice(-6 , -3) 
console.log(sliceGame2)


const arr = "  world  "
console.log(arr.trim())
//trim removes extra spaces

const url = "https://google%20.com"
console.log(url.replace("%20" , "-"))
