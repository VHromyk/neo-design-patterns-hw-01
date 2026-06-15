import { Copy } from "./Copy";

export class Reader {
  id: string;
  name: string;
  copies: Copy[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.copies = [];
  }
}
