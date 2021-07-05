/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Implicit Binding - this will check against the properties of the whole object
* 2. Implicit Binding - this will check against the properties of the immediate object it's contained in
* 3. New Binding - this will check against the properties of the object created by the constructor function
* 4. Explicit Binding - this will check against the properties of whatever object it's specifically directed to look at
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function what() {
    console.log(this);
}

what();

// Principle 2
// code example for Implicit Binding
const someGuy = {
    name: 'Barrold',
    height: 4.5,
    weight: 400,
    whoIs: function(){
        console.log('Who is that guy?');
        console.log(`Oh that's ${this.name}`);
    }
}

someGuy.whoIs();

// Principle 3
// code example for New Binding
function AnySomeGuy(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.anyWhoIs = function(){
        console.log('Who is that guy?');
        console.log(`Oh that's ${this.name}`);
    }
}
const pedey = new AnySomeGuy('Pedey', 6.7, 74);
console.log(pedey.height);

// Principle 4
// code example for Explicit Binding
const sdeve = new AnySomeGuy('Sdeve', 32, 9806);
sdeve.anyWhoIs.call(pedey);