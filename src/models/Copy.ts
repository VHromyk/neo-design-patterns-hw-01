import { Book } from "./Book";

export class Copy {
  private _book: Book;
  private _isAvailable: boolean;

  constructor(book: Book) {
    this._book = book;
    this._isAvailable = true;
  }

  isCopyAvailable(): boolean {
    return this._isAvailable;
  }

  get book(): Book {
    return this._book;
  }

  get checkout(): boolean {
    return this._isAvailable;
  }

  set checkout(value: boolean) {
    this._isAvailable = value;
  }
}
