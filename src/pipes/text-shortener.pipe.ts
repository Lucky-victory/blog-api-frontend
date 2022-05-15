import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShortener'
})
export class TextShortenerPipe implements PipeTransform {

  transform(text:string,maxLength:number=140): string {
    const maxTextLength = maxLength;
    const textToShorten = String(text).trim();
    const shortenedText = textToShorten.substring(0, maxTextLength);
    return (textToShorten.length > maxTextLength) ? `${shortenedText}...`:shortenedText;
    
  }

}
