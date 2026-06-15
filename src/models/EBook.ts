import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  title: string;
  year: number;
  author: Author;
  url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super();
    this.title = title;
    this.year = year;
    this.author = author;
    this.url = url;
  }

  getDescription(): string {
    return `Електроний екземпляр книги ${this.title} (${this.year})`;
  }
}
