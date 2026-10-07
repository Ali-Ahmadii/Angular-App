import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import {DUMMY_USERS} from './dummy-users';

@Component({
  standalone: true,
  imports: [HeaderComponent, User],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-app');
  users = DUMMY_USERS;
  onSelectUser(id:string){
    console.log("user with id of "+ id);
  }
}
