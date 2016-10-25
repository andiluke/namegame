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
            let name = params['name'];
            this.nameService.getName(name)
                .then(babyname => this.babyname = babyname);
        });
    }
    goBack(): void {
        this.location.back();
    }
    removeMiddleName(middle:string): void {
        console.log('remove middle name: ' + middle);
        console.log(this.babyname.middle);
        var i = this.babyname.middle.indexOf(middle);
        if (0<= i){
            this.babyname.middle.splice(i, 1);
        }
        console.log(this.babyname.middle);
    }

    addMiddleName(newMiddle:string): void {
        newMiddle = newMiddle.trim();
        var errors = 0;
        if (newMiddle.length <= 0) {
            errors++;
        }
        if (this.babyname.middle.indexOf(newMiddle) >= 0) {
            errors++;
        }
        if (errors === 0) {
            this.babyname.middle.push(newMiddle);
        }
    }

    save(): void {
        // todo: make this work
        // * no changes to first name
        // * update changes to middle names
        this.nameService.update(this.babyname)
            .then(() => this.goBack());
    }
}