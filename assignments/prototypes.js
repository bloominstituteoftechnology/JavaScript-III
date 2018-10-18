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
function GameObject(obj) {
  this.createdAt = obj.createdAt;
  this.dimensions = obj.dimensions;
}

GameObject.prototype.destroy = function(){
  return 'Object was removed from the game.';
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attr) {
  GameObject.call(this, attr);
  this.hp = attr.hp;
  this.name = attr.name;
}

// chain CharacterStats' prototype to GameObject's prototype
CharacterStats.prototype = Object.create(GameObject.prototype);

// create takeDamage prototype method
CharacterStats.prototype.takeDamage = function() {
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
function Humanoid(attr) {
  CharacterStats.call(this, attr);
  this.faction = attr.faction;
  this.weapons = attr.weapons;
  this.language = attr.language;
}

// chain Humanoid's prototype to CharacterStats' prototype
Humanoid.prototype = Object.create(CharacterStats.prototype);

// create greet prototype method
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

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
function Hero(attr) {
  Humanoid.call(this, attr);
  this.health = 100;
  this.speech = '';
}

// chain Hero's prototype to Humanoid's prototype
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.greet = function() {
  this.speech = `${this.name.toUpperCase()} is here to safe the day!`;
}

// let Hero attack its opponent
Hero.prototype.blast = function(obj) {
  obj.health -= this.hp; // decrease the health value

  if (obj.hp > 2) {   // decrease the hp value with a minimum
    obj.hp--;
  }

  if (obj.health <= 0) {    // if opponent is defeated
    obj.health = 0;
    obj.dead = new Date();
    this.speech = `You're DEAD, ${obj.name}`;
  } else {
    this.speech = `Take that you filthy thing!!!`;
  }
}

// Villian
function Villian(attr) {
  Humanoid.call(this, attr);
  this.health = 100;
  this.speech = '';
  this.live = 1;
  this.dead = null;
}

// chain Vilian's prototype to Humanoid's prototype
Villian.prototype = Object.create(Humanoid.prototype);
Villian.prototype.greet = function() {
  this.speech = `${this.name.toUpperCase()} wants to destroy it all`;
}

// let Villian to revive from dead if it hasn't been dead for more than 2 seconds
Villian.prototype.revive = function(){
  console.log('called');
  if (this.dead !== null) {
    if (new Date() - this.dead < 3000 && this.live > 0) {
      this.live--;
      this.health = 100;
      this.dead = null;
      this.speech = "I Come Back!!!";
    } else {
      this.speech = `Too late, ${this.name} is GONE!! \n GAME OVER`;
      console.log(this.speech);
    }
  } else {
    this.speech = "I can't die.. HA HA HA!!!";
  }
}

// let Villian strikes its opponent
Villian.prototype.strike = function(obj) {
  obj.health -= this.hp; // decrease the health value
  
  if (obj.health <= 0) {
    obj.health = 0;
    obj.hp = 0;
    this.speech = "I RULE!!!!";
    obj.speech = 'R.I.P.';
  } else {
    this.speech = `I'll beat you ${obj.name}!!!`;
    obj.speech = 'Aaaarggghhh';
  }
}

const hero = new Hero({createdAt: new Date(), dimensions: 12, hp: 35, name: 'Gandalf The Gray', faction: 'faction', weapons: ['arrow'], language: 'babaraba'});

const villian = new Villian({createdAt: new Date(), dimensions: 12, hp: 30, name: 'Saruman The White', faction: 'faction', weapons: ['arrow'], language: 'babaraba'});

const controller = {
  init: function() {
    heroView.init();
    villianView.init();
    buttonView.init();
  },
  heroSpeak: function() {
    hero.greet();
    villian.speech = '';
    heroView.render();
    villianView.render();
  },
  heroAttack: function() {
    hero.blast(villian);

    if (villian.health > 0) {
      villian.speech = 'Ouchh...!';
    } else if (villian.live <= 0) {
      villian.speech = '...';
    } else {
      villian.speech = 'Revive me, QUICK!';
    }

    heroView.render();
    villianView.render();
    buttonView.render();
  },
  getHeroSpeech: function() {
    return hero.speech;
  },
  getHeroPower: function() {
    return hero.hp;
  },
  getHeroHealth: function() {
    return hero.health;
  },
  villianSpeak: function() {
    hero.speech = '';
    villian.greet();
    heroView.render();
    villianView.render();
  },
  villianAttack: function() {
    villian.strike(hero);
    heroView.render();
    villianView.render();
    buttonView.render();
  },
  villianRevive: function() {
    villian.revive();
    if (villian.dead !== null) {
      hero.speech = 'You have no power here!!';
    } else {
      hero.speech = 'Gaaah....!!!!';
    }
    villianView.render();
    heroView.render();
    buttonView.render();
  },
  getVillianSpeak: function() {
    return villian.speech;
  },
  getVillianPower: function() {
    return villian.hp;
  },
  getVillianHealth: function() {
    return villian.health;
  },
  getVillianLive: function() {
    return villian.live;
  }
}

const heroView = {
  init: function() {
    this.talk = document.getElementById('hero-talk');
    this.power = document.getElementById('hero-power');
    this.health = document.getElementById('hero-health');
    this.img = document.getElementById('hero-img');

    this.render();
  },

  render() {
    const speech = controller.getHeroSpeech();
    const health = controller.getHeroHealth();
    const power = controller.getHeroPower();
    this.talk.textContent = speech;
    this.power.textContent = `Power: ${power}`;
    this.health.textContent = `Health: ${health}`;
  }
}

const villianView = {
  init: function() {
    this.talk = document.getElementById('villian-talk');
    this.power = document.getElementById('villian-power');
    this.health = document.getElementById('villian-health');
    this.live = document.getElementById('villian-live');
    this.img = document.getElementById('villian-img');

    this.render();
  },

  render() {
    const speech = controller.getVillianSpeak();
    const health = controller.getVillianHealth();
    const power = controller.getVillianPower();
    const live = controller.getVillianLive();
    this.talk.textContent = speech;
    this.power.textContent = `Power: ${power}`;
    this.health.textContent = `Health: ${health}`;
    this.live.textContent = `Live: ${live}`;    
  }
}

const buttonView = {
  init: function() {
    this.heroSpeak = document.getElementById('hero-speak');
    this.heroSpeak.addEventListener('click', function() {
      controller.heroSpeak();
    });


    this.heroAttack = document.getElementById('hero-attack');
    this.heroAttack.addEventListener('click', function() {
      controller.heroAttack();
    });

    this.villianSpeak = document.getElementById('villian-speak');
    this.villianSpeak.addEventListener('click', function() {
      controller.villianSpeak();
    });

    this.villianAttack = document.getElementById('villian-attack');
    this.villianAttack.addEventListener('click', function() {
      controller.villianAttack();
    });

    this.villianRevive = document.getElementById('villian-revive');
    this.villianRevive.addEventListener('click', function() {
      controller.villianRevive();
    })

    this.render();
  },
  render: function() {
    const heroHealth = controller.getHeroHealth();
    const villianHealth = controller.getVillianHealth();
    const villianLive = controller.getVillianLive();

    if (heroHealth <= 0 || villianHealth <= 0) {
      this.heroSpeak.style.display = 'none';
      this.heroAttack.style.display = 'none';
      this.villianSpeak.style.display = 'none';
      this.villianAttack.style.display = 'none';
      if (heroHealth <= 0) {
        this.villianRevive.style.display = 'none';  
      }
    } else {
      this.heroSpeak.style.display = 'block';
      this.heroAttack.style.display = 'block';
      this.villianSpeak.style.display = 'block';
      this.villianAttack.style.display = 'block';
      if (villianLive <= 0) {
        this.villianRevive.style.display = 'none';
      }
    }

  } 
  
}

controller.init();