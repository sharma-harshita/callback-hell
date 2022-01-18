

//  Call back function


// function printA (callback){
//     console.log("A");
//     callback()
// }

// function printE (){
//     console.log("E");
// }

// printA(printE);


// function printVowels (){
//     console.log("A");
//     console.log("E");
//     console.log("I");
//     console.log("O");
//     console.log("U");
// }

// printVowels()


// function printVowels(){
//     setTimeout(()=>{
//         console.log("A");
//     }, 2000);
//     setTimeout(()=>{
//         console.log("E");
//     }, 5000);
//     setTimeout(()=>{
//         console.log("I");
//     }, 1000);
//     setTimeout(()=>{
//         console.log("O");
//     }, 2000);
//     setTimeout(()=>{
//         console.log("U");
//     }, 0);
// }


// printVowels();


// function printValue (){
//     setTimeout(() => {
//         console.log("A");
//         setTimeout(() => {
//             console.log("B");
//         }, 0);
//     }, 2000);
// }


// function printVowels(){
//     setTimeout(()=>{
//         console.log("A");
//             setTimeout(()=>{
//                 console.log("E");
//                     setTimeout(()=>{
//                         console.log("I");
//                             setTimeout(()=>{
//                                 console.log("O");
//                                     setTimeout(()=>{
//                                         console.log("U");
//                                     }, 0000)
//                             }, 2000)
//                     }, 1000)
//             }, 5000)
//     }, 2000);
// }


// printVowels();


// This triangular shape is known as callback hell. We should 


// If you want to execute a function only after execution of any parent function is 
// completed then we will have to must write this function inside parent function .
// In this way if we are having multiple function which we want execute after one 
// another then we will end up creating callback hell structure.

// Question To Try ::::::::
// 1 should be printed after 1 sec
// 2 should be printed after 2 sec 
// 3 should be printed after 3 sec
// 4 should be printed after 2 sec 
// 5 should be printed after 1 sec 


// Heaven of callback hell : Promises.......

// Create a function , it should be able to return you the promise.

//  Promise is a constructor function which takes in tw parameters , resolve and reject. If the promise has been resolved properly then it will go to the <then> block. If the promise has been rejected due to some error then it will go to the <catch> block.

function printAlphabet (num) { 
    return new Promise ((resolve, reject)=>{
        if (num % 2 == 0) {
            resolve("CONDITION SATISFIED");
        } else {
            reject("CONDITION UNSATISFIED");
        }
    })
}

printAlphabet(24)
    .then((response)=>{             //to handle success response
        console.log(response);
    })
    .catch((error)=>{               //to handle failure
        console.log(error);
    })
    .finally(()=>{
        console.log("PROMISE IS COMPLETED");
    })

// function printAlphabet (alphabet) { 
//     return new Promise ((resolve, reject)=>{
//         console.log(alphabet);
//         resolve();
//     })
// }


// printAlphabet("A")
//     .then((response)=>{
//         console.log(response);
//         printAlphabet("E")
//         .then((response)=>{
//             console.log(response);
//         })
//     })




// Print Vowels aeiou, after 65324 seconds by using promises.

// const printVariable = (num, time, value) => {
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             console.log(value);
//             resolve("RESOLVED")
//         }, time);
//     })
// }

// const printVariable = (num, time, value) => {
//     return new Promise ((resolve, reject)=>{
//         if (num < 40) {
//             setTimeout(() => {
//                 console.log(value);
//                 resolve("RESOLVED")
//             }, time);
//         } else {
//             reject("REJECTED")
//         }
//     })
// }


// printVariable(6000, "A")
//     .then(()=>printVariable(5000, "E"))
//     .then(()=>printVariable(3000,"I"))
//     .then(()=>printVariable(2000,"O"))
//     .then(()=>printVariable(4000,"U"))


// Promise Chaininggg :::: Multiple then blocks..

//  This is known as promise chaining . We should try to avoid it by using async await. 

// async function print (){
//     await printVariable(2000, "A");
//     await printVariable(3000,"I");
//     await printVariable(2000,"O")
// }


// async function print () {
//     try {
//         const value = await printVariable(39, 2000, "A");
//         console.log(value);
//     } catch (error) {
//         console.log(error);
//     }
//     // await printVariable(2000, "E");
// }

// print()
