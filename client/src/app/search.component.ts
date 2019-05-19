import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Blog, BlogService} from './blog.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  template: `
    <div>
      <form class="example-form">
      <mat-form-field class="example-full-width">
        <input type="text" placeholder="Search blog by name" matInput [formControl]="myControl"
               [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
            {{option}}
          </mat-option>
        </mat-autocomplete>
        <button mat-raised-button (click)="goToPost()">GO</button>
      </mat-form-field>
      </form>
    </div>`,
  styles: [`button {
    margin-left: 20px
  }

  form {
    min-width: 250px;
    max-width: 500px;
    width: 100%;
  }

  mat-form-field{
    width: 100%;
  }`]
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  blogs: Blog[];
  value: string;

  constructor(private router: Router, private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getPosts((json) => {
      this.blogs = json;
      this.setOptions();

      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  setOptions() {
    for (const blog of this.blogs) {
      this.options.push(blog.title);
    }

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  goToPost() {
    for (const blog of this.blogs) {
      if (blog.title === this.myControl.value) {
        this.myControl.setValue('');
        this.router.navigate([blog.id]);
      }
    }
  }
}
