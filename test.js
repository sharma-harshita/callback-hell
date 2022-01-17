

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

function printVowels(){
    setTimeout(()=>{
        console.log("A");
            setTimeout(()=>{
                console.log("E");
                    setTimeout(()=>{
                        console.log("I");
                            setTimeout(()=>{
                                console.log("O");
                                    setTimeout(()=>{
                                        console.log("U");
                                    }, 0000)
                            }, 2000)
                    }, 1000)
            }, 5000)
    }, 2000);
}


printVowels();


// This triangular shape is known as callback hell. We should 



// Question To Try ::::::::
// 1 should be printed after 1 sec
// 2 should be printed after 2 sec 
// 3 should be printed after 3 sec
// 4 should be printed after 2 sec 
// 5 should be printed after 1 sec 