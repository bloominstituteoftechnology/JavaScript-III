/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1 - Window Binding
// When the developer forgets to give this a map or directions to what it should be bounded to;
// this will by default bind itself to the window property.

// code example for Window Binding
let rockwell = function() {
    console.log(`I always feel like, ${this.whatsHappening}.`);
}
window.whatsHappening = "somebody's watching me";
rockwell();

// Principle 2 - Implicit Binding
// this is bound to whatever is to the left of the .

// code example for Implicit Binding
let DestinysChild = function(name) {
    return {
        name: name,
        sayMyName: function() {
            console.log(`${this.name}`);
        },
        beyonce: {
            name: `Beyonce Z`,
            sayMyName: function() {
                console.log(this.name);
            }
        }
    }
}
let whateverHappenedToHerQuestionMark = DestinysChild('Kelly Rowland');
whateverHappenedToHerQuestionMark.sayMyName();
whateverHappenedToHerQuestionMark.beyonce.sayMyName();

// Principle 3 - New Binding
// bounds this to the new object being constructed

// code example for New Binding
let ice = function(stop, collaborate, listen) {
    this.stop = stop;
    this.collaborate = collaborate;
    this.listen = listen;
    this.fivepointoh = function() {
        console.log(`${this.stop} ${this.collaborate} ${this.listen}!`);
    }
}
let vanilla = new ice(`ice`, `ice`, `baby`);
vanilla.fivepointoh();

// Principle 4 - Explicit Binding
// You explicitly state what this is bound to

// code example for Explicit Binding
let whatsCoolerThanBeingCool = function() {
    console.log(`What's cooler than being cool? ${this.temperature}!`);
};
let cool = {
    temperature: `Ice cold`
};
whatsCoolerThanBeingCool.call(cool); //.call(context, arrggghs)

//console a line for no apparent reason
console.log(`-----------------------------------------------`);
