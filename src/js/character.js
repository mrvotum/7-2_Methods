export default class Character {
  constructor(name, health) {
    this.name = name;
    this.level = 1;
    this.health = health;
    this.attack = 30;
    this.defence = 10;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.defence += this.defence * 0.2; // Повышение на 20%
      this.attack += this.attack * 0.2;
      this.health = 100;
    } else {
      throw TypeError('Нельзя повысить уровень умершего');
    }
  }
}
