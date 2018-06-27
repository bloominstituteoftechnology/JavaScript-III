/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when you are binding outside of any scope that would bind to the most global object aka The window
* 2. Implicit Binding is when you look to the left of the dot in the function is invoked.
* 3. Explicit Binding is where you call "this" using the function methods .call , .apply , and .bind.
* 4. New Binding is where you link the New variable to the parent via using "new ParentName". That way you can keep the features of the parent on the child
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function example(i) {
    this.i = "Ball"
    console.log(this.i)
}

example();



// Principle 2

// code example for Implicit Binding

const justin = {
    name : "Justin",
    age : "26",
    gender : "M",
    
    eats : function(name) {
        console.log(`${this.name} scoffs down their meal`);
    }
}

justin.eats()



// Principle 3

// code example for New Binding
function Human(prop1, prop2, prop3) {
    this.name = prop1;
    this.age = prop2;
    this.gender = prop3;
    this.sleep = function() {
        console.log(`${this.name} falls asleep zzzZZZzzzZZZZzzz`);
    }
};

const matt = new Human("Matt", 24, "M")  
const brandon = new Human("Brandon", 24, "M")  

matt.sleep()
brandon.sleep()





// Principle 4

// code example for Explicit Binding

const reptar = {
    name : "Reptar",
    age : "4564132",
    gender : "M",
}

function rawr(name) {
    console.log(`${this.name} says RAWRRR!`);
}

rawr.call(reptar)