import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/form-input/form-input.component';
import { SubmitButtonRegisterComponent } from './components/submit-button-register/submit-button-register.component';
import { UserService } from '../../core/user-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormInputComponent,
    SubmitButtonRegisterComponent,
    ReactiveFormsModule, // Asegúrate de incluir ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    // Inicializa el formulario
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

    this.userService.addUser(this.registerForm.value.name, this.registerForm.value.email);
    this.router.navigate(['/home']);
  }
}
