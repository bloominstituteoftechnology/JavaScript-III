/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window Binding - Where 'this' binds to the window, when there is nothing else to bind to
* 2.  Implicit Binding - It binds to the object containing the function
* 3.  Explicit Binding - It binds to what we say it is supposed to bind to using call, bind or apply
* 4.  New Binding - 'This' binds to the newly created objects
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this)

// Principle 2

const example = {
    name: 'object example',
    make_example: function() {
        console.log(`${this.name}`)
    }
}

// Principle 3

const man = {
    name: 'guy'
}
const interests = ['coding', 'games', 'extracurricular activities']

function whats_ur_interests (interest1, interest2, interest3) {
    console.log(`${interest1}, ${interest2} , ${interest3}`)
};
whats_ur_interests.call(man, interests)



// Principle 4

const bigBadVillian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 5,
    },
    healthPoints: 25,
    name: 'Uruk',
    team: 'Dark Ones',
    weapons: [
      'Staff',
      'Wand',
    ],
    language: 'Dark Tongue',
    lair: 'Haunted Castle',
  });

