import { UserRegistrationModel } from './../../shared/models/user-registration.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/service/user.service';
import { ConfirmDialogComponent } from '../../shared/modals/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  limit = 50;
  lat: number = 14.588079;
  lng: number = 121.043806;
  locMsg: string;
  form: FormGroup;
  video = true;
  controlLabel = 'On';
  @ViewChild('videoPlayer') videoPlayer: any;

  loading: boolean = false;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialog: MatDialog
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

    // const video = this.videoPlayer.nativeElement;
    // video.muted = 'muted';
  }

  /**
   * submitting form / push submit btn
   * @return void
   */
  submit() {

    this.loading = true;

    const data: UserRegistrationModel = {
      firstName: this.field('first_name').value,
      lastName: this.field('last_name').value,
      company: this.field('company').value,
      position: this.field('position').value,
      contactNo: this.field('contact').value,
      email: this.field('email').value,
    };

    const p = new Promise((resolve, reject) => {
      return this.userService.list().subscribe((users) => {
        if (users.length > this.limit) {
          reject(false);
        } else {
          // continue to register
          resolve(true);
        }
      }, err => {
        this.unexpectedError();
      });
    });

    p.then(() => {
      this.userService.create(data).subscribe(res => {
        this.loading = false;
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          disableClose: false,
          data: {
            title: 'Successfully Registered',
            /* tslint:disable */
            text: `Thank you for registering in our event.`,
            /* tslint:enable */
            confirm: `OK`
          }
        });
      }, (err) => {
        this.unexpectedError();
      });
    })
    .catch(() => {
      this.loading = false;
      this.dialog.open(ConfirmDialogComponent, {
        disableClose: false,
        data: {
          title: 'Sorry already reach the limit',
          /* tslint:disable */
          text: `Please try again next event.`,
          /* tslint:enable */
          confirm: `OK`
        }
      });
    });
  }

  unexpectedError() {
    this.loading = false;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false,
      data: {
        title: 'Error Occured',
        /* tslint:disable */
        text: `Unexpected error occured.`,
        /* tslint:enable */
        confirm: `OK`
      }
    });
  }

  /**
   * selecting field property in form
   * @param name fieldName in form
   */
  field(name) {
    return this.form.controls[name];
  }

  slide() {
    this.video = !this.video;
    this.controlLabel = this.video ? 'On' : 'Off';
  }

}
