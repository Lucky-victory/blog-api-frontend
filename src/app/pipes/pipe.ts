import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name:'safeHtml'
})
export class Safe{
constructor(private sanitizer:DomSanitizer){

}
transform(html: string){
    this.sanitizer.bypassSecurityTrustHtml(html)
}
}