/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Window/Global Object Binding: If you are in the global scope the value of this will refer to the window or console Object.

* 2. Principle 2: Implicit Binding: Whatever is directly left of the invocation is the keyword context.

* 3. Principle 3: Explicit Binding: When we use .call(), .apply(), or.bind() methods, we are explicitly defining this.

* 4. Principle 4: New Binding:  Whenever we use a Constructor Function we use the new keyword and this refers to the specific instance of the object that is created and returned by the constuctor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const imWindow = {
    'name' : this
}

console.log(imWindow.name);

// Principle 2

// code example for Implicit Binding

const imImplicit = {
    'name' : 'Ninja',
    'weapon' : function(weapon1, weapon2){
        console.log(`That ${this.name} uses ${weapon1} and ${weapon2}, so be cautios!`)
    }
}

imImplicit.weapon('kunai', 'smokebombs');

// Principle 3

// code example for New Binding

function Preserve(jamType){
    this.jamType = jamType;
    this.jelly = 'Jelly';
    this.select = function(){
        console.log(`${this.jamType} ${this.jelly} Please!`)
    }
}

const strawberry = new Preserve('Strawberry');
const grape = new Preserve('Grape');

console.log(strawberry);
console.log(grape);

strawberry.select();
grape.select();

// Principle 4

// code example for Explicit Binding

const myInfo = {
    'name': 'David'
}

const favoriteColors = [ 'Blue', 'White', 'Salmon'];

function introduction(color1, color2, color3){
    console.log(`Hi! My name is ${this.name} and my 3 favorite colors are ${color1}, ${color2}, and ${color3}.`)
}

// ================ .call();
introduction.call(myInfo, favoriteColors[0], favoriteColors[1], favoriteColors[2]);
// ================ .apply();
introduction.apply(myInfo, favoriteColors);
// ================ .bind();
const stillWantedToTryIt = introduction.bind(myInfo, ...favoriteColors);
stillWantedToTryIt();
