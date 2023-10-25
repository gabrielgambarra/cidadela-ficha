import { Component } from '@angular/core';
import { AdventureStats } from 'src/providers/class/AdventureStats';
import { all_possible_spells } from 'src/providers/spells';

@Component({
  selector: 'app-adventure-stats',
  templateUrl: './adventure-stats.component.html',
  styleUrls: ['./adventure-stats.component.scss'],
})
export class AdventureStatsComponent {
  adventureStats = new AdventureStats();

  removeMonster(id: number) {
    this.adventureStats.monstersEncounters = this.adventureStats.monstersEncounters.filter(
      (monster) => monster.id !== id
    );
  }

  teste() {
    console.log(this.adventureStats);
  }
}
