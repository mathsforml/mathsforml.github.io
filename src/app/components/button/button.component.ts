import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  content = 'you have been warned';
  hideContent = true;
  severity = 423;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

}
