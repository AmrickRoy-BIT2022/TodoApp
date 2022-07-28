import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoShowComponent } from './todo-show.component';

const routes: Routes = [
  {
    path: ':id',
    component: TodoShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoShowRoutingModule { }
