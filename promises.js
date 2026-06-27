const promise1 = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("async task completed")
        resolve()
    } , 2000)
})

promise1.then(function(){
    console.log("promise consumed")
})

//------------------------------------------------------------------------------
const promise2 = new Promise(function(resolve , reject){
    setTimeout(() => {
        resolve({name : "hello" , age : 20})
    }, 2000)
})

promise2.then(function(user){
   console.log(user)
})

//--------------------------------------------------------------------------------

const promise3 = new Promise(function(resolve , reject){
   setTimeout(() => {
    let error = false;
    if(!error){
        resolve({course : "dsa" , price : 499})
    }
    else{
        reject("Error : something went wrong")
    }
   } , 2000)
})

promise3.then(function(user){
    //console.log(user)
    return user.course
}).then(function(course){
    console.log(course)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("the promise is either resolved or rejected"))

//------------------------------------------------------------------------------

//handling promise using async await

const promise4 = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({name : "areyaar" , age : 22})
        }
        else{
            reject("Error: something went wrong")
        }
    } , 2000)
})

async function consumePromise(){
    try {
        const response = await promise4
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise()

//----------------------------------------------------------------