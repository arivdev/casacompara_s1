import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyViewNormal'
})
export class MoneyViewNormalPipe implements PipeTransform {

  transform(value: number): string | any {
    if(isNaN(value) || value === null) return '$0.00'

    // Convertir el número a cadena
    const stringValue = value.toString();
    // Separar los miles por comas
    const separado = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return '$' + separado + '.00';
  }

}
