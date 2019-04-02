import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    // CommonModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ],
  providers: [
    UserService
  ]
})
export class SharedModule { }
