import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoneyViewListPipe } from './pipes/money-view-list.pipe';
import { MoneyViewNormalPipe } from './pipes/money-view-normal.pipe'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalFraccionPipe } from './pipes/decimal-fraccion.pipe';

import { HttpClientModule } from '@angular/common/http';
import { FormAbcComponent } from './form-abc/form-abc.component';
import { FiltroPagPipe } from './pipes/filtro-pag.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoneyViewListPipe,
    MoneyViewNormalPipe,
    DecimalFraccionPipe,
    FormAbcComponent,
    FiltroPagPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
