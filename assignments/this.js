/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - Global context. Without Implicit, explicit and new to tell what this should point to, this will goint to dafualt to the window object.
* 2. Implicit Binding - Look to the left on the dot.  Whatever it is, it bocomes the context of this function.
* 3. New Binding - when we invoke a function (that has this keyword) with new keyword, behind the scene JS will ceate a new object and save it like this = {}.
* 4. Explicit Binding - It tells the function what object should use for this, using functions such as call, apply and bind.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function iAmGlobal(x) {
    console.log(this);
}
iAmGlobal();

// Principle 2
// code example for Implicit Binding
let car = {
    name: 'Honda',
    model: 'Accord',
    year: 1998,
    toDealer: function() {
        console.log(`30% discount for ${this.year} ${this.name} ${this.model}.`);
    }
}
car.toDealer();

// Principle 3
// code example for New Binding

let Car = function(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
}       

let newCar = new Car('Toyota', 'Camry', 2017);
console.log(newCar);

// Principle 4
// code example for Explicit Binding
let student1 = {
    name: 'Ja',
    major: 'CS'
};

let whatILike = function(sub1, sub2, sub3) {
    console.log(`I am ${this.name} and I like ${sub1}, ${sub2}, and ${sub3}`);
}

let subjects = ['Math', 'Programming Languages', 'Statistics'];

whatILike.call(student1, subjects[0], subjects[1], subjects[2]);
whatILike.apply(student1, subjects);
let forStudent2 = whatILike.bind(student1, subjects); //.bind - create new function named forStudent2 in case we use it later. 
forStudent2();
