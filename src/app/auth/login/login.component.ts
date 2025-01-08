import { Component } from '@angular/core';
import { LoginButtonComponent } from '../../shared/login-button/login-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginButtonComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  accessOptions = [
    {
      type: 'facebook',
      label: 'Acceder con Facebook',
      icon: '../facebook.svg',
      action: this.loginWithFacebook
    },
    {
      type: 'twitter',
      label: 'Acceder con Twitter',
      icon: '../twitter.svg',
      action: this.loginWithTwitter
    },
    {
      type: 'email',
      label: 'Acceder con Correo',
      icon: '../email.svg',
      action: this.loginWithEmail
    }
  ];

  loginWithFacebook() {
    console.log('Iniciando sesión con Facebook');
  }

  loginWithTwitter() {
    console.log('Iniciando sesión con Twitter');
  }

  loginWithEmail() {
    console.log('Iniciando sesión con Email');
  }
}
