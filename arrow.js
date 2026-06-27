//this keyword refers to current context

const user = {
    name : "areyaar",
    
    welcome : function(){
        console.log(`welcome user , ${this.name}`)
        console.log(this)
    }
}

// user.welcome()                   //       are yaar
// user.name = "john"
// user.welcome()                       //   john (context changed)
  
console.log(this)                      // returns empty object {}

//in node environment it returns {} but in browser it returns window object



function run() {
    let name = "areyaar"
    console.log(this)                   // returns object
    console.log(this.name)              // undefined 
}
//run()

const  run2 = () => {
    const name = "light"
    console.log(this)                 // returns {}
    console.log(this.name)            //undefined
}


