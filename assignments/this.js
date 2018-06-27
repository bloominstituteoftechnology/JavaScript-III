/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Here, 'this' refers to the environment that Javascript is being run.  That may be a browser engine, Node environment, etc.
* 2. Implicit Binding: 'this' refers to the direct-parent object of a reference to 'this'.
* 3. New Binding: 'this' refers to the instance of a contructor.
* 4. Explicit Binding: 'this' refers to the placement of 'this' into a function with apply(), call(), or bind()
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const obj = {
    name: "Amon",
    adj: "ROCKS!",
    whoWhat(){
        console.log(`${this.name} ${this.adj}`);
        
    }
};

// obj.whoWhat();



// Principle 3 : New Binding
function CreateHero(name, power){
    this.name = name;
    this.power = power;
    this.hero = ()=>{
        return `The hero, ${this.name}, is sauve and can ${this.power}`;
    }
}

let amon = new CreateHero("Amon", "move things with his mind!");
console.log(amon.hero());

// Principle 4 : Explicit Binding
// call, apply, bind
const erik = {
    name: "Erik",
    power: "Hacking"
};

function whosThisNewHero(obj){
    return `Here comes a new hero, his name is ${this.name}. His power is ${this.power}`;
}

console.log(whosThisNewHero.call(erik));
;

let villains = ["Cocoa Christy", "Killa Brie", "Soldier Sear"];
console.log(villains);

function theVillains(...villainArr) {
    return `The villains ${villainArr} fought the hero, ${this.name}`;
}

console.log(theVillains.apply(erik, villains));

const villainsAgain = theVillains.bind();
console.log(villainsAgain);

// villainsAgain.apply(erik, villains)