import { Routes, RouterModule }  from '@angular/router';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent
  }
];

export const routing = RouterModule.forChild(routes);