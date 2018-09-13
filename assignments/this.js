//Corey Gumbs
//September 12, 2018

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding is when this is used inside of the scope of the function/object in which it is referenced to.
* 2. explicit binding is when this is referenced via a function/object outside of the scope of a particular function/object and brought into that scope
via an outside source such as another function.

* 3. window binding
window binding is when there is no reference passed within the local scope, so it looks globally for a refernce and works through
the heiarchial tree until it reaches a window object reference and returns it. 


* 4. new bindng

a new binding, binds the "this" to a newly constructed or invoked object. the "new" keyword binds the "this" within the constructor object.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

window.age = 34;
let myName = function(){
    console.log(this.name);
}

let age = {
    age: 41
}

myName();

// Principle 2

// code example for Implicit Binding
let objPerson = {
    "name": "Corey",
    "age": 41,
    "fav-color": "blue",
    greeting: function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

objPerson.greeting();

// Principle 3

// code example for New Binding
let Person = function(name, age, height, weight){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.greet = function(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

let mySelf = new Person("corey", 41, 6, 290);
console.log(mySelf);
mySelf.greet();
// Principle 4

// code example for Explicit Binding
let shoppingList = function(food1, food2, food3){
    console.log( `${this.name} added ${food1}, ${food2}, & ${food3} to a shopping list.`);
}

let foodArray = ["Apples", "Steak", "Cookies"];

let shopper = {
    "name": "Corey",
    "favorite_store": "Trader Joe's",
    "budget": 200
}
//call
shoppingList.call(shopper, foodArray[0], foodArray[1], foodArray[2]);
shoppingList.call(shopper, ...foodArray);
//apply
shoppingList.apply(shopper, foodArray);
//bind
let bindFn = shoppingList.bind(shopper, foodArray[0], foodArray[1], foodArray[2]);
bindFn();
