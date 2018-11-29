/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global, when used outside of a function. The value is the window/console
* 2. Implicit, information about the binding are not seen, this also occurs when dot notation is used to invoke.
* 3. Explicit, when .call(), .apply (), and .bind() are used.
* 4. New, when a constructor function is used, and refers back to original object arguments. Also the first letter in constructor function is capitalized.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function speak (greeting) {
    console.log(this);
    return greeting;
}
speak("Hello");
// Principle 2

// code example for Implicit Binding
const salutations = {
    farewel: "Good bye",
    sayGoodBye: function (later) {
        console.log(`${this.farewell} It was nice meeting you! ${later}`);
        console.log(this);
    }
}
    salutations.sayGoodBye("See you later");

// Principle 3

// code example for New Binding
    function Assault(attack) {
        this.person = "person"
        this.attack = attack;
        this.hurt = function () {
            console.log(this.person + this.attack);
            console.log(this);
        }
    }
    const judo = new Assault("bjj");
    const bjj = new Assault("judo");

    judo.hurt();
    bjj.hurt();


// Principle 4

// code example for Explicit Binding
function Assault(attack) {
    this.person = "person"
    this.attack = attack;
    this.hurt = function () {
        console.log(this.person + this.attack);
        console.log(this);
    }
}
    const judo = new Assault("bjj");
    const bjj = new Assault("judo");
    judo.hurt.call(bjj);
    bjj.hurt.call(judo);

    judo.hurt();
    bjj.hurt();