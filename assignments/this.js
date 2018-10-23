/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding: If you're in a global scope, calling "this" will reference the window or object
* 2. Implicit binding: When calling a function with a ".", the object to the left of the dot is the "this"
* 3. New binding: "This" refers to the specific object being created with a a constructor function
* 4. Explicit binding: You can overwrite constructor objects are set to by explicitly calling them using .call or .apply
*
* write out a code example of each explanation above
*/

// Principle 1

function favTeam(team) {
    console.log(this);
    return team;
    
  }
  console.log(favTeam("Ravens"));


// Principle 2

const myTeam = {
    sport: "Football",
    sayTeamName: function(name) {
      console.log(`The ${name} are my favorite ${this.sport} team`);
      console.log(this);
    }
  };
  myTeam.sayTeamName("Ravens");

// Principle 3

function ArmyNavy(serviceSchool, oponent) {
    this.team1 = serviceSchool;
    this.team2 = oponent;
    this.goTeam = function() {
      console.log(`Go ${this.team1}, Beat ${this.team2}`);
      console.log(this);
    };
  }
  
  const army = new ArmyNavy('Army', 'Navy');
  const navy = new ArmyNavy('Navy', 'Army');
  
  army.goTeam();
  navy.goTeam();

// Principle 4

army.goTeam.call(navy); navy.goTeam.apply(army);