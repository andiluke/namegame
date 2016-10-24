import { Injectable } from '@angular/core';

import { Babyname } from './babyname';
import { BABYNAMES } from './mock-names';

@Injectable()
export class NameService {
    getNames(): Promise<Babyname[]> {
        return Promise.resolve(BABYNAMES);
    }
    getName(id: number): Promise<Babyname> {
        return this.getNames()
            .then(babynames => babynames.find(babyname => babyname.id === id));
    }
}