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
    private nameUrl = '/api/name/';
    private headers = new Headers({'Content-Type': 'application/json'});

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

    getName2(name: string): Promise<Babyname> {
        let url = this.nameUrl + name;
        console.log('hi from getName2');
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Babyname)
            .catch(this.handleError);
    }
//Promise<Babyname> 
    update(babyname: Babyname): Promise<Babyname>{
        const url = this.nameUrl + babyname.name;
        console.log(babyname);
        this.getName2(babyname.name)
            .then(function(response){
                console.log('promise returned');
                console.log(response);
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}