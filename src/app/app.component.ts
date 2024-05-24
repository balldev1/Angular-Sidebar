import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {navbarData} from "./navData";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';

  collapsed = false;
  protected readonly navbarData = navbarData;

  //route
  currentRoute: string = '';

  constructor(private router: Router) {}

  //เช็ค route ปัจจุบัน
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  // ถ้าค่าที่ได้รับเข้ามา === currentRoute จะทำให้ isActive === true
  isActive(route: string): boolean {
    return this.currentRoute === '/' + route;
  }

  // รับ data เข้ามา ถ้าไม่มี children ให้ return fasle
  // ถ้ามีให้ loop และ return true
  hasActiveChildren(data: any): boolean {
    if (!data.children) {
      return false;
    }

    for (let child of data.children) {
      if (this.isActive(child.routeLink)) {
        return true;
      }
    }

    return false;
  }

}
