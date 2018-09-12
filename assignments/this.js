/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
* 2. Explicit Binding
* 3. New Binding
* 4. Window Binding
*
* write out a code example of each explanation above
Implicit Binding
*/




// Principle 1

// code example for Window Binding
function getMessage(sentence) {
    console.log(`This is my report: ${sentence}`)
    function retrieve (){
        // console.log(this)
        return sentence;
    }
      return retrieve;
} 
getMessage("The Germans are coming.");

// Principle 2

// code example for Implicit Binding
const implicitObj = {
    Holy: "Shitake",
    Well: "Give me cake and",
    Okay: "Broham",
    sayEccentricness: function(things){
        console.log(`Freakin ${this.Holy} mushrooms Batman, ${this.Well} I will call you ${this.Okay} because you are ${things}`);
        // console.log(this);
    }
};

implicitObj.sayEccentricness("Awesome!");
// Principle 3

// code example for New Binding
function AllianceFaction(Character, Class, Gender, Profession){
    this.Character = Character;
    this.Class = Class;
    this.Gender = Gender;
    this.Profession = Profession;
    this.profile = function(){
        return `My race is ${this.Character}, I am a ${this.Gender} ${this.Class}, I specialize in ${this.Profession}`;
        // console.log(this);
    }
}

const warrior = new AllianceFaction("Nord", "Warrior", "Male", "Blacksmithing");
const assassin = new AllianceFaction("Wood Elf", "Assassin", "Female", "LeatherWorking");

console.log(warrior.profile());
console.log(assassin.profile());



// Principle 4

// code example for Explicit Binding

//An object for this
//An array to store info for parameters

const newObj = {
    'name' : 'Troy',
    'hometown' : 'Minneapolis',
    'favoritegame' : 'Half-Life 2'
}

const myHobbies = ["Music Production", "PC Gaming", "Writing Poetry", "Reading"];
const myKnowledge = ["Biology", "Native Culture", "Lambda School"];

function introduction (myHobbies1, myHobbies2, myHobbies3, myHobbies4, myKnowledge1, myKnowledge2, myKnowledge3 ){
console.log(`Hi my name is ${this.name}, I am from ${this.hometown}. My favorite game is ${this.favoritegame} because I like ${myHobbies2}. I also like to do
 ${myHobbies1}, ${myHobbies3}, and ${myHobbies4} in my spare time. My knowledge includes ${myKnowledge1}, ${myKnowledge2}, and ${myKnowledge3}.`);
}

introduction.call(newObj, ...myHobbies, ...myKnowledge);


