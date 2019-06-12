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

console.log(this);

// OR

function aNumber(number) {
    console.log(this);
    return number;

}

aNumber(7);

// code example for Window Binding

// Principle 2

const myImplicit = {
    greeting: 'Hello',
    speak: function() {
        console.log('Implicit this: ===', this);
        return `${this.greeting}, world!`
    }
};


myImplicit.speak();

// code example for Implicit Binding

// Principle 3

function Student (obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function () {
        console.log('This new binding', this);
        return 'Hello, my name is ${this.name}, and I am ${this.age} years old!';
    }
}

const kelly = new Student({name: 'kelly', age: 22});
const cole = new Student({name: 'cole', age: 35});
kelly.speak();
cole.speak();


// code example for New Binding

// Principle 4


const myObject = {
    name: 'Kelly More',
    city: 'Orlando',
    favoriteFood: 'Pakistani'
  }
  
  const thingsIEnjoy = ['Hiking', 'Yoga', 'Learning']

  function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, 
    and I enjoy ${thing1}, ${thing2}, and ${thing3}. 
    I love to eat ${this.favoriteFood}.`
  }
  
  tellUsAboutYourself.apply(myObject, thingsIEnjoy)
  tellUsAboutYourself(...thingsIEnjoy)
  console.log(tellUsAboutYourself.apply(myObject, thingsIEnjoy));


     

// code example for Explicit Binding