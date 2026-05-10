import { Injectable, signal } from "@angular/core";
import { articleObj } from "../components/article/article.model";
import { ARTICLES } from "../DB/articles.data";

@Injectable({providedIn: 'root'})
export class ArticlesService {
    
    articles = signal<articleObj[]>(ARTICLES);

    getAllArticles(): articleObj[] {
        return this.articles();
    };

    getArticleById(id: string): articleObj | null {
        return this.articles().find(a => a.id === id) || null;
    }

    getArticlesByUserId(id: string): articleObj[] {
        return this.articles().filter((a) => a.userId === id);
    };

    updateStatusOfArticle(id: string) {
        this.articles.update(prevArticles => 
            prevArticles.map(article => 
                article.id === id 
                    ? { ...article, status: article.status === 'unread' ? 'read' : 'unread' } 
                    : article
            )
        );
    };
}