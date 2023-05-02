export abstract class Character {
  private _health: number;

  constructor(health: number) {
    this._health = health;
  }

  abstract atack(): string;

  get health(): number {
    return this._health;
  }

  set health(newhealth: number) {
    this._health = newhealth;
  }
}

export abstract class Creator {
  abstract factoryMethod(): Character;

  createCharacter(health: number): Character {
    const character = this.factoryMethod();
    character.health = health;
    return character;
  }
}
