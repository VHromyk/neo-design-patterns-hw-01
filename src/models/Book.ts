import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";

export class Book extends AbstractBook {
  title: string;
  year: number;
  author: Author;

  constructor(title: string, year: number, author: Author) {
    super();
    this.title = title;
    this.year = year;
    this.author = author;
  }

  getDescription(): string {
    return `Паперовий екземпляр книги ${this.title} (${this.year})`;
  }
}
