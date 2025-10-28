const Book = function (title,author) {
    this.title = title;
    this.author = author;
}

Book.prototype.DisplayBookInfo = function () {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
}

const Book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const Book2 = new Book("To Kill a Mockingbird", "Harper Lee");

Book1.DisplayBookInfo();
Book2.DisplayBookInfo();
