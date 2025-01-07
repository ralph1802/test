import { Component } from '@angular/core';
import { AccesFacebookComponent } from '../../shared/acces-facebook/acces-facebook.component';
import { AccesTwitterComponent } from '../../shared/acces-twitter/acces-twitter.component';
import { AccesEmailComponent } from '../../shared/acces-email/acces-email.component';


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
