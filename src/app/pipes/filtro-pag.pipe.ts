import { EventEmitter, Output, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPag'
})
export class FiltroPagPipe implements PipeTransform {
  @Output() filtroPagCount = new EventEmitter<number>();


  transform(value: any[], page:number = 0, search: string = ''): [] | any {
    if(search.length === 0){
      const filteredItems = value.slice(page, page + 5);
      return filteredItems;
      //return value.slice(page, page + 5); //Regresa desde el index x, hasta index y -> return array []
    }
    
    const filteredItems = value.filter((res:any) => res.IdPrototipo.includes(search.toUpperCase()) || res.IdFraccionamiento.includes(search.toUpperCase()))
    this.filtroPagCount.emit(filteredItems.length);
    return filteredItems.slice(page, page + 5)
  }

}
