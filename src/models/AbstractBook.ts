import { Author } from "./Author";

export abstract class AbstractBook {
  abstract title: string;
  abstract year: number;
  abstract author: Author;

  abstract getDescription(): string;
}
