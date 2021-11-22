import { Component, OnInit } from '@angular/core';
import { NavbarItem } from './menu-item.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: NavbarItem[];

  // items = this.ns.getData();

  constructor(private ns: MenuService) { }

  ngOnInit(): void {
    this.ns.getData().subscribe((data) => {this.navItems = data;});
  }

}
