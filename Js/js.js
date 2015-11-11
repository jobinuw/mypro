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

// Funciones Con If/Else Anidado
// Funciones Con If/Else Anidado

var sleepCheck = function(numHours) {
   if (numHours>=8 ) {    
   return("You're getting plenty of sleep! Maybe even too much!");
   }
   else {
   return("Get some more shut eye!");
   }
};
 console.log(sleepCheck(10));
 console.log(sleepCheck(5));
 console.log(sleepCheck(8));
 
 
 // Piedra Papel Tijeras FuncionCompare
//  Piedra Papel Tijeras FuncionCompare

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
var compare = function(choice1,choice2) {
   if (choice1 === choice2) {    
   return("The result is a tie!");
   }
   else if(choice1 === "rock"){    
      if (choice2 === "scissors") {  
          return("rock wins");
            }
      else {
          return("paper wins");
      }
   }
   else if(choice1 === "paper"){    
      if (choice2 === "rock") {  
          return("paper wins");
            }
      else {
          return("scissors wins");
        }
   }
   else if(choice1 === "scissors"){    
      if (choice2 === "rock") {  
          return("rock wins");
            }
      else {
          return("scissors wins");
      }
   }        
};
compare(userChoice,computerChoice)

// Example of a for loop:  Example of a for loop:  Example of a for loop:  Example of a for loop:
// Example of a for loop:  Example of a for loop:  Example of a for loop:  Example of a for loop:

for (var counter = 1; counter < 11; counter++) {
	console.log(counter);
}

// We can increment up by any value by writing i += x, where x is how much we want to increment up by. e.g., i += 3 counts up by 3s.
for (var i = 5; i < 50; i += 5) {
	console.log(i);
}
for (var i = 100; i > 0; i-=5) {
	console.log(i);
	
// LOOPS AND ARRAYS O LISTAS

var cities = ["Melbourne", "Amman", "Helsinki", "NYC","caracas", "maracaibo", "NiuyoRk", "HongKong"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

// Click on "Stuck? Get a hint!" if you get stuck!
var names = ["Jose", "Ramon", "Helsinki", "Juana","caracas"];

for (var i = 0; i < names.length; i++) {
    console.log("I know someone called" + " " + names[i]);
}

// Ejercicios de arrays y for loops
// Ejercicios de arrays y for loops

var text = "Llegando a Surinam en visita de trabajo para dinamiza\ nuestra hermandad xvideos y cooperación con el Pueblo y el\ Presidente. Po\ un Caribe Unido xvideos";
var myName = "xvideos";
var hits = [];
for (var i = 0; i <text.length; i++) {
    if (text[i]==='x') {
        for (var j= i; j <(myName.length+i); j++) {
	      hits.push(text[j]);
        }
    }	
}
if (hits.length===0 ) {    
   console.log("Your name wasn't found!");
   }
   else {
  console.log(hits);
   }
   
   var prueba = "b".localeCompare("b")
   
 // Otra forma de hacerlo
   
   var text = "Llegando a Surinam en visita de trabajo para dinamiz\ nuestra hermandad xvideos y cooperación con el Pueblo y el\ Presidente. Po uno Caribe Unido xvideos";
var myName = "uno";
var hits = [];
for (var i=0; i<text.length; i++){
    if (myName === text.substr(i,myName.length)){
        hits.push(text.substr(i,myName.length));
        i += myName.length;
    }
}
console.log(hits)
console.log(text.length)

//WHILE LOOPS
//WHILE LOOPS

var prueba = Math.random() * 2
console.log(prueba);
var coinFace = Math.floor(prueba);
console.log(coinFace);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

//WHILE LOOPS
//WHILE LOOPS


 count= 0

var loop = function(){
	while(count < 3){
	      console.log("I'm looping!");
	      count++
        }
	
};

loop();




vari = true
text= []
strr= "dsfsdfsdfsdfsdfsdfsdfsdfdfssd"
while(vari){
	console.log("Heads! Flipping again..." + vari);
	vari = false
}

 for (var i= 0; i <("acacaca".length); i++) {
	      text.push(strr[i]);
        }
console.log(text);

  }
  
// DO WHILE LOOPS EL LOOP SE EJECUTA AUNQUE SEA UNA VEZ "Hey! Do this thing one time,
// then check the condition to see if we should keep looping."
//After that, it's just like a normal while: the loop will continue so long as the condition being evaluated is true.
 
 var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);   










var isEven = function(number) {
 if (number%2===0) {    
  return(true);
 }
  else if(isNaN(number)) {
   return("Eso No es un Numero...");
   } 
   else {
   return(false); 
 }
};
console.log(isEven("hhh"))

//Switch Exercises

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

//GENERAL EXPRESSION

switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}
// Miercoles 21 10

// AND conditional  &&   (OR true || true;     (// => true) !  NOT  !)
var hungry = true      ;
var foodHere= true     ;
var eat = function() {
 if (hungry&&foodHere) {    
  return(true);
 }
 
   else {
   return(false); 
 }
  
};

//OBJETOS SABADOOOOOOOOOOO

var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

var me = {
    name: "joselote",
    age: 99,
    };
    
console.log("Great to see you," + " " + me.name+ " " + "Ya tienes"+ " " + me.age + " " + "anosss??"+ " " )


//OTRA FORMA DE CREAR UN OBJETO


var myObj = new Object();

var myObj = new Object();
myObj["name"] = "Charlie";
myObj.edad = 65
console.log(myObj.name)
console.log(myObj.edad)

git remote add origin https://github.com/jobinuw/django.git
git push -u origin master
