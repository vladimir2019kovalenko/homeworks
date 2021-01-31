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
   set newState(state) {
       if(this._newState < 0) {
           this.state === 0;
       } else if(this._newState > 100) {
        this.state === 100;
       } else {
        this._newState === state;
       }
   }
   get newState() {
       return this._newState;
   }
}
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