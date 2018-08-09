/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(attributes)
{
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function()
{
    return `Object was removed from the game.`;
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(characterAttributes)
{
    GameObject.call(this, characterAttributes);
    this.hp = characterAttributes.hp;
    this.name = characterAttributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function()
{
    return `${this.name} took damage.`;
};

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanoidAttributes)
{
    CharacterStats.call(this, humanoidAttributes);
    this.faction = humanoidAttributes.faction;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function()
{
    return `${this.name} offers a greeting in ${this.language}.`;
};

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

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

  console.log(mage.createdAt);  //Today's date
  console.log(archer.dimensions);  //{ length: 1, width: 2, height: 4 }
  console.log(swordsman.hp);  //15
  console.log(mage.name);  //Bruce
  console.log(swordsman.faction);  //The Round Table
  console.log(mage.weapons);  //Staff of Shamalama
  console.log(archer.language);  //Elvish
  console.log(archer.greet());  //Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage());  //Bruce took damage.
  console.log(swordsman.destroy());  //Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
  function Villain(villainAttributes)
  {
    Humanoid.call(this, villainAttributes);
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.attack = function(target, damage)
  {
    target.hp -= damage;
  };

  function Hero(heroAttributes)
  {
    Humanoid.call(this, heroAttributes);
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.attack = function(target, damage)
  {
    let finalDamage = damage;
    let hasShield = false;
    for(let i=0; i<this.weapons.length; i++)
    {
      if(this.weapons[i]=='Shield')
      {
        hasShield == true;
      }
    }
    if(!hasShield)
    {
      finalDamage++;
    }
    target.hp -= finalDamage*2;
  };

  //Battle of Gavi versus Acererak
  const Acererak = new Villain(
    {
      createdAt: new Date(),
      dimensions: {length:2, width:2, height:3},
      hp: 20,
      name: 'Acererak',
      faction: 'Lich Boys',
      weapons: ['enchanted staff', 'Shield'],
      language: 'common',
    }
  );
  const Gambino = new Hero(
    {
      createdAt: new Date(),
      dimensions: {length:2, width:2, height:1},
      hp: 16.9,
      name: 'Gavi',
      faction: 'Lords\' Alliance',
      weapons: ['Defender Greatsword'],
      language: ['dwarvish', 'common', 'celestial'],
    }
  );
  // Gambino.prototype = Object.create(Hero.prototype);
  // Gambino.prototype.rollDamage = function()
  // {
  //   return rolld6()+rolld6()+10;
  // };
  rolld20 = function(modifier)
  {
    let d20 = Math.floor(1+(20*(Math.random())))+modifier;
    console.log(`d20: ${d20}`);
    return d20;
  };
  let gambinoInitiative = rolld20(0);
  let acererakInitiative = rolld20(-4);
  let GambinoTurn = false;
  if(gambinoInitiative>=acererakInitiative)
  {
    GambinoTurn = true;
  }
  while(Acererak.hp>0 && Gambino.hp>0)
  {
    if(GambinoTurn)
    {
      let damage = 10;
      Gambino.attack(Acererak, damage);
      GambinoTurn = false;
      console.log(`Gavi attacks for ${damage}. Acererak is at ${Acererak.hp} hp.`);
    }
    else
    {
      let acererakDamage = 4;
      Acererak.attack(Gambino, acererakDamage);
      GambinoTurn = true;
      console.log(`Acererak attacks for ${acererakDamage}. Gavi is at ${Gambino.hp} hp.`);
    }
  }
  if(Acererak.hp<0)
  {
    console.log(`${Gambino.name} has defeated ${Acererak.name}.`);
    console.log(`Acererak: ${Acererak.destroy()}`);
  }
  else
  {
    console.log(`${Gambino.name} has lost to ${Acererak.name}.`);
  }
