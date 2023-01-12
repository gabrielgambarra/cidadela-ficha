import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Spell } from 'src/providers/interfaces/Spell';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss'],
})
export class SpellsListComponent implements OnInit {
  @Input() value!: Spell[];
  @Output() valueChange = new EventEmitter<Spell[]>();
  @Input('label') label: string;
  @Input('name') name: string;
  @Input('spells') spells: Spell[];
  @ViewChild('spellSelect') spellSelect!: ElementRef;

  addedSpell: Spell[] = [];
  spellsToSelect: Spell[] = [];

  ngOnInit() {
    this.spellsToSelect = this.spells;
  }

  addSpell(): void {
    const spellSelect = this.spellSelect.nativeElement.value;
    console.log('spellSelect', spellSelect);
    if (spellSelect !== 'null') {
      const spellToBeAdded = this.spells.filter(
        (spell) => spell.name === spellSelect
      )[0];
      this.spellSelect.nativeElement.value = 'null';
      this.spellsToSelect = this.spellsToSelect.filter(
        (spell) => spell.name !== spellSelect
      );

      this.addedSpell.push(spellToBeAdded);
      this.valueChange.emit(this.addedSpell);
    }
  }

  removeSpell(spell: Spell) {
    this.addedSpell = this.addedSpell.filter((s) => s !== spell);
    this.spellsToSelect = this.spells.filter((spell) => {
      if (!this.addedSpell.some((item) => item.name === spell.name)) {
        return spell;
      }
      return;
    });
    this.valueChange.emit(this.addedSpell);
  }
}
