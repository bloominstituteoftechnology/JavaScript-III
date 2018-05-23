/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. `this` can be used for Window/Global Object Binding. It points to the window object which has many built in methods available to the user. this.a = "dragon" would be the same as window.a = "dragon".
* 2. Implicit Binding is when you use this inside an object. So if I created a new object and set a name property, I could reference that name using this.name for other properties.
* 3. The new binding is useful when you need to create instantiations from a constructor so that `this` points to its new instance everytime.
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name = "Simon";
function sayName(name) {
    console.log(this.name); //this references to the window object so it will output Simon instead of the given argument in sayName
}
sayName("William"); //Will not log the name William
// Principle 2
const robot = {
    name: "Jerry",
    id: "4758",
    dateOfMfg: "January 4, 2018",
    state: "neutral",
    sayInformation: function () {
        return `My name is ${this.name} and my ID number is ${this.id}. I was made on ${this.dateOfMfg}.`
    }
};
console.log(robot.sayInformation());
// code example for Implicit Binding

// Principle 3

// code example for New Binding
function House(windows, doors, rooms) {
    this.windows = windows;
    this.doors = doors;
    this.rooms = rooms;
}
const myHouse = new House(4,2,8); // This instance of house has 4 windows, 2 doors, and 8 roooms.
const thatHouse = new House(3,2,1); // This instance of house has 3 windows, 2 doors, and 1 roooms.
console.log("How many rooms does my house have?" + " I have " + myHouse.rooms + " rooms");
// Principle 4

// code example for Explicit Binding