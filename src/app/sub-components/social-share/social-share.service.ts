import { ClipboardService } from 'ngx-clipboard';
import { Injectable } from '@angular/core';

@Injectable()
export class SocialShareService {
  constructor(private clipboardService: ClipboardService) {}
  copyToClipboard(text: string) {
    this.clipboardService.copy(text);
  }
}
