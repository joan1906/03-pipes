import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidename'
})
export class HidenamePipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): unknown {
    return (mostrar) ? '*'.repeat(value.length) : value ;
  }

}
