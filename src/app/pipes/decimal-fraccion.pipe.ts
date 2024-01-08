import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFraccion'
})
export class DecimalFraccionPipe implements PipeTransform {

  transform(value: number): string {
    if (Number.isNaN(value) || value < 0) {
      return '';
    }

    const wholePart = Math.floor(value);
    const decimalPart = value - wholePart;

    // Mapeo de valores decimales a fracciones comunes
    const fractions: { decimal: number; fraction: string }[] = [
      { decimal: 0.125, fraction: '⅛' },
      { decimal: 0.25, fraction: '¼' },
      { decimal: 0.375, fraction: '⅜' },
      { decimal: 0.5, fraction: '½' },
      { decimal: 0.625, fraction: '⅝' },
      { decimal: 0.75, fraction: '¾' },
      { decimal: 0.875, fraction: '⅞' }
    ];

    let fraction = '';

    for (const { decimal, fraction: fractionText } of fractions) {
      if (Math.abs(decimalPart - decimal) < 0.01) {
        fraction = fractionText;
        break;
      }
    }

    if (fraction) {
      return wholePart === 0 ? fraction : `${wholePart} ${fraction}`;
    } else {
      return String(value);
    }
  }

}
