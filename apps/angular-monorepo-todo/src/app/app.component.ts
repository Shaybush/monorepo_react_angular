import { Component, OnInit } from '@angular/core';
import { sumTwoNumbers } from '@angular-monorepo-todo/utils';
@Component({
  selector: 'angular-monorepo-todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-monorepo-todo';
  num1 = 2;
  num2 = 3;
  ngOnInit(): void {
    console.log(sumTwoNumbers(this.num1, this.num2))
  }
}
