import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NameInputRegisterComponent } from './components/name-input-register/name-input-register.component';
import { EmailInputRegisterComponent } from './components/email-input-register/email-input-register.component';
import { PasswordInputRegisterComponent } from './components/password-input-register/password-input-register.component';
import { ConfirmPasswordInputRegisterComponent } from './components/confirm-password-input-register/confirm-password-input-register.component';
import { SubmitButtonRegisterComponent } from './components/submit-button-register/submit-button-register.component';
import { UserService } from '../../core/user-service.service'; // Usando el nombre correcto del servicio

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NameInputRegisterComponent,
    EmailInputRegisterComponent,
    PasswordInputRegisterComponent,
    ConfirmPasswordInputRegisterComponent,
    SubmitButtonRegisterComponent,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.userService.addUser(this.name, this.email);

    this.router.navigate(['/home']);
  }
}
