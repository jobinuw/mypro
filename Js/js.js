
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

<<<<<<< HEAD
  }
  
// DO WHILE LOOPS EL LOOP SE EJECUTA AUNQUE SEA UNA VEZ "Hey! Do this thing one time,
// then check the condition to see if we should keep looping."
//After that, it's just like a normal while: the loop will continue so long as the condition being evaluated is true.
 
 var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);   









=======

var loopCondition = false;

//DO WHILE LOOPS

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);

//DRAGON SLAYER CODE
slaying = true;
youHit = Math.floor(Math.random()* 2);
damageThisRound = Math.floor(Math.random()* 5+ 1);
totalDamage= 0;
while(slaying) {
      if (youHit) {
        console.log("You hit!");
        totalDamage += damageThisRound;
        console.log(totalDamage);
        if (totalDamage>= 4) {
        console.log("Reventaste al Draggy");
        slaying = false;
      } else {
        youHit = Math.floor(Math.random()* 2);
    }
    } else {
        console.log("You missed!");
    }
    slaying = false;
}
>>>>>>> 84c2cc14fa9d3910d993d1bfe876e18b4be76c97

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


/////////////////////////////////
//LITERAL NOTATION

var obj = {
property: "value",
otherProp: 42
};

/////////////////////////////////
//CONSTRUCTOR NOTATION

var obj = new Object("value", 42);

///////////////////////////////////

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
<<<<<<< HEAD
=======



// OBJETOS Y ARRAYS CREACION DE OBJETOS DE DOS FORMAS
var object1 = {
    name: "joselote",
    age: 99,
    };
object1["apodo"] = "Charlie";
object1.edad = 65
console.log(object1.apodo)
console.log(object1.edad)
console.log(object1.name)


var me = new Object();
me["name"] = "Charlie";
me.age = 65
console.log(myObj.name)
console.log(myObj.edad)


var raptor = new Object();
raptor["name"] = "tuki";
raptor.age = 66
console.log(raptor.name)
console.log(raptor.age)



var myArray = [677, false, "JavaScript",raptor, raptor.name];
for (var i = 0; i <myArray.length; i++) {
    console.log(myArray[i]);
}


// obejetos creados dentro de objetos

var friends = {
    bill: {},
    steve: {}
};

friends[bill] = {};
friends.steve = {};

// O con el objecto constructor

var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();











// LISTA DE CONTACTOS ARRAYS CON OBJETOS

var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");

// otra notacion

var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    }
};

// PARA ITERAR DENTRO DE UN OBJETO AL ESTILO PYTHON:

for (var key in object) {
  // Access that key's value
  // with object[key]
}

//ejemplo

var list = function (Ob){
for (var ite in friends) {
 console.log(ite)
}
};


// ejercicio de repaso


for (var i=1; i<21; i++){
    if (i% 3 === 0 && i% 5 === 0 ){
       console.log("FizzBuzz")  
       }
    else if(i% 3 === 0) {
	   console.log("Fizz") 
       }
    else if(i% 5 === 0) {
	   console.log("Buzz") 
       }
    else {
  console.log(i);
    }
}

//OBJETOSSSS

var bicycle = new Object();
bicycle.speed = 0;
bicycle.gear = 1;
bicycle.frame_material = "carbon fiber";


// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight =dog["weight"];
var age =dog["age"];


// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;

// here is bob again, with his usual properties
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
// bob's feeling old.  Use our method to set bob's age to 20
bob.setAge(20);

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;
  
// change bob's age to 50 here
bob.setAge(50)


///////////////////////////////////////////////////////////////////////////////

var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());
console.log(bob.age);
bob.setAge(14)
console.log(bob.getYearOfBirth());

////////////////////////////////////////////////////////////////////////////////////


// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;


// here, update Susan's age to 35 using the method
susan.setAge(35)
console.log(susan.age)

//////////////////////////////////////////////////////////

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
  return this.sideLength * this.sideLength ;
};

var p = square.calcPerimeter();
var a = square.calcArea();
console.log(a)

//////////////////////////////////////////////////////////////
///////CONSTRUCTOR

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);

///////////////////////////////////////////////////////////////////////////////
//EJEMPLO CONSTRUCTOR

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39)
var holden = new Person("Holden Caulfield", 16)
console.log("sally's species is " + sally.species + " and she is " + holden.age);
console.log("holden's species is " + holden.species + " and he is " + sally.age);


///////////////////////////////////////////////////////////////////////////////////
FUNCIONES DENTRO DEL CONSTRUCTOR
///////////////////////////////////////////////////////////////////////////////////

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
      return ((this.height * 2)+(this.width * 2));
  };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
console.log(rex)
console.log(area)
console.log(perimeter)

///////////////////////////////////////////////////////////////////////////////////////////

// MAS OBJETOS FUNCIONES Y CONSTRUCTOR
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2= new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");
rabbit1.describeMyself()
rabbit2.describeMyself()
rabbit3.describeMyself()

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//OBJETOS CONSTRUCTORES Y  LISTAS 

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);
for (var i = 0; i < family.length; i++) {
    console.log("I would like to meet " + family[i].name +" "+ "Who has just turn" +" "+ family[i].age);
}

var size = 8;
var contro = true;
var board = "";
board += " ";
for (var y = 0; y < size; y++) {  
   if (contro === true)
      board += "#";
      contro = false;
   else
      board += " ";
}

console.log(board);


/////////////////////////////////////////////////////////////////////////////////////////////

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
function list() {
   var contactsLength = contacts.length
    for (var i = 0; i <contactsLength; i++) {
    printPerson(contacts[i])
    };
}
list()

////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Json",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var xxx = {
    firstName: "xxry",
    lastName: "xxx",
    phoneNumber: "(650) 888-8888",
    email: "mxxxry.johnson@example.com"
};
var contacts = [bob,mary,xxx];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName) {
	var contactsLength = contacts.length;
     	for (var i = 0; i < contactsLength; i++) {
		if (contacts[i].lastName===lastName) {    
          printPerson(contacts[i]);
          break;
         }
 
        else {
         continue; 
         }
	
	}

}

function add(firstName,lastName,email,phoneNumber) {
	contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
};
}

add("jose","mellado","jmmn84@gmail.com",6779845);
list();
search("Jones")

///////////////////////////////////////////////////////////////////////////////////////////

// NOTAS FINALES SOBRE COMO ITERAR LOS OBJETOS Y SUS POPIEDADES.
var dog = {
species: "bulldog",
age: 3,
color: brown
};

dog.species = dog["species"] = "bulldog";

And if we say:

var x = "species";

then

dog[x] = "bulldog";

==============================================================
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for(var pro in nyc) {
  console.log(nyc[pro]);
}
=========================================================================

function Dog (breed) {
  this.breed = breed;
  this.bark = function() {
  console.log("Woofss");
};
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");


buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
  console.log("Woofss");
};
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();

===============================================================
// Aca con el 
//className.prototype.newMethod = function() {
//statements;
//};
// se esta entrando en el prototype de la calse y se esta agregando un nuevo metodo para que los perros puedan
//ladrar...

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();
=====================================================================================

function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Jose", 31);
printPersonName(me);

=========================================================================================

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();

=========================================================================================

// create your Animal class here

function Animal(name,leg) {
  this.name = name;
  this.numLegs = leg;
}

// create the sayName method for Animal

Animal.prototype.sayName = function() {
  console.log("Hi my name is " + this.name);
};



// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();
penguin.numLegs

==============================================================================================
//Inheritance    Herencia

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
var Pen = new Penguin("cirilo");


Pen.sayName();

=============================================================================================




>>>>>>> 84c2cc14fa9d3910d993d1bfe876e18b4be76c97
