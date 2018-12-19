import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CoursesComponent} from './courses.component';
import { EmertxeComponent } from './emertxe/emertxe.component'
import {CoursesService} from './courses.services';
  
@NgModule({
  declarations: [
    AppComponent,CoursesComponent, EmertxeComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
