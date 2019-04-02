import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ViewComponent as UserViewComponent,  } from './view/view.component';
import { EditComponent as UserEditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    UserViewComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
