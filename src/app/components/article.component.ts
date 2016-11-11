import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'article',
  inputs: ['article'],
  templateUrl: './article.html',
  styleUrls: ['../app.component.css', '../../styles/semantic.min.css']
})

export class ArticleComponent {
	article: Article;

	voteUp(): boolean {
		this.article.voteUp();
		return false;
	}

	voteDown(): boolean {
		this.article.voteDown();
		return false;
	}
}