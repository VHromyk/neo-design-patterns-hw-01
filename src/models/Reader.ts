import { Copy } from "./Copy";

export class Reader {
  private _id: string;
  private _name: string;
  private _copies: Copy[];

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this._copies = [];
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get copies(): Copy[] {
    return this._copies;
  }

  set copies(value: Copy[]) {
    this._copies = value;
  }
}
