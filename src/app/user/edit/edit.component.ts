import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  userForm: FormGroup;

  private onlyLettersPattern = '[a-zA-Z żźśóńłęćąŻŹŚÓŃŁĘĆĄ]*';
  private onlyDigitsPattern = '[1-9][0-9]*';

  constructor() {
    this.initForm();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  async onSubmit() {
    console.log(this.userForm);
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
}
