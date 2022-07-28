import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoShowRoutingModule } from './todo-show-routing.module';
import { TodoShowComponent } from './todo-show.component';


@NgModule({
  declarations: [TodoShowComponent],
  imports: [
    CommonModule,
    TodoShowRoutingModule
  ]
})
export class TodoShowModule { }
