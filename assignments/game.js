const playerChoice = document.querySelector(".player-choices");
const displayScreen = document.querySelector(".display");
//====================== Player choice name and Hp display ====================

//====================== Player choice picture ================================
const player1Display = document.querySelector(".display-player1");
const player2Display = document.querySelector(".display-player2");
//======================= Text display Screen =================================
const topTextDisplay = document.querySelector(".text-display-top");
const middleTextDisplay = document.querySelector(".text-display-middle");
const bottomTextDisplay = document.querySelector(".text-display-bottom");
//======================= Game buttons ========================================
const players = document.querySelectorAll(".characters");

//======================== Human Players ======================
const playArcher = document.querySelector(".archer");
const playBoromir = document.querySelector(".boromir");
const playGoblin = document.querySelector(".goblin");
const playMage = document.querySelector(".mage");
const playSwordsman = document.querySelector(".swordsman");

//========================= Comp Player ========================
const compArcher = document.querySelector(".comp1");
const compBoromir = document.querySelector(".comp2");
const compGoblin = document.querySelector(".comp3");
const compMage = document.querySelector(".comp4");
const compSwordsman = document.querySelector(".comp5");

//==================== Human Player Info =======================
const nameDisplay = document.querySelector(".name");
const hpDisplay = document.querySelector(".hp-pts");

//==================== Comp Player Info ========================
const compNameDisplay = document.querySelector(".comp-name");
const compHpDisplay = document.querySelector(".comp-hp-pts");
const allBtns = document.querySelectorAll(".buttons");

playerChoice.style.display = "none";
displayScreen.style.display = "none";

allBtns.forEach(btn => {
  btn.style.display = "none";
  const textDisplay = document.querySelector(".text-display");
  textDisplay.style.height = "75%"; //original 45%
  textDisplay.style.marginTop = "50%"; //original 0
});

const body = document.querySelector("body");
const startDiv = document.createElement("div");
const startBtn = document.createElement("button");
startBtn.classList = "start-btn";
startBtn.textContent = "Start Game";
body.appendChild(startDiv);
startDiv.appendChild(startBtn);

startDiv.classList = "start-div";

const displayChoice = () => {
  const choseText = document.createElement("h1");
  const choseText2 = document.createElement("h1");
  startDiv.appendChild(choseText);
  startDiv.appendChild(choseText2);
  choseText.textContent = "Player 1, select your fighter!";
  choseText2.textContent = "Computer will chose a random fighter";
  choseText.style.fontSize = "3rem";
  choseText2.style.fontSize = "3rem";

  playerChoice.style.display = "flex";
  startBtn.style.display = "none";

  chosePlayer();
};

startBtn.addEventListener("click", displayChoice);

const chosePlayer = () => {
  //========================== Human Player Choice ===========
  for (let i = 0; i < players.length; i++) {
    players[i].addEventListener("click", e => {
      displayScreen.style.display = "flex";
      startDiv.style.display = "none";
      const vsDiv = document.querySelector(".vs-text");
      vsDiv.style.border = "2px solid black";
      vsDiv.textContent = "Start Fight";
      vsDiv.style.fontSize = "2.5rem";

      const pickedPlayer = () => {
        players.forEach(player => {
          if (player != players[i]) {
            player.style.visibility = "hidden";
            player.style.opacity = "0.3";
            player.style.border = "0px solid black";
          } else {
            players[i].style.borderTop = "1px solid red";
            players[i].style.borderBottom = "1px solid red";
            players[i].style.opacity = "1";
          }
        });
      };

      //===================== Computer Player Choice ========================
      const compPlayers = [
        compArcher,
        compBoromir,
        compGoblin,
        compMage,
        compSwordsman
      ];
      const compChoice = compPlayers[Math.floor(Math.random() * 5)];

      const compPlayer = () => {
        compPlayers.forEach(player => {
          if (compChoice != player) {
            player.style.opacity = "0.3";
            player.style.border = "0px solid black";
          } else {
            player.style.visibility = "show";
            player.style.borderTop = "1px solid red";
            player.style.borderBottom = "1px solid red";
            player.style.opacity = "1";
          }
        });
      };

      //======================== Human Player Styles ======================
      if (players[i] === playArcher) {
        pickedPlayer();

        topTextDisplay.textContent = "Archer";

        nameDisplay.textContent = archer.name;
        hpDisplay.textContent = archer.hp;
        player1Display.style.backgroundImage = 'url("../img/Archer.jpg")';
      } else if (players[i] === playBoromir) {
        pickedPlayer();

        topTextDisplay.textContent = "Warrior";

        nameDisplay.textContent = warrior.name;
        hpDisplay.textContent = warrior.hp;
        player1Display.style.backgroundImage = 'url("../img/Boromir.jpg")';
      } else if (players[i] === playGoblin) {
        pickedPlayer();

        topTextDisplay.textContent = "Goblin";

        nameDisplay.textContent = goblin.name;
        hpDisplay.textContent = goblin.hp;
        player1Display.style.backgroundImage = 'url("../img/Goblin.jpg")';
      } else if (players[i] === playMage) {
        pickedPlayer();

        topTextDisplay.textContent = "Mage";

        nameDisplay.textContent = mage.name;
        hpDisplay.textContent = mage.hp;
        player1Display.style.backgroundImage = 'url("../img/Mage.jpg")';
      } else if (players[i] === playSwordsman) {
        pickedPlayer();

        topTextDisplay.textContent = "Swordsman";

        nameDisplay.textContent = swordsman.name;
        hpDisplay.textContent = swordsman.hp;
        player1Display.style.backgroundImage = 'url("../img/Swordsman.jpg")';
      }

      //======================== Computer choice styles ========================

      if (compChoice === compArcher) {
        compPlayer();

        bottomTextDisplay.textContent = "Archer";

        compNameDisplay.textContent = archer.name;
        compHpDisplay.textContent = archer.hp;
        player2Display.style.backgroundImage = 'url("../img/Archer.jpg")';
      } else if (compChoice === compBoromir) {
        compPlayer();

        bottomTextDisplay.textContent = "Warrior";

        compNameDisplay.textContent = warrior.name;
        compHpDisplay.textContent = warrior.hp;
        player2Display.style.backgroundImage = 'url("../img/Boromir.jpg")';
      } else if (compChoice === compGoblin) {
        compPlayer();

        bottomTextDisplay.textContent = "Goblin";

        compNameDisplay.textContent = goblin.name;
        compHpDisplay.textContent = goblin.hp;
        player2Display.style.backgroundImage = 'url("../img/Goblin.jpg")';
      } else if (compChoice === compMage) {
        compPlayer();

        bottomTextDisplay.textContent = "Mage";

        compNameDisplay.textContent = mage.name;
        compHpDisplay.textContent = mage.hp;
        player2Display.style.backgroundImage = 'url("../img/Mage.jpg")';
      } else if (compChoice === compSwordsman) {
        compPlayer();

        bottomTextDisplay.textContent = "Swordsman";

        compNameDisplay.textContent = swordsman.name;
        compHpDisplay.textContent = swordsman.hp;
        player2Display.style.backgroundImage = 'url("../img/Swordsman.jpg")';
      }

      vsDiv.addEventListener("click", () => {
        playerChoice.style.display = "none";
        alert(
          "You will now be fighting the computer, please allow 2 seconds after your move for the computers move.."
        );

        allBtns.forEach(btn => {
          btn.style.display = "flex"; //original flex
          const textDisplay = document.querySelector(".text-display");
          textDisplay.style.height = "45%"; //original 45%
          textDisplay.style.marginTop = "0"; //original 0

          fight(players[i], compChoice);
        });
      });
    });
  }
};

//=================== Constructor functions ================

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
};

function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.hp = attributes.hp;
  this.name = attributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
};

function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  console.log(`${this.name} offers a greeting in ${this.language}`);
};

function Hero(attributes) {
  Humanoid.call(this, attributes);
}

function Villian(attributes) {
  Humanoid.call(this, attributes);
}

Villian.prototype = Object.create(Humanoid.prototype);
Hero.prototype = Object.create(Humanoid.prototype);

//=================================== Players ===========================

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 50,
  name: "Bruce",
  faction: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Toungue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 45,
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
  hp: 40,
  name: "Lilith",
  faction: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const warrior = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 45,
  name: "Boromir",
  faction: "Gandor",
  weapons: ["Sword", "Shield", "Dagger"],
  language: "Sindar"
});

const goblin = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 30,
  name: "Gollum",
  faction: "N/A",
  weapons: ["Scary face"],
  language: "English"
});

//====================== Attack Methods =================================

Humanoid.prototype.heavyAttack = (attacker, enemy, hpd) => {
  this.attacker = attacker;
  this.enemy = enemy;
  this.hpd = hpd;
  topTextDisplay.textContent = `${attacker.name} dropped a heavy attack on ${
    enemy.name
  }`;
  middleTextDisplay.textContent = `${enemy.takeDamage()}`;

  enemy.hp -= 5;
  hpd.textContent = `${enemy.hp}`;
  // compHpDisplay.textContent = `${enemy.hp}`;
};

Humanoid.prototype.mediumAttack = (attacker, enemy, hpd) => {
  this.attacker = attacker;
  this.enemy = enemy;
  this.hpd = hpd;
  topTextDisplay.textContent = `${attacker.name} dropped a medium attack on ${
    enemy.name
  }`;
  middleTextDisplay.textContent = `${enemy.takeDamage()}`;
  enemy.hp -= 2;
  hpd.textContent = `${enemy.hp}`;
  // compHpDisplay.textContent = `${enemy.hp}`;
};

Humanoid.prototype.lightAttack = (attacker, enemy, hpd) => {
  this.attacker = attacker;
  this.enemy = enemy;
  this.hpd = hpd;
  topTextDisplay.textContent = `${attacker.name} dropped a light attack on ${
    enemy.name
  }`;
  middleTextDisplay.textContent = `${enemy.takeDamage()}`;
  enemy.hp -= 1;
  hpd.textContent = `${enemy.hp}`;
  // compHpDisplay.textContent = `${enemy.hp}`;
};

//================================== Defend Methods ============================

Humanoid.prototype.heavyDefence = (player, hpd) => {
  this.player = player;
  this.hpd = hpd;
  hpd.style.classList = "defended";
  player.hp += 5;
  topTextDisplay.textContent = `${player.name} defended and gaind Hp`;
  hpd.textContent = `${player.hp}`;
};

Humanoid.prototype.mediumDefence = (player, hpd) => {
  this.player = player;
  this.hpd = hpd;
  hpd.style.classList = "defended";
  player.hp += 2;
  topTextDisplay.textContent = `${player.name} defended and gaind Hp`;
  hpd.textContent = `${player.hp}`;
};

Humanoid.prototype.lightDefence = (player, hpd) => {
  this.player = player;
  hpd.style.classList = "defended";
  player.hp += 1;
  topTextDisplay.textContent = `${player.name} defended and gaind Hp`;
  hpd.textContent = `${player.hp}`;
};
//================================== Attack Function ===========================
const fight = (player, comp) => {
  const attackBtn = document.querySelector(".player-attack-btn");

  const attackEvent = (player, comp) => {
    attackBtn.addEventListener("click", () => {
      bottomTextDisplay.textContent = "";
      if (comp.hp < 10) {
        compHpDisplay.textContent = `${comp.hp}`;
        compHpDisplay.style.color = "red";
      }
      if (comp.hp < 1) {
        comp.hp = 0;
        bottomTextDisplay.textContent = `${comp.destroy()}`;
        compHpDisplay.textContent = `${comp.hp}`;
        player2Display.classList = "destroyed";
        player2Display.style.backgroundImage = "";
        player2Display.textContent = "Game Over";

        const restart = document.createElement("button");
        restart.textContent = "Play again?";
        restart.style.borderRadius = "10px";
        restart.style.fontSize = "2.5rem";
        player2Display.appendChild(restart);

        restart.addEventListener("click", () => {
          player2Display.textContent = `We still haven't finished this part yet. Please simply refresh your page...Sorry`;
          player2Display.classList = "restart";
        });
      } else {
        const randomAttack = Math.floor(Math.random() * 3) + 1;
        if (randomAttack === 1) {
          player.lightAttack(player, comp, compHpDisplay);
          player2Display.classList.add("attacked");
          setTimeout(() => {
            player2Display.classList.remove("attacked");
          }, 1000);
        }
        if (randomAttack === 2) {
          player.mediumAttack(player, comp, compHpDisplay);
          player2Display.classList.add("attacked");
          setTimeout(() => {
            player2Display.classList.remove("attacked");
          }, 1000);
        }
        if (randomAttack === 3) {
          player.heavyAttack(player, comp, compHpDisplay);
          player2Display.classList.add("attacked");
          setTimeout(() => {
            player2Display.classList.remove("attacked");
          }, 1000);
        }
      }
      setTimeout(() => {
        if (player.hp < 1) {
          player.hp = 0;
          bottomTextDisplay.textContent = `${player.destroy()}`;
          hpDisplay.textContent = `${player.hp}`;
          player1Display.classList = "destroyed";
          player1Display.style.backgroundImage = "";
          player1Display.textContent = "Game Over";

          const restart = document.createElement("button");
          restart.textContent = "Play again?";
          restart.style.borderRadius = "10px";
          restart.style.fontSize = "2.5rem";
          player1Display.appendChild(restart);

          restart.addEventListener("click", () => {
            player1Display.textContent = `We still haven't finished this part yet. Please simply refresh your page...Sorry`;
            player1Display.classList = "restart";
          });
        } else {
          if (player.hp < 10) {
            hpDisplay.textContent = `${player.hp}`;
            hpDisplay.style.color = "red";
          }
          const randomAttack = Math.floor(Math.random() * 6) + 1;
          if (randomAttack === 1) {
            comp.lightAttack(comp, player, hpDisplay);
            player1Display.classList.add("attacked");
            setTimeout(() => {
              player1Display.classList.remove("attacked");
            }, 1000);
          }
          if (randomAttack === 2) {
            comp.mediumAttack(comp, player, hpDisplay);
            player1Display.classList.add("attacked");
            setTimeout(() => {
              player1Display.classList.remove("attacked");
            }, 1000);
          }
          if (randomAttack === 3) {
            comp.heavyAttack(comp, player, hpDisplay);
            player1Display.classList.add("attacked");
            setTimeout(() => {
              player1Display.classList.remove("attacked");
            }, 1000);
          }
          if (randomAttack === 4) {
            comp.lightDefence(comp, compHpDisplay);
            bottomTextDisplay.textContent = "";
            player2Display.classList.add("defended");
            setTimeout(() => {
              player2Display.classList.remove("defended");
            }, 1000);
          }
          if (randomAttack === 5) {
            comp.mediumDefence(comp, compHpDisplay);
            bottomTextDisplay.textContent = "";
            player2Display.classList.add("defended");
            setTimeout(() => {
              player2Display.classList.remove("defended");
            }, 1000);
          }
          if (randomAttack === 6) {
            comp.heavyDefence(comp, compHpDisplay);
            bottomTextDisplay.textContent = "";
            player2Display.classList.add("defended");
            setTimeout(() => {
              player2Display.classList.remove("defended");
            }, 1000);
          }
        }
      }, 2000);
    });
  };

  const defendEvent = player => {
    const defendBtn = document.querySelector(".player-defend-btn");
    defendBtn.addEventListener("click", () => {
      if (player.hp !== 0) {
        const randomDefence = Math.floor(Math.random() * 3) + 1;
        if (randomDefence === 1) {
          player.lightDefence(player, hpDisplay);
          bottomTextDisplay.textContent = "";
          player1Display.classList.add("defended");
          setTimeout(() => {
            player1Display.classList.remove("defended");
          }, 1000);
        }
        if (randomDefence === 2) {
          player.mediumDefence(player, hpDisplay);
          bottomTextDisplay.textContent = "";
          player1Display.classList.add("defended");
          setTimeout(() => {
            player1Display.classList.remove("defended");
          }, 1000);
        }
        if (randomDefence === 3) {
          player.heavyDefence(player, hpDisplay);
          bottomTextDisplay.textContent = "";
          player1Display.classList.add("defended");
          setTimeout(() => {
            player1Display.classList.remove("defended");
          }, 1000);
        }
      }

      setTimeout(() => {
        if (player.hp < 1) {
          player.hp = 0;
          bottomTextDisplay.textContent = `${player.destroy()}`;
          hpDisplay.textContent = `${player.hp}`;
          player1Display.classList = "destroyed";
          player1Display.style.backgroundImage = "";
          player1Display.textContent = "Game Over";

          const restart = document.createElement("button");
          restart.textContent = "Play again?";
          restart.style.borderRadius = "10px";
          restart.style.fontSize = "2.5rem";
          player1Display.appendChild(restart);

          restart.addEventListener("click", () => {
            player1Display.textContent = `We still haven't finished this part yet. Please simply refresh your page...Sorry`;
            player1Display.classList = "restart";
          });
        } else {
          if (player.hp < 10) {
            hpDisplay.textContent = `${player.hp}`;
            hpDisplay.style.color = "red";
          }
          const randomAttack = Math.floor(Math.random() * 6) + 1;
          if (randomAttack === 1) {
            comp.lightAttack(comp, player, hpDisplay);
            player1Display.classList.add("attacked");
            setTimeout(() => {
              player2Display.classList.remove("attacked");
            }, 1000);
          }
          if (randomAttack === 2) {
            comp.mediumAttack(comp, player, hpDisplay);
            player1Display.classList.add("attacked");
            setTimeout(() => {
              player2Display.classList.remove("attacked");
            }, 1000);
          }
          if (randomAttack === 3) {
            comp.heavyAttack(comp, player, hpDisplay);

            player1Display.classList.add("attacked");
            setTimeout(() => {
              player2Display.classList.remove("attacked");
            }, 1000);
          }
          if (randomAttack === 4) {
            comp.lightDefence(comp, compHpDisplay);
            bottomTextDisplay.textContent = "";
            player2Display.classList.add("defended");
            setTimeout(() => {
              player2Display.classList.remove("defended");
            }, 1000);
          }
          if (randomAttack === 5) {
            comp.mediumDefence(comp, compHpDisplay);
            bottomTextDisplay.textContent = "";
            player2Display.classList.add("defended");
            setTimeout(() => {
              player2Display.classList.remove("defended");
            }, 1000);
          }
          if (randomAttack === 6) {
            comp.heavyDefence(comp, compHpDisplay);
            bottomTextDisplay.textContent = "";
            player2Display.classList.add("defended");
            setTimeout(() => {
              player2Display.classList.remove("defended");
            }, 1000);
          }
        }
      }, 2000);
    });
  };

  //=============== Archer attacks / defend =================
  const playerFight = (player, comp) => {
    if (player === playArcher) {
      player = archer;
      if (
        comp === compArcher ||
        comp === compBoromir ||
        comp === compGoblin ||
        comp === compMage ||
        comp === compSwordsman
      ) {
        comp === compArcher
          ? (comp = archer)
          : comp === compBoromir
          ? (comp = warrior)
          : comp === compGoblin
          ? (comp = goblin)
          : comp === compMage
          ? (comp = mage)
          : comp === compSwordsman
          ? (comp = swordsman)
          : console.log("none");

        attackEvent(player, comp);
        defendEvent(player);
      }
    }
    // ======================= Boromir attacks / defend ==================
    if (player === playBoromir) {
      if (
        comp === compArcher ||
        comp === compBoromir ||
        comp === compGoblin ||
        comp === compMage ||
        comp === compSwordsman
      ) {
        player = warrior;
        comp === compArcher
          ? (comp = archer)
          : comp === compBoromir
          ? (comp = warrior)
          : comp === compGoblin
          ? (comp = goblin)
          : comp === compMage
          ? (comp = mage)
          : comp === compSwordsman
          ? (comp = swordsman)
          : console.log("none");

        attackEvent(player, comp);
        defendEvent(player);
      }
    }
  };
  //======================= Goblin attacks / defend ======================
  if (player === playGoblin) {
    if (
      comp === compArcher ||
      comp === compBoromir ||
      comp === compGoblin ||
      comp === compMage ||
      comp === compSwordsman
    ) {
      player = goblin;
      comp === compArcher
        ? (comp = archer)
        : comp === compBoromir
        ? (comp = warrior)
        : comp === compGoblin
        ? (comp = goblin)
        : comp === compMage
        ? (comp = mage)
        : comp === compSwordsman
        ? (comp = swordsman)
        : console.log("none");

      attackEvent(player, comp);
      defendEvent(player);
    }
  }

  //====================== Mage attacks / defend ============================
  if (player === playMage) {
    if (
      comp === compArcher ||
      comp === compBoromir ||
      comp === compGoblin ||
      comp === compMage ||
      comp === compSwordsman
    ) {
      player = mage;
      comp === compArcher
        ? (comp = archer)
        : comp === compBoromir
        ? (comp = warrior)
        : comp === compGoblin
        ? (comp = goblin)
        : comp === compMage
        ? (comp = mage)
        : comp === compSwordsman
        ? (comp = swordsman)
        : console.log("none");

      attackEvent(player, comp);
      defendEvent(player);
    }
  }

  //===================== Swordsman attacks / defend =========================
  if (player === playSwordsman) {
    if (
      comp === compArcher ||
      comp === compBoromir ||
      comp === compGoblin ||
      comp === compMage ||
      comp === compSwordsman
    ) {
      player = swordsman;
      comp === compArcher
        ? (comp = archer)
        : comp === compBoromir
        ? (comp = warrior)
        : comp === compGoblin
        ? (comp = goblin)
        : comp === compMage
        ? (comp = mage)
        : comp === compSwordsman
        ? (comp = swordsman)
        : console.log("none");

      attackEvent(player, comp);
      defendEvent(player);
    }
  }
  playerFight(player, comp);
};
