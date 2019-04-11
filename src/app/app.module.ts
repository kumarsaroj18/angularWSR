import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './loginpage/loginpage.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'homePage',
    pathMatch: 'full'
  },
  {
    path: 'homePage',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HeaderComponent, HomepageComponent, LoginPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
