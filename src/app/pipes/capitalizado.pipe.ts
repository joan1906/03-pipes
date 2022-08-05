import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return 'Hola Mundo';
  }

}
