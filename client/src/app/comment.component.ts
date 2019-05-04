import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BlogService} from './blog.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comment',
  template: `
    <form #form="ngForm">
      <mat-form-field>
        <textarea type="text" id="comment" name="user_comment" pattern=".{3,}"
                  #commentElement="ngModel" [(ngModel)]="userInput.comment" matInput required
                  placeholder="Comment"></textarea>
        <mat-hint [hidden]="commentElement.valid || commentElement.pristine">
          Comment must be at least 3 characters long.
        </mat-hint>
      </mat-form-field>
      <br/>
      <mat-form-field>
        <input type="text" id="name" name="user_name" pattern=".{3,}"
               #nameElement="ngModel" [(ngModel)]="userInput.nickname" matInput required placeholder="Nickname">
        <mat-hint [hidden]="nameElement.valid || nameElement.pristine">
          Nickname must be at least 3 characters long.
        </mat-hint>
      </mat-form-field>
      <button [disabled]="!form.form.valid" type="submit" mat-raised-button (click)="send(form)">Send</button>
    </form>
  `,
  styles: [``]
})
export class CommentComponent {
  userInput = {nickname: '', comment: ''};
  @Input() blogID: number;
  @Output() sendClicked = new EventEmitter<string>();

  constructor(private service: BlogService) {
  }

  send(form: NgForm) {
    this.service.sendComment(this.blogID, this.userInput, () => {
      this.sendClicked.emit('update');
    });
    form.reset();
  }

}
