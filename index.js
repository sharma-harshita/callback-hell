// function printUsername(name, time){
//     setTimeout(()=>{
//         console.log(name);
//     }, time)
// }


// function printAllUsers(){
//     printUsername("A", 2000);
//     printUsername("E", 5000);
//     printUsername("I", 1000);
// }


// printAllUsers();


//line 11 execution should not start until unless line 10 execution completes

function printAlphabets (alpha, time, callbackFun){
    setTimeout(() => {
        console.log(alpha);
        callbackFun()
    }, time);
}

// A
// I
// O
// E
// U

function printVowels (){
    printAlphabets("A", 1000, ()=>{
        printAlphabets("E", 5000, ()=>{
            printAlphabets("I", 2000, ()=>{
                printAlphabets("O", 3000, ()=>{
                    printAlphabets("U", 6000, ()=>{
                        console.log("Welcome to Callback Hell !!!!!");
                    });
                });
            });
        });
    });
}

printVowels()

// this triangle is known as callback hell