export class MonsterEncounter {
  id: number;
  ability: number;
  energy: number;

  constructor(ability?: number, energy?: number) {
    this.id = Date.now();
    this.ability = ability || 0;
    this.energy = energy || 0;
  }
}
