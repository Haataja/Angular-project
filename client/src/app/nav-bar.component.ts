import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from './login.dialog.component';
import {BlogService} from './blog.service';

export interface DialogData {
  password: string;
  username: string;
}

@Component({
  selector: 'app-nav-bar',
  template: `<mat-toolbar>
    <span>{{title}}</span>
    <button mat-raised-button (click)="home()">Home</button>
    <button mat-raised-button (click)="openDialog()" *ngIf="!this.blogService.authenticated">Login</button>
    <button mat-raised-button *ngIf="this.blogService.authenticated" (click)="logout()">Logout</button>
  </mat-toolbar>`,
  styles: [`mat-toolbar{background-color: white; border-bottom: lightgray 1px solid;}`]
})
export class NavBarComponent {
  title = 'Blogging site';

  constructor(private router: Router, public dialog: MatDialog, private blogService: BlogService) {
    console.log(this.blogService.authenticated);
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
      console.log('The dialog was closed');
      this.blogService.authenticate(result, (json) => console.log(result));
    });
  }

  logout() {
    this.blogService.logout();
  }
}
