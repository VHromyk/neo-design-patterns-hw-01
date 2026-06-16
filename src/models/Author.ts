import { Book } from "./Book";

export class Author {
  private _name: string;
  private _books: Book[] = [];

  constructor(name: string) {
    this._name = name;
    this._books = [];
  }

  get name(): string {
    return this._name;
  }

  get books(): Book[] {
    return this._books;
  }
}
