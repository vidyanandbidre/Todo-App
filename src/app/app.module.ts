import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {  CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA}  from '@angular/core';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { HeaderComponent } from "./layout/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
  
})
export class AppModule {}
