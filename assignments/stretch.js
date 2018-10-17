// Allows reading from console in node.js
const readline = require('readline-sync');

// Object constructors

// GameObject

const GameObject = function(obj) {

  this.createdAt = obj.createdAt;
  this.dimensions = obj.dimensions;

}

GameObject.prototype.destroy = function() {

  return `${this.name} was removed from the game.`;

}

// CharacterStats

const CharacterStats = function(obj) {

  GameObject.call(this, obj);
  this.hp = obj.hp;
  this.name = obj.name;

}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {

  return `${this.name} took damage.`;

}

// Humanoid

const Humanoid = function(obj) {

  CharacterStats.call(this, obj);
  this.faction = obj.faction;
  this.weapons = obj.weapons;
  this.language = obj.language;

}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {

  return `${this.name} offers a greeting in ${this.language}`;

}

/* ====================== MY CONSTRUCTORS ============================ */

// Fighter constructor, inherits from Humanoid

const Fighter = function(obj) {

  Humanoid.call(this, obj);

}

Fighter.prototype = Object.create(Humanoid.prototype);

// Attack function. Takes in another fighter, returns whether the attack resulted in a death.
Fighter.prototype.attack = function(opponent) {

  let weapon = Math.floor(Math.random() * this.weapons.length);
  let damage = Math.floor(Math.random() * this.weapons[weapon].maxDamage + 1);

  this.weapons[weapon].uses--;

  if (this.weapons[weapon].uses <= 0) {

    this.weapons[weapon].uses = 0;
    damage = 1;

  }

  return opponent.takeDamage(damage);

}

// Applies damage to self, returns if self died
Fighter.prototype.takeDamage = function(damage) {

  console.log(CharacterStats.prototype.takeDamage.call(this));
  this.hp -= damage;
  console.log(`${this.name}'s current HP: ${this.hp}`);

  return this.hp <= 0;

}

// Villian constructor, inherits from Fighter

const Villian = function(obj) {

  Fighter.call(this, obj);

}

Villian.prototype = Object.create(Fighter.prototype);

// Hero constructor, inherits from Fighter

const Hero = function(obj) {

  Fighter.call(this, obj);

}

Hero.prototype = Object.create(Fighter.prototype);

// Hero attack function, overwritten to allow user input
Hero.prototype.attack = function(opponent) {

  console.log("Choose your weapon by entering in the number of the weapon:");

  for (let i = 0; i < this.weapons.length; i++) {

    console.log(`[${i}] ${this.weapons[i].name} (remaining uses: ${this.weapons[i].uses})`);

  }

  let chosenWeapon = -1;

  while (chosenWeapon == -1 || isNaN(chosenWeapon) || chosenWeapon > this.weapons.length - 1) {

    chosenWeapon = readline.question("Weapon: ");

  }

  let damage = Math.floor(Math.random() * this.weapons[chosenWeapon].maxDamage + 1);

  this.weapons[chosenWeapon].uses--;

  if (this.weapons[chosenWeapon].uses <= 0) {

    this.weapons[chosenWeapon].uses = 0;
    damage = 1;

  }

  console.log();

  return opponent.takeDamage(damage);

}

/* ====================== GAME FUNCTIONS ============================ */

function createCharacter() {

  const characterClasses = ["Elf", "Human", "Orc"];

  let heroName = readline.question("What will your hero's name be? ");

  let characterClass = -1;
  let heroFaction = "undefined";
  let heroLanguage = "undefined";

  console.log(`\nThere are ${characterClasses.length} classes available to you as an adventurer.`);
  console.log("You may choose one of the following:\n");

  for (let i = 0; i < characterClasses.length; i++) {

    console.log(`[${i}]: ${characterClasses[i]}`);

  }

  while (characterClass == -1 || isNaN(characterClass) || characterClass > characterClasses.length - 1) {

    characterClass = readline.question("\nWhich class do you choose? ");

  }

  characterClass = Number.parseInt(characterClass);

  switch (characterClass) {

    case 0: // Elf
      heroFaction = "Elven Clan";
      heroLanguage = "Elvish";
      break;
    case 1:
      heroFaction = "Human Clan";
      heroLanguage = "English";
      break;
    case 2:
      heroFaction = "Orc Clan";
      heroLanguage = "Oricsh";
      break;

  }

  console.log(`Welcome to the ${heroFaction}, ${heroName}.\n`);

  return new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 100,
    name: heroName,
    faction: heroFaction,
    weapons: [
      {name: "Dagger", maxDamage: 20, uses: 25},
      {name: "Sword", maxDamage: 75, uses: 5}
    ],
    language: heroLanguage,
  });

}

function battle(hero, villian) {

  // Introductions
  console.log();
  console.log(hero.greet());
  console.log(villian.greet());

  // Variables
  let battling = true;
  let turn = 1;

  // Game loop
  while (battling) {

    console.log();
    console.log(`Your HP: ${hero.hp}`);
    console.log(`Enemy HP: ${villian.hp}`);
    console.log();

    if (turn === 1) { // Hero's turn

      let victory = hero.attack(villian);

      if (victory) {

        console.log(villian.destroy());
        console.log(`${hero.name} has won!\n`);
        battling = false;
        return true;

      }

      turn = 2;

    }

    else { // Villian's turn

      let victory = villian.attack(hero);

      if (victory) {

        console.log(hero.destroy());
        console.log(`${villian.name} has won!\n`);
        battling = false;
        return false;

      }

      turn = 1;

    }

  }

}

/* ====================== THE GAME ============================ */

console.log("Welcome to my game. Please create a character.\n");

const hero = createCharacter();

console.log("Fight until you die!");

let numVictories = 0;
let fighting = true;

while (fighting) {

  let myVillian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 75 + numVictories * 5,
    name: 'Evil Villian',
    faction: 'Mountain Kingdom',
    weapons: [
      {name: "Dagger", maxDamage: 20, uses: 25},
      {name: "Sword", maxDamage: 30, uses: 2}
    ],
    language: 'Pig Latin',
  });

  fighting = battle(hero, myVillian);

  if (fighting) {

    numVictories++;
    console.log(`Great work, ${hero.name}! Your HP has been restored by ${20 + Math.floor(numVictories / 3) * 30} points. Now onto the next villian!`);
    hero.hp += 20 + Math.floor(numVictories / 3) * 4;
    hero.weapons[0].uses += 5;

    if (numVictories % 3 == 0)
      hero.weapons[1].uses += 10;

  }

}

console.log(`Great job, ${hero.name}. You have successfully slain ${numVictories} villians.`);
