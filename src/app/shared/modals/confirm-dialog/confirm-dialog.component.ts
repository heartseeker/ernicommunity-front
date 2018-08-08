import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit , Inject, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  yes = new EventEmitter();
  no = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  confirm() {
    this.dialogRef.close();
    this.yes.emit();
  }

  cancel() {
    this.dialogRef.close();
  }

}
