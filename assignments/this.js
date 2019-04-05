/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding // whatever is left of dot at call time is being referenced
* 2. explicit binding // using .call, .apply, .bind to call outside functions/elements from outside of local scope of function
* 3. new binding //
* 4. window binding //
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    x = 9;
    var module = {
      x: 81,
      getX: function () {
          return this.x;
      }
    };

    module.getX(); // 81

    var getX = module.getX;
    getX(); // 9, because in this case, "this" refers to the global object

    // create a new function with 'this' bound to module
    var boundGetX = getX.bind(module);
    boundGetX(); // 81

// Principle 2

// code example for Implicit Binding
var Person = function(name, age, weight, height)
{
  return {
    name : name,
    age : age + ' years old',
    weigth : weight + 'lbs',
    height : height + 'ft ' + 5 + 'in',
    sayName : function(){
      console.log(this.name);
    },

	sayWeigth : function(){
      console.log(this.weight);
    },
	sayHeight : function(){
      console.log(this.height);
    },
  }
}
var xavier = Person('xavier vick-west', 22, 225, 6)
// Principle 3

/// code example for New Binding


function newPerson(buddy) {
    this.name = buddy.name;
    this.age = buddy.age;
    this.speak = function () {
        return `What's up my name is ${this.name}`;
    };
}
const friend = newPerson({
    name: "Chris",
    age: 22
});
console.log(this.name);

// Principle 4

// code example for Explicit Binding
