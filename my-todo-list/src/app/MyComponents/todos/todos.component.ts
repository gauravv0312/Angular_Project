import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todoss : Todo[];
  constructor() { 
    this.todoss = [
      {
        sno : 1,
        title : "This is title1",
        desc : "Description1",
        active : true
      },
      {
        sno : 2,
        title : "This is titl2",
        desc : "Description2",
        active : true
      },
      {
        sno : 3,
        title : "This is title3",
        desc : "Description3",
        active : true
      }
    ]
  }

  ngOnInit(): void {
  }

}
