import { Component, OnInit } from '@angular/core';

interface MenuItem {
  path: string;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`

  `]
})
export class NavbarComponent implements OnInit {

  createPath: MenuItem = {
    path: '/heroes/create',
    text: 'Nuevo'
  };

  menuItems: MenuItem[] = [
    {
      path: '/heroes',
      text: 'Heroes'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
