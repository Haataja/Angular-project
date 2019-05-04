import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `<mat-toolbar>
    <span>Blogging site</span>
  </mat-toolbar>`,
  styles: [`mat-toolbar{background-color: white; border-bottom: lightgray 1px solid;}`]
})
export class NavBarComponent {
  title = 'client';
}
