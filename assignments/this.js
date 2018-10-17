/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* 
* 0. One thing I notice is 'this' is always an object. To JavaScript, it can equal literally ANYTHING. To avoid tripping out, JavaScript automatically assigns 'this' as the Window/Global object. From there, the way it is used helps JavaScript determine exactly what 'this' the developer is talking about.

* 1. Window/Global Object Binding is the automatic defining of the 'this' keyword as the entire window that is being rendered since it is an object. 

* 2. Implicit Binding is the defenition of 'this' is the definition of the 'this' keyword as a specific object that has been defined and is usually followed by one of its attributes or methods. So something.doSomething() makes 'something' equal to 'this'. It is implied that the attached object is 'this' thing being called upon. That specific object and all its attributes are being defined as 'this'.

* 3. Explicit Binding is the definition of the 'this' keyword to any object invoking a globally defined method. When invoking a globally defined function, the specific object equal to 'this' must be .call()ed with it's attributes individually inserted based on the parameters of the method, .apply()ed with an array of its attributes  inserted as the parameters, or .bind()ed and stored as a variable to be used for later.

* 4. New Binding is the definition of the 'this' keyword as the specific object being created by a constructor method to the attributes that are attached and specifically defined for the object within the prototype or template of the object.
*
* write out a code example of each explanation above
*/

// Principle 1: code example for Window Binding
console.log(this); // 'this' == the rendered window

// Principle 2: code example for Implicit Binding
let car = {
    type: 'Chevy Malibu',
    speed: 55,
    drive: function() {
        return `The ${this.type} is currently traveling: ${this.speed}mph`;
    }
}

let car2 = {
    type: 'Chevy Cobalt',
    speed: 57,
    drive: function() {
        return `The ${this.type} is currently traveling: ${this.speed}mph`;
    }
}

console.log(car.drive()); //'this' == console for log &'this' == car object for drive
console.log(car2.drive()); //'this' == console for log & 'this' == car2 object for drive

// Principle 3: code example for Explicit Binding
function amISpeeding(type, speed, speedLimit) {
    if (this.speed > speedLimit) {
        return `The ${this.type} is currently travleing at the speed of ${this.speed}. Which is ${this.speed - speedLimit} over the speed limit of ${speedLimit}. Slow Down!`;
    } else {
        return `The ${this.type} is currently travleing at the speed of ${this.speed}. Which is at or under the speed limit of ${speedLimit}. Safe travels!!`;
    }

}

console.log(amISpeeding.call(car, car.type, car.speed, 60));


console.log(amISpeeding.call(car2, car2.type, car2.speed, 50));

// Principle 4: code example for New Binding

function Book(title, pages, genre) {
    this.title = title;
    this.pages = pages;
    this.genre = genre;
    this.about = function() {
        return `The ${this.title} is from the ${this.genre} section and has ${this.pages} pages.`;
    }
}

const bible = new Book('Holy Bible', 'a lot', 'gospel');

const dictionary = new Book('Dictionary', 'too many', 'reference');

console.log(bible);
console.log(dictionary);
console.log(bible.about());
console.log(dictionary.about());