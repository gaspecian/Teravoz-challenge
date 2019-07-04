import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCallsComponent } from './list-calls/list-calls.component';
import { HeaderComponent } from './header/header.component';

import { MatTableModule } from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListCustomerComponent } from './list-customer/list-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCallsComponent,
    HeaderComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
