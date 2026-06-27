const myarr = [0,1,2,3,true,"hello"]

//arrays in javacript can contain different type elements
console.log(myarr[0])


//by default copy instruction in javascript creates shallow copy 
//shallow copy : shares same refernces
//deep copy : creates entire copy

const newArr = myarr.join()   // converts array characters into strings
console.log(newArr)

//splice and splice methods

const slice = myarr.slice(1 , 3)   //makes a copy and end of range is not included
console.log(slice)  
console.log(myarr)


const splice = myarr.splice(1,3)  //includes end of range and is a reference to original array
console.log(splice)  
console.log(myarr)

const marvelHeros = ["thor" , "hulk" , "ironman"]
const dcHeros = ["batman" , "superman" , "flash"]

// marvelHeros.push(dcHeros);    //returns array inside array
// console.log(marvelHeros)


//better way to merge using concat , concat returns a new array
const combine = marvelHeros.concat(dcHeros)
console.log(combine)


//using spread operator
const allHeros = [...marvelHeros , ...dcHeros]
console.log(allHeros)

//In case of nesting using flat method
const nest = [1,2,[3,4,[5,6,7]]]
const flatNest = nest.flat(Infinity)
console.log(flatNest)

console.log(Array.from("hello"))
console.log(Array.from({name : "areyaar"})) //returns empty array [] as we have to mention from keys or values to make array from object

//variable to arrays
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1 , score2 , score3))