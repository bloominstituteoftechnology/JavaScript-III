/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding to objects.  'this' defined by whatever is to the left of the decimal when the function is invoked.
* 2. Explicit binding to objects. input parameter of .call .apply or .bind determine 'this'.
* 3. 'new' binding that binds 'this' to the new object being constructed
* 4. without further context defined, 'this' will default to window object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

    const windowObj = this;

// Principle 2

// code example for Implicit Binding

    const hercules = {
        'budget': '10 shekels',
        'groan': function () {
            console.log(this.budget);
        }
    }

    hercules.groan();


// Principle 3

// code example for New Binding

function Progenitor(child) {
    this.hands = 2,
    this.feet = 3,
    this.count = function () {
        console.log(this.hands + this.feet);
    }
};

const edwoona_the_daughter = new Progenitor();

edwoona_the_daughter.count();

// Principle 4

// code example for Explicit Binding

function highStepper() {
    console.log(`Hup two three four, ${this.name}`);
}

const poorSoldier = {
    'name': 'First Sergeant Matthews'
}

highStepper.call(poorSoldier);