//Corey Gumbs
//September 12, 2018

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding is when this is used inside of the scope of the function/object in which it is referenced to.
* 2. explicit binding is when this is referenced via a function/object outside of the scope of function/object and brought into that scope
via an outside source such as another function.
* 3. window binding
* 4. new bindng
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

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

shoppingList.call(shopper, foodArray[0], foodArray[1], foodArray[2]);
