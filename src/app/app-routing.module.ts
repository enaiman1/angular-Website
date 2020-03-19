import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from "./not-found/not-found.component"


const routes: Routes = [
  {
    // will load the elements anytime user go to the elements route 
    path: 'elements',
    loadChildren:()=> import('./elements/elements.module')
    // returns actualy elements moudle
    .then( m => m.ElementsModule)
  },
  {
    // will load the collection anytime user go to the elements route 
    path: 'collection',
    loadChildren:()=> import('./collection/collection.module')
    // returns actual collection module
    .then( m => m.CollectionModule)
  },
  {
    // will load the collection anytime user go to the elements route 
    path: 'views',
    loadChildren:()=> import('./views/views.module')
    // returns actual collection module
    .then( m => m.ViewsModule)
  },
  {
    // will load the collection anytime user go to the elements route 
    path: 'mods',
    loadChildren:()=> import('./mods/mods.module')
    // returns actual collection module
    .then( m => m.ModsModule)
  },

  {
    // whenever use goes to localhost 4200 or root they will see the home component
    path: '', component: HomeComponent
  },
  {
    // if use goes to any other route that is not listed, they will see the not found component
    path: "**", component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
