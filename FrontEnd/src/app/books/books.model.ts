export class books{
    public ISBN: String;
    public title: String;
    public author: String;
    public publisher: String;
    public numberOfPages: String;
    public date: String;

constructor(ISBN: String,
     title: String,
     author: String,
     publisher: String,
     numberOfPages: String,
     date: String,){
         this.ISBN=ISBN;
         this.title=title;
         this.author=author;
         this.publisher=publisher;
         this.numberOfPages=numberOfPages;
         this.date=date;



}
}