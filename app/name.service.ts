import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Babyname } from './babyname';
//import { BABYNAMES } from './mock-names';


@Injectable()
export class NameService {
    constructor(
        private http: Http
    ) {}
    private namesUrl = '/api/names';

    getNames(): Promise<Babyname[]> {
        return this.http.get(this.namesUrl)
            .toPromise()
            .then(response => response.json() as Babyname[])
            .catch(this.handleError);
    }

    getName(name: string): Promise<Babyname> {
        return this.getNames()
            .then(babynames => babynames.find(babyname => babyname.name === name));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}