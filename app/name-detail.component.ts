import { Component, Input } from '@angular/core';

import { Babyname } from './babyname';

@Component({
    selector: 'name-detail',
    templateUrl: 'app/name-detail.component.html'
})
export class NameDetailComponent {
    @Input()
    babyname: Babyname;
}