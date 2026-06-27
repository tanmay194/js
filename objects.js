//singleton objects are created using Object.create

//object literals

const user = {
    name : "areyaar",
    age : 22,
    email : "are@yaar.com",
    isLoggedIn : false,
}

//accessing object properties using two ways

console.log(user.name)
console.log(user["name"])


//make a symbol and add it to the object

const mySymbol = Symbol("key1")

const obj2 = {
    name : "john",
    [mySymbol] : "loginKey"    //use square brackets to use it as symbol else it is just a string
}
console.log(obj2[mySymbol])

//to restrict from changing values use freeze, freeze works on entire object

//Object.freeze(user)
//user.name = "conor"
//console.log(user.name)

//adding functions into objects

user.greeting = function(){
    console.log("hello user")
}

console.log(user.greeting())

user.greeting2 = function(){
    console.log(`hello user , ${this.name}`)
}

console.log(user.greeting2())

//combining two objects

const objectOne = {
    name : "hello",
    age : 20
}

const objectTwo = {
    marks : 99,
    grade : "O"
}

const obj3 = Object.assign({} , objectOne  ,objectTwo)
console.log(obj3)

//better way is to just use spread operator

const arrNew = {
    sport : "cricket",
    role : "batsman"
}

//to get keys from the object

console.log(Object.keys(arrNew))   //this returns array of objects


//object destructuring

const {sport} = arrNew
console.log(sport)