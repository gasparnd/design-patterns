import { EnemyCreator } from "./enemy";
import { PlayerCreator } from "./player";

function main() {
  const player = new PlayerCreator().createCharacter(200);
  const enemy = new EnemyCreator().createCharacter(100);
  console.log("Player health: ", player.health);
  console.log("Enemy health: ", enemy.health);
  console.log(player.atack());
  enemy.health = 50;
  console.log("Enemy health: ", enemy.health);
  console.log(enemy.atack());
  player.health = 190;
  console.log("Player health: ", player.health);
  console.log(player.atack());
  enemy.health = 0;
  console.log("Enemy health: ", enemy.health);
}

main();
