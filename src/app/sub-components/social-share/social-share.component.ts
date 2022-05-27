import { IShare } from './social-share.type';
import { Component, Input } from '@angular/core';
import { SocialShareService } from './social-share.service';
import { GlobalConstants } from 'src/app/constants';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.css'],
})
export class SocialShareComponent {
  @Input() socials: IShare[] = [];
  @Input() linkToCopy: string = '';
  copyLinkTitle: string = 'copy link';
  constructor(private socialShareService: SocialShareService) {}

  shareToSocial(event: MouseEvent) {
    const target = event.currentTarget as HTMLButtonElement;
    const { social, url } = target.dataset;
    let { text } = target.dataset;
    text = text ?? '';
    const socialPoviders: { [key: string]: string } = {
      twitter: `https://twitter.com/share?url=${GlobalConstants.getBaseURL()}/${url}&text=${text}`,
      facebook: `http://www.facebook.com/sharer/sharer.php?u=${GlobalConstants.getBaseURL()}/${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${GlobalConstants.getBaseURL()}/${url}`,
    };
    if (socialPoviders[social!]) {
      if (window) {
        window.open(
          `${socialPoviders[social!]}`,
          '',
          'width=700,height=800,top=0,left=400,scrollbar=no'
        );
      }
    }
  }
  copyLink(link: string) {
    this.socialShareService.copyToClipboard(
      `${GlobalConstants.getBaseURL()}/${link}`
    );
    this.copyLinkTitle = 'copied';
    setTimeout(() => {
      this.copyLinkTitle = 'copy link';
    }, 1000);
  }
}
