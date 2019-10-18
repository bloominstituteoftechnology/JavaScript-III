/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Object Binding/Global Object Binding: In the global scope, the value of 'this' is the window object.
* 2. Implicit Binding: When a function is called using dot notation, the value of 'this' is the object to the left of the dot (or preceding the dot).
* 3. New Binding: When a constructor function is used (with the 'new' keyword), the value of 'this' is the specific instance of the object created by the constructor. 
* 4. Explicit Binding: When JS .call or .apply methods are used, the value of 'this' is explicitly defined using .call, .apply, or .bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function callMyPhone (number) {
    console.log (this); //Outputs my entire Window Object!
    return number;
}
//TEST
//callMyPhone(`NumberOne`);

// Principle 2

// code example for Implicit Binding
const typeOfPhone = {
    phoneType: 'Samsung',
    isIphone: false,
    explain: function(phone) {
        console.log(`John had a ${phone}, but now he uses a ${this.phoneType}.`);
        console.log(this);
    }
};
//TEST
typeOfPhone.explain(`iPhone 5`);

// Principle 3

// code example for New Binding

//Constructor Function
function Car (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    // this.print = function () {
    //     console.log(`John is getting a ${this.year} ${this.brand} ${this.model} before the end of the year.`);
    //     console.log(this);
    // };
}
//Make a Prototype function for Car
Car.prototype.print = function () {
        console.log(`John is getting a ${this.year} ${this.brand} ${this.model} before the end of the year.`);
        console.log(this);
    };

//New Items from Constructor
const kia  = new Car ('Kia', 'Niro', '2019');
const jeep = new Car ('RangeRover', 'Sport', '2020');
const mazda = new Car ('Mazda', 'CX-9', '2020');

//Call Constructor Method print
kia.print();
jeep.print();
mazda.print();



// Principle 4

// code example for Explicit Binding

//Overriding the New items from above using call and apply
kia.print.call(mazda);
jeep.print.apply(kia);
mazda.print.bind(jeep);
