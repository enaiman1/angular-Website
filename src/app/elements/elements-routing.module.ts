import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementsHomeComponent} from './elements-home/elements-home.component'

const routes: Routes = [
  {
    // anytime the user goes to the elements route, the ElementsHomeComponent will be displayed
    path: 'elements', component: ElementsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
