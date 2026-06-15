import { Book } from "./Book";

export class Copy {
  book: Book;
  isAvailable: boolean;

  constructor(book: Book) {
    this.book = book;
    this.isAvailable = true;
  }

  isCopyAvailable(): boolean {
    return this.isAvailable;
  }
}
