// The for principles of "this";

// in your own words. explain the four principle for the "this" keyword below.
//     1. Window Binding: 

//     In a global execution context, "this" refers to the window Object that lives in the browser. 
//     Inside a function,the value of "this" will default to the global object as well if not preceding object dot-notation. 
    
//     2. Implicit Binding: 

//     This type of binding does not require any calls. 
//     Implicit binding occurs when dot notation is used to invoke a function. 
//     Whatever is left of the dot is the context of the word "this".
//     This also means that the function invoked must be a method on an existing object, to reference this. 

//     3. Explicit Binding: 

//    Added with the use of call(), apply(), and bind().

//     4. New Binding: 

    // New Binding is used when using a constructor function. 
    // The "this" function refers to a specific instance of a new object created.

// write out a code example of each explanation above


// Principle 1

// code example for Window Binding

console.log(this);

function hello(name){
    console.log(`Hello there, ${this.name}` )
}
// Principle 2

// code example for Implicit Binding

let katia = {
    name: "Katia",
    age: 20, 
    occupation: "Software Engineering",
    school: "Lambda",
    speak: function(){
        console.log(`Hi! My name is ${this.name}, I am ${this.age}, and I am interested in ${this.occupation} thanks to ${this.school}`)
    }
}

katia.speak()

// Principle 3

// code example for New Binding

function Person(values){
    this.name = values.name, 
    this.age = values.age, 
    this.speak = function(){
        console.log(`My name is ${this.name} and I am ${this.age} year old`)
    }
}

const Josh = new Person({
    'name': 'Josh',
    'age': 23
})

const Claire = new Person({
    'name': 'Claire',
    'age': 20
})

console.log(Claire, Josh)


// Principle 4

// code example for Explicit Binding

function greet(){
    console.log(`Hello, my name is ${this.name} `)
}

let user = {
    name: "Samantha",
    age: 22
}

greet.call(user);