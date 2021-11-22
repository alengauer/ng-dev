import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavbarItem } from './menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<NavbarItem[]>('assets/menuItems.json');
  }
}
