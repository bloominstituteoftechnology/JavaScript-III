/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding
    when we call a function without any other item preceding the dot , without call bind and apply .
    in this case the function will be call on the window object and this will reference the windown object.
    Hence window binding .
    
* 2. Implicit binding
     the first thing to try when is to figure out "this" is to determine when this function invoked?
     the rule of implict binding says when you call a function or invoked a function look to the left of the dot
     from functiion invocation , that what "this" will reference.

* 3. new Binding 
    whenever we used a constructor function to create a new object , "this " will refer to the instance of the newly created 
    object .

* 4. explicity binding 
     call , apply and bind 
*    if we have standalone function in the global scope and we have and object and 
     we want to call that function  in the context of the object and we use the method "call apply and bind" in this way 
     we have an explicit binding of "this " .


* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
  // we have an object , with function sayName 
  const me = {
      name: 'obed',
      age : 35,
      sayName : function (){
          console.log (this.name);
      }
  }
  
 me.sayName(); // in this context if we look to the left of the dot. the context is me and 
 //sayName(); will return obed;
  

// Principle 3

// code example for New Binding

function Person (name , age ){
    //this 
    name = this.name,
    age = this.age
    // return this 
}

const jerry = new Person('jerry', 27 )// in this case "this" will refer to jerry which is a new instance of the function contructor person.

// Principle 4

// code example for Explicit Binding
 const sayName = function(skills1, skills2, skills3){
    console.log (`${this.name}, i learn to program ${skills1}, ${skills1}, ${skills2}`);
 }

 const me = {
    name: 'obed',
    age : 35
}

const skills =['html','less','javascript ']
// in order to call sayName in the context of the object we can use call and apply , both will invoke the function when 
//function is called

sayName.call(me, skills[0],skill[1],skills[2]) // call method  takes 2 arguments, the context and the remaining argument for the function that you pass one by one .
sayName.apply(me , skills)// apply take 2 arguments as well , the context and an array and it will iterate over that array if we want to use the array content . 
// in the case of bind, the same thing with the call methor  it will return a brand new function that we can use later  instead of invoking the function.
const newFunc = sayName.bind(me , skills[0],skill[1],skills[2]);
