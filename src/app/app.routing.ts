/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {
        path: '', redirectTo: 'dashboard/analytics', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
        data: {pageTitle: 'Dashboard'}
      },
      
      { path: 'tasks',  loadChildren: 'app/tasks/tasks.module#TasksModule' },
      { path: 'accounts',  loadChildren: 'app/accounts/accounts.module#AccountsModule' },
      { path: 'timesheets',  loadChildren: 'app/timesheets/timesheets.module#TimesheetsModule' },
      { path: 'invoices',  loadChildren: 'app/invoices/invoices.module#InvoicesModule' },
      { path: 'vatreturns',  loadChildren: 'app/vatreturns/vatreturns.module#VatReturnsModule' },
      { path: 'expenses',  loadChildren: 'app/expenses/expenses.module#ExpensesModule' },            
      { path: 'settings',  loadChildren: 'app/settings/settings.module#SettingsModule', data: { pageTitle: "CBK-Settings"} },
      { path: 'config',  loadChildren: 'app/config/config.module#ConfigModule', data: { pageTitle: "CBK-Config"} },
      
      {
          path: 'tables',
          loadChildren: 'app/+tables/tables.module#TablesModule',
          data: {pageTitle: 'Tables'}
        },
      
/*      {
        path: 'smartadmin',
        loadChildren: 'app/+smartadmin-intel/smartadmin-intel.module#SmartadminIntelModule',
        data: {pageTitle: 'Smartadmin'}
      },
      {
        path: 'app-views',
        loadChildren: 'app/+app-views/app-views.module#AppViewsModule',
        data: {pageTitle: 'App Views'}
      },
      {
        path: 'calendar',
        loadChildren: 'app/+calendar/calendar.module#CalendarModule'
      },
      {
        path: 'e-commerce',
        loadChildren: 'app/+e-commerce/e-commerce.module#ECommerceModule',
        data: {pageTitle: 'E-commerce'}
      },
      {
        path: 'forms',
        loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',
        data: {pageTitle: 'Forms'}
      },
      {
        path: 'graphs',
        loadChildren: 'app/+graphs/graphs-showcase.module#GraphsShowcaseModule',
        data: {pageTitle: 'Graphs'}
      },
      {
        path: 'maps',
        loadChildren: 'app/+maps/maps.module#MapsModule',
        data: {pageTitle: 'Maps'}
      },
      {
        path: 'miscellaneous',
        loadChildren: 'app/+miscellaneous/miscellaneous.module#MiscellaneousModule',
        data: {pageTitle: 'Miscellaneous'}
      },
      {
        path: 'outlook',
        loadChildren: 'app/+outlook/outlook.module#OutlookModule',
        data: {pageTitle: 'Outlook'}
      },
      {
        path: 'tables',
        loadChildren: 'app/+tables/tables.module#TablesModule',
        data: {pageTitle: 'Tables'}
      },
      {
        path: 'ui',
        loadChildren: 'app/+ui-elements/ui-elements.module#UiElementsModule',
        data: {pageTitle: 'Ui'}
      },
      {
        path: 'widgets',
        loadChildren: 'app/+widgets/widgets-showcase.module#WidgetsShowcaseModule',
        data: {pageTitle: 'Widgets'}
      },
  */
        
    ]
  },

  {path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},

  {path: '**', redirectTo: 'miscellaneous/error404'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
