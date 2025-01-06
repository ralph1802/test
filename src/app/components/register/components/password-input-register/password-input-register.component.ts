import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-input-register',
  standalone: true,
  templateUrl: './password-input-register.component.html',
  styleUrls: ['./password-input-register.component.css'],
})
export class PasswordInputRegisterComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}
