/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding- the this keyword would reference when/where the function was invoked. Will reference left of the invocation (left of the dot) 

* 2. Explicit Binding- when we explicitly state what the this keyword is referencing when we use .call() or .apply() or .bind(). The this keyword will reference the first argument passed into .call() etc.

* 3. new Binding- When we make a constructor and use the new keyword, this will refer to the new object being constructed.

* 4. window Binding- If none of the 3 conditions above are met, the this keyword will default and reference the window object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let sayName= function(){
    console.log(this.name);
}
person={
    name:Alex
}
sayName();

// Principle 2

// code example for Implicit Binding
let employee={
    id:1,
    name:Alex,
    age:25,
    sayName: function(){
        console.log(this.name);
    }
}
employee.sayName();

// Principle 3

// code example for New Binding
let Pet = function(species, name, age){
    this.species= species;
    this.name= name;
    this.age= age;
};
let dog = new Pet('pit', 'Daisy', '16');

// Principle 4

// code example for Explicit Binding
let tellName=function(){
    console.log ('My name is ' + this.name);
};

let character={
    name:'Alex',
    age:25
};
tellName.call(character);