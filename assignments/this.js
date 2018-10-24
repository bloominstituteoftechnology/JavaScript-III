/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - Window binding is when none of the other this binding rules are applied (Implicit, Explicit and new) and instead is mapped to the main window object. 'Use Strict' is a way to get out of window binding, which usually results in undefined. 
* 2. Implicit binding - The most commonly used form of "this". It is when you look to the left of the "this" call. The object before the dot is "this". Has no method use for "this".
* 3. Explicit binding - Has methods (.call, .apply, .bind) which explicitly states how "this" is being used for this JS methods. You can override objects with .call and .apply. .call can call the objects when separated, while .apply applies the array of arguments.  .bind returns a new object instead of manipulating the current object and works essentially the same as .call when being constructed
* 4. New binding - it's an object creator. "this" refers to the object being created and returned, also known as a contrusctor function. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

 const yearsOfExp = (employee) => {
        console.log(this.years)
 }

 let myExp = {
     years: 3
 }

 yearsOfExp()

 let sayAge = function(){
    console.log(this.age);
  };
  
  let meNow = {
    age: 26
  }
  
  // sayAge.call(me);
  //what happens if we don't do the above?
  sayAge()

// Principle 2

// code example for Implicit Binding

const likedIt = (human) => {
    human.liked = function(){
      console.log(`${this.name} liked your video!`)
    }
  }
  const user = {
    name: 'Jamar'
  }

  const user2 = {
      name: 'Semira'
  }
  
  likedIt(user);
  likedIt(user2)
  
  user.liked()
  user2.liked()

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding