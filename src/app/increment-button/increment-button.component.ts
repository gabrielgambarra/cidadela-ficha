import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-increment-button',
  templateUrl: './increment-button.component.html',
  styleUrls: ['./increment-button.component.scss'],
})
export class IncrementButtonComponent {
  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();
  @Input() initialValue!: number | undefined;
  @Output() initialValueChange = new EventEmitter<number>();
  @Input('label') label: string;
  @Input('name') name: string;
  @Input('initialValueName') initialValueName: string;

  initialValueIsSet = false;

  dec() {
    this.changeValue(this.value - 1);
  }

  inc() {
    this.changeValue(this.value + 1);
  }

  changeValue(value: number) {
    this.value = value;
    this.valueChange.emit(this.value);
  }

  onChange(event: Event, inputType?: string): void {
    const eventValue = (event.target as HTMLInputElement).value;

    eventValue.replace(/^[0-9]*$/g, '');

    if (parseInt(eventValue)) {
      if (inputType === 'initial') {
        this.initialValueChange.emit(parseInt(eventValue));
      }
      this.valueChange.emit(parseInt(eventValue));
    } else {
      this.valueChange.emit(0);
      this.initialValueChange.emit(0);
    }
  }

  isNumberKey(evt: any) {
    let charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }

    return true;
  }
}
