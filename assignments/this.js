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

// code example for Window 
console.log(this);
// Principle 2

// code example for Implicit Binding 
// meaning that the keyword on the left is essentially the this keyword and is bound to the object.
// implying what i want it to do

const newObj = {
    city: 'London',
    sayMyName: function (name) {
        console.log(`${this.city} my name ${name}`);
        console.log(this);
    }
};
newObj.sayMyName('england');

// Principle 3

// code example for New Binding
function WorldTraveler(passport) {
    this.city = passport.city;
    this.countries = passport.countries;
    this.speak = function () {
        console.log(this.city + " " + this.countries);
        console.log(this);
    };
}

WorldTraveler.prototype.international = function () {
    return this.city + " has my heart " + this.countries;
}

const queen = new WorldTraveler({
    city: "London",
    countries: "England"
});


queen.speak();

// Principle 4

// code example for Explicit Binding
// explicitly telling it what to do

let here = {
    name: 'Oxford',
    location: 'Central',
    country: function () {
        return this.name + " hello " + this.location + "!";
    }
};

let newPlace = {
    name: 'ibiza',
    location: 'spain'
};

let placeNew = {
    name: 'naples',
    location: 'italia'
};

console.log(here.country.call(newPlace));
