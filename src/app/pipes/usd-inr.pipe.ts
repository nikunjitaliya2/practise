import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, args: string): number {
    if(args === 'INR'){
      return value * 82.78;
    }else if(args === 'DLR'){
      return value / 82.78;
    }
    return value;
  }
}
