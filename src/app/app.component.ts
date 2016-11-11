import { Component } from '@angular/core';
import { Article } from './components/article';

@Component({
  selector: 'reddit',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles/semantic.min.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
  	this.articles = [
			new Article('Angular 2', 'http://angular.io', 3),
			new Article('Fullstack', 'http://fullstack.io', 2),
			new Article('Angular Homepage', 'http://angular.io', 1),
	];
  }

  addArticle(title, link): boolean {
	this.articles.push(new Article(title.value, link.value, 0));
	title.value = '';
	link.value = '';
	return false;
  }
}
