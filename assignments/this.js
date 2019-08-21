/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If a function is in the global scope, the value of this will be the window
* 2. if you using an object .function, whatever this refers to in the function comes from that object
* 3. are you defining objects by a constructor, or with new syntax? 
* 4. when call or apply are used, this is defined by that input
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
function characterSpell2(){
    console.log(`This spell is ${this.spell}`);
}
let zed = { 
    name: 'Zed',
    spell: 'Shuriken',
    characterSpell3: function(){
        console.log(`This spell 2nd example is ${this.spell}`);
    }
}
zed.characterSpell3();

// Principle 3

// code example for New Binding

function LoLChar(name, role) {
        this.name = name;
        this.role = role;
        this.declare = function () {
            console.log(`Champion name: ${this.name} Champion role: ${this.role}`);
        };
}

const ahri = new LoLChar('Ahri', 'Middle');
const qiyana = new LoLChar('Qiyana', 'Middle');

ahri.declare();
qiyana.declare();
// Principle 4

// code example for Explicit Binding

function talk () {
    console.log(`My champion is ${this.name}`)
}

const champ = {
    name: 'Zed',
    spell: 'W',
}

talk.call(champ);


















let LoLChampArray = ["Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Blitzcrank", "Brand", "Caitlyn", "Cassiopeia", "Cho'gath", "Corki", "Dr. Mundo", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", "Janna", "Jarvan IV", "Jax", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Rammus", "Renekton", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Talon", "Taric", "Teemo", "Tristana", "Trundle", "Trydamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yorick", "Ziggs", "Zilean"];
console.log(LoLChampArray);
const newArray = [];
