"use strict"

//function to randomly select DESTINATION

let dest = ['Brazil', 'Thailand', 'Greece'];  //array to be utilized by rnd fnct.

function destRand(dest){     //declaring random item generator
    return dest[Math.floor(Math.random()*dest.length)];  //pulls from array above  
}

let chosenDest = destRand(dest);  //stores values of function for recall

let isHappyDest = false   //prompt cmd for user response to initial dest

while (isHappyDest !== true) {
    let responseDest = prompt("Are you happy with your destination?");
    if (responseDest.toLowerCase() === "yes") {
        isHappyDest = true;
    } else {
        chosenDest = destRand(dest)
        alert("New Destination: " + chosenDest)
    }
}

console.log("Final Chosen Destionation: " + chosenDest)


// function to randomly select restaurant
    

let rest = ['Mission BBQ', 'Five Guys', 'Suki Hana'];

function restRand(rest){
    return rest[Math.floor(Math.random()*rest.length)];
}

let chosenRest = restRand(rest);

let isHappyRest = false;

while (isHappyRest !== true) {
    let responseRest = prompt("Are you happy with your Restaurant?");
    if (responseRest.toLowerCase() === "yes") {
        isHappyRest = true;
    } 
    else {
        chosenRest = restRand(rest);
        alert("New Restaurant: " + chosenRest)
    }
}

console.log("Final Chosen Restaurant: " + chosenRest);




// functin to randomly select transportation 

let trans = ["Car", "Boat", "Plane"];

function transRand(trans){
    return trans[Math.floor(Math.random()*trans.length)];
}

let chosenTrans = transRand(trans);

let isHappyTrans = false   //prompt cmd for user response to initial dest

while (isHappyTrans !== true) {
    let responseTrans = prompt("Are you happy with your transportation?");
    if (responseTrans.toLowerCase() === "yes") {
        isHappyTrans = true;
    } else {
        chosenDest = transRand(dest)
        alert("New Transportation: " + chosenTrans)
    }
}

console.log("Final Chosen Transportation: " + chosenTrans)


// entertainment

 let ent = ["Movie", "Music", "Podcast"];

 function entRand(ent){
     return ent[Math.floor(Math.random()*ent.length)]
 }

 let chosenEnt = entRand(ent);

 let isHappyEnt = false   //prompt cmd for user response to initial dest

while (isHappyEnt !== true) {
    let responseEnt = prompt("Are you happy with your entertainment?");
    if (responseEnt.toLowerCase() === "yes") {
        isHappyEnt = true;
    } else {
        chosenEnt = entRand(ent)
        alert("New Entertainment: " + chosenEnt)
    }
}

console.log("Final Chosen Entertainment: " + chosenEnt)

 

// END: Choices Generator.


let tripHappy = false;

while (tripHappy !== true) {
    let responseTrip =  prompt("Are you happy with all of the selections?");
    if (tripHappy.toLowerCase === "yes") {
        tripHappy = true;
    }
    else {
        alert("hmmm, bummer");
    }    
}
console.log("Ok, you're all set!");






// function doSomething(){
//     let num1 =7;
//     let num2 = 5;
//     let result = addTwoNumbers(num1,num2)
//     console.log(result)
// }

// function addTwoNumbers(numberOne, numberTwo){
//     return numberOne + numberTwo;
// }

// doSomething();