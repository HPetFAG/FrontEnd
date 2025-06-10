import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string | number): string {
    let phone = value.toString().replace(/\D/g, '');

    if (phone.length === 11) {
      // Celular com DDD: (99) 99999-9999
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phone.length === 10) {
      // Fixo com DDD: (99) 9999-9999
      return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return value.toString(); // Retorna como está se não tiver formato esperado
    }
  }
}
