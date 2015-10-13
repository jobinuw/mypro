if ("mye".length >= 7) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
     console.log("Nombre muy corto");
}

if ("mye".length >= 7) 
{
   console.log("The condition is true");
}
else // "otherwise"
{
    console.log("The condition is False");
}

console.log("Xiao Hui".length <122);
console.log("Goody Donaldson".length > 8);
console.log(8*2===16);

// Ventanas Pop-ups
confirm("I am ok");
prompt("Are you ok?");

if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
	
	
}
// Be careful with the substring's letter positions! slicing words

"wonderful day".substring(3, 7)


// Juego de Justin Bieber
// Juego de Justin Bieber

confirm("I understand confirm!");
var age= prompt("Que edad tienes")
if (age<13) {
    console.log("Puedes jugar bajo tu propio riesgo");
} else {
    console.log("Que comienze el Juego!");
}
 console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
 console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
 var userAnswer= prompt("Do you want to race Bieber on stage?")
 if (userAnswer==="yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
} else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
 var feedback= prompt("what is your rate? 0 to 10")
 if (feedback>8) {
    console.log("Thank you! We should race at the next concert!");
} else {
    console.log("I'll keep practicing coding and racing.");
}


// Funciones
// Funciones


var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Joselote");

// Funciones
// Funciones


var foodDemand = function(food) {
   console.log("I want to eat" + " " + food);
};
foodDemand("Pan con Mortadela");


// Funcion mas return mas if else
var quarter = function(number) {
   return(number/ 4);
};



if (quarter(36) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}


