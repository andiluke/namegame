import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Babyname } from './babyname';
import { NameService } from './name.service';

@Component({
    selector: 'name-detail',
    templateUrl: 'name-detail.component.html',
    moduleId: module.id,
})
export class NameDetailComponent implements OnInit{
    constructor(
        private nameService: NameService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    @Input()
    babyname: Babyname;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.nameService.getName(id)
                .then(babyname => this.babyname = babyname);
        });
    }
    goBack(): void {
        this.location.back();
    }
}