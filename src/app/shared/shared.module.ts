import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
  ],
  imports: [
    // CommonModule
  ],
  exports: [
  ],
  providers: [
    UserService
  ]
})
export class SharedModule { }
