import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  myObservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    // setTimeout(() => {
    //   observer.error(new Error('something is fishy'));
    // }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 4000);
  });

  ngOnInit(): void {
    this.myObservable.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        alert(error);
      },
      () => {
        alert('observable has completed its task');
      }
    );
  }
}

bootstrapApplication(App);
