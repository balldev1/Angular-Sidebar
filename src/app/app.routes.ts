import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductsComponent} from "./products/products.component";
import {SettingsComponent} from "./settings/settings.component";
import {ProductoneComponent} from "./productone/productone.component";
import {ProducttwoComponent} from "./producttwo/producttwo.component";

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  { path: 'products',
    component: ProductoneComponent
  },
  { path: 'productone',
    component: ProductoneComponent
  },
  { path: 'producttwo',
    component: ProducttwoComponent
  },
];
