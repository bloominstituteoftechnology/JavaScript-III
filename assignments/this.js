/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window/console object in global scope.     
* 2. When a fucntion is called by a preceding dot. The object before that refers to 'this'.
* 3. When a constructor function refers to a specific instance of an object.When called has the new keyword has to be called. 
* 4. 
*
* write out a code example of each explanation above
*/

// ========Principle 1 -  Window Binding

// function welcome() {
//     console.log(this);
// }
// welcome();

// // =========Principle 2 - Implicit Binding

// const mydog = {
//     name: 'Ruto',
//     food: 'Taste of The Wild kibbles',
//     eats: function() {
//         console.log(`${this.name} eats some ${this.food}`);
//     }
// }

// mydog.eats();


// // =========Principle 3 - New Binding
// function RandomThing(dog){
//     this.dog = greeter;
//     this.greeting = 'Woof!';
//     this.speak = function() {
//       console.log(`${this.greeting}, ${this.dog}`)
//     }
//   }
  
  
 
  
//   const ruto = new RandomThing('Prince');
//   const prince = new RandomThing('Ruto');
  
//   console.log(ruto);
  
//   ruto.speak();
//   prince.speak();


// // ==========Principle 4 - Explicit Binding

// const baking = {
//     food: 'Cupcakes'
//   }
  
//   const  ingridients = ['Flour', 'Sugar', 'Butter'];
  
//   function introduce( object1, object2, object3) {
//     "use strict";
//     console.log(`Hello! I'm making ${this.food}, and I like to bake with ${obejct1}, ${obejct2}, ${obejct3}`);
//   }
  