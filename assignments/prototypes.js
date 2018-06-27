/*
	Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

	In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

	At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
	
	Each constructor function has unique properites and methods that are defined in their block comments below:
*/
	
/*
	=== GameObject ===
	* createdAt
	* dimensions
	* destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

function GameObject(objectProperties) {
	this.createdAt = objectProperties.createdAt;
	this.dimensions = objectProperties.dimensions;
}

GameObject.prototype.destroy = function () {
	return `${this.name} was removed from the game.`;
}
GameObject.prototype.create = function () {
	return `${this.name} was created in the game.`;
}

/*
	=== CharacterStats ===
	* hp
	* name
	* takeDamage() // prototype method -> returns the string '<object name> took damage.'
	* should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterProperties) {
	// This inherits GameObjects properties (createdAt + dimensions)
	GameObject.call(this, characterProperties);
	this.hp = characterProperties.hp;
	this.name = characterProperties.name;
}

// This allows for destroy() to be inherited from GameObject
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
	return `${this.name} took damage.`;
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

function Humanoid(humanoidProperties) {
	CharacterStats.call(this, humanoidProperties);
	this.faction = humanoidProperties.faction;
	this.weapons = humanoidProperties.weapons;
	this.language = humanoidProperties.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
	return `${this.name} offers a greeting in ${this.language}`;
}
 
/*
	* Inheritance chain: Humanoid -> CharacterStats -> GameObject
	* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
	* Instances of CharacterStats should have all of the same properties as GameObject.
*/

//Test you work by uncommenting these 3 objects and the list of console logs below:


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

	function Villain(villainProperties) {
		Humanoid.call(this, villainProperties);
		this.damage = villainProperties.damage;
	}
	function Hero(heroProperties) {
		Humanoid.call(this, heroProperties);
		this.damage = heroProperties.damage;
	}
	Villain.prototype = Object.create(Humanoid.prototype);
	Hero.prototype = Object.create(Humanoid.prototype);

	Hero.prototype.attack = function(enemy) {
		enemy.hp = enemy.hp - (this.damage * 2);
		if (enemy.hp > 0) {
			return `${this.name} did ${this.damage} damage to ${enemy.name} \n${enemy.name} has ${enemy.hp} hp remaining!`;
		} else {
			return `${enemy.name} is dead!`;
		}
	}

	Villain.prototype.attack = function(enemy) {
		enemy.hp = enemy.hp - (this.damage * 2);
		if (enemy.hp > 0) {
			return `${this.name} did ${this.damage} damage to ${enemy.name} \n${enemy.name} has ${enemy.hp} hp remaining!`;
		} else {
			return `${enemy.name} is dead!`;
		}
	}

	const good = new Hero({
		createdAt: new Date(),
		dimensions: {
			length: 1,
			width: 2,
			height: 4,
		},
		hp: 500,
		name: 'Good',
		faction: 'Skies',
		weapons: [
			'Staff'
		],
		language: 'Elvish',
		damage: 40
	});

	const evil = new Villain({
		createdAt: new Date(),
		dimensions: {
			length: 1,
			width: 2,
			height: 4,
		},
		hp: 1000,
		name: 'Evil',
		faction: 'Abyss',
		weapons: [
			'Bow',
			'Dagger',
		],
		language: 'Elvish',
		damage: 20
	});

	console.log(good.attack(evil));
	console.log(evil.attack(good));
	console.log(good.attack(evil));
	console.log(evil.attack(good));