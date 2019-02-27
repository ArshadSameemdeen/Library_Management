import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { Router } from '@angular/router'
import { UserService} from '../user.service'
// import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router , private user: UserService) { }

  ngOnInit() {
    console.log('hit')
  }
  loginUser(e){
    e.preventDefault()
    // const target = event.target
    var username = e.target.elements[0].value
    var password = e.target.elements[1].value
   
    if(username == 'admin' && password=='admin'){
      this.user.setUserLoggedIn();
      this.router.navigate(['home']);

    }

    console.log(username, password)
  }

}
