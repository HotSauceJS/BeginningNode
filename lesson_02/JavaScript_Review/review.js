// Retype these lines into the node REPL (node at command line) one at a time.

// Simple Variables

var totalStudents = 12  // A number
var name = "Diego" // A string

// Collection Types

var style = ["Painting", "Muralist"]; // Arrays contain lists
console.log(style[1]);  // you can access values with indexes
console.log(style[0]);  // the first index is 0

var student = { name: "Frida", age: 47 }  // Objects contain keys and values
console.log(student.name);  // you can access values with dot notation
console.log(student["name"]);  // or brackets

// Combining Collection Types

var student = { name: "Diego", 
                style: ["Painting", "Muralist"] };

console.log(student.name);  // access a simple value
console.log(student.style); // access a collection value
console.log(student.style[0]); // access a value

var allKeys = Object.keys(student); // get an array of all the keys for an object
console.log(allKeys);

// Functions

// one way to declare a named function
var sayHello = function() {
    console.log("Hello!");
}

sayHello();

// another way to declare a named function
function sayGoodbye() {
    console.log("Goodbye!");
} 

sayGoodbye();

// Patterns in Javascript - Callbacks

var sayHello = function(callback) {
    console.log("Hello");
    callback();
}

// This function is declared inline

sayHello( function(){ console.log("Goodbye") });

// Works the same as if we passed in a named function

sayHello(sayGoodbye);

// Patterns in Javascript - Events

myEmitter = require("events").EventEmitter()

// listen for events and trigger inline function
myEmitter.on('sayHello', function() {
    console.log("Hello");
});

myEmitter.emit('sayHello');

// listen for events and trigger named function
myEmitter.on('sayHello', sayHello);

myEmitter.emit('sayHello');  // will trigger both emitters above, since now there are two listeners 


