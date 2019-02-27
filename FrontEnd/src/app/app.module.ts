import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { ViewBooksComponent } from './books/view-books/view-books.component';
import { RouterModule, Routes} from '@angular/router';
import { DvdsComponent } from './dvds/dvds.component';
import { ViewDvdsComponent } from './dvds/view-dvds/view-dvds.component';
import { AddDvdsComponent } from './dvds/add-dvds/add-dvds.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { DropdownDirective } from './shared/dropdown.directive'



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavigationBarComponent,
    HomeComponent,
    BooksComponent,
    AddBooksComponent,
    ViewBooksComponent,
    DvdsComponent,
    ViewDvdsComponent,
    AddDvdsComponent,
    DropdownDirective,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      {
        path: '',
        component:  LoginPageComponent
      },

      {
        path: 'dvds',
        component: DvdsComponent
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'add-books',
        component: AddBooksComponent
      },
      {
        path: 'view-books',
        component: ViewBooksComponent
      },
      {
        path: 'add-dvds',
        component: AddDvdsComponent
      },
      {
        path: 'view-dvds',
        component: ViewDvdsComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'navbar',
        component: NavigationBarComponent
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
