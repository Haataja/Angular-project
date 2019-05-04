import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-nav-bar></app-nav-bar>
  <app-about></app-about>`,
  styles: [`mat-toolbar{background-color: white; border-bottom: lightgray 1px solid;}`]
})
export class AppComponent {
  title = 'client';
}
