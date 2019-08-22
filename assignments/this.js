/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window Binding is if none of the other rules apply the this keyword defaults to the window object unless you're in strict mode.
* 2. Implicit Binding is when the function is invoked it looks to the left of the dot that is when the this keyword refers to.
* 3. Explicit Binding is when we explicitly tell JavaScript engine to point to a certain value using call, apply, or bind.
* 4. NEW binding is a new keyword constructs a new object and this points to it.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
this.car ='Dodge Ram';

const myCar = function () {
    console.log(`My favorite car is ${this.car}`);
};
myCar.call(this);
// Principle 2
// code example for Implicit Binding
const name = {
    name:'Bryant',
    person: function () {
        console.log(this.name)
    }
}
name.person();
// Principle 3
// code example for New Binding
function House() {
    console.log(this.name);
}
let myHouse ={
    name:'A home you live in '
};
NewHouse = House.bind(myHouse);
NewHouse();
// Principle 4
// code example for Explicit Binding
function Hello(said) {
    this.says = said;
}
let myHello = new Hello(`Bryant said hello.`);
console.log(myHello.says);