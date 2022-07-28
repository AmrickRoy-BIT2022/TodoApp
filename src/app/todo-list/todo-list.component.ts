import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask } from '../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoForm: FormGroup;
  pendingList: ITask[] = [];
  doneList: ITask[] = [];
  updateIndex: any;
  isEditEnabled: boolean = false;
  data1: any = [];
  data2: any = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.todoForm = this.fb.group({
      item: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  addTask() {
    this.pendingList.push({
      description: this.todoForm.value.item,
      done: false,
    });
    this.todoForm.reset();
    this.data1 = this.pendingList;
    localStorage.setItem('PendingList', JSON.stringify(this.data1));
  }

  deleteTask(i: number) {
    this.pendingList.splice(i, 1);
    this.data1 = this.pendingList;
    localStorage.setItem('PendingList', JSON.stringify(this.data1));
  }

  deleteDoneTask(i: number) {
    this.doneList.splice(i, 1);
  }

  editTask(item: ITask, i: number) {
    this.todoForm.controls['item'].setValue(item.description);
    this.updateIndex = i;
    this.isEditEnabled = true;
  }

  updateTask() {
    this.pendingList[this.updateIndex].description = this.todoForm.value.item;
    this.pendingList[this.updateIndex].done = false;
    this.todoForm.reset();
    this.updateIndex = undefined;
    this.isEditEnabled = false;
    this.data1 = this.pendingList;
    localStorage.setItem('PendingList', JSON.stringify(this.data1));
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.data1 = this.pendingList;
      this.data2 = this.doneList;
      localStorage.setItem('PendingList', JSON.stringify(this.data1));
      localStorage.setItem('DoneList', JSON.stringify(this.data2));
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.data1 = this.pendingList;
      this.data2 = this.doneList;
      localStorage.setItem('PendingList', JSON.stringify(this.data1));
      localStorage.setItem('DoneList', JSON.stringify(this.data2));
    }
  }
}
