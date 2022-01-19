import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [`:host {
    border: 0 solid #e1e1e1;
    border-bottom-width: 1px;
    display: block;
    height: 48px;
    padding: 0 16px;
  }

  nav a {
    color: #8f8f8f;
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    margin-right: 20px;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
  }

  nav a:hover {
    background-color: rgba(62, 62, 62, 0.22);
    padding: 3px 0px;
    border-radius: 5px;
    color: #4b4a4a;


  }

  nav a.router-link-active {
    color: #106cc8;
  }`],
})
export class NavbarComponent implements OnInit {

  @Input()
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
