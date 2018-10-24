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

function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charAttributes){
  GameObject.call(this, charAttributes);
  this.hp = charAttributes.hp;
  this.name = charAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
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

function Humanoid(humanAttributes){
  CharacterStats.call(this, humanAttributes);
  this.faction = humanAttributes.faction;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
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

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  function Villain(villainAttributes) {
    Humanoid.call(this, villainAttributes);
    this.nemesis = villainAttributes.nemesis;
  }

  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.chooseNemesis = function(nemesisObject){
    this.nemesis = nemesisObject.name;
  }

  Villain.prototype.normalAttack = function(fightArray, opponentName){
    const opponent = fightArray.find(person => person.name === opponentName);
    if(opponent){
      --opponent.hp;
      if(opponent.hp <= 0){
        document.getElementById('hero').src="img/heroDead.png";
        document.getElementById('villainAttack').disabled = true;
        document.getElementById('heroAttack').disabled = true;
        document.getElementById('victory').innerHTML = `${orcVillain.name} the villain is victorious...`;
      }
    } else {
      console.log(`${opponentName} is not in this battle!`)
    }
  }

  function Hero(heroAttributes) {
    Humanoid.call(this, heroAttributes);
    this.nemesis = heroAttributes.nemesis;
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.chooseNemesis = function(nemesisObject){
    this.nemesis = nemesisObject.name;
  }

  Hero.prototype.normalAttack = function(fightArray, opponentName){
    const opponent = fightArray.find(person => person.name === opponentName);
    if(opponent){
      if(Math.round(Math.random()) === 0){
        --opponent.hp;
        if(opponent.hp > 0){
          return opponent.hp;
        } else {
          document.getElementById('villain').src="img/villainDead.png";
          document.getElementById('villainAttack').disabled = true;
          document.getElementById('heroAttack').disabled = true;
          document.getElementById('victory').innerHTML = `${orcHero.name} the hero is victorious!`;
        }
      } else {
        --opponent.hp;
        --opponent.hp;
        if(opponent.hp > 0){
          return opponent.hp;
        } else {
          document.getElementById('villain').src="img/villainDead.png";
          document.getElementById('villainAttack').disabled = true;
          document.getElementById('heroAttack').disabled = true;
          document.getElementById('victory').innerHTML = `${orcHero.name} the hero is victorious!`;
        }
      }
    } else {
      console.log(`${opponentName} is not in this battle!`)
    }
  }

  const orcVillain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 15,
    name: 'Ghorza',
    faction: 'The Banished',
    weapons: [
      'Great maul'
    ],
    language: 'Orcish'
  });

  const orcHero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    },
    hp: 10,
    name: 'Rodagog',
    faction: 'The Blood Orcs',
    weapons: [
      'Umog the Reckoning'
    ],
    language: 'Orcish',
    nemesis: orcVillain.name
  });

  orcVillain.chooseNemesis(orcHero);

  const theFinalBattle = [orcHero, orcVillain];

  //orcVillain.normalAttack(theFinalBattle, orcVillain.nemesis);
  //orcHero.normalAttack(theFinalBattle, orcHero.nemesis);

  // ---------------------------------------------

  document.getElementById('heroHP').innerHTML = orcHero.hp;
  document.getElementById('villainHP').innerHTML = orcVillain.hp;

  document.getElementById('heroAttack').addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('hero').src="img/heroAttack.png";
    setTimeout(function() {
      document.getElementById('hero').src="img/heroFront.png";
    }, 300);
    orcHero.normalAttack(theFinalBattle, orcHero.nemesis);
    document.getElementById('villainHP').innerHTML = orcVillain.hp;
  });

  document.getElementById('villainAttack').addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('villain').src="img/villainAttack.png";
    setTimeout(function() {
      document.getElementById('villain').src="img/villainFront.png";
    }, 300);
    orcVillain.normalAttack(theFinalBattle, orcVillain.nemesis);
    document.getElementById('heroHP').innerHTML = orcHero.hp;
  });

  