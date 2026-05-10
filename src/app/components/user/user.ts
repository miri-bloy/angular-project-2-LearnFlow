import { Component, input } from '@angular/core';
import { userObj } from './user.model';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  currentUser = input.required<userObj>();

}
