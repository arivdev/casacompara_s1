import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoneyViewListPipe } from './pipes/money-view-list.pipe';
import { MoneyViewNormalPipe } from './pipes/money-view-normal.pipe'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalFraccionPipe } from './pipes/decimal-fraccion.pipe';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoneyViewListPipe,
    MoneyViewNormalPipe,
    DecimalFraccionPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
