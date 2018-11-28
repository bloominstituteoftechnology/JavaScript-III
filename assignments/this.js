/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Windows Binding - calls a stand alone function invocation.
* 2. Implicit binding - The object in front of the dot is what the 'this' key word is bound to.
* 3. Explicit Binding - You can force a function call to use a particular object. You control this binding.
* 4. New Binding - builds new objects.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    function myName() {
        console.log(this);
    }
    myName();

// Principle 2

// code example for Implicit Binding
    const dogs = {
        name: "Bolt",
        food: "Kibble",
        eat: function() {
            console.log(`${this.name} eats ${this.food}.`);
        }
    }
    dogs.eat();

// Principle 3

// code example for New Binding

    function SadPerson(person){
        this.person = person;
        this.say = "I'm sad today";
        this.speak = function(){
            console.log(`${this.say}, ${this.person}`)
        }
    }

    const paul = new
    SadPerson("Sean");
    const sean = new
    SadPerson("paul");

    console.log(paul);

    paul.speak();
    sean.speak();

// Principle 4

// code example for Explicit Binding

    const animal = {
        species: "dog"
    }
    const playsWith = [" balls", " bones", "and rope"];

    function showsUs() {
        console.log(`Hello! I am a ${this.species}, and I like to play with ${playsWith}.`);
    }


    showsUs.call(animal, playsWith);
