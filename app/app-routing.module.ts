import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NameDetailComponent } from './name-detail.component';
import { NamesComponent } from './names.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes= [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'names',
        component: NamesComponent
    },
    {
        path: 'detail/:id',
        component: NameDetailComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}