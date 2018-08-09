/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window- referncces the this to a window object
* 2. Implicit- calls from inside the function
* 3. Explicit- calls from outside the function
* 4. New Binding- creates new objects using this
*
* write out a code example of each explanation above
*/

var Cartype= function() {
    console.log(this.type);
};


let car1 = {
    type:telsa
};
Cartype();
window.type = telsa;
Cartype();


// Principle 2

// code example for Implicit Binding
let speak =(obj)=>{
    obj.sayName = function(){
        console.log(this.name);
    };
};

let Niloc = {
    name: 'Niloc',
    age:26
};
let Colin= {
    name: 'Colin',
    age:26
};
speak(Niloc);
speak(Colin);

Niloc.sayName();
Colin.sayName();

// Principle 3
let  car = function (color, name, type) {
    this.color = color
    this.name = name
    this.type = type

    };
    
    let Lamborgini = new car('black', 'Zippy','Gallardo');
    

// Principle 4

// code example for Explicit Binding
let person = function(Pref1, Pref2){
            console.log( 'Joey Likes '+ Pref1+' and '+Pref2+'.');
};



let Preferences = ['Music', 'Sushi' , 'Coding'];

person.call(Preferences[0],Preferences[1],Preferences[2]);
 
