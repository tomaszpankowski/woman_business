import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

const routes: Routes = [
  {
    path:"comingsoon",
    component: ComingsoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingsoonRoutingModule { }
