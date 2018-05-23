/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

When trying to figure out what the this keyword is, 
you need to figure where the function was invoked. 

* 1. Window Binding --


* 2. Implicit Binding --
Left of the dot at the time of the function call


* 3. New Binding --
When a function is invoked with the new 

* 4. Explicit Binding -- 
Explicit binds are called explicitly (obvi) using call, apply and bind. 


* write out a code example of each explanation above
*/
// Principle 1
// code example for Window Binding



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
