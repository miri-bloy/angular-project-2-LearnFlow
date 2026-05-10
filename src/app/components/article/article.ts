import { Component, inject, input } from '@angular/core';
import { articleObj } from './article.model';
import { ProgressService } from '../../services/progressService';
import { ArticlesService } from '../../services/articlesService';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {

  private articlesService= inject(ArticlesService)
  currentArticle=input.required<articleObj>();

  onUpdateStatus(id: string){
    this.articlesService.updateStatusOfArticle(id);
  }

}
