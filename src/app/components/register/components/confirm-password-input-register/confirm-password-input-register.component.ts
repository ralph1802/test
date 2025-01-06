import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-password-input-register',
  standalone: true,
  templateUrl: './confirm-password-input-register.component.html',
  styleUrls: ['./confirm-password-input-register.component.css'],
})
export class ConfirmPasswordInputRegisterComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}
