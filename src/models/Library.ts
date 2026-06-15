import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";

export class Library {
  books: AbstractBook[];
  authors: Author[];
  copies: Copy[];
  readers: Reader[];

  constructor() {
    this.books = [];
    this.authors = [];
    this.copies = [];
    this.readers = [];
  }

  addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  addAuthor(author: Author): void {
    this.authors.push(author);
  }

  addCopy(copy: Copy): void {
    this.copies.push(copy);
  }

  addReader(reader: Reader): void {
    this.readers.push(reader);
  }

  getAvailableCopies(): Copy[] {
    return this.copies.filter((copy) => copy.isCopyAvailable());
  }

  searchBookByAuthor(authorName: string): AbstractBook[] {
    return this.books.filter((book) => book.author.name === authorName);
  }
}
