import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from './nav-bar.component';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>Login</h1>
  <div mat-dialog-content>
    <form #form="ngForm">
    <mat-form-field>
        <input type="text" id="username" name="username" pattern=".{3,}"
                  #commentElement="ngModel" [(ngModel)]="data.username" matInput required
                  placeholder="username" />
      <mat-hint [hidden]="commentElement.valid || commentElement.pristine">
        Username must be at least 3 characters long.
      </mat-hint>
    </mat-form-field>
    <br/>
    <mat-form-field>
      <input type="password" id="password" name="password" pattern=".{3,}"
             #nameElement="ngModel" [(ngModel)]="data.password" matInput required placeholder="password">
      <mat-hint [hidden]="nameElement.valid || nameElement.pristine">
        Password must be at least 3 characters long.
      </mat-hint>
    </mat-form-field>
      <button mat-button (click)="onNoClick()">Cancel</button>
    <button [disabled]="!form.form.valid" [mat-dialog-close]="data" mat-raised-button>Login</button>
    </form>
  </div>`,
})
export class BlogAddDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BlogAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
