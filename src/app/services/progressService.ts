import { inject, Injectable, computed } from "@angular/core";
import { ArticlesService } from "./articlesService";

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private articlesService = inject(ArticlesService);

  getStatus(userId: string) {
    return computed(() => {
      const userArticles = this.articlesService.articles()
        .filter(a => a.userId === userId);

      if (userArticles.length === 0) {
        return "No Articles";
      }

      const isAllRead = userArticles.every(a => a.status === "read");

      return isAllRead ? "Eligible" : "In Progress";
    });
  }
}