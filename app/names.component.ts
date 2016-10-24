import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Babyname } from './babyname';
import { NameService } from './name.service';

@Component({
  selector: 'my-names',
  moduleId: module.id,
  templateUrl: 'names.component.html'
})
export class NamesComponent implements OnInit {
    constructor(
      private nameService: NameService,
      private router: Router  
    ) {}
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
    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedBabyname.id]);
    }
 }
