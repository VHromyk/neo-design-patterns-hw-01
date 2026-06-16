import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.checkout) {
      console.log("Ця копія вже позичена");
      return false;
    }

    copy.checkout = false;
    reader.copies.push(copy);
    console.log(`Читач отримав копію книги: ${copy.book.title}`);
    return true;
  }

  returnBook(reader: Reader, copy: Copy): void {
    if (!copy.checkout) {
      reader.copies = reader.copies.filter((c) => c !== copy);
      copy.checkout = true;
      console.log(`Книгу "${copy.book.title}" повернуто до бібліотеки.`);
    } else {
      console.log(`Книга "${copy.book.title}" і так знаходиться у бібліотеці.`);
    }
  }
}
