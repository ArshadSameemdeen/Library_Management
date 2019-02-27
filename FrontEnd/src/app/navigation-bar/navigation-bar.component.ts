import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  toggleMenu=false;

  constructor() { }

  ngOnInit() {
  }

  onToggleMenu(){
    if(this.toggleMenu == true){
      this.toggleMenu = false;
    } else{
      this.toggleMenu=true;
    }
  }

}
