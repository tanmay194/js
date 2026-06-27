//how javascript executes code

let val1 = 10;
let val2 = 5;

function add(num1 , num2){
    let total = num1 + num2
    return total
}

let result1 = add(val1 , val2)
let result2 = add(10 , 2)

/*

steps in execution

1) global execution context is made and assigned to "this"

2) memory phase : all variables are stored and assigned as undefined and function definations
                num1 -> undeined
                num2 -> undefined
                add -> defination
                result1 -> undefined
                result2 -> undefined

3) execution phase
                num1 <- 10
                num2 <- 5
                add ---------------> creates its own context (function execution context)
                In this new variable environment and execution thread is made
                In this again memory phase and executionm phase runs
                whatever function returns is sent to global execution context
    
*/