class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     this.state = 100;
     this.type = null;
   }
   fix(){
    this.state = this.state * 1.5; 
   }
   set state(newState) {
    if(this._state < 0) {
        newState = 0;
    } else if(this._state > 100) {
        newState = 100;
    } else {
     this._state = newState;
    }
}
get state() {
    return this._state;
}
}
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
        
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";
       
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";
        
    }
}
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

 //Задача 2

 class Library {
     constructor (name, books, state) {
         this.name = name;
         this.books = [];
         this.state = 100;
     }
  addBook(book) {
     if (this.state > 30) {
        return  this.books.push(book);
     } else {
         return this.books.length === 0; 
     }
 }
 findBookBy(type, value) {

 }
 giveBookByName(bookName) {
     bookName = this.books.indexOf(this.book);
     if(this.books.includes(bookName)){
         let removed = this.books.splice(indexOf(bookName), 1);
         return removed;
     } else {
         return null;
     }
 }
}


 const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

//console.log(library.findBookBy("name", "Властелин колец")); //null
//console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3