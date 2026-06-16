import { Author } from "./Author";

export abstract class AbstractBook {
  abstract get title(): string;
  abstract get year(): number;
  abstract get author(): Author;

  abstract getDescription(): string;
}
