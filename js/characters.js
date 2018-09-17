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

  activateGameOver() {
    gameOverScreen.classList.add('game-over-active');
  }

  decrementHpBar(opponent, opponentHPBar) {
    opponentHPBar.style.width =
      ((opponent.hp / opponent.maxHP) * 100).toString() + '%';
  }

  displayMessage(opponent, attackName, adj) {
    messages.textContent = `${
      this.name
    } ${adj} ${attackName}!!! ${opponent.takeDamage()}... HP: ${opponent.hp}`;
    messageFlicker();
  }

  destroyMessage(opponent) {
    messages.textContent = `${opponent.destroy()}... Boom, roasted.`;
  }
}

// HERO
class Hero extends Humanoid {
  constructor(heroAttributes) {
    super(heroAttributes);
  }

  // Base attack
  castSpell(villain) {
    // remove 1 hp
    villain.hp -= 1;
    // remove hp from hp bar
    this.decrementHpBar(villain, villainHPBar);
    if (villain.hp > 1) {
      // Display message (opponent, attack, adj)
      this.displayMessage(villain, 'Paper Cut', 'casted');
    } else if (villain.hp === 1) {
      // Display destroy message
      this.destroyMessage(villain);
      // show game over screen if opponent health is at 0
    } else if (villain.hp === 0) {
      this.activateGameOver();
    }
  }

  // Super attack
  superAttack(villain) {
    // remove 3 hp
    villain.hp -= 3;
    // remove hp from hp bar
    this.decrementHpBar(villain, villainHPBar);
    if (villain.hp >= 3) {
      // Display message (opponent, attack, adj)
      this.displayMessage(villain, 'a Party', 'Threw');
    } else if (villain.hp === 0) {
      // Display destroy message
      this.destroyMessage(villain);
      // show game over screen
      this.activateGameOver();
    } else {
      messages.textContent = 'Use normal attack... super is too much';
    }
  }
}

class Villain extends Humanoid {
  constructor(villainAttributes) {
    super(villainAttributes);
  }

  baseAttack(hero) {
    // remove 1 hp
    hero.hp -= 1;
    // remove hp from hp bar
    this.decrementHpBar(hero, heroHPBar);
    if (hero.hp > 1) {
      // Display message (opponent, attack, adj)
      this.displayMessage(hero, 'Paper Work', 'Endless');
    } else if (hero.hp === 1) {
      // Display destroy message
      this.destroyMessage(hero);
    } else if (hero.hp === 0) {
      // show game over screen if opponent health is at 0
      this.activateGameOver();
    }
  }

  superAttack(hero) {
    // remove 3 hp
    hero.hp -= 3;
    // remove hp from hp bar
    this.decrementHpBar(hero, heroHPBar);
    if (hero.hp >= 3) {
      // Display message (opponent, attack, adj)
      this.displayMessage(hero, 'Beurocratic Shade', 'Threw');
    } else if (hero.hp === 0) {
      // Display destroy message
      this.destroyMessage(hero);
      // show game over screen
      this.activateGameOver();
    } else {
      messages.textContent = 'Use normal attack... super is too much';
    }
  }
}
