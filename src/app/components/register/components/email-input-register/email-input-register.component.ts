import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-input-register',
  standalone: true,
  templateUrl: './email-input-register.component.html',
  styleUrls: ['./email-input-register.component.css'],
})
export class EmailInputRegisterComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}
