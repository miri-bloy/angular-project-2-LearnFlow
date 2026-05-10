import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/usersService';
import { User } from '../../components/user/user';

@Component({
  selector: 'app-users',
  imports: [User],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  private usersService = inject(UsersService);

  allUsers= this.usersService.getAllUsers();
  
}
