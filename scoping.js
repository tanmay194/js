if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(a)
// console.log(c)

//let and const are block level but var acts as global level so it is accessible outside scope

function one(){
    const name = "are yaar"

    function two(){
        const game  = "minecraft"
        console.log(name)              //logs are yaar 
    }
    //console.log(game)                error : out of scope

    two()
}

one()