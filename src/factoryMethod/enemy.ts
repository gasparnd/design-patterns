import { Character, Creator } from "./characterFactory";

export class Enemy extends Character {
  constructor(health: number) {
    super(health);
  }

  atack(): string {
    return "Our Enemy bad atack ;p";
  }
}

export class EnemyCreator extends Creator {
  factoryMethod(): Character {
    return new Enemy(0);
  }
}
