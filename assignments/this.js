/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This when used globally will try binding to the window
* 2. Implicit binding will allow you use to use keywords from within your block scope
* 3. Explicit binding allows us to attach multiple arrays and or objects to a function so we can use this within the function
* 4. Used within a constructor function that is used to build objects
*
* write out a code example of each explanation above
*/

// Principle 1

//  console.log(this);

// Principle 2

    // const darkWizard = {
    //     'name': 'Grumpy',
    //     'spell_book': 'Dark wizard book',
    //     'gender': 'male',
    //     'saying': function() {
    //       console.log(`I'm ${this.name} and I use the ${this.spell_book}`)
    //     }
    //  }
    //  darkWizard.saying();

// Principle 3

    // const newChar = {
    //   'name': 'Bob',
    //   'skills': 'Cooks a mean burger'
    // }
    
    // const foodArr = ['lettuce', 'tomato', 'mayo']
    
    // function letsCook(food1, food2) {
    //   console.log(`${this.name} makes burgers with ${food1} and ${food2}`)
    // }
    
    // letsCook.call(newChar, ...foodArr)

// Principle 4

    //function ninja(weapon, color, fightStyle) {
    //   this.outfit = color;
    //   this.weapon = weapon;
    //   this.style = fightStyle;
    // }
    
    // const lazyNinja = new ninja('Throwing star', 'blue', 'sleepy')
    
    // console.log(lazyNinja)