/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: the "this" keyword is bound to the window/Console if it isn't told what to bind to. (this is the forest)
*
* 2. Implicit Binding: "this" keyword binds to the object of the method being invoked. (the object to the left of the dot)
*
* 3. New Binding: this principle applies to the usage of constructor functions. When a constructor function is invoked to create a new object, the "new" keyword allows us to bind "this" 
    to the instance of the object being created.
*
* 4. Explicit Binding: whenever we use the .call and .apply methods, we are explicitly deciding what the "this" keyword is bound to.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function helloWorld () {
    console.log(this); //"this" is bound to the Window (aka the forest)
    return 'Hello world!';
}
console.log(helloWorld());

// Principle 2
// code example for Implicit Binding
const randObj = {
    food: "pizza",
    topping: "cheese",
    shape: "square",
    shareFood: function() {
        console.log(`I will share my ${this.shape} ${this.topping} ${this.food}.`)
    }
}
randObj.shareFood(); //"this" is bound to randObj

// Principle 3
// code example for New Binding

//Constructor function for a Computer object
function Computer(specs) {
    this.cpu = specs.cpu;
    this.gpu = specs.gpu;
    this.ram = specs.ram;
    this.powerOn = function(){
        console.log("The PC is now ON");
    }
}

//create a new Computer object
const myCustomBuild = new Computer({
    cpu: 'Intel i9 9900k',
    gpu: 'RTX 2080ti',
    ram: 'G.skill TridentZ 64GB'
});

myCustomBuild.powerOn();
console.log(myCustomBuild.cpu);
console.log(myCustomBuild.gpu);
console.log(myCustomBuild.ram);

// Principle 4
// code example for Explicit Binding (derived from the previous principle's code)
function Laptop(laptopSpecs) {
    Computer.call(this, laptopSpecs); 
    this.screenSize = laptopSpecs.screenSize;
    this.usbPorts = laptopSpecs.usbPorts;
    this.open = function() {
        console.log(`*laptop is now open*`);
    }
}

const myNewLaptop = new Laptop({
    cpu: 'Intel i5 5400',
    gpu: 'no dedicated graphics card',
    ram: 'Samsung 16GB',
    screenSize: '15-inch',
    usbPorts: '2 x USB Type C, 2 x USB3'
});

myNewLaptop.open();
myNewLaptop.powerOn();
console.log(myNewLaptop.cpu);
console.log(myNewLaptop.gpu);
console.log(myNewLaptop.ram);
console.log(myNewLaptop.screenSize);
console.log(myNewLaptop.usbPorts);