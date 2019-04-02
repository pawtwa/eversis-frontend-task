import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent as UserViewComponent,  } from './view/view.component';
import { EditComponent as UserEditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'edit',
    component: UserEditComponent
  },
  {
    path: 'view',
    component: UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
