/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding, when grabbing anything insind the global scope.
* 2. implicit binding, while inside an object refrencing a local scope var; 
* 3. new binding, refrences a local or global scope and creates a new instance of the obj/var 
* 4. Explicit binding, refrences outside the local scope for a var and uses it in  local scope
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function window(){
    return console.log(this)
}

window();

// Principle 2

// code example for Implicit Binding

const myObj= {
    yellOut: 'YELLLLLL',
    yell: function(){
        console.log(`${this.yellOut} SOOOOOOOOOMMMMMMEEEEEE MOOOOORRRREEEEE!!!!!`)
        console.log(this); // will say that it is this obj
    }
}

myObj.yell();

// Principle 3

//code example for New Binding

function Walmart_Worker(manager){
    this.order= 'GO DO SOMETHING!';
    this.manager = manager;
    this.order_worker = function(){
        console.log(this.order + this.manager);
        console.log(this);
    }
}

const mary = new Walmart_Worker('john');
const john = new Walmart_Worker('mary');

john.order_worker();
mary.order_worker();

// Principle 4

// code example for Explicit Binding
mary.order_worker().call('john');
john.order_worker().call('mary');