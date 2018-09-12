/*
  Object oriented design is commonly used in video games. 
   For this part of the assignment you will be implementing several constructor functions with 
   their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block 
  comments below:
*/
console.log(Date())
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(gameAttributes){
  this.createdAt = gameAttributes.createdAt;
  this.dimensions = gameAttributes.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttributes){
  GameObject.call(this, characterAttributes);
  this.hp = characterAttributes.hp;
  this.name = characterAttributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`
}


/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/


function Humanoid(humanAttributes){
  CharacterStats.call(this, humanAttributes);
  this.faction = humanAttributes.faction;
  this.weapons = humanAttributes.weapons;
  this.language= humanAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

function Hero(heroStats){
  Humanoid.call(this, heroStats);
  this.catchphrase = heroStats.catchphrase;
  this.atk = heroStats.atk;
  this.atkDmg = heroStats.atkDmg;
  this.from = heroStats.from;
  this.nickname = heroStats.nickname;
  this.sidekick = heroStats.sidekick;
  this.aka = heroStats.aka
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.entrance = function(){
  return(`Making his way to the ring, weighing in at ${this.dimensions.weight} representing the ${this.faction} and hailing from ${this.from}. Being accompanied to the ring by ${this.sidekick}, ${this.nickname} ${this.name}! ${this.catchphrase}!!!`)
}

Hero.prototype.win = function(){
  return(`Your winner, ${this.nickname} ${this.name}! ${this.catchphrase}!!`)
}

Hero.prototype.taunt = function(){
  this.hp += 1
  return `${this.name} says ${this.catchphrase}! He regains 1 hp.`;
}

Hero.prototype.basicAttack = function(move, target){
  let knownAs = [this.name, this.nickname, this.aka];
  target.hp -= 1;
  return `${knownAs[Math.floor(Math.random() * 3)]} with a ${move}. ${target.name} has ${target.hp} hp remaining.`
}

Hero.prototype.attack = function(target){
  target.hp -= this.atkDmg;
  let output = [];
  output.push(`${this.name} uses ${this.atk} on ${target.name} dealing ${this.atkDmg} damage.`);
  if (target.hp <= 0){
    output.push(`Here's the pin... 1... 2... 3.`);
    output.push(this.win());
  }
  else {
    output.push(`${target.name} has ${target.hp} hp remaining.`);
  }
  return output.join(' ');
}

function Villian(villianStats){
  Hero.call(this, villianStats);
  this.UHT = villianStats.UHT;
  this.UHTDMG = villianStats.UHTDMG;
  
}

Villian.prototype = Object.create(Hero.prototype);

Villian.prototype.underHandedTactic = function(target){
  target.hp -= this.UHTDMG;
  let output = [];
  output.push(`${this.sidekick} distracts the referee, allowing ${this.name} to use ${this.UHT} on ${target.name} dealing ${this.UHTDMG} damage.`);
  if (target.hp <= 0){
    output.push(`Here's the pin ... 1... 2... 3.`);
    output.push(this.win())
    output.push(`What a shame.`)
  }
  else {
    output.push(`${target.name} has ${target.hp} hp remaining.`)
  }
  return output.join(' ')
}



//
//



// Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  
  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.hp); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.faction); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language);// Elvish
  // console.log(swordsman.destroy());// Sir Mustachio was removed from the game.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
 
   
  

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!


  const macho = new Hero({
    createdAt: new Date(),
    dimensions: {
      weight: '224 lbs',
      height: "6'1",
    },
    hp: 7,
    name: 'Randy Savage',
    nickname: 'Macho Man',
    faction: 'Mega Powers',
    
    language: 'English',
    atk: 'Flying Elbow Drop',
    atkDmg: 4,
    catchphrase: 'Ooooooh Yeeeaaaaah',
    from: 'Sarasota, Florida',
    aka: 'The cream of the crop',
    sidekick: 'The lovely Miss Elizabeth'
  });

  const flair = new Villian({
    createdAt: new Date(),
    dimensions: {
      weight: '243 lbs',
      height: "6'1",
    },
    hp: 5,
    name: 'Ric Flair',
    nickname:'Natureboy',
    faction: 'Four Horsemen',
    weapons: [
      'Steel Chair',
    ],
    language: 'Common Toungue',
    sidekick: 'Arn Andersen',
    UHT: 'thumb to the eye',
    UHTDMG: 1,
    atk: 'Figure Four Leglock',
    atkDmg: 4,
    catchphrase: 'Wooooooooo',
    from: 'Charlotte, North Carolina',
    aka: 'The dirtiest player in the game'
  });


  console.log(macho.entrance());
  console.log(flair.entrance());
  console.log(macho.basicAttack('punch', flair));
  console.log(macho.taunt());
  console.log(flair.basicAttack('hard irish whip into the corner', macho));
  console.log(flair.taunt());
  console.log(flair.basicAttack('backchop', macho));
  console.log(flair.underHandedTactic(macho));
  console.log(flair.attack(macho));
  console.log(macho.basicAttack('nice standing dropkick', flair));
  console.log(macho.basicAttack('double ax handle from the top rope',flair));
  console.log(macho.attack(flair))