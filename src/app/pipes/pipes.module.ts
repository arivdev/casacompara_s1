import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyViewListPipe } from './money-view-list.pipe';
import { MoneyViewNormalPipe } from './money-view-normal.pipe';
import { DecimalFraccionPipe } from './decimal-fraccion.pipe'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MoneyViewListPipe, MoneyViewNormalPipe, DecimalFraccionPipe],
    exports: [MoneyViewListPipe]
})
export class PipesModule { }