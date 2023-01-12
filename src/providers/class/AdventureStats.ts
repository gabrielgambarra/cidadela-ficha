import { Spell } from '../interfaces/Spell';
import { MonstarEncounter } from './MonsterEncounter';

export class AdventureStats {
  playerName: string;
  initialSkill: number;
  skill: number;
  initialStamina: number;
  stamina: number;
  initialLuck: number;
  luck: number;
  initialMagic: number;
  magic: number;
  gold: number;
  spellsList: Spell[];
  itemsList: string[];
  monstersEncounters: MonstarEncounter[];

  constructor() {
    this.playerName = '';
    this.initialSkill = 0;
    this.skill = 0;
    this.initialStamina = 0;
    this.stamina = 0;
    this.initialLuck = 0;
    this.luck = 0;
    this.initialMagic = 0;
    this.magic = 0;
    this.gold = 0;
    this.spellsList = [];
    this.itemsList = [];
    this.monstersEncounters = [];
  }
}
