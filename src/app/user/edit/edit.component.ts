import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  userForm: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit() {

  }

  async onSubmit() {
    console.log(this.userForm);
  }

  private initForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
      surname: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
      age: new FormControl('', Validators.pattern('[1-9][0-9]*')),
    });
  }
}
