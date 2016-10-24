import { Component, OnInit } from '@angular/core';

import { Babyname } from './babyname';
import { NameService } from './name.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [NameService]
})
export class AppComponent implements OnInit {
    constructor(private nameService: NameService) {}
    title = 'Baby Name Tracker';
    selectedBabyname: Babyname;
    babynames: Babyname[];
    ngOnInit(): void {
      this.getNames();
    }
    onSelect(babyname: Babyname): void {
        this.selectedBabyname = babyname;
    }
    getNames(): void {
      this.babynames = this.nameService.getNames();
    }
 }
