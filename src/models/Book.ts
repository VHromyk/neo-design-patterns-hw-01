import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";

export class Book extends AbstractBook {
  private _title: string;
  private _year: number;
  private _author: Author;

  constructor(title: string, year: number, author: Author) {
    super();
    this._title = title;
    this._year = year;
    this._author = author;
  }

  get title(): string {
    return this._title;
  }

  get year(): number {
    return this._year;
  }

  get author(): Author {
    return this._author;
  }

  getDescription(): string {
    return `Паперовий екземпляр книги ${this._title} (${this._year})`;
  }
}
