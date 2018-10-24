/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window is where the this keyword will point to by default
* 2. Implicit binding is used when dot notation is used to invoke a function
* 3. The new keyword points to the object's this
* 4. Explicit binding forces this to point at a particular object using call or apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding() {
    console.log(this);
}

// Principle 2

// code example for Implicit Binding
const dog = {
    name: "Castro",
    breed: "Maltese",
    nameBreed: function () {
        console.log(`My dog's name is ${this.name}, and he is a ${this.breed}`)
    }
};

dog.nameBreed();


// Principle 3

// code example for New Binding

const waifu = function(name, anime, rank) {
    this.name = name;
    this.anime = anime;
    this.rank = rank;
};

const Mikasa = new waifu("Mikasa", "Attack on Titan", 4);


// Principle 4

// code example for Explicit Binding
const waifuFunctions = {
    printName: function() {
        console.log(this.name);
    }
};

const Senjougahara = {
    name: "Senjougahara",
    anime: "Monogatari Series"
};

waifuFunctions.printName.call(Senjougahara);