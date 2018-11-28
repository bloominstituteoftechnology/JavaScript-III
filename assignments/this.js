/* The for principles of "this";


* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding I like Josh's defintion(the tree in the forest is this if you want to point to it.
     but the window is the forest itself)

* 2. implicit binding ( Look to the left of the invocation of method and there you will find your this keyword context).
                        In implicit binding, whatever is to the left of the dot becomes the context for this in
                         the function.

* 3. explicit binding (Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
        We call these explicit because you are explicitly passing in a this context to call() or apply(). We’ll talk bind() in 
        just a moment.)
        
* 4. new object binding (or constructor binding, It binds property or function which is declared with this keyword
     to the new object.It returns newly created object unless the constructor function returns a non-primitive value 
     (custom JavaScript object).)
*
* write out a code example of each explanation above
*/

// Principle 1
// You will be seeing the window object and everything related to it.


// code example for Window Binding
// first we create a short object 
console.log("=================================this.js==========================================")
function checkWindow(){
    //console.log(window);
}
checkWindow();

// Principle 2

// code example for Implicit Binding
const obj = {
    name : "jimmyJoe",
    breed:"pointer",
    color:"best color ever",
    info :function(){
        return `${this.name},I wish you were still here.why do ${this.breed} dogs die so early`
    }
}

console.log(obj.info());

// Principle 3

// code example for New Binding

const joe = {
    name: 'JimmyJoe',
    age : 12
  }
  
  const skills = ['hunting', 'playing', 'being a beauty of a dog '];
  
  function myDog(skills1, skills2, skills3) {
    "use strict";
    console.log(`Hello! My name is ${this.name},my age was ${this.age} when I passed away :).I like ${skills1}, ${skills2}, and ${skills3}`);
  }
  
    //Call passes the this arg, and argument
  myDog.call(joe, skills);
  
   //Apply seperates the values of an argument into an array 
  myDog.apply(joe, skills);
  
  // Bind is "use this later!"
  const describeLater = myDog.bind(joe,...skills);
  describeLater();
  

// Principle 4

// code example for Explicit Binding

function Portrait(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job
}

let anonymoyus =  new Portrait("WhoKnows","Immortal","watchingYou;)")
console.log(anonymoyus.name);

console.log("=================================prototypes.js==========================================")