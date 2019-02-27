import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-dvds',
  templateUrl: './view-dvds.component.html',
  styleUrls: ['./view-dvds.component.css']
})
export class ViewDvdsComponent implements OnInit {

  dvdsArray=[]

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getdvd();
    console.log("get works");
  }

  getdvd(): void{
    this.httpClient.get('http://localhost:9000/gdvd').toPromise().
    then((res:any) =>{
    res.forEach(obj => {this.dvdsArray.push(obj)});}).catch(err=>console.log(err));
    console.log("works mf")
  }
  delete(i){
    const index = Object.assign({}, this.dvdsArray[i]);
    console.log(index.title);
    let title = index.title;
    console.log(i);

    this.httpClient.delete(`http://localhost:9000/deleted/${title}`).toPromise().then((res:any) =>{console.log(res)})
    this.dvdsArray.splice(i,1);
  }

}
