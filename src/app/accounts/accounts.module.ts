import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { routing } from './accounts.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
	  AccountsComponent
  ]
})
export class AccountsModule {}