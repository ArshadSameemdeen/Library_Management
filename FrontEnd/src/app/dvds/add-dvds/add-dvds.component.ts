import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  imports:[
    FormsModule
  ]
})

@Component({
  selector: 'app-add-dvds',
  templateUrl: './add-dvds.component.html',
  styleUrls: ['./add-dvds.component.css']
})
export class AddDvdsComponent implements OnInit {

  dvds = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  uploadFile(event){
  }

  model:any={};
  setdvds(form: NgForm){

    // console.log("hello");
    
      // console.log(form.value.isbm1);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };

      

    let dvd = {title: form.value.title1, language: form.value.language1, 
      subtitles: form.value.subtitles1, producer: form.value.producer1, actor: form.value.actor1};
    
    this.dvds.push(dvd);

    this.httpClient.post('http://localhost:9000/dvd', dvd, { headers: headers }).subscribe((data: any)=>{
      console.log(data);
  })
   
  }

}
