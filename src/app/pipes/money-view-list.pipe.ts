import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyViewList'
})
export class MoneyViewListPipe implements PipeTransform {

  transform(value: number): string | any {
    if(isNaN(value) || value === null) return '$0.00'
    if(value.toString().length >= 7){
      let div = (value)/(1000)
      const stringValue = div.toString();
      // Separar los miles por comas
      const separado = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return '$'+separado+"M"
    }
    if(value.toString().length <= 6){
      let div = (value)/(1000)
      const stringValue = div.toString();
      // Separar los miles por comas
      const separado = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return '$'+separado+"K"
    }

  }

}
