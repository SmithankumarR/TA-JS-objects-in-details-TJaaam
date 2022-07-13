## An object-oriented book-list!

- [ ] Create a class BookList

```js
class Book {
  constructor(title, category, author) {
    (this.title = title),
      (this.category = category),
      (this.author = author),
      (this.isRead = false),
      (this.finishedDate = null);
  }
  markBookAsRead() {
    (this.isRead = true);
     this.finishedDate = Date.now();
  }
}
 // - [ ] Create another class called Book
class BookList {
  constructor() {
    this.books = [];
    this.currentIndexBook = 0;
  }
  add(books = []) {
    return (this.books = this.books.push(books));
  }
  getCurrentBook() {
    return this.books[this.currentIndexBook];
  }
  getNextBook() {
    this.currentIndexBook = this.currentIndexBook + 1;
    return this.book[this.currentIndexBook];
  }
  getPrevBook() {
    this.currentIndexBook = this.currentIndexBook - 1;
    return this.book[this.currentIndexBook];
  }
  changeCurrentBook(index) {
    this.currentIndexBook = index;

    return this.currentIndexBook;
  }
}
let book1 = new Book("Rich dad and poor Dad","business", "Robert kiyosaki");
let book2  = new Book("harry potter and Philosopher stone","fiction","J,.k Rowling")
let book3 = new Book ("think like a monk" ,"life", "michecl mandy");
let book4  = new Book("the lord of rings" " Fiction" "F.scott")
let book5 = new Book ("power of sub consious mind"," science" , "dr murphy");

let library = new BookList();
library.add([book1,book2,book3,book4,book5]);

```

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
