Object oriented design is commonly used in video games.  For this part of the assignment
you will be implementing several classes with their correct inheritance heirarchy.

-  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
+  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.
At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
-  
+
Each class has unique properites and methods that are defined in their block comments below:
*/
-  
+
/*
=== GameObject ===
* createdAt
* dimensions
* destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

+function GameObject(dimensionsObj) {
+  this.createdAt = dimensionsObj.createdAt;
+  this.dimensions = dimensionsObj.dimensions;
+}
+
+GameObject.prototype.destroy = function(){
+  return `${this.name} was removed from the game.`;
+};
+
+let gameArgs = {
+  createdAt: new Date(),
+  dimensions: {
+    height: 4,
+    width: 2,
+    length: 6
+  }
+};
+
+let myGame = new GameObject(gameArgs);
+console.log(myGame);
+
/*
=== CharacterStats ===
* hp
* name
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
+function CharacterStats(charObj) {
+  GameObject.call(this, charObj);
+  this.hp = charObj.hp;
+  this.name = charObj.name;
+}
+
+CharacterStats.prototype = Object.create(GameObject.prototype);
+
+CharacterStats.prototype.takeDamage = function() {
+  return this.name + " took damage.";
+};
+
+var myCharObj = {
+  hp: 15,
+  name: "Xang",
+  dimension: {
+    height: 2,
+    width: 3,
+    lengths: 5
+  },
+  age: 30
+};
+
+
+
+var myChar = new CharacterStats(myCharObj);
+console.log("start here");
+console.log(myChar.takeDamage());
+console.log(myChar.destroy());
+console.log(myChar.dimensions);
+console.log(myChar.createdAt);
+

/*
=== Humanoid ===
@@ -32,7 +85,36 @@
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
- 
+var humanObj = {
+  name: "Xang",
+  hp: 15,
+  faction: "Maga Guild",
+  weapons: ["sword", "ninja stars"],
+  language: "Hmong"
+};
+
+function Humanoid(humanoidObj) {
+  CharacterStats.call(this, humanoidObj);
+
+  this.faction = humanoidObj.faction;
+  this.weapons = humanoidObj.weapons;
+  this.language = humanoidObj.language;
+}
+
+Humanoid.prototype = Object.create(CharacterStats.prototype);
+
+Humanoid.prototype.greet = function() {
+  return `${this.name} offers a greeting in ${this.language}`;
+}
+
+let me = new Humanoid(humanObj);
+
+console.log(me.greet());
+console.log(me.takeDamage());
+console.log(me.destroy());
+
+
+
/*
* Inheritance chain: Humanoid -> CharacterStats -> GameObject
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
@@ -41,7 +123,7 @@

//Test you work by uncommenting these 3 objects and the list of console logs below:

-/*
+
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
@@ -92,6 +174,8 @@
  language: 'Elvish',
});

+  console.log("============= TEST starts here ============")
+
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
@@ -102,9 +186,9 @@
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
-*/

  // Stretch task: 
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!