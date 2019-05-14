import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from './nav-bar.component';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>Add blog post</h1>
  <div mat-dialog-content>
    <form #form="ngForm">
      <mat-form-field>
        <input type="text" id="author" name="author" pattern=".{3,}"
               #commentElement="ngModel" [(ngModel)]="data.author" matInput required
               placeholder="author"/>
        <mat-hint [hidden]="commentElement.valid || commentElement.pristine">
          Author must be at least 3 characters long.
        </mat-hint>
      </mat-form-field>
      <br/>
      <mat-form-field>
        <input type="text" id="title" name="title" pattern=".{3,}"
               #commentElement="ngModel" [(ngModel)]="data.title" matInput required
               placeholder="title"/>
        <mat-hint [hidden]="commentElement.valid || commentElement.pristine">
          Title must be at least 3 characters long.
        </mat-hint>
      </mat-form-field>
      <br/>
      <mat-form-field>
        <textarea type="text" id="blog" name="blog" pattern=".{3,}"
                  #commentElement="ngModel" [(ngModel)]="data.post" matInput required></textarea>
        <mat-hint [hidden]="commentElement.valid || commentElement.pristine">
          Blog text must be at least 3 characters long.
        </mat-hint>
      </mat-form-field>
      <br/>
      <mat-form-field>
        <input type="text" id="url" name="url" pattern="https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"
               #commentElement="ngModel" [(ngModel)]="data.url" matInput placeholder="url to picture"/>
      </mat-form-field>
      <mat-hint [hidden]="commentElement.valid || commentElement.pristine">
        Please give valid url, starting with http or https.
      </mat-hint>
      <br/>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button [disabled]="!form.form.valid" [mat-dialog-close]="data" mat-raised-button>Send</button>
      <br/>
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
