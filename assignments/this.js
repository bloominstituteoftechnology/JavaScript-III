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

// code example for Window Binding

function characterSpell1(){
        console.log(this.spell);

}
'use strict';
characterSpell1();
const spell = "Q";


// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

function LoLChar(char, role) {
        this.char = char;
        this.role = role;
        this.declare = function () {
            console.log(`Champion name: ${this.char} Champion role: ${this.role}`);
        };
}

const ahri = new LoLChar('Ahri', 'Middle');
const qiyana = new LoLChar('Qiyana', 'Middle');

ahri.declare();
qiyana.declare();
// Principle 4

// code example for Explicit Binding