/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding- this defaults to the window that you are in since it has no other reference
* 2. implicit binding- this refers to what is left of the dot
* 3. new binding- makes a new object that is based on a different object, this will refer to the new object
* 4. explicit binding- explicitly telling this what it is to point to using call apply or bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const person = {
    name: 'Aiden',
    age: 27,
    greet() {
      console.log(`Hello, my name is ${this.name}`)
    }
  }
person.greet();
// Principle 3

// code example for New Binding
function personData (name, age, location){
this.name = name,
this.age = age,
this.location = location
};

const NewPersonData = new personData('Tyler', 32, 'South Africa');
const NewPersonData2 = new personData('Harry', 19, 'China');

console.log(`The first person that acessed this computer was ${NewPersonData.name}, age: ${NewPersonData.age}, location: ${NewPersonData.location} and the second person that acessed this computer was ${NewPersonData2.name}, age: ${NewPersonData2.age}, location: ${NewPersonData2.location} `);


// Principle 4

// code example for Explicit Binding
var person2 = {
    fullName: function(city, country) {
     console.log(this.firstName + " " + this.lastName + "," + city + "," + country)
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Green"
  }
  person2.fullName.apply(person1, ["Danville", "Ky"]);
