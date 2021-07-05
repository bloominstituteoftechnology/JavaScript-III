/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: With window binding, "this" will refer to the window object.
* 2. Implicit Binding: With implicit binding, "this" will refer to the object that is called to the left of the function that is invoked.
* 3. New Binding: With new binding, "this" will refer to the new object that is created using a constructor function after invoking the function with the "new" keyword.
* 4. Explicit Binding: With explicit binding, you can use either .call, .apply, or .bind depending on the situation, to pass in the object that will define "this."
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let sayMiddleName = function(){
    console.log(this.middleName);
};

let scott = {
    age: 23,
    dateOfBirth: "09/25/1994",
    middleName: "Michael",
};

window.middleName = "Michael";

sayMiddleName();


// Principle 2

// code example for Implicit Binding

let scott = {
    age: 23,
    dateOfBirth: "09/25/1994",
    middleName: "Michael",
    sayMiddleName: function(){
        console.log(this.middleName);
    }
};

scott.sayMiddleName();


// Principle 3

// code example for New Binding
let Person = function(age, dateOfBirth, middleName){
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.middleName = middleName;
};

let scott = new Person(23, "09/25/1994", "Michael");


// Principle 4

// code example for Explicit Binding

let sayMiddleName = function(){
    console.log(this.middleName);
};


let scott = {
    age: 23,
    dateOfBirth: "09/25/1994",
    middleName: "Michael",
};

sayMiddleName.call(scott);