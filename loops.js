const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //console.log(num)
}

const greeting = "hello world!";

for (const greet of greeting) {
  //console.log(greet)
}

//MAPS
const map = new Map();

map.set("name", "user");
map.set("age", 22);

for (const [key, value] of map) {
  // console.log(key)
}

//Objects
//for of loop does not work on objects

const shortcut = {
  javascript: "js",
  cplusplus: "cpp",
};

for (const key in shortcut) {
  //console.log(`${key} shortcut is ${shortcut[key]} `)
}

//for in loop returns keys
//for in also works for arrays
//for in cannot iterate on map

const languages = ["js", "c++", "python"];

languages.forEach(function (val) {
  //console.log(val)
});

// function printme(val){
//    console.log(val)
// }

// languages.forEach(printme)

languages.forEach((val, index, arr) => {
  // console.log(val, index, arr);
});

//looping array of objects
const arrobj = [
  {
    lang: "js",
    use: "development",
  },
  {
    lang: "python",
    use: "ml",
  },
];

arrobj.forEach((item) => {
  console.log(item.lang);
});
//for each doesnt return any value

//filter method : returns the values based on condition
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnums = mynums.filter((value) => value > 5);
console.log(newnums);

//map method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const answer = numbers.map((value) => {
  return value + 10;
});
console.log(answer);

//chaining
const chain = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = chain
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item > 50);
console.log(res);


//reduce method 
const shoppingCart = [
    {
        course : "js",
        price : 299
    },
    {
        course : "dsa",
        price : 499
    },
    {
        course : "system design",
        price : 7999
    }
]

const total = shoppingCart.reduce((acc ,curr) => {
    return acc + curr.price
} , 0)

console.log(total)


