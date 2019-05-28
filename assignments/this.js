/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The Window Object will be the value of "this" when it is used in global scope.
* 2. Implicit binding applies when a function is called using a dot.
* 3. THIS applies to the new object instance when used in a constructor function.
* 4. Explicit binding occurs when JS call or apply methods are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function eatDinner(food)  {
    console.log(this);
    return food;
}

console.log("Navajo Empenadas");
// Principle 2

// code example for Implicit Binding
const myDinner = {
    dinner: 'Navajo Empenadas',
    isGood: function(yum){
        console.log(`${this.dinner} are ${yum}`);
    }
};
myDinner.isGood("delicious");

// Principle 3

// code example for New Binding
function KitchenStaff(name, position) {
    this.name = name;
    this.position = position;
    this.query = function(){
        console.log(this.name + `, ` + this.position);
        console.log(this);
    };
}

const nick = new KitchenStaff('Nick', 'Line Cook');
const wyatt = new KitchenStaff('Wyatt', 'Chef');

nick.query();
wyatt.query();

// Principle 4

// code example for Explicit Binding

nick.query.call(wyatt); wyatt.query.apply(nick);