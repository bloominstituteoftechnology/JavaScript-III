/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window: the global object, the parent/holder of Javascript 
* 2. implicit: within an object
* 3. new: creates a new object based off a constructor 
* 4. explicit: refers to an object or something outside the block but not the window
*
* write out a code example of each explanation above
*/

// Principle 1

function iAmWindow() {
    return this;
};

// Principle 2

let anObj = {
    obj: 'human',
    iAmImplicit: function() {
        return `${this.obj} screams in frustration!`;
    }
};
anObj.iAmImplicit();

// Principle 3

function Human(iAmNew) {
    this.name = iAmNew.name;
    this.age = iAmNew.age;
    this.city = iAmNew.city;
};

let clyde = new Human({
    name: 'Clyde',
    age: 37,
    city: 'Boston'
});

// Principle 4
const aBro = {
    name: 'David',
    age: 22
}

const iAmExplicit = ['motorcycles', 'computers', 'cameras'];

function coolStuff(cool1, cool2, cool3){
    return `${this.name} thinks that these are the coolest stuff ever: ${cool1}, ${cool2}, and ${cool3}`;
};

coolStuff.apply(aBro, iAmExplicit);