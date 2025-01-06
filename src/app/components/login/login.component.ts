import { Component } from '@angular/core';
import { AccesFacebookComponent } from "./components/acces-facebook/acces-facebook.component";
import { AccesTwitterComponent } from "./components/acces-twitter/acces-twitter.component";
import { EmailInputRegisterComponent } from "../register/components/email-input-register/email-input-register.component";
import { AccesEmailComponent } from "./components/acces-email/acces-email.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AccesFacebookComponent,
    AccesTwitterComponent,
    AccesEmailComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
