class Book {
    constructor(nazevKnihy, autor, rokVydani){
        this.nazevKnihy = nazevKnihy;
        this.author = autor;
        this.year = rokVydani;
    }
}

const book1 = new Book('hp1', "jk row", 1957);
const book2 = new Book();
const book3 = new Book();   