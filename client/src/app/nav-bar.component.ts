import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from './login.dialog.component';
import {BlogService} from './blog/blog.service';
import {BlogAddDialogComponent} from './blog/blog.add.dialog.component';

export interface DialogData {
  password: string;
  username: string;
}

@Component({
  selector: 'app-nav-bar',
  template: `<mat-toolbar>
    <span>{{title}}</span>
    <button mat-raised-button (click)="home()">Home</button>
    <button mat-raised-button (click)="openDialog()" *ngIf="!blogService.authenticated">Login</button>
    <button mat-raised-button *ngIf="blogService.authenticated" (click)="logout()">Logout</button>
    <button mat-raised-button *ngIf="blogService.authenticated" (click)="openAddDialog()">Add Post</button>
    <span class="spacer"></span>
    <app-search></app-search>
  </mat-toolbar>`,
  styles: [`mat-toolbar{background-color: white; border-bottom: lightgray 1px solid;} button{margin-left: 20px}.spacer {padding: 20px;}`]
})
export class NavBarComponent {
  title = 'Blogging site';
  @Output() blogAdded = new EventEmitter<string>();

  constructor(private router: Router, public dialog: MatDialog, public blogService: BlogService) {
    // console.log(this.blogService.authenticated);
  }

  home() {
    this.router.navigate(['home']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.blogService.authenticate(result, (json) => {
        // console.log(result)
      });
    });
  }

  logout() {
    this.blogService.logout();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(BlogAddDialogComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        // console.log('The add dialog was closed');
        this.blogService.sendBlog(result, (json) => {
         // console.log(json);
          this.router.navigate([json.body.id]);
        });
      }
    });
  }
}
