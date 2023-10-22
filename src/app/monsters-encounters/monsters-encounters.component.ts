import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MonsterEncounter } from 'src/providers/class/MonsterEncounter';

@Component({
  selector: 'app-monsters-encounters',
  templateUrl: './monsters-encounters.component.html',
  styleUrls: ['./monsters-encounters.component.scss']
})
export class MonstersEncountersComponent {
  @Input() value!: MonsterEncounter[];
  @Output() valueChange = new EventEmitter<MonsterEncounter[]>();
  @Input('name') name: string;
  @ViewChild('ability') ability: ElementRef;
  @ViewChild('energy') energy: ElementRef;

  addMonster() {
    if (this.ability.nativeElement.value && this.energy.nativeElement.value) {
      this.value.push(new MonsterEncounter(
        this.ability.nativeElement.value,
        Number(this.energy.nativeElement.value)
      ));
      this.valueChange.emit(this.value);
      this.ability.nativeElement.value = '';
      this.energy.nativeElement.value = '';
    }
  }

  isNumberKey(evt: any) {
    let charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }

    return true;
  }
}
