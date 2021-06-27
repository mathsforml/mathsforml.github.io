import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tab() {
    const url = this.router.serializeUrl(this.router.createUrlTree['/kaggleRegister']);
    window.open(url, '_blank');
  }
}
