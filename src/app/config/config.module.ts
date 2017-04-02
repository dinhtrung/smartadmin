import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ConfigComponent } from './config.component';
import { routing } from './config.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ConfigComponent
  ]
})
export class ConfigModule {}