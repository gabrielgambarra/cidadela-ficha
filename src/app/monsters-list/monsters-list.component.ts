import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonsterEncounter } from 'src/providers/class/MonsterEncounter';

@Component({
  selector: 'app-monsters-list',
  templateUrl: './monsters-list.component.html',
  styleUrls: ['./monsters-list.component.scss']
})
export class MonstersListComponent {
  @Input() monster!: MonsterEncounter;
  @Output() removeMonster = new EventEmitter<number>();

  remove() {
    this.removeMonster.emit(this.monster.id);
  }
}
