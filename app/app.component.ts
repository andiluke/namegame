import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <my-names></my-names>
    `
})
export class AppComponent{
    title = 'Baby Names!';
}