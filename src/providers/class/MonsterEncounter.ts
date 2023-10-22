export class MonsterEncounter {
  id: number;
  ability: string;
  energy: number;

  constructor(ability?: string, energy?: number) {
    this.id = Date.now();
    this.ability = ability || '';
    this.energy = energy || 0;
  }
}
