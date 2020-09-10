import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const prefix = value.substr(0, 3);
    const suffix = value.substr(13, 3);
    let str = '';
    for (let i = 0; i < 10; i++) {
      str += args[0];
    }
    return prefix + args[1] + str + args[1] + suffix;
  }

}
