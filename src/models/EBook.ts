import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  private _title: string;
  private _year: number;
  private _author: Author;
  private _url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super();
    this._title = title;
    this._year = year;
    this._author = author;
    this._url = url;
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
    return `Електроний екземпляр книги ${this._title} (${this._year})`;
  }
}
