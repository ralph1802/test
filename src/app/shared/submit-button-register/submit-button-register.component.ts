import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '../../core/services/translate.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-submit-button-register',
  standalone: true,
  templateUrl: './submit-button-register.component.html',
  styleUrls: ['./submit-button-register.component.scss'],
  imports: [TranslatePipe]
})
export class SubmitButtonRegisterComponent {
  @Output() submitForm = new EventEmitter<void>();

  constructor(public translateService: TranslateService) {}

  onSubmit() {
    this.submitForm.emit();
  }
}
