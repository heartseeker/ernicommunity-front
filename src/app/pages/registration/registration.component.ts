import { UserRegistrationModel } from './../../shared/models/user-registration.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/service/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  lat: number = 14.588079;
  lng: number = 121.043806;
  locMsg: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.locMsg = 'The event will be held at: 9th flr, 500 Shaw Zentrum, Shaw Boulevard Mandaluyong, Metro Manila, 1555';

    this.form = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      position: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

  }

  /**
   * submitting form / push submit btn
   * @return void
   */
  submit() {
    const data: UserRegistrationModel = {
      first_name: this.field('first_name').value,
      last_name: this.field('last_name').value,
      company: this.field('company').value,
      position: this.field('position').value,
      contact: this.field('contact').value,
      email: this.field('email').value,
    };

    this.userService.create(data).subscribe(res => {
      console.log('successfully created!', data);
    });
  }

  /**
   * selecting field property in form
   * @param name fieldName in form
   */
  field(name) {
    return this.form.controls[name];
  }

}
