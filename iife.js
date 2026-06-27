// Immidiately invoked function expression

(function greet(){                       //named iife
    console.log("welcome")
})();


// (function defination)(execution call)

//used to avoid pollution i.e varibale , etc from global scope 

( (name) => {
    console.log(`welcome back , ${name} `)
} )("user")

