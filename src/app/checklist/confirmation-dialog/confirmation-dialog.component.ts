import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'ac-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class ConfirmationDialogComponent implements OnInit {
  @HostBinding('style.maxWidth')
  width = '350px';

  confirmationButtonColor = 'warn';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    const { width, confirmationButtonColor } = this.data;

    if (width) {
      this.width = width;
    }

    if (this.data.confirmationButtonColor) {
      this.confirmationButtonColor = confirmationButtonColor;
    }
  }
}
