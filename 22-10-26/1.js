class Book {
    constructor(nazevKnihy, autor, rokVydani){
        this.nazevKnihy = nazevKnihy;
        this.author = autor;
        this.year = rokVydani;
        this.prc = cena
    }

    changePrice(amount) {
        this.price += amount;
    }

    changePricePer(amount){
        this.price *= 1 + amount / 100
    }
}

const book1 = new Book('hp1', "jk row", 1957);
const book2 = new Book('hp1', "jk row", 1957);
const book3 = new Book('hp1', "jk row", 1957); 

book1.changePrice()
book2.changePrice()
book3.changePrice()

console.log(book1.price);
book1.changePrice(50)
book1.changePricePer(20)
console.log(book1.price)