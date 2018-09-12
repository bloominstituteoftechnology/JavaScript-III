/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding (this is used when you invoke a function and it is telling the this function to look on the left side of the dot. So if I have an object that's const me and it has an attribute called name, and I invoke a function that goes me.sayName, then the me on the left side of the dot is what the This statement will use. If I don't do this I get undefined )
* 2. Explicit Binding (Allows you to directly point to/say what you want the This function to grab from. So instead of looking to the left of the dot, you write your const and do .call(insert thing you want your This to pull from) You can also use apply instead of cost if you're passing in an array, and you can use bind like apply/call but instead of immediately invoking the previous function it will return a new function to invoke later).
* 3. New Binding (this is used to create whole new objects based off a similar object we already made. So we create an object with a function like const animal = function (color, name, type) and this using the this function in the attributes. You can create new objects quick and easy, (very DRY) but creating new objects and typying in the New function. so Const dog = new Animal (x, y, y) and JS creates it behind the scenes.)
* 4. Window Binding (if you invoke the This keyword and there is nothing to the left of the dot, and you don't use explicit or new binding, then it will default to the window binding and more often than not give you undefined as an answer. )
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const me = {
    'name' : 'gannon',
    'age' : '25',
   'home' : 'detroit',
};

const sayName = function () {
    console.log(this.name);
};

sayName();


// Principle 2

// code example for Implicit Binding

const me = {
    'name' : 'gannon',
    'age' : '25',
   'home' : 'detroit',
   sayName: function(){
     console.log(this.name)
   }
};

me.sayName();


// Principle 3

// code example for New Binding

const Exgirlfriend = function(name, location, age) {
    this.name = name;
    this.location = location;
    this.age = age;
  };
  
  const highschool = new Exgirlfriend('Emily', 'Highland', '9');
  const college = new Exgirlfriend('Sarah', 'Ann Arbor', 22);
  console.log(highschool);
  console.log(college);


// Principle 4

// code example for Explicit Binding

const me = {
    'name' : 'gannon',
    'age' : '25',
   'home' : 'detroit',
};

const sayName = function() {
    console.log(this.name);
};

sayName.call(me)