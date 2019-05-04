import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-nav-bar></app-nav-bar>
  <div fxLayout="row" fxLayoutAlign="space-between">
    <div fxFlex="75%"><router-outlet></router-outlet></div>
    <div fxFlex="25%"><app-about></app-about></div>
  </div>`,
  styles: [`mat-toolbar{background-color: white; border-bottom: lightgray 1px solid;}`]
})
export class AppComponent {
  title = 'client';
}
