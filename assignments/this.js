/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when no other rules are present the "this" keyword will automatically implement window object, if strict mode is active it will default undefined instead.
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
function hotWheel(monster){
    console.log(`I use to love` + `${this.monster}` + ` trucks`);
    return monster;

}
hotWheel(this); 

// code example for Window Binding

// Principle 2
let jay = {
    name: "Jarrod",
    says: "what's up guys!",
    jaySays: function (){
        console.log(this.says)
    }
}

jay.jaySays();

// code example for Implicit Binding

// Principle 3
function fastCar(brz){
    this.thing = brz;
}

let Car  = new fastCar('brz goes 0-60 in 6.2 sec');
console.log(Car.thing);

// code example for New Binding

// Principle 4
function car(){
    console.log(this.fast);
}

let wrx = {
    brand: "subaru",
    fast: "0-60 in 5.5 seconds"
}

car.call(wrx)


// code example for Explicit Binding