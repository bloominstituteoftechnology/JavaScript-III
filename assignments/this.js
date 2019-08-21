/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Windwo Binding: is the default which apply the "this" keywords default to the window object,
 * strict mode - prevents window binding from breaking our code but 
will return undefined.
 * 2. Implicit Binding: When a function is called it looks to the left of the dot which is the "this"
 keyword and it is automatic
 * 3. New Binding: This is use to create a new Object from  an existing object using the keyword new
 * 4. Explicit Binding: We can explicitly tell the JavaScript engine to point to a certain value using call, apply or bind call apply and bind can be used to invoke a function with a specific value for this

 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function greetings() {
    console.log(this.name);
}
greetings();
//here name is decleared global and can access in a closure
const name = "Adela";

// Principle 2

// code example for Implicit Binding
let objImplicit = {
    name: "adela",
    country: "Nigeria",
    language: "Yoruba",
    intro: function() {
        console.log(`My name is ${this.name}, I'm from ${this.country} and I speak ${this.language}`);
    }
}
objImplicit.intro();
// Principle 3

// code example for New Binding

function Father(birth) {
    this.child = birth;
}

let newChild = new Father('I the Father has given birth');

console.log(newChild.child); // function is being invoked 





// Principle 4


// code example for Explicit Binding

function food() {
    console.log(this.dishType);
}

let myFavourite = {
    name: 'Adela',
    dishType: 'Iyan (pounded Yam) and Egusi (Mellon soup)'
}

food.call(myFavourite); // invoking the function here