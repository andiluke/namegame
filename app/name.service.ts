import { Injectable } from '@angular/core';

import { Babyname } from './babyname';
import { BABYNAMES } from './mock-names';

@Injectable()
export class NameService {
    getNames(): Babyname[] {
        return BABYNAMES;
    }
}