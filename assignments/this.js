/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  window/global scope, this. will refer to the object in global scope
* 2. implicit binding in object, this. refers to the object it is tacked to with a dot.
* 3. 'new' binding, by using the 'new' operator you create an instance where 'new' will be bound to 'this'
* 4. .call/.apply explicit binding, by calling a function using .call or .apply you can bound that function to 'this'
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function howOld (age){
    console.log(this);
    return age;
}
 howOld('35');
// Principle 2

// code example for Implicit Binding
const Obj = {
    age: 'My age is ',
    printAge: function(age) {
      console.log(`${this.age} ${age}`);
      
    }
  };
  Obj.printAge('22');

// Principle 3

// code example for New Binding
function whoAmI(person) {
    this.introduction = 'Hello I am,  ';
    this.person = person;
    this.speak = function() {
      console.log(this.introduction + this.person);
      console.log(this);
    };
  }
  
  const Ana= new whoAmI('22');
  const Jackson = new whoAmI('50');
  
  Ana.speak();
  Jackson.speak();

// Principle 4

// code example for Explicit Binding
function Company(specifics) {
    this.est = specifics.est;
    this.title = specifics.title;
    this.base = specifics.base;
    this.speak = function () {
      return `Hello we are, ${this.title}, based in ${this.base} , started ${this.est} years ago.`;
    };
  }

  const Adelesti = new Company({
    est: '90',
    title: 'Adelesti',
    base: 'Richmond, VA'
  });

  console.log(Adelesti); console.log(Adelesti.speak());