/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Impliclit Binding
* 2. Explicit Binding
* 3. Window Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function window(){
//     console.log(this.time);
// }

// let random = {
//     time: '9:00PM'

// }

// window();




// Principle 2

// code example for Implicit Binding

var sayNameMixin = function(obj){
obj.sayName = function(){
    console.log(this.name);
};

};

var krabs = {
    name: 'Krusty Krab'
};

var ewww = {
    name: 'Chum Bucket'
};





sayNameMixin(krabs);

krabs.sayName();

 // this is referring to the left of the dot



// Principle 3

// code example for New Binding

var Vehicle = function(make,model,color){
    
    this.make = make;
    this.model = model;
    this.color = color;
    
}

var inventory001 = new Vehicle('Ford','Ranger','White');





// Principle 4

// code example for Explicit Binding

//This function will pass this to favGame of any name Object put threw.
let favGamers = function(name){
    console.log('My favorite game is ' + this.favGame); 
}
//name object
let Metri = {
    favGame: 'Red Dead Redemption',
    age:26
};
//function.call(object)
favGamers.call(Metri);