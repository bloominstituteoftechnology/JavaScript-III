
//  === GameObject ===  //
function GameObject(gameAttr) {
    this.createdAt = new Date();
  }
  GameObject.prototype.destroy = function(target, winner) {
    return `${target.name} has been defeated by ${winner.name}!! ${target.name} deleted from game.`
  }
  
  // === CharacterStats === //
  
  function CharacterStats(charAttr) {
    GameObject.call(this, charAttr);
    this.name = charAttr.name;
    this.hp = charAttr.hp;
    this.faction = charAttr.faction;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.attack = function(target) {
    if (target.hp <= 0) return `${target.name} has already been defeated`
    let damage = Math.round(Math.random() * 30);
    target.hp -= damage;
    if (target.hp <= 0) {
      return this.destroy(target, this)
    } else {
      return  `${target.name} has taken ${damage} damage. ${target.name} has ${target.hp} hit points remaining.`
    } 
  }
  
  //  ====  HERO  ====  //
  function Hero(heroAttr){
    CharacterStats.call(this, heroAttr);
  }
  Hero.prototype = Object.create(CharacterStats.prototype)
  
  //  ====  VILLAIN  ====  //
  function Villain(villianAttr) {
    CharacterStats.call(this, villianAttr);
  }
  Villain.prototype = Object.create(CharacterStats.prototype);
  
  let hero = new Hero({name: 'Hero', hp: 100, faction: 'Good'})
  let villain = new Villain({name: 'Villain', hp: 100, faction: 'Bad'});
  
  console.log(hero.attack(hero));
  console.log(hero.attack(villain));
  console.log(hero.attack(hero));
  console.log(hero.attack(villain));
  console.log(hero.attack(hero));
  console.log(hero.attack(villain));
  console.log(hero.attack(hero));
  console.log(hero.attack(villain));
  console.log(hero.attack(hero));
  console.log(hero.attack(villain));
  console.log(hero.attack(hero));
  console.log(hero.attack(villain));
  