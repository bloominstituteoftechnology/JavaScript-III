/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

var sayAge = function(){
    'use strict';
    console.log(this.age);
};
var me = {
    age:25
};
sayAge();



// code example for Implicit Binding

var me ={
    name:'Tyler',
    age: 25,
    sayName:function(){
        console.log(this.name);
    }
};
me.sayName();

// code example for New Binding

var Animal =function(color, name, type){
    this = { }
    this.color = color;
    this.name =name;
    this.type = type;
};
var Zebra = newAnimal('black and white', 'zorro', 'zebra');

// code example for Explicit Binding
var sayName = function(){
    console.log ('my name is ' + this.name);
};
var stacey = {
    name:'stacey',
    age:34
};
sayName.call(stacey);
