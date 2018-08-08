/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when the conext of this is the Window or the default of JS
* 2. Implicit Binding is when the context of the this keyword is set in a variable with set values
* 3. New Binding is when the th contxxt of this includes values gotten from the use of a constructer/template
* 4. Explicit Binding when the value for this keywords is inheritented from a parent function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function favColor(color) {
    console.log(this);
    return color;    
}

favColor('red');
// Principle 2

const myObj = {
    catchphrase: 'Oof-a-dooey',
    sayCatchphrase:  function (name) {
        console.log(`${this.catchphrase}. my name is ${name}`);
        console.log(this);               
    } 
}
myObj.sayCatchphrase('Dude')

// code example for Implicit Binding

// Principle 3
function CoolGuy(meme) {
    this.catchphrase = 'Yikers';
    this.meme = meme;
    this.speak = function() {
        console.log(`${this.catchphrase}. What a ${this.meme}`);
        console.log(this);      
        
    }
}

const memer1 = new CoolGuy('pepe');
memer1.speak(); 

// code example for New Binding

// Principle 4
const developer = {
    'name': 'Jim',
    'age': 40
  }  
  const skills = ['HTML', 'LESS', 'JS'];
  
  function introduce(skill1, skill2, skill3) {
    console.log(`My name is: ${this.name} and I like to program in: ${skill1} , ${skill2} , ${skill3}`);
  }
  
  introduce.call(developer, skills);
  introduce.apply(developer, skills);
  let holdOn = introduce.bind(developer, ...skills);
  holdOn();
  introduce(skills);
  
  const memeKing = {
      'name': 'Erik',
      'meme_weapon': 'wojak'
  }

  const memeRating = ['okay', 'good', 'dank'] 

  function memeRate (memeRating){
      console.log(`${this.name}'s ${this.meme_weapon} is really ${memeRating}`);      
  }

  memeRate.call(memeKing, memeRating)


// code example for Explicit Binding