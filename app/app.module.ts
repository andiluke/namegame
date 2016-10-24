import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NameDetailComponent } from './name-detail.component';
import { NamesComponent } from './names.component';
import { NameService } from './name.service';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule 
    ],
  declarations: [ 
    AppComponent,
    NameDetailComponent,
    NamesComponent
  ],
  providers: [
    NameService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
