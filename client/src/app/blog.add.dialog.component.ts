import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from './nav-bar.component';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>Add blog post</h1>
  <div mat-dialog-content class="container">
    <form #form="ngForm" class="container">
      <mat-form-field>
        <input type="text" id="author" name="author" pattern=".{3,}"
               #author="ngModel" [(ngModel)]="data.author" matInput required
               placeholder="author"/>
        <mat-hint [hidden]="author.valid || author.pristine">
          Author must be at least 3 characters long.
        </mat-hint>
      </mat-form-field>
      <br/>
      <mat-form-field>
        <input type="text" id="title" name="title" pattern=".{3,}"
               #title="ngModel" [(ngModel)]="data.title" matInput required
               placeholder="title"/>
        <mat-hint [hidden]="title.valid || title.pristine">
          Title must be at least 3 characters long.
        </mat-hint>
      </mat-form-field>
      <br/><br/>
      <mat-form-field>
        <textarea type="text" id="blog" name="blog" rows="5"
                  #text="ngModel" [(ngModel)]="data.post" matInput required placeholder="blog text"></textarea>
        <mat-hint [hidden]="text.valid || text.pristine">
          Blog text must be at least 3 characters long.
        </mat-hint>
      </mat-form-field>
      <br/><br/>
      <mat-form-field>
        <input type="text" id="url" name="url"
               pattern="https?:\\/\\/[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"
               #url="ngModel" [(ngModel)]="data.url" matInput placeholder="url to picture"/>
        <mat-hint [hidden]="url.valid || url.pristine">
          Please give valid url, starting with http or https.
        </mat-hint>
      </mat-form-field>
      <br/>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button [disabled]="!form.form.valid" [mat-dialog-close]="data" mat-raised-button>Send</button>
      <br/>
    </form>
  </div>`,
  styles: [`.container {display: flex;flex-direction: column;}.container > * {width: 100%}`]
})
export class BlogAddDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BlogAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
