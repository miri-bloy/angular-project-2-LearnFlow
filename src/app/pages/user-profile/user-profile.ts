import { Component, computed, inject, Input, input } from '@angular/core';
import { UsersService } from '../../services/usersService';
import { RouterLink } from "@angular/router";
import { ProgressService } from '../../services/progressService';

@Component({
  selector: 'app-user-profile',
  imports: [RouterLink],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {

  private usersService = inject(UsersService);
  private progressService = inject(ProgressService);

  id = input.required<string>();

  currentUser = computed(() => this.usersService.getUserById(this.id()));
  status = computed(() => this.progressService.getStatus(this.id())());
}
