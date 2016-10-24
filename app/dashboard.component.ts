import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Babyname } from './babyname';
import { NameService } from './name.service';


@Component({
    selector: 'my-dashboard',
    templateUrl: '/app/dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    babynames: Babyname[] = [];

    constructor(
        private nameService: NameService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.nameService.getNames()
            .then(babynames => this.babynames = babynames.slice(0,3));
    }

    gotoDetail(babyname: Babyname): void {
        let link = ['/detail', babyname.id];
        this.router.navigate(link);
    }
}