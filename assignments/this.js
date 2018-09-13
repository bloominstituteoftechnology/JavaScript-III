/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When in the global scope, the value of “this” will be the window/console Object. Much like when Josh was using codepen and this.name displayed as "Codepen". This is generally undesired behavior.

* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object immediately to the left of the dot is 'this'.

* 3. New Binding: A constructor function is a function that makes objects. In this case, 'this' refers to the specific instance of the object that is created and returned by the constructor function When we call it we have to use the new keyword.

* 4. Explicit Binding: We can override the default binding of this that the constructor sets using the .call or .apply methods. This is called explicit binding. 


* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
}
sayName("Sabrina"); //returns window name 


// Principle 2

const cupcake = {
    firstTopping: 'sprinkles',
    addTopping: function(newTop) {
        console.log(`This cupcake has ${this.firstTopping} and ${newTop}`);
        console.log(this);
    }
};
cupcake.addTopping('beetles');

// Principle 3


function CupcakeMaker(flavor, topping) {
    this.flavor = flavor;
    this.topping1 = topping;
    this.menuScript = function() {
        console.log(`This is a ${this.flavor} flavored cupcake with a ${topping} topping.`);
    };
}

const vampireCupcake = new CupcakeMaker('blood', 'crushed spider');

vampireCupcake.menuScript();


// Principle 4


// Prototype of Parent
function Parent(attributes) {
    //console.log(attributes);
    this.age = attributes.age;
    this.name = attributes.name;
    this.gender = attributes.gender;
    this.phrase = attributes.phrase;
}

Parent.prototype.speak = function() {
    console.log(`${this.name} says: '${this.phrase}'`)
}

function Child(cAttributes) {
    //This binds the "this" keyword to Parent
    Parent.call(this, cAttributes);
    this.homework = cAttributes.homework;
}
// this sets up the __proto__ and allows us to use methods now across objects
Child.prototype = Object.create(Parent.prototype);


const mom = new Parent({
    'age': 25,
    'name': 'Chace',
    'gender': 'Male',
    'phrase': 'Do your homework!',
    'toy': 'football'
});


const Ella = new Child({
    'age': 1.5,
    'name': 'Ella',
    'gender': 'Female',
    'phrase': "Watch your damn language, I'm a baby",
    'toy': 'binkie'
});



Ella.speak();