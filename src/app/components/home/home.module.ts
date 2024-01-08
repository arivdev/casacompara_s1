import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
  ]
})
export class HomeModule { }
