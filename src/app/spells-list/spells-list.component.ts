import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Spell } from 'src/providers/interfaces/Spell';
import { all_possible_spells } from 'src/providers/spells';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss'],
})
export class SpellsListComponent {
  @Input() value!: Spell[] | null;
  @Output() valueChange = new EventEmitter<Spell[]>();
  @Input('label') label: string;
  @Input('name') name: string;
  @Input('magic') magic: number;

  addedSpell: Spell[] = [];
  spellsToSelect = all_possible_spells;
  cantAddSpell = false;

  addSpell() {
    if (this.magic === 0 || this.cantAddSpell) {
      return;
    }

    if (this.addedSpell.length >= this.magic) {
      this.cantAddSpell = true;
      return;
    }

    const spellToAdd: any = {
      ...this.value,
      id: Date.now()
    }

    if (spellToAdd) {
      this.addedSpell.push(spellToAdd);
      this.valueChange.emit(this.addedSpell);
      this.value = null;
    }
  }

  removeSpell(spell: Spell) {
    this.addedSpell = this.addedSpell.filter(
      (addedSpell) => addedSpell.id !== spell.id
    );
    this.valueChange.emit(this.addedSpell);
  }
}
