/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*


* 1. Window Binding: 

This is like declaring a global variable.  It is on the outermost level of scope,
and the keyword is bound to that value throughout the entire window. 


* 2. Implicit Binding:

When you invoke a function, there will be an object to the left of
the dot.  That will be your 'this'.  jim.sayName(); is like this.sayName().


* 3. Explicit Binding: 

*Using .call, .apply, .bind, 'this' becomes what you pass through the parenthesis. 
sayName.call(stacey);, here 'this' is stacey, and that is passed to the sayName function. 


* 4. New Binding: 

'new' in front of a function being invoked causes the construction of a new object
and that new object is what 'this' will be reffering to. 


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var sayAge = function(){
    console.log(this.age);
};

var me = {
    age:25
};

sayAge(); //This will return undefined, we are out of scope and
// the function can't find a parameter.
window.age = 35; // Now there's a window/global 'age' with value 35.
sayAge(); //this will look in the global scope for something to pass, 
//it finds the window object, and passes it through so we get 35. 




// Principle 2

// code example for Implicit Binding

var me = {
    name: 'Tyler',
    age: 25,
    sayName: function(){
        console.log(this.name);
    }
}

me.sayName();  //this passes 'me' as 'this', and the function within logs
//this.name, which in this case is me.name, which we can see is 'Tyler'. 



// Principle 3

// code example for New Binding
var Animal = function(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');
//this builds a new animal object, with the values in parentheses. 
//'this' will refer to that new object and its values. 

// Principle 4

// code example for Explicit Binding
var sayName = function(){
    console.log('My name is ' + this.name);

};

var stacey = {
    name: 'Stacey', 
    age: 34

};

sayName.call(stacey); //'stacey' is what 'this' will refer to.  The function 
//is invoked and the object 'stacey' is passed through it. 