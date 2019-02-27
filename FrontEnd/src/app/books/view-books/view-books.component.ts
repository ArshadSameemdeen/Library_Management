import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { books } from '../books.model'




@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {





  booksArray=[]

    // adding books method
    // book = [];
    // addbook(newbook: string) {
    //   if (newbook) {
    //     this.book.push(newbook);
    //   }
    // }


  constructor( private httpClient: HttpClient) { }

  ngOnInit() {
   
    this.getemployee();
    console.log("get works");
    
  }

  getemployee(): void{
    this.httpClient.get('http://localhost:9000/g').toPromise().
    then((res:any) =>{
    res.forEach(obj => {this.booksArray.push(obj)});}).catch(err=>console.log(err));
    console.log("works mf")
  }

  delete(i){
    const index = Object.assign({}, this.booksArray[i]);
    console.log(index.ISBN);
    let isbn = index.ISBN;
    console.log(i);

    this.httpClient.delete(`http://localhost:9000/deleteb/${isbn}`).toPromise().then((res:any) =>{console.log(res)});
    this.booksArray.splice(i,1);
  }

}
