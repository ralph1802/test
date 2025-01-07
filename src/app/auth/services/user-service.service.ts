import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { name: string; email: string }[] = [];

  addUser(name: string, email: string): void {
    this.users.push({ name, email });
    console.log('Usuarios registrados:', this.users);
  }

  getUsers(): { name: string; email: string }[] {
    return this.users;
  }
}
