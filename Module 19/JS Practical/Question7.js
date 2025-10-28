// Book class
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true; 
    }

    // Method to display book details
    getInfo() {
        return `${this.title} by ${this.author} - ${this.isAvailable ? "Available" : "Checked Out"}`;
    }
}

// Library class
class Library {
    constructor(name) {
        this.name = name;
        this.books = []; 
    }

    
    addBook(book) {
        this.books.push(book);
        console.log(`Book added: "${book.title}" by ${book.author}`);
    }

    
    checkOutBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            if (book.isAvailable) {
                book.isAvailable = false;
                console.log(`"${book.title}" has been checked out.`);
            } else {
                console.log(`Sorry, "${book.title}" is already checked out.`);
            }
        } else {
            console.log(`Book titled "${title}" not found in the library.`);
        }
    }


    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            if (!book.isAvailable) {
                book.isAvailable = true;
                console.log(`"${book.title}" has been returned. Thank you!`);
            } else {
                console.log(`"${book.title}" was not checked out.`);
            }
        } else {
            console.log(`Book titled "${title}" not found in the library.`);
        }
    }

    // Show all books in the library
    displayBooks() {
        console.log(`\nBooks in ${this.name}:`);
        this.books.forEach(book => {
            console.log(" - " + book.getInfo());
        });
    }
}

// Example usage
const myLibrary = new Library("City Library");

const book1 = new Book("The Alchemist", "Paulo Coelho");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("1984", "George Orwell");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.displayBooks();

myLibrary.checkOutBook("1984");
myLibrary.displayBooks();

myLibrary.returnBook("1984");
myLibrary.displayBooks();
