import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-confirm-password-input-register',
  standalone: true,
  templateUrl: './confirm-password-input-register.component.html',
  styleUrls: ['./confirm-password-input-register.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ConfirmPasswordInputRegisterComponent),
      multi: true,
    },
  ],
})
export class ConfirmPasswordInputRegisterComponent implements ControlValueAccessor {
  value: string = '';
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.value = inputElement.value;
      this.onChange(this.value);
    }
  }
}
