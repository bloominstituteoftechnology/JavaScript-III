/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle one is where this is bound to the window, typically in situations where this has not been implicitly or explicitly specified or created with a new statement.
* 2. Implicit binding is where an object is created and this is generally implicit to the object definition specified at design time.
* 3. New binding generally takes effect when the object constructor is called and instanciated. This is generally at run time, throughout the lifecycle of the scope.
* 4. Explicit binding is where this is specifically defined on a function or object, with its parameters, using inbuilt functions like call, apply and bind, each having separate params.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function Welcome(){
    return this;
}

// Principle 2

// code example for Implicit Binding
const obj = {
    name: "Dan",
    position: "Instructor",
    speak: function(){
        return `${this.name} says hi.`
    }
}

// Principle 3

// code example for New Binding
function Vehicle(obj){
    this.model = obj.model;
    this.year = obj.year;
}

const bmw = new Vehicle({model: "X5", year: 2019});

// Principle 4

// code example for Explicit Binding
function Car(obj){
    this.model = obj.model;
    this.year = obj.year;
}

function aiCar(obj){
    if(obj.year === 2019){
        return `This car is autonomous.`;
    }
    return `Get a 2019 car!`;
}

const mercedes = new Car({model: "X5", year: 2019});

aiCar.apply(mercedes, objProp)