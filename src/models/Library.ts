import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";

export class Library {
  private _books: AbstractBook[];
  private _authors: Author[];
  private _copies: Copy[];
  private _readers: Reader[];

  constructor() {
    this._books = [];
    this._authors = [];
    this._copies = [];
    this._readers = [];
  }

  addBook(book: AbstractBook): void {
    this._books.push(book);
  }

  addAuthor(author: Author): void {
    this._authors.push(author);
  }

  addCopy(copy: Copy): void {
    this._copies.push(copy);
  }

  addReader(reader: Reader): void {
    this._readers.push(reader);
  }

  getAvailableCopies(): Copy[] {
    return this._copies.filter((copy) => copy.isCopyAvailable());
  }

  searchBookByAuthor(authorName: string): AbstractBook[] {
    return this._books.filter((book) => book.author.name === authorName);
  }

  get books(): AbstractBook[] {
    return this._books;
  }

  get authors(): Author[] {
    return this._authors;
  }

  get readers(): Reader[] {
    return this._readers;
  }

  get copies(): Copy[] {
    return this._copies;
  }
}
