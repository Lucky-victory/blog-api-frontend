import { formatDate } from "@angular/common";

export const API_BASE_URL:string = 'https://blog-api-harpee.herokuapp.com';
export const APP_BASE_URL:string=window.location.origin;
export const  Utils={
    shortenText(text:string,maxLength:number=160){
        const maxTextLength = maxLength;
     const textToShorten = String(text).trim();
     const shortenedText = textToShorten.substring(0, maxTextLength);
     return (textToShorten.length > maxTextLength) ? `${shortenedText}...`:shortenedText;
     
  
    },
    formatDate(date:Date){
        return new Date(date).toLocaleString('en-US', {
            dateStyle:'medium'
          });
    }
}