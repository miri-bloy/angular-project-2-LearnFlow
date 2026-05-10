import { Component, computed, inject, Input, input } from '@angular/core';
import { ArticlesService } from '../../services/articlesService';
import { UsersService } from '../../services/usersService';
import { Article } from "../../components/article/article";
import { ProgressService } from '../../services/progressService';

@Component({
  selector: 'app-articles',
  imports: [Article],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {

  
  private articlesService = inject(ArticlesService);
  private usersService = inject(UsersService);
  private progressService = inject(ProgressService);

  id = input.required<string>();

  allArticles = computed(() => this.articlesService.getArticlesByUserId(this.id()));
  user = computed(() => this.usersService.getUserById(this.id()));
  status = computed(() => this.progressService.getStatus(this.id())());
}