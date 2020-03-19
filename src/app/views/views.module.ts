import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { StatisticComponent } from './statistic/statistic.component';
import { ViewsHomeComponent } from './views-home/views-home.component';




@NgModule({
  declarations: [StatisticComponent, ViewsHomeComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
