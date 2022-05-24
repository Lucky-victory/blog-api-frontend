import { Component, Input, OnInit } from '@angular/core';
import { APP_BASE_URL } from 'src/app/constants';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.css'],
})
export class SocialShareComponent implements OnInit {
  @Input() socials: { [key: string]: string }[] = [];
  constructor() {}

  ngOnInit(): void {}
  shareToSocial(event: MouseEvent) {
    const target = event.currentTarget as HTMLButtonElement;
    const { social, url } = target.dataset;
    let { text } = target.dataset;
    console.log(social, text, url);
    text = text ?? '';
    const socialPoviders: { [key: string]: string } = {
      twitter: `https://twitter.com/share?url=${APP_BASE_URL}/article/${url}&text=${text}`,
      facebook: `http://www.facebook.com/sharer/sharer.php?u=${APP_BASE_URL}/${url}`,
    };
    if (socialPoviders[social!]) {
      window.open(
        `${socialPoviders[social!]}`,
        '',
        'width=700,height=800,top=0,left=400,scrollbar=no'
      );
    }
  }
}
