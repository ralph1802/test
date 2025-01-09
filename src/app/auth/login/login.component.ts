import { Component } from '@angular/core';
import { LoginButtonComponent } from '../../shared/login-button/login-button.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service'; // Importamos el servicio
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginButtonComponent, CommonModule, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public translateService: TranslateService;
  accessOptions = [
    {
      type: 'facebook',
      label: 'login.facebook',
      icon: '../facebook.svg',
      action: this.loginWithFacebook
    },
    {
      type: 'twitter',
      label: 'login.twitter',
      icon: '../twitter.svg',
      action: this.loginWithTwitter
    },
    {
      type: 'email',
      label: 'login.email',
      icon: '../email.svg',
      action: this.loginWithEmail
    }
  ];

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

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
