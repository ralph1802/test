import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../../shared/form-input/form-input.component';
import { SubmitButtonRegisterComponent } from '../../shared/submit-button-register/submit-button-register.component';
import { UserService } from '../services/user-service.service';
import { TranslateService } from '../../core/services/translate.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormInputComponent,
    SubmitButtonRegisterComponent,
    ReactiveFormsModule,
    TranslatePipe,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public translateService: TranslateService;
  registerForm: FormGroup;

  constructor(private UserService: UserService, private router: Router, translateService: TranslateService) {
    this.translateService = translateService;

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.registerForm.get('email');
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.UserService.addUser(this.registerForm.value.name, this.registerForm.value.email);
    this.router.navigate(['/dashboard']);
  }
}
