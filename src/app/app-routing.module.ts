import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./todo-list/todo-list.module').then((dem) => dem.TodoListModule),
  },
  {
    path: 'show',
    loadChildren: () =>
      import('./todo-show/todo-show.module').then((dem) => dem.TodoShowModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
