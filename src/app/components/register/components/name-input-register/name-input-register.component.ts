import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-input-register',
  standalone: true,
  templateUrl: './name-input-register.component.html',
  styleUrls: ['./name-input-register.component.css'],
})
export class NameInputRegisterComponent {
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
