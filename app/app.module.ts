import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NameDetailComponent } from './name-detail.component';
import { NamesComponent } from './names.component';
import { NameService } from './name.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
          path: '',
          redirectTo: 'dashboard',
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
      ]) 
    ],
  declarations: [ 
    AppComponent,
    NameDetailComponent,
    NamesComponent,
    DashboardComponent
  ],
  providers: [
    NameService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
