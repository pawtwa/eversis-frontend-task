import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserService } from './../../../../src/app/shared/services/user.service';
import { UserInterface } from './../../../../src/app/shared/models/user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  user$: Observable<UserInterface>;
  private userSubscription: Subscription;

  /**
   * For redirecting after a fake server request
   */
  private beforeRedirectSubscription: Subscription;

  private onlyLettersPattern = '[a-zA-Z żźśóńłęćąŻŹŚÓŃŁĘĆĄ]*';
  private onlyDigitsPattern = '[1-9][0-9]*';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.user$ = this.userService.getUser();
    this.userSubscription = this.user$.subscribe((user) => {
      this.setFormValues(user);
    });
  }

  ngOnDestroy() {
    this.userSubscription ? this.userSubscription.unsubscribe() : null;
    this.beforeRedirectSubscription ? this.beforeRedirectSubscription.unsubscribe() : null;
  }

  /**
   * Use of a fake server request
   * @param event 
   */
  onSubmit(event) {
    event.preventDefault();
    this.userForm.markAsPending();
    this.userService.setUser(this.userForm.value)
      .pipe(
        tap(() => {
          /**
           * redirect after a fake server request
           */
          this.beforeRedirectSubscription ? this.beforeRedirectSubscription.unsubscribe() : null;
          this.beforeRedirectSubscription = this.user$.subscribe(() => {
            this.router.navigate(['/user/view']);
          });
        })
      )
      .subscribe();
  }

  private initForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyLettersPattern)
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyLettersPattern)]),
      age: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyDigitsPattern)
      ]),
    });
  }

  private setFormValues(user: UserInterface) {
    this.userForm.setValue(user);
  }
}
