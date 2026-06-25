const accId = 1445
//variables declared with const keyboard cannot be changed

let accEmail = "areyaar@example.com"
var accPassword = "12345678"

//let and var can be changed 
//prefer not to use var because of issues in functional and block level scopes

accCity = "pune"

let accState;
//when not initialized , variables get value as undefined 

// accId = 2;
accEmail = "new@gmail.com"
accPassword = "4567"
accCity = "mumbai"


console.log(accId);

console.table([accEmail , accPassword , accCity ,accState]);


