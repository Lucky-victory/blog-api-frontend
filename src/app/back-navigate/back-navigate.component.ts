import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-navigate',
  templateUrl: './back-navigate.component.html',
  styleUrls: ['./back-navigate.component.css']
})
export class BackNavigateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
goBack(){
  window.history.back();
}
}
