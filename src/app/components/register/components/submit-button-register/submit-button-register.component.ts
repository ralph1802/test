import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-button-register',
  standalone: true,
  templateUrl: './submit-button-register.component.html',
  styleUrls: ['./submit-button-register.component.css'],
})
export class SubmitButtonRegisterComponent {
  @Output() submitForm = new EventEmitter<void>();

  onSubmit() {
    this.submitForm.emit();
  }
}
