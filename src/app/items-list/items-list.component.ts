import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  @Input() value!: string[];
  @Output() valueChange = new EventEmitter<string[]>();
  @Input('label') label: string;
  @Input('name') name: string;
  @ViewChild('itemInput') itemInput!: ElementRef;

  items: string[] = [];

  addItem(): void {
    this.items.push(this.itemInput.nativeElement.value);
    this.itemInput.nativeElement.value = '';
    this.valueChange.emit(this.items);
  }

  removeItem(item: string) {
    this.items = this.items.filter((i) => i !== item);
    this.valueChange.emit(this.items);
  }
}
