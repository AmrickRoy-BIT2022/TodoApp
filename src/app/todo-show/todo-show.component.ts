import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.scss']
})
export class TodoShowComponent implements OnInit {

  lists: any = [];
  task : any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
     this.showTask(params['id']);
    });
  }

  showTask(id: any){
    this.lists = JSON.parse(localStorage.getItem('DoneList'));
    console.log(this.lists);
    this.task = this.lists[id].description;
    console.log(this.task);
  }

  ngOnDestroy(){
    localStorage.clear();
  }

}
