import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionHomeComponent } from './collection-home/collection-home.component'


const routes: Routes = [
  {
     // anytime the user goes to the collection route, the ElementsHomeComponent will be displayed
    path: '', component: CollectionHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
