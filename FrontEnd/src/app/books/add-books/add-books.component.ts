import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { books } from '../books.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@NgModule({
  imports:[
    FormsModule
  ]
})


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {





  // adding books method is there
  book = [];

  constructor( private httpClient: HttpClient) {
   }

  ngOnInit() {
  }
  
model:any={};
  setemployees(form: NgForm){

    // console.log("hello");
    
      // console.log(form.value.isbm1);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };

      

    let bok = {isbm: form.value.isbm1, title: form.value.title1, author: form.value.author1, 
      publisher: form.value.publisher1, pages: form.value.pages1, dates: form.value.date1};
    
    this.book.push(bok);

    this.httpClient.post('http://localhost:9000/b', bok, { headers: headers }).subscribe((data: any)=>{
      console.log(data);
  })
   
  }


}
