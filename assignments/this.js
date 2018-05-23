/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

When trying to figure out what the this keyword is, 
you need to figure where the function was invoked. 
----------------------------------------------------------------------------------------
* 1. Window Binding --
If you invoke a function that uses the this keyword but doesn't have the 
features of the three following principles (implicit, explicit, new), the
this keyword defaults to the window object.
----------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------
* 2. Implicit Binding --
Left of the dot at the time of the function call.
----------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------
* 3. New Binding --
When a function is invoked with the new keyword, the this is bound
 to the new object that is being constructed with 'new'.
----------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------
* 4. Explicit Binding -- 
Explicit binds are called explicitly (obvi) using call, apply and bind. 
----------------------------------------------------------------------------------------

* write out a code example of each explanation above
*/
// Principle 1
// code example for Window Binding
let sayAge = function(){
     return this.age;
}

let myAge = 24;

console.log(sayAge());


// Principle 2
// code example for Implicit Binding

const sayMyName = function(obj){

    obj.sayName = function(){
        return this.name;
    };

}

const me = {
    name: 'Alex',
    age: 24
};


const you = {
    name: 'John',
    age: 27
};

sayMyName(me);
sayMyName(you);

console.log(me.sayName());
console.log(you.sayName());



// Principle 3
// code example for New Binding

let Dinosaur = function(name, age){

    this.name = name;
    this.age = age;

}

let tRex = new Dinosaur('tyrannosaurus', '65mill');
let raptor = new Dinosaur('velociraptor', '66mill');
let stego = new Dinosaur('stegosaurus', '70mill');

console.log(tRex);
console.log(raptor);
console.log(stego);




// Principle 4
// code example for Explicit Binding


let sayName = function(language1, language2, language3){
     return 'Hello my name is ' + this.name + ' and I like to program using' + language1 + language2 + language3;
};  

let alejandro = {
    name: 'Alejandro',
    age: 24
};

let languages = ['javascript', 'CSS', 'HTML'];



console.log(sayName.apply(alejandro, languages));
