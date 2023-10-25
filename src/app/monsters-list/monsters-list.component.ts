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

  dec() {
    if (this.monster.energy > 0) {
      this.monster.energy--;
    }
  }

  inc() {
    this.monster.energy++;
  }

  onChange(event: any) {
    this.monster.energy = event.target.value;
  }

  isNumberKey(evt: any) {
    let charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }

    return true;
  }

  remove() {
    this.removeMonster.emit(this.monster.id);
  }
}
