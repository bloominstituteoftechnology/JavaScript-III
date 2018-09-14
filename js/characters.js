class GameObject {
  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(characterStatsOptions) {
    super(characterStatsOptions);
    this.hp = characterStatsOptions.hp;
    this.maxHP = characterStatsOptions.maxHP;
    this.name = characterStatsOptions.name;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanoidOptions) {
    super(humanoidOptions);
    this.faction = humanoidOptions.faction;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// HERO
class Hero extends Humanoid {
  constructor(heroAttributes) {
    super(heroAttributes);
  }

  // Base attack
  castSpell(villain) {
    if (villain.hp > 1) {
      villain.hp -= 1;
      villainHPBar.style.width =
        ((villain.hp / villain.maxHP) * 100).toString() + '%';
      messages.textContent = `${
        this.name
      } casted Paper Cut!!! ${villain.takeDamage()}... HP: ${villain.hp}`;
      messageFlicker();
    } else if (villain.hp === 1) {
      villain.hp -= 1;
      villainHPBar.style.width =
        ((villain.hp / villain.maxHP) * 100).toString() + '%';
      messages.textContent = `${villain.destroy()}... Boom, roasted.`;
      messageFlicker();
    }
  }

  // Super attack
  superAttack(villain) {
    if (villain.hp >= 4) {
      villain.hp -= 3;
      villainHPBar.style.width =
        ((villain.hp / villain.maxHP) * 100).toString() + '%';
      messages.textContent = `${
        this.name
      } Threw a Party!!! ${villain.takeDamage()}... HP: ${villain.hp}`;
      messageFlicker();
    } else if (villain.hp === 0) {
      messages.textContent = `${villain.destroy()}... Boom, roasted.`;
      messageFlicker();
    } else {
      messages.textContent = 'Use normal attack... super is too much';
    }
  }
}

class Villain {
  constructor(villainAttributes) {
    super(villainAttributes);
  }

  baseAttack(hero) {
    if (hero.hp > 1) {
      hero.hp -= 1;
      heroHPBar.style.width = ((hero.hp / hero.maxHP) * 100).toString() + '%';
      messages.textContent = `${
        this.name
      } attacked with Endless Paperwork!!! ${hero.takeDamage()}... HP: ${
        hero.hp
      }`;
      messageFlicker();
    } else if (hero.hp === 1) {
      hero.hp -= 1;
      heroHPBar.style.width = ((hero.hp / hero.maxHP) * 100).toString() + '%';
      messages.textContent = `${hero.destroy()}... Boom, roasted.`;
      messageFlicker();
    }
  }

  superAttack(hero) {
    if (hero.hp >= 4) {
      hero.hp -= 3;
      heroHPBar.style.width = ((hero.hp / hero.maxHP) * 100).toString() + '%';
      messages.textContent = `${
        this.name
      } Threw Bureaucratic Shade!!! ${hero.takeDamage()}... HP: ${hero.hp}`;
      messageFlicker();
    } else if (hero.hp === 0) {
      messages.textContent = `${hero.destroy()}... Boom, roasted.`;
      messageFlicker();
    } else {
      messages.textContent = 'Use normal attack... super is too much';
    }
  }
}
