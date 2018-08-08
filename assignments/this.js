/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Basically, if "this" hasn't been bound, it is bound to the window (or global) Object.
* 2. Implicit Binding: If a function is called as a method of an Object, "this" is bound to that Object.
* 3. Explicit Binding: If a function is called with the methods .apply() or .call(), "this" is bound to the Object specified in the method parameter.
* 4. New Binding: Basically, whenever a new instance of an Object (and therefore a new Object) is created, "this" is bound to that specific new instance of an object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
let commonAussieAnimal = {
"howDangerous" : "VERY",
"comingForYou" : function(){
    return `This animal is ${this.howDangerous} dangerous.`
}
};

console.log(commonAussieAnimal.comingForYou());



// Principle 3

// code example for New Binding

let Animal = function(name, color) {
this.name = name;
this.color = color;

}

let newAnimal = new Animal("Fairy Armadillo", "Pink");
console.log(newAnimal.name);

// Principle 4

// code example for Explicit Binding

let AussieAnimal = function(name, color, howDangerous) {
Animal.call(this, name, color);
this.howDangerous = howDangerous;
}

let newAussie = new AussieAnimal("Drop Bear", "Grey Death", "DEADLY");
console.log(newAussie.name);
