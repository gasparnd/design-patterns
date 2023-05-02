import { Character, Creator } from "./characterFactory";

export class Player extends Character {
  constructor(health: number) {
    super(health);
  }

  atack(): string {
    return "Our Hero super atack =D";
  }
}

export class PlayerCreator extends Creator {
  factoryMethod(): Character {
    return new Player(0);
  }
}
