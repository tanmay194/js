function makeFunc() {
    const name = "mozilla"
    function displayName(){
        console.log(name)
    }

    return displayName
}

const myFunc = makeFunc()
myFunc()

