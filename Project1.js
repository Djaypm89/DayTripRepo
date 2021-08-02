"use strict"

// random destination function 

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


//  random restaurant function
    

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


// random transportation function  

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


// random entertainment function 

 let ent = ["Movie", "Music", "Podcast"];

 function entRand(ent){
     return ent[Math.floor(Math.random()*ent.length)]
 }

 let chosenEnt = entRand(ent);

//  Re-Select Generator

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


//  START:  Trip Complete function.


let tripHappy = false;

while (tripHappy !== true) {
    let responseTrip =  prompt("Are you happy with all of the selections?");
    if (responseTrip.toLowerCase() === "yes") {
        tripHappy = true;
    }
    else {
        alert("hmmm, bummer");
        // ask which input user wants to change, call back that function. how?
    }    

}
console.log("Ok, you're all set!");


// START:  Print Completed trip to Console. 


let tripComplete = 
("We hope you enjoyed your trip to " + chosenDest + ", " 
+ "your meal at " + chosenRest + "," 
+ " your " + chosenTrans + " ride " +
"and your " +chosenEnt + " entertainment!");

console.log(tripComplete);







