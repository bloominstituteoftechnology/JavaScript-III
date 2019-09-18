/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:
function GameObject(object){
  this.createdAt = object.createdAt;
  this.name = object.name;
  this.dimensions = object.dimensions;
}

GameObject.prototype.destroy = function(){
    return`${this.name} was removed from the game.`;
  }


function CharacterStats(stats){
  this.healthPoints = stats.healthPoints
}

CharacterStats.prototype = Object.create(GameObject.prototype);         // Links CharacterStats to GameObject

CharacterStats.prototype.takeDamage = function(){                      // Take Damage Function
  if(this.healthPoints <= 0)
  {
    GameObject.destroy();
  }
  else{
       return`${this.name} took damage.`;
  }
  
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

function Humanoid(player){
  CharacterStats.call(this, player);
  this.createdAt = player.createdAt;
  this.name = player.name,
  this.weapons = player.weapons,
  this.language = player.language,
  this.dimensions = player.dimensions,
  this.team = player.team,
  this.damage = player.damage,
  this.spellDamage = player.spellDamage,
  this.spells = player.spells
}
Humanoid.prototype.greet = function(){
  return`${this.name} offers a greeting in ${this.language}`;
}

Humanoid.prototype.attack = function(targetPlayer){
  
  targetPlayer.healthPoints = targetPlayer.healthPoints - this.damage;

  if (targetPlayer.healthPoints <= 0)
  {
    GameObject.prototype.destroy();
    return`${targetPlayer.name} was killed by ${this.name}.`;
  }

  return `${targetPlayer.name} took ${this.damage} damage from ${this.name} and now has ${targetPlayer.healthPoints} HP left`;
}

Humanoid.prototype.castSpell = function(targetPlayer){
 
  targetPlayer.healthPoints = targetPlayer.healthPoints - this.spellDamage;

  if (targetPlayer.healthPoints <= 0)
  {
    GameObject.prototype.destroy();
    return`${targetPlayer.name} was killed by ${this.name}'s ${this.spells}.`;
  }

  return `${targetPlayer.name} took ${this.spellDamage} damage from ${this.name} and now has ${targetPlayer.healthPoints} HP left`;
  
}

Hero.prototype = Object.create(Humanoid.prototype);

function Hero(player){
  CharacterStats.call(this, player);
  this.createdAt = player.createdAt;
  this.name = player.name,
  this.weapons = player.weapons,
  this.language = player.language,
  this.dimensions = player.dimensions,
  this.team = player.team,
  this.spells = player.spells,
  this.heals = player.heals,
  this.damage = player.damage,
  this.spellDamage = player.spellDamage
}

Hero.prototype.heal = function(){
    this.healthPoints = this.healthPoints + this.heals;
    return `${this.name} healed for ${this.heals} HP. Current HP is now ${this.healthPoints}`;
}

Hero.prototype.attack = function(targetPlayer){
  targetPlayer.healthPoints = targetPlayer.healthPoints - this.damage;
  
  if (targetPlayer.healthPoints <= 0)
  {
    GameObject.prototype.destroy();
    return`${targetPlayer.name} was killed by ${this.name}'s ${this.weapons}.`;
  }
  
  return `${targetPlayer.name} took ${this.damage} damage from ${this.name} and now has ${targetPlayer.healthPoints} HP left`;
}

function Villain(player){
  CharacterStats.call(this, player);
  this.createdAt = player.createdAt;
  this.name = player.name,
  this.weapons = player.weapons,
  this.language = player.language,
  this.dimensions = player.dimensions,
  this.team = player.team,
  this.spells = player.spells,
  this.damage = player.damage,
  this.spellDamage = player.spellDamage
}

Villain.prototype.castSpell = function(targetPlayer){
  targetPlayer.healthPoints = targetPlayer.healthPoints - this.spellDamage;
  
  if (targetPlayer.healthPoints <= 0)
  {
    GameObject.prototype.destroy();
    return`${targetPlayer.name} was killed by $${this.name}'s ${this.spells}.`;
  }
  
  return `${targetPlayer.name} took ${this.spellDamage} damage from ${this.spells} and now has ${targetPlayer.healthPoints} HP left`;
}

Villain.prototype.attack = function(targetPlayer){
  
  targetPlayer.healthPoints = targetPlayer.healthPoints - this.damage;

  if (targetPlayer.healthPoints <= 0)
  {
    GameObject.prototype.destroy();
    return`${targetPlayer.name} was killed by ${this.name}'s ${this.weapons}`;
  }
  return `${targetPlayer.name} took ${this.damage} damage from ${this.name} and now has ${targetPlayer.healthPoints} HP left`;
}

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    damage: 2,
    spells: 'Fireball',
    spellDamage: 5,
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    damage: 4,
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 12,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    damage: 2,
    language: 'Elvish',
  });

  const paladin = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 20,
    name: 'Uther Lightbringer',
    team: 'Lordaeron',
    weapons:'Giant Hammer',
    damage: 3,
    spells: 'Holy Light',
    heals: 6,
    spellDamage: 3,
    language: 'Common Tongue',
  });

  const deathKnight = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 4,
    },
    healthPoints: 20,
    name: 'Prince Arthas',
    team: 'The Scourge',
    weapons:'FrostMourne',
    damage: 5,
    spells: 'Death Coil',
    spellDamage: 6,
    language: 'Common Tongue',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(paladin.spells); //Holy Light
  console.log(deathKnight.weapons);
  console.log(mage.castSpell(archer));
  console.log(mage.castSpell(archer));
  console.log(archer.healthPoints);
  console.log(mage.castSpell(archer));
  console.log(paladin.attack(deathKnight));
  console.log(paladin.heal());
  console.log(paladin.healthPoints);
  console.log(deathKnight.attack(paladin));
  console.log(deathKnight.castSpell(paladin));
  console.log(deathKnight.attack(mage));

  
  


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!