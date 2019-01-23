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

function GameObject(game) {
  this.createdAt = game.createdAt;
  this.dimensions = game.dimensions;
}

//   GameObject.prototype.dimensions = function(char){
//     this.length = char.length;
//     this.width = char.width;
//     this.height = char.height;
//   }

GameObject.prototype.destroy = function() {
  return "Object was removed from the game";
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charAtt) {
  GameObject.call(this, charAtt);
  this.hp = charAtt.hp;
  this.name = charAtt.name;
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

function Humanoid(humanoidAtt) {
  CharacterStats.call(this, humanoidAtt);
  this.faction = humanoidAtt.faction;
  this.weapons = humanoidAtt.weapons;
  this.language = humanoidAtt.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

//   Humanoid.prototype = Object.create(GameObject.prototype);

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by uncommenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(), //GameObject
  dimensions: {
    //GameObject
    length: 2,
    width: 1,
    height: 1
  },
  hp: 5, //CharacterStats
  name: "Bruce", //CharacterStats
  faction: "Mage Guild", //Humanoid
  weapons: [
    "Staff of Shamalama" //Humanoid
  ],
  language: "Common Toungue" //Humanoid
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: "Sir Mustachio",
  faction: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Toungue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: "Lilith",
  faction: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.hp); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.faction); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

// Avengers vs Thanos
// if Thanos gets all 6 stones => snap === 50% of avengers will die
//    collects a stone every 4 hero attacks
// Choose character: Party of 4

function Hero(heroAttr) {
  Humanoid.call(this, heroAttr);
  this.offense = heroAttr.offense; // scale of 1-10
}

Hero.prototype = Object.create(Humanoid.prototype);

// 9/16: Bugs
// Find out why hero can still attack one more time when hp below 0
// UI - margins / paddings
// DRY code / refactor

// Hero.prototype.thorAttack = function() {
//   let attackDamage = Math.ceil(Math.random() * thor.offense);
//   thanos.hp -= attackDamage;
//   document.querySelector("#thanos-hp").textContent = thanos.hp;
//   console.log(thanos.hp);
//   document.querySelector(".avengers-msg").innerHTML =
//     "<p>" +
//     `${thor.name} used ${thor.weapons}. Damage: ${attackDamage}` +
//     "<p>";
//   if (thanos.hp <= 0) {
//     document.getElementById("thanos-hp").innerText = "0";
//     alert("Game Over");
//   } else if (thor.hp > 0) {
//     setTimeout(() => {
//       let thanosAttack = Math.ceil(Math.random() * thanos.offense);
//       thor.hp -= thanosAttack;
//       document.querySelector("#thor-hp").textContent = thor.hp;
//       document.querySelector(".thanos-msg").innerHTML =
//         "<p>" +
//         `${thanos.name} attacked ${thor.name}. Damage: ${thanosAttack}` +
//         "<p>";
//     }, 500);
//   } else if (thor.hp <= 0) {
//     thor.hp = 0;
//     document.getElementById("thor-attack").hidden = true;
//     document.querySelector("#thor-hp").textContent = "0";
//     document.querySelector(".thanos-msg").innerHTML =
//       "<p>" + `"You should've gone for the head."` + "<p>";
//     document.querySelector(".thanos-msg").style.color = "#8311FC";
//     return;
//   }
// };

const didThanosWin = function() {
  if (
    thor.hp <= 0 &&
    hulk.hp <= 0 &&
    captainAmerica.hp <= 0 &&
    ironMan.hp <= 0
  ) {
    document.querySelector(".avenger").style.opacity = "0";
    document.querySelector(".avenger").style.transition = "9s";
    document.querySelector("h1").innerText = "Thanos wins...";
    // document.querySelector(".avengers").style.transition = "5s";
    // alert("Game Over");
  }
};

// Hero.prototype.thorAttack = function() {
//   let attackDamage = Math.ceil(Math.random() * thor.offense);
//   if (thanos.hp > 0 && thor.hp > 0) {
//     // If Thor and Thanos are both alive, Thor will attack Thanos
//     thanos.hp -= attackDamage;
//     document.querySelector("#thanos-hp").textContent = thanos.hp;
//     console.log(thanos.hp);
//     document.querySelector(".avengers-msg").innerHTML =
//       "<p>" +
//       `${thor.name} used ${thor.weapons}. Damage: ${attackDamage}` +
//       "<p>";
//     // ...and Thanos will attack Thor
//     setTimeout(() => {
//       let thanosAttack = Math.ceil(Math.random() * thanos.offense);
//       thor.hp -= thanosAttack;
//       document.querySelector("#thor-hp").textContent = thor.hp;
//       document.querySelector(".thanos-msg").innerHTML =
//         "<p>" +
//         `${thanos.name} attacked ${thor.name}. Damage: ${thanosAttack}` +
//         "<p>";
//       document.querySelector(".thanos-msg").style.color = "#CF6510";
//     }, 250);
//     didThanosWin;
//   } else if (thanos.hp > 0 && thor.hp <= 0) { // separate if statement
//     thor.hp = 0;
//     document.getElementById("thor-attack").disabled = true;
//     document.getElementById("thor-attack").classList.add("btn-disabled");
//     document.querySelector("#thor-hp").textContent = thor.hp;
//     document.querySelector(".thanos-msg").innerHTML =
//       "<p>" + `"You should've gone for the head."` + "<p>";
//     document.querySelector(".thanos-msg").style.color = "#8311FC";
//   } else if (thanos.hp <= 0) {
//     document.getElementById("thanos-hp").innerText = "0";
//     alert("Game Over");
//   }
// };

/* =========== THOR =========== */
Hero.prototype.thorAttack = function() {
  let attackDamage = Math.ceil(Math.random() * thor.offense);
  if (thanos.hp > 0 && thor.hp > 0) {
    // If Thor and Thanos are both alive, Thor will attack Thanos
    thanos.hp -= attackDamage;
    if (thanos.hp <= 0) {
      document.getElementById("thanos-hp").innerText = "0";
      alert("Game Over");
    }
    document.querySelector("#thanos-hp").textContent = thanos.hp;
    console.log(thanos.hp);
    document.querySelector(".avengers-msg").innerHTML =
      "<p>" +
      `${thor.name} used ${thor.weapons}. Damage: ${attackDamage}` +
      "<p>";
    // ...and Thanos will attack Thor
    setTimeout(() => {
      let thanosAttack = Math.ceil(Math.random() * thanos.offense);
      thor.hp -= thanosAttack;
      document.querySelector("#thor-hp").textContent = thor.hp;
      didThanosWin();
      if (thanos.hp > 0 && thor.hp <= 0) {
        // separate if statement
        thor.hp = 0;
        document.querySelector("#thor-hp").textContent = thor.hp;

        // Thanos talks
        document.querySelector(".thanos-msg").innerHTML =
          "<p>" + `"You should've gone for the head."` + "<p>";
        document.querySelector(".thanos-msg").style.color = "#8311FC";

        // Disable attack button
        document.getElementById("thor-attack").disabled = true;
        document.getElementById("thor-attack").classList.add("btn-disabled");
      } else {
        document.querySelector(".thanos-msg").innerHTML =
          "<p>" +
          `${thanos.name} attacked ${thor.name}. Damage: ${thanosAttack}` +
          "<p>";
        document.querySelector(".thanos-msg").style.color = "#CF6510";
      }
    }, 250);
    // didThanosWin();
  }
};

/* =========== HULK =========== */
Hero.prototype.hulkAttack = function() {
  let attackDamage = Math.ceil(Math.random() * hulk.offense);
  if (thanos.hp > 0 && hulk.hp > 0) {
    // If Hulk and Thanos are both alive, Hulk will attack Thanos
    thanos.hp -= attackDamage;
    if (thanos.hp <= 0) {
      document.getElementById("thanos-hp").innerText = "0";
      alert("Game Over");
    }
    document.querySelector("#thanos-hp").textContent = thanos.hp;
    console.log(thanos.hp);
    document.querySelector(".avengers-msg").innerHTML =
      "<p>" + `HULK SMASH!!! Damage: ${attackDamage}` + "<p>";
    setTimeout(() => {
      let thanosAttack = Math.ceil(Math.random() * thanos.offense);
      hulk.hp -= thanosAttack;
      document.querySelector("#hulk-hp").textContent = hulk.hp;
      didThanosWin();
      if (thanos.hp > 0 && hulk.hp <= 0) {
        console.log("hulk hp before: ", hulk.hp);
        hulk.hp = 0;
        console.log("hulk hp after: ", hulk.hp);
        document.querySelector("#hulk-hp").textContent = hulk.hp;

        // Thanos talks
        document.querySelector(".thanos-msg").innerHTML =
          "<p>" + `"This... does put a smile on my face."` + "<p>";
        document.querySelector(".thanos-msg").style.color = "#8311FC";

        // Disable attack button
        document.getElementById("hulk-attack").disabled = true;
        document.getElementById("hulk-attack").classList.add("btn-disabled");
      } else {
        document.querySelector(".thanos-msg").innerHTML =
          "<p>" +
          `${thanos.name} attacked ${hulk.name}. Damage: ${thanosAttack}` +
          "<p>";
        document.querySelector(".thanos-msg").style.color = "#CF6510";
      }
    }, 250);
  }
};

/* =========== CAPT AMERICA =========== */
Hero.prototype.capAttack = function() {
  let attackDamage = Math.ceil(Math.random() * captainAmerica.offense);
  if (thanos.hp > 0 && captainAmerica.hp > 0) {
    thanos.hp -= attackDamage;
    document.querySelector("#thanos-hp").textContent = thanos.hp;
    document.querySelector(".avengers-msg").innerHTML =
      "<p>" + `${captainAmerica.name} attacks. Damage: ${attackDamage}` + "<p>";
    console.log(thanos.hp);

    setTimeout(() => {
      let thanosAttack = Math.ceil(Math.random() * thanos.offense);
      captainAmerica.hp -= thanosAttack;
      document.querySelector("#cap-hp").textContent = captainAmerica.hp;
      document.querySelector(".thanos-msg").innerHTML =
        "<p>" +
        `${thanos.name} attacked ${
          captainAmerica.name
        }. Damage: ${thanosAttack}` +
        "<p>";
      document.querySelector(".thanos-msg").style.color = "#CF6510";
    }, 250);

    didThanosWin;
  } else if (thanos.hp > 0 && captainAmerica.hp <= 0) {
    document.querySelector("#cap-hp").textContent = "0";
    document.getElementById("cap-attack").disabled = true;
    document.getElementById("cap-attack").classList.add("btn-disabled");
    document.querySelector(".thanos-msg").innerHTML =
      "<p>" + `"When I'm done, half of humanity will still exist."` + "<p>";
    document.querySelector(".thanos-msg").style.color = "#8311FC";
  } else if (thanos.hp <= 0) {
    document.getElementById("thanos-hp").innerText = "0";
    alert("Game Over");
  }
};

/* =========== IRON MAN =========== */
Hero.prototype.ironManAttack = function() {
  let attackDamage = Math.ceil(Math.random() * ironMan.offense);
  if (thanos.hp > 0 && ironMan.hp > 0) {
    thanos.hp -= attackDamage;
    document.querySelector("#thanos-hp").textContent = thanos.hp;
    document.querySelector(".avengers-msg").innerHTML =
      "<p>" + `${ironMan.name} attacks. Damage: ${attackDamage}` + "<p>";
    console.log(thanos.hp);
    setTimeout(() => {
      let thanosAttack = Math.ceil(Math.random() * thanos.offense);
      ironMan.hp -= thanosAttack;
      document.querySelector("#ironman-hp").textContent = ironMan.hp;
      document.querySelector(".thanos-msg").innerHTML =
        "<p>" +
        `${thanos.name} attacked ${ironMan.name}. Damage: ${thanosAttack}` +
        "<p>";
      document.querySelector(".thanos-msg").style.color = "#CF6510";
    }, 250);
    didThanosWin;
  } else if (thanos.hp > 0 && ironMan.hp <= 0) {
    document.querySelector("#ironman-hp").textContent = "0";
    document.getElementById("ironman-attack").disabled = true;
    document.getElementById("ironman-attack").classList.add("btn-disabled");
    document.querySelector(".thanos-msg").innerHTML =
      "<p>" + `"I hope they remember you."` + "<p>";
    document.querySelector(".thanos-msg").style.color = "#8311FC";
    didThanosWin;
  } else if (thanos.hp <= 0) {
    document.getElementById("thanos-hp").innerText = "0";
    alert("Game Over");
  }
};

let thor = new Hero({
  name: "Thor",
  hp: 50, // 250
  weapons: ["Storm Breaker"],
  offense: 50
});

let ironMan = new Hero({
  name: "Iron Man",
  hp: 50, // 200
  weapons: ["Blasters"],
  offense: 45
});

let captainAmerica = new Hero({
  name: "Captain America",
  hp: 50, //215
  weapons: ["Vibranium Shield"],
  offense: 50
});

let hulk = new Hero({
  name: "Hulk",
  hp: 50, //300
  weapons: ["Hulk Smash"],
  offense: 60
});

function Villain(villainAttr) {
  Hero.call(this, villainAttr);
  this.hasPowerStone = villainAttr.hasPowerStone;
  this.hasSpaceStone = villainAttr.hasSpaceStone;
  this.hasMindStone = villainAttr.hasMindStone;
  this.hasRealityStone = villainAttr.hasRealityStone;
  this.hasSoulStone = villainAttr.hasSoulStone;
  this.hasTimeStone = villainAttr.hasTimeStone;
}

Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.thanosAttack = function() {
//   let target = document.getElementById;
//   let attackDamage = Math.ceil(Math.random() * thanos.offense);
// };

let thanos = new Villain({
  name: "Thanos",
  hp: 1000,
  weapons: ["Infinity Gaunlet"],
  offense: 50
});

let activePlayer = 0;

document.querySelector("#thanos-hp").textContent = thanos.hp;
document
  .getElementById("thor-attack")
  .addEventListener("click", thor.thorAttack);

document
  .getElementById("hulk-attack")
  .addEventListener("click", hulk.hulkAttack);
document
  .getElementById("cap-attack")
  .addEventListener("click", captainAmerica.capAttack);
document
  .getElementById("ironman-attack")
  .addEventListener("click", ironMan.ironManAttack);

document.getElementById("thor-hp").innerText = thor.hp;
document.getElementById("hulk-hp").innerText = hulk.hp;
document.getElementById("cap-hp").innerText = captainAmerica.hp;
document.getElementById("ironman-hp").innerText = ironMan.hp;
document.getElementById("thanos-hp").innerText = thanos.hp;

// function init() {
//   document.getElementById("thor-hp").innerText = thor.hp;
//   document.getElementById("hulk-hp").innerText = hulk.hp;
//   document.getElementById("cap-hp").innerText = captainAmerica.hp;
//   document.getElementById("ironman-hp").innerText = ironMan.hp;
//   document.getElementById("thanos-hp").innerText = thanos.hp;

//   setTimeout(function() {
//     for (let i = 0; i < stones.length; i++) {}
//   }, 5000);
// }
