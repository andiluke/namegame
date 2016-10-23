import { Component } from '@angular/core';

export class Babyname {
    id: number;
    name: string;
}

const BABYNAMES: Babyname[] = [
  { id: 10, name: 'Violet'},
  { id: 11, name: 'Sequoia' },
  { id: 12, name: 'Sienna' },
  { id: 13, name: 'Sierra' },
  { id: 14, name: 'Tara' }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title = 'Baby Name Tracker';
    selectedBabyname: Babyname;
    babynames = BABYNAMES;
    onSelect(babyname: Babyname): void {
        this.selectedBabyname = babyname;
    }
 }
