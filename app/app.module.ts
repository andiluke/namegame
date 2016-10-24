import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { NameDetailComponent } from './name-detail.component';
import { NamesComponent } from './names.component';
import { NameService } from './name.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      AppRoutingModule
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
