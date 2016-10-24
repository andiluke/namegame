import { Component, OnInit } from '@angular/core';

import { Babyname } from './babyname';
import { NameService } from './name.service';

@Component({
  selector: 'my-names',
  templateUrl: '/app/names.component.html'
})
export class NamesComponent implements OnInit {
    constructor(private nameService: NameService) {}
    selectedBabyname: Babyname;
    babynames: Babyname[];
    ngOnInit(): void {
      this.getNames();
    }
    onSelect(babyname: Babyname): void {
        this.selectedBabyname = babyname;
    }
    getNames(): void {
      this.nameService.getNames().then(babynames => this.babynames = babynames);
    }
 }
