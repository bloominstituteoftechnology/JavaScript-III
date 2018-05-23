/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - Whenever this is contained in an invoked function, directly to the left of the function invocation is what "this" references.
* 2. Explicit Binding - Whenever you're using .call .apply or .bind, we directly state what the "this" keyword will be referencing.
* 3. new Binding - Whenever a constructor function is invoked with the "new" keyword, the "this" keyword will reference the newly created object.
* 4. window Binding - If the other three rules do not apply (and there's no 'use strict' involved), then the "this" keyword will reference the window object by default. However, if it's in strict mode, then it returns undefined. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Implicit Binding
const yo = {
    nombre: 'Marco',
    años: 'veintisiete',
    hola: function() {
        return `Hola, me llamo ${this["nombre"]} y tengo ${this["años"]} años.`
    }
};

const tu = {
    pregunta: `¿Quién es tu?`,
    habla: function() {
        return this.pregunta;
    }
};

tu.habla();
yo["hola"]();

// In the example above, this["nombre"] and this["años"] would be the same as yo["nombre"] and yo["años"], as "this" references the yo object.
// For "tu", this.pregunta references the object "tu".



// Principle 2
// code example for Explicit Binding
const kobo = {
    name: 'Kobo',
    age: 905
};

const talents = ['Magecraft','Advanced Forging','Instantaneous Alchemy']

const greeting = function(talent1, talent2, talent3) {
    return `My name is ${this.name}, and I am ${this.age} years old. I have studied ${talent1}, ${talent2}, and ${talent3}.`;
}

greeting.call(kobo, ...talents);

greeting.apply(kobo, talents);

const koboIntro = greeting.bind(kobo, ...talents);

koboIntro();



// Principle 3
// code example for New Binding
function Person(individual) {
    this.salutations = "Salutations";
    this.individual = individual;
    this.greet = function() {
        console.log(`${this.salutations}, ${this.individual}!`)
        return `${this.salutations}, ${this.individual}!`
    }
}

const eugene = new Person('Davis');
const davis = new Person('Eugene');

eugene.greet();
davis.greet();


// Principle 4
// code example for Window Binding
const saySassafras = function(){
    console.log(this.sassafras);
};

saySassafras();

window.sassafras = 'sassafras' 
//setting sassafras on window so that "this", when referencing window, finds what it needs to have "sassafras";
saySassafras();