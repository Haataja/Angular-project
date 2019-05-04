import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  template: `<mat-toolbar>
    <span>{{title}}</span>
    <button mat-raised-button (click)="home()">Home</button>
  </mat-toolbar>`,
  styles: [`mat-toolbar{background-color: white; border-bottom: lightgray 1px solid;}`]
})
export class NavBarComponent {
  title = 'Blogging site';

  constructor(private router: Router) {}

  home() {
    this.router.navigate(['home']);
  }
}
