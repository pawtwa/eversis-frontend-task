import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from './../../../../src/app/shared/services/user.service';
import { UserInterface } from './../../../../src/app/shared/models/user.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  user$: Observable<UserInterface>;

  hasAccess = -1;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

  checkAccess() {
    this.hasAccess = this.userService.user.age >= 18 ? 1 : 0;
  }
}
