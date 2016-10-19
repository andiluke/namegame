import { Component } from '@angular/core';

export class Babyname {
    id: number;
    name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title = 'Baby Name Tracker';
    babyname: Babyname = {
        id: 1,
        name: 'Violet'
    };
 }
