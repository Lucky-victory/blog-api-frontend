import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: Date, dateStyle:'full'|'long'|'medium'|'short'='medium'): string{
    return new Date(value).toLocaleString('en-US',{
      dateStyle
    });
  }

}
