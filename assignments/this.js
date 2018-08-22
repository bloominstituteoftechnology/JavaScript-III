/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding occurs when there is no context to the left of the dot and "this" is invoked. In these cases, "this" will refer to the window instead. 
* 2. the new binding uses the constructor function with a new keyword to build a new object or "instance". 
* 3. implicit binding is when dot notation is used to call a function. Whatever is to the left of the dot takes on the role of the context for the "this" function.
* 4. explicit binding occurs when .call(), .apply(), or .bind() are used in a function."this" is used as the context in this form of binding. It allows you to use global functions instead of relying on methods within the object. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function windowB(){
    console.log(this); 
}

windowB(); 


// Principle 2
// code example for Implicit Binding

let player = {
   person: "john",
   number: 2,
   team: "Seattle",
   greet: function(){
       return "my name is " + player.person + " and I play for " + player.team; 
   }
}
player.greet(); 

// Principle 3
// code example for New Binding

function example(name, state, id){
    this.name = name;
    this.state = state; 
    this.id = id; 
    this.func = function(){
        console.log(this.name + this.state + this.id);
    }
}

let person = new example("ryan", "TX", 2); 

person; 


// Principle 4
// code example for Explicit Binding

const ryan = {
    name: "ryan"
}

const arr = ["run", "jump", "dance"]; 

function interest(one, two, three){
    return "I am " + this.name + " and I like to " + one + ", " + two + " and " + three; 
}

interest.apply(ryan, arr); 