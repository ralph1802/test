import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-input-register',
  standalone: true,
  templateUrl: './name-input-register.component.html',
  styleUrls: ['./name-input-register.component.css'],
})
export class NameInputRegisterComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}
