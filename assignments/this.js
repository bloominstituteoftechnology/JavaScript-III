/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window
* 2. Implicit
* 3. New Binding
* 4. Explicit
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);
function chirag(indianBoy){
    console.log(this);
    return `I am chirag and i am ${indianBoy}`;
}
console.log(chirag);
// Principle 2

const business = {
    name: 'Actual Candy',
    category: 'food',
    product: 'sour candy',
    owner: 'Max',
    price: function(){
        return `${this.name} sells ${this.product}`;
    }
}
console.log(business);

// Principle 3

const animal = new Animal('param');
function Animal(food) {
  this.food = food;
  this.eat = function() {
    console.log(`This animal likes to eat ${this.food}.`);
  }
}
const zebra = new Animal('grass');
console.log(zebra);
zebra.eat();

// Principle 4

const lambdaClass = {
    name: 'Chirag', 
    classType: 'java script'
}

const material = ['Closures', 'functions', 'variables', 'this']

function iamLearning(material1, material2, material3, material4){
    console.log(this);
    return `${this.name} am learning ${this.classType} and learning about ${material1}, ${material2}, ${material3}, and ${material4}`;
}
material