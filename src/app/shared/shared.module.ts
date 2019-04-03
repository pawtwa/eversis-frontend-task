import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
// import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
  ],
  imports: [
    // CommonModule
    NgbCollapseModule
  ],
  exports: [
    NgbCollapseModule
  ],
  providers: [
    UserService
  ]
})
export class SharedModule { }
